// Components object: a UI factory that creates reusable UI elements
const Components = {
    /**
     * Create a button
     */
    createButton(text, onClick, variant = 'primary', size = 'md') {
        const button = document.createElement('button');
        button.className = `btn btn-${variant} btn-${size}`;
        button.textContent = text;
        button.onclick = (e) => {
            Utils.playSound('click');
            onClick(e);
        };
        return button;
    },

    /**
      * Create a card component
      * Cards are layout containers with optional sections
      */

    createCard({ title, subtitle, body, footer, clickable = false, onClick = null }) {
        const card = document.createElement('div');

        // Add base card styles + clickable modifier if needed
        card.className = `card ${clickable ? 'card-clickable' : ''}`;

        if (clickable && onClick) {
            card.onclick = () => {
                Utils.playSound('click');
                onClick();
            };
        }

        let html = '';

        if (title || subtitle) {
            html += '<div class="card-header">';
            if (title) html += `<h3 class="card-title">${title}</h3>`;
            if (subtitle) html += `<p class="card-subtitle">${subtitle}</p>`;
            html += '</div>';
        }

        if (body) {
            html += `<div class="card-body">${body}</div>`;
        }

        if (footer) {
            html += `<div class="card-footer">${footer}</div>`;
        }

        card.innerHTML = html;
        return card;
    },

    /**
     * Create a badge
     */
    createBadge(text, variant = 'primary') {
        const badge = document.createElement('span');
        badge.className = `badge badge-${variant}`;
        badge.textContent = text;
        return badge;
    },

    /**
     * Create a progress bar
     */
    createProgressBar(percentage, label = '') {
        const container = document.createElement('div');
        container.style.marginBottom = 'var(--spacing-md)';

        if (label) {
            const labelEl = document.createElement('div');
            labelEl.style.cssText = 'display: flex; justify-content: space-between; margin-bottom: var(--spacing-sm); font-size: var(--font-size-sm); color: var(--color-text-secondary);';
            labelEl.innerHTML = `<span>${label}</span><span>${percentage}%</span>`;
            container.appendChild(labelEl);
        }

        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';

        const progressFill = document.createElement('div');
        progressFill.className = 'progress-fill';
        progressFill.style.width = `${percentage}%`;

        progressBar.appendChild(progressFill);
        container.appendChild(progressBar);

        return container;
    },

    /**
     * Create avatar display
     */
    createAvatar(avatar, size = 80) {
        const container = document.createElement('div');
        container.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: linear-gradient(135deg, ${avatar.color}, ${avatar.color}dd);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: ${size * 0.5}px;
            font-weight: bold;
            color: white;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            border: 3px solid var(--glass-border);
        `;
        container.textContent = '🛡️';
        return container;
    },

    /**
     * Create stats display
     */
    createStatsDisplay(stats) {
        const container = document.createElement('div');
        container.className = 'grid grid-3';

        const statItems = [
            { label: 'Coins', value: stats.coins, icon: '🪙' },
            { label: 'Badges', value: stats.badges, icon: '🏆' },
            { label: 'Modules', value: stats.modules, icon: '📚' }
        ];

        statItems.forEach(item => {
            const statCard = document.createElement('div');
            statCard.className = 'card';
            statCard.style.textAlign = 'center';
            statCard.innerHTML = `
                <div style="font-size: 2rem; margin-bottom: var(--spacing-sm);">${item.icon}</div>
                <div style="font-size: var(--font-size-2xl); font-weight: bold; margin-bottom: var(--spacing-xs);">${item.value}</div>
                <div style="font-size: var(--font-size-sm); color: var(--color-text-tertiary);">${item.label}</div>
            `;
            container.appendChild(statCard);
        });

        return container;
    },

    /**
     * Create modal
     */
    createModal(content, onClose = null) {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            padding: var(--spacing-lg);
            animation: fadeIn 0.3s ease-out;
        `;

        const modal = document.createElement('div');
        modal.className = 'card slide-up';
        modal.style.cssText = `
            max-width: 500px;
            width: 100%;
            max-height: 80vh;
            overflow-y: auto;
        `;
        modal.innerHTML = content;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        overlay.onclick = (e) => {
            if (e.target === overlay) {
                overlay.remove();
                if (onClose) onClose();
            }
        };

        return overlay;
    },

    /**
     * Create reward popup
     */
    createRewardPopup(reward, onClose = null) {
        const content = `
            <div style="text-align: center;">
                <div style="font-size: 4rem; margin-bottom: var(--spacing-lg);">${reward.icon}</div>
                <h2 style="margin-bottom: var(--spacing-md);">${reward.title}</h2>
                <p style="color: var(--color-text-secondary); margin-bottom: var(--spacing-lg);">${reward.message}</p>
                ${reward.coins ? `<div style="font-size: var(--font-size-2xl); color: var(--color-primary); font-weight: bold; margin-bottom: var(--spacing-lg);">+${reward.coins} 🪙</div>` : ''}
                <button class="btn btn-primary btn-lg btn-block" id="reward-close-btn">Awesome!</button>
            </div>
        `;

        Utils.createConfetti();
        Utils.playSound('success');

        const modal = Components.createModal(content, onClose);

        modal.querySelector('#reward-close-btn').onclick = () => {
            modal.remove();
            if (onClose) onClose();
        };

        return modal;
    },

    /**
     * Create feedback popup
     */
    createFeedbackPopup(correct, explanation, onContinue) {
        const content = `
            <div style="text-align: center;">
                <div style="font-size: 4rem; margin-bottom: var(--spacing-lg);">${correct ? '✅' : '❌'}</div>
                <h2 style="margin-bottom: var(--spacing-md); color: ${correct ? 'var(--color-success)' : 'var(--color-danger)'};">
                    ${correct ? 'Correct!' : 'Not Quite'}
                </h2>
                <p style="color: var(--color-text-secondary); margin-bottom: var(--spacing-xl);">${explanation}</p>
                <button class="btn btn-primary btn-lg btn-block" id="continue-btn">Continue</button>
            </div>
        `;

        Utils.playSound(correct ? 'success' : 'error');
        const modal = Components.createModal(content);

        modal.querySelector('#continue-btn').onclick = () => {
            modal.remove();
            if (onContinue) onContinue();
        };

        return modal;
    },

    /**
     * Create loading spinner
     */
    createLoader(message = 'Loading...') {
        const loader = document.createElement('div');
        loader.style.cssText = `
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--spacing-lg);
            padding: var(--spacing-2xl);
        `;

        loader.innerHTML = `
            <div style="
                width: 50px;
                height: 50px;
                border: 4px solid var(--glass-border);
                border-top-color: var(--color-primary);
                border-radius: 50%;
                animation: spin 1s linear infinite;
            "></div>
            <p style="color: var(--color-text-secondary);">${message}</p>
        `;

        // Add spin animation if not exists
        if (!document.getElementById('spin-animation')) {
            const style = document.createElement('style');
            style.id = 'spin-animation';
            style.textContent = `
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }

        return loader;
    },

    /**
     * Create Calculator (Hidden Vault Entry)
     */
    createCalculator(onUnlock) {
        const container = document.createElement('div');
        container.className = 'card';
        container.style.maxWidth = '300px';
        container.style.margin = '0 auto';
        container.style.padding = '20px';
        container.style.background = '#222';
        container.style.color = 'white';

        const display = document.createElement('div');
        display.style.cssText = `
            background: #333;
            color: white;
            font-size: 2rem;
            text-align: right;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            font-family: monospace;
            min-height: 60px;
        `;
        display.textContent = '0';
        container.appendChild(display);

        const grid = document.createElement('div');
        grid.style.cssText = 'display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;';

        const buttons = [
            'C', '÷', '×', '⌫',
            '7', '8', '9', '-',
            '4', '5', '6', '+',
            '1', '2', '3', '=',
            '0', '.'
        ];

        let currentInput = '';

        buttons.forEach(btn => {
            const button = document.createElement('button');
            button.textContent = btn;
            button.style.cssText = `
                padding: 15px;
                font-size: 1.2rem;
                border: none;
                border-radius: 8px;
                background: ${['C', '⌫'].includes(btn) ? '#EF4444' : (['=', '+', '-', '×', '÷'].includes(btn) ? '#F59E0B' : '#444')};
                color: white;
                cursor: pointer;
                grid-column: ${btn === '0' ? 'span 2' : 'auto'};
            `;

            button.onclick = () => {
                if (btn === 'C') {
                    currentInput = '';
                    display.textContent = '0';
                } else if (btn === '⌫') {
                    currentInput = currentInput.slice(0, -1);
                    display.textContent = currentInput || '0';
                } else if (btn === '=') {
                    // SECRET CODE CHECK
                    if (currentInput === '1234') {
                        onUnlock();
                    } else {
                        try {
                            // Safe eval for demo
                            // eslint-disable-next-line no-new-func
                            display.textContent = new Function('return ' + currentInput.replace('×', '*').replace('÷', '/'))();
                            currentInput = display.textContent;
                        } catch (e) {
                            display.textContent = 'Error';
                            currentInput = '';
                        }
                    }
                } else {
                    if (display.textContent === '0' || display.textContent === 'Error') {
                        currentInput = btn;
                    } else {
                        currentInput += btn;
                    }
                    display.textContent = currentInput;
                }
            };
            grid.appendChild(button);
        });

        container.appendChild(grid);
        return container;
    },

    /**
     * Create Vault Interface
     */
    createVault() {
        const container = document.createElement('div');
        container.className = 'card';
        container.style.background = '#1F2937';
        container.style.color = 'white';

        container.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid #374151; padding-bottom: 15px;">
                <h2 style="margin: 0;">🔒 Secure Vault</h2>
                <div style="font-size: 0.8rem; color: #9CA3AF;">Encrypted Local Storage</div>
            </div>
            
            <div class="tabs" style="display: flex; gap: 10px; margin-bottom: 20px;">
                <button class="btn btn-sm btn-primary active" data-tab="notes">📝 Notes</button>
                <button class="btn btn-sm btn-ghost" data-tab="photos">📷 Photos</button>
                <button class="btn btn-sm btn-ghost" data-tab="audio">🎤 Audio</button>
            </div>

            <div id="vault-content">
                <!-- Dynamic Content -->
                <div id="notes-view">
                    <button class="btn btn-primary btn-sm" style="margin-bottom: 15px;">+ New Secure Note</button>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <div style="background: #374151; padding: 15px; border-radius: 8px;">
                            <div style="font-weight: bold; margin-bottom: 5px;">Incident Report - 12/05</div>
                            <div style="font-size: 0.9rem; color: #D1D5DB;">Harassment received via DM...</div>
                        </div>
                        <div style="background: #374151; padding: 15px; border-radius: 8px;">
                            <div style="font-weight: bold; margin-bottom: 5px;">Emergency Contacts</div>
                            <div style="font-size: 0.9rem; color: #D1D5DB;">Lawyer: 555-0123...</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Simple Tab Logic
        const tabs = container.querySelectorAll('.tabs button');
        tabs.forEach(tab => {
            tab.onclick = () => {
                tabs.forEach(t => {
                    t.classList.remove('btn-primary', 'active');
                    t.classList.add('btn-ghost');
                });
                tab.classList.remove('btn-ghost');
                tab.classList.add('btn-primary', 'active');
                Utils.showToast(`${tab.textContent} view coming soon`, 'info');
            };
        });

        return container;
    }
};
