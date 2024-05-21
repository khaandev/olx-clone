// src/composables/useTimeAgo.js

export default function useTimeAgo() {
  const truncateDescription = (description) => {
    return description.length > 20 ? description.slice(0, 20) + '...' : description;
  };
  const formatTimeAgo = (time) => {
    const currentTime = new Date();
    const previousTime = new Date(time);
    const difference = currentTime - previousTime;
    
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) {
      return days + " days ago";
    } else if (hours > 0) {
      return hours + " hours ago";
    } else if (minutes > 0) {
      return minutes + " minutes ago";
    } else {
      return seconds + " seconds ago";
    }
  };

  return {
    formatTimeAgo,
    truncateDescription
  };
}
