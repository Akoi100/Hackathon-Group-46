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
        // Add padding to right to account for nav pane
        container.style.paddingRight = '250px';

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
            right: 0;
            width: 240px;
            height: 100vh;
            background: var(--glass-bg);
            border-left: 1px solid var(--glass-border);
            padding: var(--spacing-xl);
            display: flex;
            flex-direction: column;
            gap: var(--spacing-lg);
            backdrop-filter: blur(10px);
            z-index: 100;
        `;

        const state = GameState.get();

        pane.innerHTML = `
            <div style="text-align: center; margin-bottom: var(--spacing-xl);">
                <div style="font-size: 3rem; margin-bottom: var(--spacing-sm);">🛡️</div>
                <h3>SkillUp Safe</h3>
            </div>

            <div style="display: flex; flex-direction: column; gap: var(--spacing-md);">
                <button class="btn btn-ghost" style="justify-content: flex-start;" id="nav-profile">
                    👤 My Profile
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
        pane.querySelector('#nav-settings').onclick = () => Utils.showToast('Settings coming soon!', 'info');
        pane.querySelector('#nav-help').onclick = () => Utils.showToast('Help center coming soon!', 'info');
        pane.querySelector('#nav-logout').onclick = () => {
            if (confirm('Are you sure you want to return to the start screen?')) {
                location.reload();
            }
        };

        return pane;
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
                <div style="text-align: center; padding: var(--spacing-md); background: var(--glass-bg); border-radius: var(--radius-md);">
                    <div style="font-size: 1.5rem; margin-bottom: var(--spacing-xs);">📚</div>
                    <div style="font-size: var(--font-size-xl); font-weight: bold;">${state.progress.completedModules.length}/${this.modules.length}</div>
                    <div style="font-size: var(--font-size-sm); color: var(--color-text-tertiary);">Modules</div>
                </div>
                <div style="text-align: center; padding: var(--spacing-md); background: var(--glass-bg); border-radius: var(--radius-md);">
                    <div style="font-size: 1.5rem; margin-bottom: var(--spacing-xs);">🎯</div>
                    <div style="font-size: var(--font-size-xl); font-weight: bold;">${GameState.getAccuracy()}%</div>
                    <div style="font-size: var(--font-size-sm); color: var(--color-text-tertiary);">Accuracy</div>
                </div>
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
    createVillageMap() {
        const mapContainer = document.createElement('div');

        const title = document.createElement('h2');
        title.textContent = 'The Digital Village';
        title.style.cssText = 'text-align: center; margin-bottom: var(--spacing-xl);';
        mapContainer.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'grid grid-2';

        this.modules.forEach(module => {
            const moduleCard = this.createModuleCard(module);
            grid.appendChild(moduleCard);
        });

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
                : '<button class="btn btn-ghost btn-block" disabled>Complete previous modules to unlock</button>'}
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
                Utils.showToast('Progress Reset!');
                setTimeout(() => {
                    location.reload();
                }, 1000);
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
    }
};
