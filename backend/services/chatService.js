// services/chatService.js
const Groq = require('groq-sdk');
const HealthReport = require('../models/HealthReport');
const ChatConversation = require('../models/ChatConversation');
const { v4: uuidv4 } = require('uuid'); // To generate unique message IDs

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

class ChatService {
  // Helper to get the latest health report summary for context
  async getLatestHealthContext(userId) {
    const latestReport = await HealthReport.findOne({ userId }).sort({ createdAt: -1 });
    if (!latestReport) {
      return { 
        reportSummary: "No health report on file.", 
        keyRecommendations: "N/A",
        fullReport: null 
      };
    }
    
    // In a real scenario, you'd have a more robust summary. For now, we'll create a simple one.
    const summary = `User's last report from ${latestReport.createdAt.toDateString()} indicates a BMI of ${latestReport.bmi}.`;
    return {
      reportSummary: summary,
      keyRecommendations: latestReport.reportFormat?.keyRecommendations?.join(', ') || "See full report for details.",
      fullReport: latestReport // Pass the full report for detailed data
    };
  }

  // Main function to generate an AI chat response
  async generateAIResponse(userMessage, userId, conversation) {
    const { reportSummary, keyRecommendations, fullReport } = await this.getLatestHealthContext(userId);

    const recentMessages = conversation.messages.slice(-5).map(m => `${m.sender}: ${m.content}`).join('\n');

    const chatPrompt = `
You are a professional and friendly health consultant AI. Respond to the user's question based on their health profile and conversation history.

User's Health Profile:
- Age: ${fullReport?.age || 'N/A'}
- Gender: ${fullReport?.gender || 'N/A'}
- Height: ${fullReport?.height || 'N/A'} cm
- Weight: ${fullReport?.weight || 'N/A'} kg
- BMI: ${fullReport?.bmi || 'N/A'}

Latest Health Report Summary:
${reportSummary}

Key Recommendations from Report:
${keyRecommendations}

Recent Chat History:
${recentMessages}

User's Question: "${userMessage}"

Guidelines for Response:
- Be conversational and supportive.
- Keep responses concise (1-3 paragraphs).
- Do NOT give medical diagnoses. If asked about symptoms, firmly recommend consulting a doctor.
- Use the user's health data to provide personalized, safe, general wellness advice.

Response:
`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: chatPrompt }],
      model: 'llama-3.1-8b-instant',
    });

    return chatCompletion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response. Please try again.";
  }

  // Saves a message to a conversation
  async saveMessage(conversationId, sender, content, messageType = 'text') {
    const message = {
      messageId: uuidv4(),
      sender,
      content,
      messageType,
      timestamp: new Date()
    };

    await ChatConversation.updateOne(
      { _id: conversationId },
      { 
        $push: { messages: message },
        $set: { lastActivity: new Date() }
      }
    );
    return message;
  }
  
  // Creates a new conversation
  async createConversation(userId, firstMessageContent) {
      const firstMessage = {
          messageId: uuidv4(),
          sender: 'user',
          content: firstMessageContent,
          timestamp: new Date()
      };
      
      const conversation = await ChatConversation.create({
          userId,
          messages: [firstMessage],
          conversationTitle: firstMessageContent.substring(0, 40) + '...'
      });
      
      return conversation;
  }
}

module.exports = new ChatService();