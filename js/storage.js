// ============================================
// LOCAL STORAGE MANAGER
// ============================================

const Storage = {
    mode: 'normal', // 'normal' or 'shadow'
    memoryStore: {},

    /**
     * Set storage mode
     * @param {string} mode - 'normal' or 'shadow'
     */
    setMode(mode) {
        this.mode = mode;
        if (mode === 'shadow') {
            this.memoryStore = {};
            console.log('Storage switched to Shadow Mode. Data will not persist.');
        }
    },

    /**
     * Save data to localStorage or memory
     */
    save(key, data) {
        try {
            if (this.mode === 'shadow') {
                this.memoryStore[key] = JSON.stringify(data);
                return true;
            }
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error saving data:', error);
            return false;
        }
    },

    /**
     * Load data from localStorage or memory
     */
    load(key, defaultValue = null) {
        try {
            let data;
            if (this.mode === 'shadow') {
                data = this.memoryStore[key];
            } else {
                data = localStorage.getItem(key);
            }
            return data ? JSON.parse(data) : defaultValue;
        } catch (error) {
            console.error('Error loading data:', error);
            return defaultValue;
        }
    },

    /**
     * Remove data
     */
    remove(key) {
        try {
            if (this.mode === 'shadow') {
                delete this.memoryStore[key];
            } else {
                localStorage.removeItem(key);
            }
            return true;
        } catch (error) {
            console.error('Error removing data:', error);
            return false;
        }
    },

    /**
     * Clear all app data
     */
    clearAll() {
        try {
            if (this.mode === 'shadow') {
                this.memoryStore = {};
            } else {
                const keys = Object.keys(localStorage).filter(key => key.startsWith('skillup_'));
                keys.forEach(key => localStorage.removeItem(key));
            }
            return true;
        } catch (error) {
            console.error('Error clearing data:', error);
            return false;
        }
    },

    /**
     * Wipe all data and reset (for SOS/Exit)
     */
    wipeData() {
        this.memoryStore = {};
        // Optional: Also clear local storage if we want a complete nuke
        // this.clearAll(); 
        console.log('Data wiped.');
    }
};
