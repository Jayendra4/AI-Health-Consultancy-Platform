// Centralized API base URL for the frontend
// Prefer environment variable, fallback to Render deployment
export const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://ai-health-consultancy-platform.onrender.com';
