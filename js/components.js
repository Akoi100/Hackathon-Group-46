// ============================================
// REUSABLE UI COMPONENTS
// ============================================

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
     * Create a card
     */
    createCard({ title, subtitle, body, footer, clickable = false, onClick = null }) {
        const card = document.createElement('div');
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
    createRewardPopup(reward) {
        const content = `
            <div style="text-align: center;">
                <div style="font-size: 4rem; margin-bottom: var(--spacing-lg);">${reward.icon}</div>
                <h2 style="margin-bottom: var(--spacing-md);">${reward.title}</h2>
                <p style="color: var(--color-text-secondary); margin-bottom: var(--spacing-lg);">${reward.message}</p>
                ${reward.coins ? `<div style="font-size: var(--font-size-2xl); color: var(--color-primary); font-weight: bold; margin-bottom: var(--spacing-lg);">+${reward.coins} 🪙</div>` : ''}
                <button class="btn btn-primary btn-lg btn-block" onclick="this.closest('[style*=fixed]').remove()">Awesome!</button>
            </div>
        `;

        Utils.createConfetti();
        Utils.playSound('success');
        return Components.createModal(content);
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
    }
};
