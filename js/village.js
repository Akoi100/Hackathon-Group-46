// ============================================
// DIGITAL VILLAGE (MAIN DASHBOARD)
// ============================================

const Village = {
    modules: [
        {
            id: 'profile-park',
            name: 'Profile Park',
            icon: '👤',
            description: 'Curate a safe online profile and understand oversharing risks',
            color: '#10B981',
            locked: false
        },
        {
            id: 'privacy-house',
            name: 'Privacy House',
            icon: '🏠',
            description: 'Learn about app permissions, data sharing, and privacy settings',
            color: '#A855F7',
            levels: 3
        },
        {
            id: 'scam-shield',
            name: 'Scam Shield Shop',
            icon: '🛡️',
            description: 'Identify phishing emails, fake offers, and financial scams',
            color: '#FF6B35',
            levels: 3
        },
        {
            id: 'respectful-road',
            name: 'Respectful Road',
            icon: '🤝',
            description: 'Healthy communication, recognizing cyberbullying, and digital etiquette',
            color: '#2DD4BF',
            levels: 3
        },
        {
            id: 'cipher-citadel',
            name: 'Safety Stronghold',
            icon: '🔐',
            description: 'Practical security: Public Wi-Fi, 2-Factor Auth, and Screen Locks',
            color: '#6366F1',
            levels: 3
        },
        {
            id: 'rumor-mill',
            name: 'Truth Talk',
            icon: '🗣️',
            description: 'Stop the spread: Handling forwarded messages and verifying rumors',
            color: '#F59E0B',
            levels: 3
        },
        {
            id: 'glitch-garden',
            name: 'Privacy Patch',
            icon: '👁️',
            description: 'Data control: App permissions, location tracking, and "free" apps',
            color: '#8B5CF6',
            levels: 3
        },
        {
            id: 'guardian-tower',
            name: 'Guardian Tower',
            icon: '🗼',
            description: 'Advanced: Two-factor authentication, VPNs, and targeted harassment',
            color: '#EC4899',
            levels: 3,
            locked: false
        },
        // Gender Specific Modules
        {
            id: 'accountability-gym',
            name: 'Accountability Gym',
            icon: '🏋️',
            description: 'Build strength in character. Learn to stand up and be a digital ally.',
            color: '#3B82F6',
            levels: 3,
            gender: ['male']
        },
        {
            id: 'survivor-library',
            name: 'Survivor Library',
            icon: '📖',
            description: 'Stories of resilience, hope, and practical healing strategies.',
            color: '#EC4899',
            levels: 1,
            gender: ['female']
        },
        {
            id: 'defense-dojo',
            name: 'Self-Defense Dojo',
            icon: '🥋',
            description: 'Master digital self-defense: blocking, reporting, and evidence gathering.',
            color: '#EF4444',
            levels: 3,
            gender: ['female']
        },
        {
            id: 'survival-playbook',
            name: 'Survival Playbook',
            icon: '📔',
            description: 'Create your personalized safety plan. Private and secure.',
            color: '#F59E0B',
            levels: 1,
            gender: ['female', 'other']
        },
        {
            id: 'identity-oasis',
            name: 'Identity Oasis',
            icon: '🌈',
            description: 'Find your tribe. Safe spaces and community for non-binary identities.',
            color: '#8B5CF6',
            levels: 3,
            gender: ['other']
        },
        // NEW MALE MODULES
        {
            id: 'emotional-dojo',
            name: 'Emotional Dojo',
            icon: '💪',
            description: 'Master emotional intelligence and vulnerability as strength.',
            color: '#60A5FA',
            levels: 3,
            gender: ['male']
        },
        {
            id: 'consent-commander',
            name: 'Consent Commander',
            icon: '🤝',
            description: 'Navigate consent and boundaries with confidence.',
            color: '#34D399',
            levels: 3,
            gender: ['male']
        },
        {
            id: 'digital-gentleman',
            name: 'Digital Gentleman',
            icon: '🎩',
            description: 'Modern respect and chivalry in the digital age.',
            color: '#A78BFA',
            levels: 3,
            gender: ['male']
        },
        {
            id: 'mental-pitstop',
            name: 'Mental Pitstop',
            icon: '🧠',
            description: 'Break the stigma: Mental health is strength, not weakness.',
            color: '#FB923C',
            levels: 3,
            gender: ['male']
        },
        // NEW FEMALE MODULES
        {
            id: 'financial-fortress',
            name: 'Financial Fortress',
            icon: '💰',
            description: 'Protect your money and financial independence online.',
            color: '#10B981',
            levels: 3,
            gender: ['female']
        },
        {
            id: 'career-climber',
            name: 'Career Climber',
            icon: '📈',
            description: 'Navigate professional boundaries and workplace safety.',
            color: '#6366F1',
            levels: 3,
            gender: ['female']
        },
        {
            id: 'sisterhood-signal',
            name: 'Sisterhood Signal',
            icon: '👭',
            description: 'Build support networks and practice digital solidarity.',
            color: '#F472B6',
            levels: 3,
            gender: ['female']
        },
        {
            id: 'wellness-garden',
            name: 'Wellness Garden',
            icon: '🌸',
            description: 'Digital self-care, detox, and curating healthy feeds.',
            color: '#A78BFA',
            levels: 3,
            gender: ['female']
        },
        // NEW OTHER/NON-BINARY MODULES
        {
            id: 'pronoun-power',
            name: 'Pronoun Power',
            icon: '⚡',
            description: 'Assert your identity and enforce your pronouns safely.',
            color: '#F59E0B',
            levels: 3,
            gender: ['other']
        },
        {
            id: 'history-haven',
            name: 'History Haven',
            icon: '📜',
            description: 'Know your LGBTQ+ history and claim your power.',
            color: '#EC4899',
            levels: 3,
            gender: ['other']
        },
        {
            id: 'resource-radar',
            name: 'Resource Radar',
            icon: '🔍',
            description: 'Find affirming healthcare, legal aid, and crisis support.',
            color: '#10B981',
            levels: 3,
            gender: ['other']
        },
        {
            id: 'expression-studio',
            name: 'Expression Studio',
            icon: '🎨',
            description: 'Create, express, and share your authentic self safely.',
            color: '#A855F7',
            levels: 3,
            gender: ['other']
        }
    ],

    /**
     * Render village
     */
    render() {
        const app = document.getElementById('app');
        app.innerHTML = '';
        app.className = 'page fade-in';

        const container = document.createElement('div');
        container.className = 'container';
        // Add padding to left to account for nav pane
        container.style.paddingLeft = '250px';

        // Header with user stats
        const header = this.createHeader();
        container.appendChild(header);

        // Village map
        const map = this.createVillageMap();
        container.appendChild(map);

        // Right Navigation Pane
        const navPane = this.createNavPane();
        app.appendChild(navPane);

        app.appendChild(container);
    },

    /**
     * Create Right Navigation Pane
     */
    createNavPane() {
        const pane = document.createElement('div');
        pane.className = 'nav-pane slide-left';
        pane.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 240px;
            height: 100vh;
            background: var(--glass-bg);
            border-right: 1px solid var(--glass-border);
            padding: var(--spacing-xl);
            display: flex;
            flex-direction: column;
            gap: var(--spacing-lg);
            backdrop-filter: blur(10px);
            z-index: 100;
        `;

        pane.innerHTML = `
            <div style="text-align: center; margin-bottom: var(--spacing-xl);">
                <div style="font-size: 3rem; margin-bottom: var(--spacing-sm);">🛡️</div>
                <h3>SkillUp Safe</h3>
            </div>

            <div style="display: flex; flex-direction: column; gap: var(--spacing-md);">
                <button class="btn btn-ghost" style="justify-content: flex-start;" id="nav-profile">
                    👤 My Profile
                </button>
                <button class="btn btn-ghost" style="justify-content: flex-start;" id="nav-device-check">
                    📱 Device Safety Check
                </button>
                <button class="btn btn-ghost" style="justify-content: flex-start;" id="nav-calculator">
                    🧮 Calculator
                </button>
                <button class="btn btn-ghost" style="justify-content: flex-start;" id="nav-settings">
                    ⚙️ Settings
                </button>
                <button class="btn btn-ghost" style="justify-content: flex-start;" id="nav-help">
                    ❓ Help
                </button>
            </div>

            <div style="margin-top: auto;">
                <button class="btn btn-danger btn-block" id="nav-logout">
                    🚪 Logout
                </button>
            </div>
        `;

        // Event Listeners
        pane.querySelector('#nav-profile').onclick = () => this.renderProfilePark();
        pane.querySelector('#nav-device-check').onclick = () => this.renderDeviceCheck();
        pane.querySelector('#nav-calculator').onclick = () => this.renderCalculator();
        pane.querySelector('#nav-settings').onclick = () => this.renderSettings();
        pane.querySelector('#nav-help').onclick = () => this.renderHelp();
        pane.querySelector('#nav-logout').onclick = () => {
            if (confirm('Are you sure you want to logout and return to the start screen?')) {
                // Reset game state
                GameState.reset();
                // Reset onboarding to first step (1/4)
                Onboarding.currentStep = 0;
                // Render onboarding
                Onboarding.render();
            }
        };

        return pane;
    },

    /**
     * Render General Modules (Free Mode)
     */
    renderGeneralModules() {
        const app = document.getElementById('app');
        app.innerHTML = '';
        app.className = 'page fade-in';

        const container = document.createElement('div');
        container.className = 'container';
        container.style.maxWidth = '1200px';

        const header = document.createElement('div');
        header.className = 'page-header';
        header.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-lg);">
                <button class="btn btn-ghost btn-sm" id="back-btn">← Back to Village</button>
                <div class="badge badge-primary">General Training Zone</div>
            </div>
            <h2>Essential Digital Safety Modules</h2>
            <p style="color: var(--color-text-secondary);">Master these core skills to stay safe online. Open to everyone!</p>
        `;
        container.appendChild(header);

        // Get all general modules (no gender property)
        const generalModules = this.modules.filter(m => !m.gender && m.id !== 'profile-park' && m.id !== 'guardian-tower');

        const grid = document.createElement('div');
        grid.className = 'grid grid-2';

        generalModules.forEach(module => {
            const moduleCard = this.createModuleCard(module);
            grid.appendChild(moduleCard);
        });

        // Add Guardian Tower as a special final module
        const guardianModule = this.modules.find(m => m.id === 'guardian-tower');
        if (guardianModule) {
            const guardianCard = this.createModuleCard(guardianModule);
            grid.appendChild(guardianCard);
        }

        container.appendChild(grid);
        app.appendChild(container);

        container.querySelector('#back-btn').onclick = () => this.render();
    },

    /**
     * Render Settings
     */
    renderSettings() {
        const app = document.getElementById('app');
        app.innerHTML = '';
        app.className = 'page fade-in';

        const container = document.createElement('div');
        container.className = 'container';
        container.style.maxWidth = '600px';

        const header = document.createElement('div');
        header.className = 'page-header';
        header.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-lg);">
                <button class="btn btn-ghost btn-sm" id="back-btn">← Back to Village</button>
                <div class="badge badge-secondary">Settings</div>
            </div>
            <h2>App Settings</h2>
        `;
        container.appendChild(header);

        const settingsCard = document.createElement('div');
        settingsCard.className = 'card';
        settingsCard.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: var(--spacing-xl);">
                <!-- Sound Setting -->
                <div style="display: flex; justify-content: space-between; align-items: center; padding: var(--spacing-md); background: var(--glass-bg); border-radius: var(--radius-md);">
                    <div>
                        <h4 style="margin: 0 0 var(--spacing-xs) 0;">Sound Effects</h4>
                        <p style="margin: 0; font-size: var(--font-size-sm); color: var(--color-text-tertiary);">Enable sound for buttons and rewards</p>
                    </div>
                    <label class="switch">
                        <input type="checkbox" id="sound-toggle" checked>
                        <span class="slider"></span>
                    </label>
                </div>

                <!-- High Contrast Setting -->
                <div style="display: flex; justify-content: space-between; align-items: center; padding: var(--spacing-md); background: var(--glass-bg); border-radius: var(--radius-md);">
                    <div>
                        <h4 style="margin: 0 0 var(--spacing-xs) 0;">High Contrast Mode</h4>
                        <p style="margin: 0; font-size: var(--font-size-sm); color: var(--color-text-tertiary);">Increase visibility for better accessibility</p>
                    </div>
                    <label class="switch">
                        <input type="checkbox" id="contrast-toggle">
                        <span class="slider"></span>
                    </label>
                </div>

                <!-- Data Management -->
                <hr style="border: none; border-top: 1px solid var(--glass-border);">
                <div>
                    <h3 style="margin-bottom: var(--spacing-md);">Data Management</h3>
                    <button class="btn btn-secondary btn-block" id="export-data-btn" style="margin-bottom: var(--spacing-sm);">
                        💾 Export My Data
                    </button>
                    <button class="btn btn-danger btn-block" id="clear-data-btn">
                        🗑️ Clear All Data
                    </button>
                </div>
            </div>
        `;

        // Settings Logic
        const soundToggle = settingsCard.querySelector('#sound-toggle');
        const contrastToggle = settingsCard.querySelector('#contrast-toggle');
        const exportBtn = settingsCard.querySelector('#export-data-btn');
        const clearBtn = settingsCard.querySelector('#clear-data-btn');

        // Sound toggle
        soundToggle.checked = !localStorage.getItem('soundDisabled');
        soundToggle.onchange = () => {
            if (soundToggle.checked) {
                localStorage.removeItem('soundDisabled');
                Utils.showToast('Sound effects enabled', 'success');
            } else {
                localStorage.setItem('soundDisabled', 'true');
                Utils.showToast('Sound effects disabled', 'info');
            }
        };

        // Contrast toggle
        contrastToggle.checked = document.body.classList.contains('high-contrast');
        contrastToggle.onchange = () => {
            document.body.classList.toggle('high-contrast');
            const isHighContrast = document.body.classList.contains('high-contrast');
            Utils.showToast(isHighContrast ? 'High Contrast Mode Enabled' : 'High Contrast Mode Disabled');
        };

        // Export data
        exportBtn.onclick = () => {
            const state = GameState.get();
            const dataStr = JSON.stringify(state, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'skillup_safe_data.json';
            link.click();
            Utils.showToast('Data exported successfully!', 'success');
        };

        // Clear data
        clearBtn.onclick = () => {
            if (confirm('⚠️ This will delete ALL your progress permanently. Are you absolutely sure?')) {
                if (confirm('⚠️ FINAL WARNING: This cannot be undone. Continue?')) {
                    GameState.reset();
                    Utils.showToast('All data cleared', 'info');
                    setTimeout(() => location.reload(), 1500);
                }
            }
        };

        container.appendChild(settingsCard);
        app.appendChild(container);

        container.querySelector('#back-btn').onclick = () => this.render();
    },

    /**
     * Render Help
     */
    renderHelp() {
        const app = document.getElementById('app');
        app.innerHTML = '';
        app.className = 'page fade-in';

        const container = document.createElement('div');
        container.className = 'container';
        container.style.maxWidth = '800px';

        const header = document.createElement('div');
        header.className = 'page-header';
        header.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-lg);">
                <button class="btn btn-ghost btn-sm" id="back-btn">← Back to Village</button>
                <div class="badge badge-info">Help</div>
            </div>
            <h2>How to Play SkillUp Safe</h2>
        `;
        container.appendChild(header);

        const helpCard = document.createElement('div');
        helpCard.className = 'card';
        helpCard.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: var(--spacing-xl);">
                <div>
                    <h3>🎮 Getting Started</h3>
                    <ul style="line-height: 1.8;">
                        <li>Click on any module card to start learning</li>
                        <li>Complete levels by answering questions correctly</li>
                        <li>Earn coins and badges for your progress</li>
                        <li>Use the navigation pane on the right to access tools</li>
                    </ul>
                </div>

                <div>
                    <h3>🎓 General Training Zone</h3>
                    <p>This special section contains core digital safety modules that everyone can access, regardless of gender. Click the purple "General Training Zone" card on your dashboard to explore these essential skills.</p>
                </div>

                <div>
                    <h3>🏋️ Gender-Specific Modules</h3>
                    <p>Based on your gender selection during onboarding, you'll see personalized modules designed specifically for your experiences and challenges. These address unique safety concerns and empower you with targeted knowledge.</p>
                </div>

                <div>
                    <h3>🛡️ Safety Tools</h3>
                    <ul style="line-height: 1.8;">
                        <li><strong>Device Safety Check:</strong> Scan your setup for vulnerabilities</li>
                        <li><strong>Calculator Vault:</strong> Hide sensitive files securely (PIN: 1234)</li>
                        <li><strong>Profile Park:</strong> Customize your avatar and view stats</li>
                    </ul>
                </div>

                <div>
                    <h3>💡 Tips for Success</h3>
                    <ul style="line-height: 1.8;">
                        <li>Take your time reading each scenario carefully</li>
                        <li>Your first answer locks in - think before you click!</li>
                        <li>Revisit modules to review what you've learned</li>
                        <li>Share this app with friends to help them stay safe too</li>
                    </ul>
                </div>

                <div style="padding: var(--spacing-lg); background: var(--glass-bg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-info);">
                    <h4 style="color: var(--color-info); margin-bottom: var(--spacing-sm);">🆘 Need Real Help?</h4>
                    <p style="margin: 0; font-size: var(--font-size-sm);">This app is for education only. If you're experiencing harassment, abuse, or need urgent support, please reach out to local authorities or crisis hotlines. Your safety is the priority.</p>
                </div>
            </div>
        `;

        container.appendChild(helpCard);
        app.appendChild(container);

        container.querySelector('#back-btn').onclick = () => this.render();
    },

    /**
     * Create header with user info
     */
    createHeader() {
        const state = GameState.get();
        const header = document.createElement('div');
        header.style.cssText = 'margin-bottom: var(--spacing-2xl); position: relative;';

        // Back Button
        const backBtn = document.createElement('button');
        backBtn.className = 'btn btn-ghost btn-sm';
        backBtn.innerHTML = '← Back to Start';
        backBtn.style.marginBottom = 'var(--spacing-md)';
        backBtn.onclick = () => {
            if (confirm('Return to start screen?')) {
                location.reload();
            }
        };
        header.appendChild(backBtn);

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div style="display: flex; align-items: center; gap: var(--spacing-lg); margin-bottom: var(--spacing-lg); flex-wrap: wrap;">
                <div id="user-avatar"></div>
                <div style="flex: 1;">
                    <h2 style="margin-bottom: var(--spacing-xs);">Welcome back, ${state.user.name}!</h2>
                    <p style="color: var(--color-text-tertiary); margin: 0;">Ready to level up your digital skills?</p>
                </div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: var(--spacing-md);">
                <div style="text-align: center; padding: var(--spacing-md); background: var(--glass-bg); border-radius: var(--radius-md);">
                    <div style="font-size: 1.5rem; margin-bottom: var(--spacing-xs);">🪙</div>
                    <div style="font-size: var(--font-size-xl); font-weight: bold;">${state.inventory.coins}</div>
                    <div style="font-size: var(--font-size-sm); color: var(--color-text-tertiary);">Coins</div>
                </div>
                <div style="text-align: center; padding: var(--spacing-md); background: var(--glass-bg); border-radius: var(--radius-md);">
                    <div style="font-size: 1.5rem; margin-bottom: var(--spacing-xs);">🏆</div>
                    <div style="font-size: var(--font-size-xl); font-weight: bold;">${state.inventory.badges.length}</div>
                    <div style="font-size: var(--font-size-sm); color: var(--color-text-tertiary);">Badges</div>
                </div>
                ${state.user.gender === 'male' ? `
                <div style="text-align: center; padding: var(--spacing-md); background: var(--glass-bg); border-radius: var(--radius-md);">
                    <div style="font-size: 1.5rem; margin-bottom: var(--spacing-xs);">⚖️</div>
                    <div style="font-size: var(--font-size-xl); font-weight: bold;">${state.stats.responsibilityScore || 0}</div>
                    <div style="font-size: var(--font-size-sm); color: var(--color-text-tertiary);">Responsibility</div>
                </div>
                ` : `
                <div style="text-align: center; padding: var(--spacing-md); background: var(--glass-bg); border-radius: var(--radius-md);">
                    <div style="font-size: 1.5rem; margin-bottom: var(--spacing-xs);">🎯</div>
                    <div style="font-size: var(--font-size-xl); font-weight: bold;">${GameState.getAccuracy()}%</div>
                    <div style="font-size: var(--font-size-sm); color: var(--color-text-tertiary);">Accuracy</div>
                </div>
                `}
            </div>
        `;

        card.querySelector('#user-avatar').appendChild(
            Components.createAvatar(state.user.avatar, 60)
        );

        header.appendChild(card);
        const accessBtn = document.createElement('button');
        accessBtn.className = 'btn btn-ghost btn-sm';
        accessBtn.innerHTML = '👁️ Accessibility';
        accessBtn.style.position = 'absolute';
        accessBtn.style.top = '20px';
        accessBtn.style.right = '20px';
        accessBtn.onclick = () => {
            document.body.classList.toggle('high-contrast');
            const isHighContrast = document.body.classList.contains('high-contrast');
            Utils.showToast(isHighContrast ? 'High Contrast Mode Enabled' : 'High Contrast Mode Disabled');
        };
        header.appendChild(accessBtn);

        return header;
    },

    /**
     * Create village map
     */
    /**
     * Create village map
     */
    createVillageMap() {
        const mapContainer = document.createElement('div');
        const state = GameState.get();
        const userGender = state.user.gender || 'other';

        const title = document.createElement('h2');
        title.textContent = 'The Digital Village';
        title.style.cssText = 'text-align: center; margin-bottom: var(--spacing-xl);';
        mapContainer.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'grid grid-2';

        // Filter modules: ONLY show Profile + Gender Specific
        let visibleModules = this.modules.filter(module => {
            // Always show Profile Park
            if (module.id === 'profile-park') return true;

            // Show gender-specific modules for this user
            if (module.gender && module.gender.includes(userGender)) return true;

            // Hide all general modules (no gender property)
            return false;
        });

        // Sort modules: Profile -> Gender Specific
        visibleModules.sort((a, b) => {
            // 1. Profile Park always first
            if (a.id === 'profile-park') return -1;
            if (b.id === 'profile-park') return 1;

            // 2. Keep original order for the rest
            return 0;
        });

        visibleModules.forEach(module => {
            const moduleCard = this.createModuleCard(module);
            grid.appendChild(moduleCard);
        });

        // Add "General Training Zone" card
        const freeModCard = document.createElement('div');
        freeModCard.className = 'card card-clickable';
        freeModCard.style.cssText = `
            position: relative;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: 2px solid #9f7aea;
        `;
        freeModCard.innerHTML = `
            <div style="font-size: 4rem; text-align: center; margin-bottom: var(--spacing-md);">🎓</div>
            <h3 style="text-align: center; margin-bottom: var(--spacing-sm); color: white;">General Training Zone</h3>
            <p style="text-align: center; font-size: var(--font-size-sm); margin-bottom: var(--spacing-lg); color: rgba(255,255,255,0.9);">
                Master essential digital safety skills. Open to all genders!
            </p>
            <button class="btn btn-primary btn-block" style="background: white; color: #667eea;">Explore Modules</button>
        `;
        freeModCard.onclick = () => {
            Utils.playSound('click');
            this.renderGeneralModules();
        };
        grid.appendChild(freeModCard);

        mapContainer.appendChild(grid);
        return mapContainer;
    },

    /**
     * Create module card
     */
    createModuleCard(module) {
        const state = GameState.get();
        const isLocked = module.locked && !GameState.isModuleUnlocked(module.id);
        const isCompleted = GameState.isModuleCompleted(module.id);

        const card = document.createElement('div');
        card.className = `card ${!isLocked ? 'card-clickable' : ''}`;
        card.style.cssText = `
            position: relative;
            ${isLocked ? 'opacity: 0.6; cursor: not-allowed;' : ''}
            border-color: ${module.color}33;
        `;

        // Completion badge
        let badge = '';
        if (isCompleted) {
            badge = '<div style="position: absolute; top: 10px; right: 10px; background: var(--color-success); color: white; padding: 0.25rem 0.5rem; border-radius: var(--radius-full); font-size: var(--font-size-xs); font-weight: bold;">✓ COMPLETED</div>';
        } else if (isLocked) {
            badge = '<div style="position: absolute; top: 10px; right: 10px; background: var(--color-text-tertiary); color: white; padding: 0.25rem 0.5rem; border-radius: var(--radius-full); font-size: var(--font-size-xs); font-weight: bold;">🔒 LOCKED</div>';
        }

        card.innerHTML = `
            ${badge}
            <div style="font-size: 4rem; text-align: center; margin-bottom: var(--spacing-md);">${module.icon}</div>
            <h3 style="text-align: center; margin-bottom: var(--spacing-sm);">${module.name}</h3>
            <p style="text-align: center; color: var(--color-text-secondary); font-size: var(--font-size-sm); margin-bottom: var(--spacing-lg);">
                ${module.description}
            </p>
            <div style="margin-bottom: var(--spacing-md);">
                ${this.createModuleProgress(module)}
            </div>
            ${!isLocked ?
                (module.id === 'profile-park'
                    ? `<button class="btn btn-primary btn-block" style="background: linear-gradient(135deg, ${module.color}, ${module.color}dd);">View Profile</button>`
                    : `<button class="btn btn-primary btn-block" style="background: linear-gradient(135deg, ${module.color}, ${module.color}dd);">Start Module</button>`)
                : '<button class="btn btn-ghost btn-block" disabled>Complete previous modules to unlock</button>'
            }
        `;

        if (!isLocked) {
            card.onclick = () => {
                Utils.playSound('click');
                if (module.id === 'profile-park') {
                    Village.renderProfilePark();
                } else if (module.id === 'guardian-tower') {
                    Village.renderGuardianTower();
                } else {
                    Modules.startModule(module.id);
                }
            };
        }

        return card;
    },

    /**
     * Create module progress indicator
     */
    createModuleProgress(module) {
        if (!module.levels) return '';

        const state = GameState.get();
        const levelProgress = state.progress.currentLevel[module.id] || {};
        const completedLevels = Object.values(levelProgress).filter(v => v === true).length;
        const percentage = (completedLevels / module.levels) * 100;

        return `
            <div style="font-size: var(--font-size-sm); color: var(--color-text-tertiary); margin-bottom: var(--spacing-sm); text-align: center;">
                ${completedLevels} / ${module.levels} levels completed
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${percentage}%;"></div>
            </div>
        `;
    },

    /**
     * Render Profile Park
     */
    renderProfilePark() {
        const app = document.getElementById('app');
        app.innerHTML = '';
        app.className = 'page fade-in';

        const container = document.createElement('div');
        container.className = 'container';
        container.style.maxWidth = '800px';

        const header = document.createElement('div');
        header.className = 'page-header';
        header.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-lg);">
                <button class="btn btn-ghost btn-sm" id="back-btn">← Back to Village</button>
                <div class="badge badge-primary">Profile Park</div>
            </div>
            <h2>Customize Your Profile</h2>
        `;
        container.appendChild(header);

        const content = document.createElement('div');
        content.className = 'card';
        content.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; gap: var(--spacing-xl);">
                <div id="avatar-preview"></div>
                
                <div style="width: 100%; max-width: 400px;">
                    <h3 style="margin-bottom: var(--spacing-md);">Choose Avatar Color</h3>
                    <div style="display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap;">
                        ${['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'].map(color => `
                            <div class="color-swatch" style="
                                width: 40px; height: 40px; border-radius: 50%; background: ${color}; cursor: pointer;
                                border: 3px solid transparent; transition: transform 0.2s;
                            " data-color="${color}"></div>
                        `).join('')}
                    </div>
                </div>

                <div style="width: 100%; padding-top: var(--spacing-xl); border-top: 1px solid var(--glass-border);">
                    <h3 style="margin-bottom: var(--spacing-md);">Your Stats</h3>
                    ${Components.createStatsDisplay(GameState.get().inventory).innerHTML}
                </div>

                <div style="width: 100%; padding-top: var(--spacing-xl); border-top: 1px solid var(--glass-border); text-align: center;">
                    <button class="btn btn-danger" id="reset-btn">⚠️ Reset Progress</button>
                </div>
            </div>
        `;

        // Avatar Logic
        const state = GameState.get();
        const updateAvatar = () => {
            const preview = content.querySelector('#avatar-preview');
            preview.innerHTML = '';
            preview.appendChild(Components.createAvatar(state.user.avatar, 120));
        };
        updateAvatar();

        content.querySelectorAll('.color-swatch').forEach(swatch => {
            swatch.onclick = () => {
                state.user.avatar.color = swatch.dataset.color;
                GameState.save();
                updateAvatar();
                Utils.playSound('click');
            };
        });

        // Reset Logic
        content.querySelector('#reset-btn').onclick = () => {
            if (confirm('Are you sure you want to reset all your progress? This cannot be undone!')) {
                GameState.reset();
                Utils.playSound('success');
                location.reload();
            }
        };

        container.appendChild(content);
        app.appendChild(container);

        container.querySelector('#back-btn').onclick = () => Village.render();
    },

    /**
     * Render Guardian Tower
     */
    renderGuardianTower() {
        const app = document.getElementById('app');
        app.innerHTML = '';
        app.className = 'page fade-in';

        const container = document.createElement('div');
        container.className = 'container';
        container.style.maxWidth = '800px';

        const header = document.createElement('div');
        header.className = 'page-header';
        header.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-lg);">
                <button class="btn btn-ghost btn-sm" id="back-btn">← Back to Village</button>
                <div class="badge badge-primary">Guardian Tower</div>
            </div>
            <h2>Advanced Training & Arcade</h2>
        `;
        container.appendChild(header);

        const grid = document.createElement('div');
        grid.className = 'grid grid-2';

        // Arcade Games
        const games = [
            { title: 'Memory Match', icon: '🧠', desc: 'Test your memory with safety icons!', action: () => Games.startMemoryMatch() },
            { title: 'Word Search', icon: '🔍', desc: 'Find hidden digital safety words!', action: () => Games.startWordSearch() },
            { title: 'Cyber Striker', icon: '⚽', desc: 'Score goals by answering safety questions!', action: () => Games.startCyberStriker() }
        ];

        games.forEach(game => {
            const card = document.createElement('div');
            card.className = 'card card-clickable';
            card.innerHTML = `
                <div style="font-size: 3rem; margin-bottom: var(--spacing-md);">${game.icon}</div>
                <h3>${game.title}</h3>
                <p style="color: var(--color-text-secondary);">${game.desc}</p>
            `;
            card.onclick = () => {
                Utils.playSound('click');
                game.action();
            };
            grid.appendChild(card);
        });

        container.appendChild(grid);
        app.appendChild(container);

        container.querySelector('#back-btn').onclick = () => Village.render();
    },

    /**
     * Render Device Safety Check
     */
    renderDeviceCheck() {
        const app = document.getElementById('app');
        app.innerHTML = '';
        app.className = 'page fade-in';

        const container = document.createElement('div');
        container.className = 'container';
        container.style.maxWidth = '600px';

        const header = document.createElement('div');
        header.className = 'page-header';
        header.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-lg);">
                <button class="btn btn-ghost btn-sm" id="back-btn">← Back to Village</button>
                <div class="badge badge-warning">Safety Tool</div>
            </div>
            <h2>Device Safety Check</h2>
            <p style="color: var(--color-text-secondary);">Scanning your device for potential risks...</p>
        `;
        container.appendChild(header);

        const resultsContainer = document.createElement('div');
        resultsContainer.className = 'card';
        resultsContainer.style.minHeight = '300px';
        resultsContainer.style.display = 'flex';
        resultsContainer.style.alignItems = 'center';
        resultsContainer.style.justifyContent = 'center';
        resultsContainer.innerHTML = '<div class="spinner"></div>';
        container.appendChild(resultsContainer);

        app.appendChild(container);

        // Back button
        header.querySelector('#back-btn').onclick = () => this.render();

        // Run Check
        Safety.runDeviceCheck().then(results => {
            resultsContainer.style.display = 'block';
            resultsContainer.innerHTML = `
                <div style="text-align: center; margin-bottom: var(--spacing-xl);">
                    <div style="font-size: 4rem; font-weight: 800; color: ${results.score >= 80 ? '#10B981' : (results.score >= 50 ? '#F59E0B' : '#EF4444')}; margin-bottom: var(--spacing-xs);">
                        ${results.score}%
                    </div>
                    <div style="font-size: var(--font-size-xl); font-weight: bold; color: ${results.score >= 80 ? '#10B981' : (results.score >= 50 ? '#F59E0B' : '#EF4444')};">
                        ${results.score >= 80 ? 'Safe & Secure' : (results.score >= 50 ? 'Needs Attention' : 'Vulnerable')}
                    </div>
                    <div style="font-size: var(--font-size-sm); color: var(--color-text-tertiary);">Safety Score</div>
                </div>
            `;

            const list = document.createElement('div');
            list.style.display = 'flex';
            list.style.flexDirection = 'column';
            list.style.gap = 'var(--spacing-md)';

            results.checks.forEach(check => {
                const item = document.createElement('div');
                item.style.cssText = `
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-md);
                    padding: var(--spacing-md);
                    background: ${check.status === 'safe' ? '#ECFDF5' : (check.status === 'warning' ? '#FFFBEB' : '#FEF2F2')};
                    border-radius: var(--radius-md);
                    border: 1px solid ${check.status === 'safe' ? '#10B981' : (check.status === 'warning' ? '#F59E0B' : '#EF4444')};
                `;

                const icon = check.status === 'safe' ? '✅' : (check.status === 'warning' ? '⚠️' : '❌');

                item.innerHTML = `
                    <div style="font-size: 1.5rem;">${icon}</div>
                    <div>
                        <div style="font-weight: 600; margin-bottom: 4px;">${check.name}</div>
                        <div style="font-size: 0.9rem; color: var(--color-text-secondary);">${check.msg}</div>
                    </div>
                `;
                list.appendChild(item);
            });

            resultsContainer.appendChild(list);

            // Action Button
            const fixBtn = document.createElement('button');
            fixBtn.className = 'btn btn-primary btn-block';
            fixBtn.style.marginTop = 'var(--spacing-xl)';
            fixBtn.innerHTML = 'How to Fix Issues';
            fixBtn.onclick = () => Utils.showToast('Redirecting to Privacy House module...', 'info');
            resultsContainer.appendChild(fixBtn);
        });
    },

    /**
     * Render Calculator (Hidden Vault)
     */
    renderCalculator() {
        const app = document.getElementById('app');
        app.innerHTML = '';
        app.className = 'page fade-in';

        const container = document.createElement('div');
        container.className = 'container';
        container.style.maxWidth = '600px';

        const header = document.createElement('div');
        header.className = 'page-header';
        header.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-lg);">
                <button class="btn btn-ghost btn-sm" id="back-btn">← Back to Village</button>
                <div class="badge badge-secondary">Utility</div>
            </div>
            <h2>Calculator</h2>
        `;
        container.appendChild(header);

        // Calculator Component
        const calcContainer = document.createElement('div');
        calcContainer.appendChild(Components.createCalculator(() => {
            // On Unlock
            container.innerHTML = '';
            container.appendChild(Components.createVault());

            // Add back button to vault
            const vaultBackBtn = document.createElement('button');
            vaultBackBtn.className = 'btn btn-ghost btn-sm';
            vaultBackBtn.innerHTML = '← Lock & Exit';
            vaultBackBtn.style.position = 'absolute';
            vaultBackBtn.style.top = '20px';
            vaultBackBtn.style.right = '20px';
            vaultBackBtn.onclick = () => this.render();
            container.querySelector('.card').appendChild(vaultBackBtn);
        }));

        container.appendChild(calcContainer);
        app.appendChild(container);

        // Back button
        header.querySelector('#back-btn').onclick = () => this.render();
    }
};
