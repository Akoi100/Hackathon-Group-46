// ============================================
// MAIN APPLICATION CONTROLLER
// ============================================

const App = {
    /**
     * step 1
     * Initialize Application
     */
    init() {
        console.log('SkillUp Safe Initializing...');

        // 2 Initialize GameState
        GameState.init();

        // 3. Check for saved user
        const state = GameState.get();

        if (GameState.isOnboardingComplete()) {
            console.log('User found, loading Village...');
            Village.render();
        } else {
            console.log('New user, starting Onboarding...');
            Onboarding.render();
        }

        // 4. Add global event listeners if needed
        this.setupGlobalListeners();
    },

    /**
     * 5. Setup global listeners
     */
    setupGlobalListeners() {
        // Handle browser back button
        window.onpopstate = (event) => {
            // Simple routing handling could go here
            // For now, we are mostly SPA without history pushState
        };
    }
};

// 6. Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Simulate a small loading delay for "app feel"
    const app = document.getElementById('app');
    app.appendChild(Components.createLoader('Loading SkillUp Safe...'));

    setTimeout(() => {
        App.init();
    }, 1000);
});
