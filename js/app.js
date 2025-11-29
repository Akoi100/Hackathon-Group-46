// ============================================
// MAIN APPLICATION CONTROLLER
// ============================================

const App = {
    /**
     * Initialize Application
     */
    init() {
        console.log('SkillUp Safe Initializing...');

        // Initialize GameState
        GameState.init();

        // Initialize Safety Features
        Safety.init();

        // Check for saved user
        const state = GameState.get();

        if (GameState.isOnboardingComplete()) {
            console.log('User found, loading Village...');
            Village.render();
        } else {
            console.log('New user, starting Onboarding...');
            Onboarding.render();
        }

        // Add global event listeners if needed
        this.setupGlobalListeners();
    },

    /**
     * Setup global listeners
     */
    setupGlobalListeners() {
        // Handle browser back button
        window.onpopstate = (event) => {
            // Simple routing handling could go here
            // For now, we are mostly SPA without history pushState
        };
    }
};

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Simulate a small loading delay for "app feel"
    const app = document.getElementById('app');
    app.appendChild(Components.createLoader('Loading SkillUp Safe...'));

    setTimeout(() => {
        App.init();
    }, 1000);
});
