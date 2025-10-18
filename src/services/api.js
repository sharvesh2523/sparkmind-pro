// Base URL for the backend API
const API_BASE_URL = 'http://localhost:5000/api';

// Helper function to handle API requests
const apiRequest = async (url, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'API request failed');
    }

    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

// User API functions
export const getUser = async (userId) => {
  return apiRequest(`/users/${userId}`);
};

// Goals API functions
export const getUserGoals = async (userId) => {
  return apiRequest(`/users/${userId}/goals`);
};

export const createGoal = async (userId, goalData) => {
  return apiRequest(`/users/${userId}/goals`, {
    method: 'POST',
    body: JSON.stringify(goalData),
  });
};

export const updateGoalProgress = async (goalId, progress) => {
  return apiRequest(`/goals/${goalId}`, {
    method: 'PUT',
    body: JSON.stringify({ progress }),
  });
};

// Achievements API functions
export const getUserAchievements = async (userId) => {
  return apiRequest(`/users/${userId}/achievements`);
};

// Health check
export const healthCheck = async () => {
  return apiRequest('/health');
};