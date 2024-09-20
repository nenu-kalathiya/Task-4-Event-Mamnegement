
import { mockEvents } from "./mockData";

// Get a list of all events
export const getEvents = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockEvents);
    }, 1000); // Simulating network delay
  });
};

// Create a new event
export const createEvent = async (eventData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newEvent = { id: mockEvents.length + 1, ...eventData };
      mockEvents.push(newEvent);
      resolve(newEvent);
    }, 1000);
  });
};


