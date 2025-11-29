// ============================================
// GAME STATE MANAGEMENT
// ============================================

const GameState = {
    // Default state
    defaultState: {
        user: {
            id: null,
            name: '',
            gender: '',
            comfortLevel: '',
            avatar: {
                style: 'style1',
                color: '#FF6B35'
            }
        },
        progress: {
            currentModule: null,
            completedModules: [],
            unlockedModules: ['privacy-house', 'scam-shield', 'respectful-road'],
            currentLevel: {}
        },
        inventory: {
            coins: 0,
            badges: [],
            items: []
        },
        stats: {
            totalPoints: 0,
            questionsAnswered: 0,
            correctAnswers: 0,
            modulesCompleted: 0,
            timeSpent: 0,
            responsibilityScore: 0
        },
        settings: {
            soundEnabled: true,
            notificationsEnabled: true
        }
    },

    /**
     * Initialize game state
     */
    init() {
        const savedState = Storage.load('skillup_gamestate');
        if (savedState) {
            this.state = { ...this.defaultState, ...savedState };
        } else {
            this.state = { ...this.defaultState };
            this.state.user.id = Utils.generateId();
        }
        this.save();
    },

    /**
     * Get current state
     */
    get() {
        return this.state;
    },

    /**
     * Update state
     */
    update(updates) {
        this.state = { ...this.state, ...updates };
        this.save();
    },

    /**
     * Save state to localStorage
     */
    save() {
        Storage.save('skillup_gamestate', this.state);
    },

    /**
     * Reset game state
     */
    reset() {
        this.state = { ...this.defaultState };
        this.state.user.id = Utils.generateId();
        this.save();
    },

    /**
     * Update user profile
     */
    updateUser(userData) {
        this.state.user = { ...this.state.user, ...userData };
        this.save();
    },

    /**
     * Add coins
     */
    addCoins(amount) {
        this.state.inventory.coins += amount;
        this.state.stats.totalPoints += amount;
        this.save();
        return this.state.inventory.coins;
    },

    /**
     * Add responsibility score
     */
    addResponsibility(amount) {
        this.state.stats.responsibilityScore += amount;
        this.save();
        return this.state.stats.responsibilityScore;
    },

    /**
     * Spend coins
     */
    spendCoins(amount) {
        if (this.state.inventory.coins >= amount) {
            this.state.inventory.coins -= amount;
            this.save();
            return true;
        }
        return false;
    },

    /**
     * Unlock badge
     */
    unlockBadge(badgeId) {
        if (!this.state.inventory.badges.includes(badgeId)) {
            this.state.inventory.badges.push(badgeId);
            this.save();
            return true;
        }
        return false;
    },

    /**
     * Complete module
     */
    completeModule(moduleId) {
        if (!this.state.progress.completedModules.includes(moduleId)) {
            this.state.progress.completedModules.push(moduleId);
            this.state.stats.modulesCompleted++;
            this.save();
            return true;
        }
        return false;
    },

    /**
     * Unlock module
     */
    unlockModule(moduleId) {
        if (!this.state.progress.unlockedModules.includes(moduleId)) {
            this.state.progress.unlockedModules.push(moduleId);
            this.save();
            return true;
        }
        return false;
    },

    /**
     * Update level progress
     */
    updateLevelProgress(moduleId, level, completed = false) {
        if (!this.state.progress.currentLevel[moduleId]) {
            this.state.progress.currentLevel[moduleId] = {};
        }
        this.state.progress.currentLevel[moduleId][level] = completed;
        this.save();
    },

    /**
     * Record answer
     */
    recordAnswer(correct) {
        this.state.stats.questionsAnswered++;
        if (correct) {
            this.state.stats.correctAnswers++;
        }
        this.save();
    },

    /**
     * Get accuracy percentage
     */
    getAccuracy() {
        if (this.state.stats.questionsAnswered === 0) return 0;
        return Math.round((this.state.stats.correctAnswers / this.state.stats.questionsAnswered) * 100);
    },

    /**
     * Check if onboarding is complete
     */
    isOnboardingComplete() {
        return this.state.user.name && this.state.user.gender && this.state.user.comfortLevel;
    },

    /**
     * Check if module is unlocked
     */
    isModuleUnlocked(moduleId) {
        return this.state.progress.unlockedModules.includes(moduleId);
    },

    /**
     * Check if module is completed
     */
    isModuleCompleted(moduleId) {
        return this.state.progress.completedModules.includes(moduleId);
    }
};

// Initialize on load
GameState.init();
