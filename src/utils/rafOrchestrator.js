/**
 * RAF Orchestrator - Consolidates all requestAnimationFrame loops
 * into a single RAF call to reduce CPU overhead and improve FPS on mobile
 * 
 * Usage:
 * const unsubscribe = orchestrator.subscribe((timestamp) => {
 *   // Your animation logic here
 * });
 * 
 * Cleanup: unsubscribe();
 */

export const createRAFOrchestrator = () => {
  let subscribers = new Set();
  let rafId = null;
  let isRunning = false;

  const tick = (timestamp) => {
    // Call all subscribers with the same timestamp for consistency
    subscribers.forEach(callback => {
      try {
        callback(timestamp);
      } catch (error) {
        console.error('Error in RAF subscriber:', error);
      }
    });

    // Only schedule next frame if there are active subscribers
    if (subscribers.size > 0) {
      rafId = requestAnimationFrame(tick);
    } else {
      isRunning = false;
      rafId = null;
    }
  };

  return {
    /**
     * Subscribe to RAF ticks
     * @param {Function} callback - Called with timestamp on each frame
     * @returns {Function} Unsubscribe function
     */
    subscribe: (callback) => {
      if (typeof callback !== 'function') {
        throw new Error('Callback must be a function');
      }

      subscribers.add(callback);

      // Start RAF loop if not already running
      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(tick);
      }

      // Return unsubscribe function
      return () => {
        subscribers.delete(callback);
        // RAF loop will stop automatically when subscribers.size reaches 0
      };
    },

    /**
     * Get number of active subscribers
     * @returns {number}
     */
    getSubscriberCount: () => subscribers.size,

    /**
     * Cancel all animations
     */
    clear: () => {
      subscribers.clear();
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      isRunning = false;
    }
  };
};

// Create singleton instance
export const orchestrator = createRAFOrchestrator();
