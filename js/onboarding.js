// ============================================
// ONBOARDING FLOW
// ============================================

const Onboarding = {
    currentStep: 0,
    steps: ['welcome', 'gender', 'comfort', 'avatar'],

    /**
     * Render onboarding
     */
    render() {
        const app = document.getElementById('app');
        app.innerHTML = '';
        app.className = 'page fade-in';

        const container = document.createElement('div');
        container.className = 'container';
        container.style.maxWidth = '600px';

        // Progress indicator
        const progress = this.createProgressIndicator();
        container.appendChild(progress);

        // Current step content
        const stepContent = this.renderStep(this.steps[this.currentStep]);
        container.appendChild(stepContent);

        app.appendChild(container);
    },

    /**
     * Create progress indicator
     */
    createProgressIndicator() {
        const indicator = document.createElement('div');
        indicator.style.cssText = 'margin-bottom: var(--spacing-2xl);';

        const percentage = ((this.currentStep + 1) / this.steps.length) * 100;
        indicator.appendChild(Components.createProgressBar(percentage, `Step ${this.currentStep + 1} of ${this.steps.length}`));

        return indicator;
    },

    /**
     * Render specific step
     */
    renderStep(step) {
        const content = document.createElement('div');
        content.className = 'slide-up';

        switch (step) {
            case 'welcome':
                content.innerHTML = `
                    <div class="page-header">
                        <div style="font-size: 5rem; margin-bottom: var(--spacing-lg);">🛡️</div>
                        <h1>Welcome to SkillUp Safe!</h1>
                        <p style="font-size: var(--font-size-lg); color: var(--color-text-secondary);">
                            Let's build your digital confidence together in a fun, safe space.
                        </p>
                    </div>
                    <div class="card" style="margin-bottom: var(--spacing-xl);">
                        <h3 style="margin-bottom: var(--spacing-md);">What You'll Learn:</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: var(--spacing-sm) 0; display: flex; align-items: center; gap: var(--spacing-md);">
                                <span style="font-size: 1.5rem;">🔒</span>
                                <span>Protect your privacy and personal data</span>
                            </li>
                            <li style="padding: var(--spacing-sm) 0; display: flex; align-items: center; gap: var(--spacing-md);">
                                <span style="font-size: 1.5rem;">🎣</span>
                                <span>Spot phishing scams and fake messages</span>
                            </li>
                            <li style="padding: var(--spacing-sm) 0; display: flex; align-items: center; gap: var(--spacing-md);">
                                <span style="font-size: 1.5rem;">💬</span>
                                <span>Communicate safely and respectfully</span>
                            </li>
                            <li style="padding: var(--spacing-sm) 0; display: flex; align-items: center; gap: var(--spacing-md);">
                                <span style="font-size: 1.5rem;">🎮</span>
                                <span>Earn rewards while learning!</span>
                            </li>
                        </ul>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: var(--spacing-md);">
                        <button id="start-btn" class="btn btn-primary btn-lg btn-block">Let's Get Started</button>
                        
                        <button id="shadow-btn" class="btn btn-secondary btn-block" style="border: 2px dashed var(--color-text-secondary);">
                            🕵️ Enter Shadow Mode
                            <div style="font-size: 0.8rem; opacity: 0.8; font-weight: normal;">Anonymous. No history. Wiped on exit.</div>
                        </button>
                    </div>
                `;

                content.querySelector('#start-btn').onclick = () => {
                    Storage.setMode('normal');
                    this.nextStep();
                };

                content.querySelector('#shadow-btn').onclick = () => {
                    Storage.setMode('shadow');
                    Utils.showToast('Shadow Mode Active. No data will be saved.', 'info');
                    this.nextStep();
                };
                break;

            case 'gender':
                content.innerHTML = `
                    <div class="page-header">
                        <h2>Tell Us About Yourself</h2>
                        <p>This helps us tailor your learning experience. Your data stays private on your device.</p>
                    </div>
                    <div class="form-group">
                        <label class="form-label">I identify as:</label>
                        <div class="radio-group" id="gender-options">
                            <label class="radio-option" data-value="female">
                                <input type="radio" name="gender" value="female">
                                <span>Female</span>
                            </label>
                            <label class="radio-option" data-value="male">
                                <input type="radio" name="gender" value="male">
                                <span>Male</span>
                            </label>
                            <label class="radio-option" data-value="other">
                                <input type="radio" name="gender" value="other">
                                <span>Other / Prefer not to say</span>
                            </label>
                        </div>
                    </div>
                    <div style="background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: var(--radius-md); padding: var(--spacing-md); margin-bottom: var(--spacing-xl);">
                        <p style="font-size: var(--font-size-sm); color: var(--color-text-tertiary); margin: 0;">
                            🔒 <strong>Privacy Note:</strong> This information is stored only on your device and is never shared.
                        </p>
                    </div>
                    <div style="display: flex; gap: var(--spacing-md);">
                        <button class="btn btn-secondary" id="back-btn">← Back</button>
                        <button class="btn btn-primary" id="next-btn" style="flex: 1;">Next →</button>
                    </div>
                `;

                content.querySelector('#back-btn').onclick = () => this.previousStep();
                content.querySelector('#next-btn').onclick = () => {
                    const selected = content.querySelector('input[name="gender"]:checked');
                    if (selected) {
                        GameState.updateUser({ gender: selected.value });
                        this.nextStep();
                    } else {
                        Utils.showToast('Please select an option', 'warning');
                    }
                };

                // Add selection styling
                setTimeout(() => {
                    const options = content.querySelectorAll('.radio-option');
                    options.forEach(option => {
                        option.onclick = () => {
                            options.forEach(opt => opt.classList.remove('selected'));
                            option.classList.add('selected');
                            option.querySelector('input').checked = true;
                        };
                    });
                }, 0);
                break;

            case 'comfort':
                content.innerHTML = `
                    <div class="page-header">
                        <h2>Your Digital Comfort Level</h2>
                        <p>This helps us start you at the right level.</p>
                    </div>
                    <div class="form-group">
                        <div class="radio-group" id="comfort-options">
                            <label class="radio-option" data-value="beginner">
                                <input type="radio" name="comfort" value="beginner">
                                <div>
                                    <div style="font-weight: 600; margin-bottom: var(--spacing-xs);">🌱 New Adventurer</div>
                                    <div style="font-size: var(--font-size-sm); color: var(--color-text-tertiary);">I'm just getting started with the internet</div>
                                </div>
                            </label>
                            <label class="radio-option" data-value="intermediate">
                                <input type="radio" name="comfort" value="intermediate">
                                <div>
                                    <div style="font-weight: 600; margin-bottom: var(--spacing-xs);">🧭 Explorer</div>
                                    <div style="font-size: var(--font-size-sm); color: var(--color-text-tertiary);">I use apps and social media regularly</div>
                                </div>
                            </label>
                            <label class="radio-option" data-value="advanced">
                                <input type="radio" name="comfort" value="advanced">
                                <div>
                                    <div style="font-weight: 600; margin-bottom: var(--spacing-xs);">🛡️ Digital Guardian</div>
                                    <div style="font-size: var(--font-size-sm); color: var(--color-text-tertiary);">I'm confident online and want to learn advanced safety</div>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div style="display: flex; gap: var(--spacing-md);">
                        <button class="btn btn-secondary" id="back-btn">← Back</button>
                        <button class="btn btn-primary" id="next-btn" style="flex: 1;">Next →</button>
                    </div>
                `;

                content.querySelector('#back-btn').onclick = () => this.previousStep();
                content.querySelector('#next-btn').onclick = () => {
                    const selected = content.querySelector('input[name="comfort"]:checked');
                    if (selected) {
                        GameState.updateUser({ comfortLevel: selected.value });
                        this.nextStep();
                    } else {
                        Utils.showToast('Please select your comfort level', 'warning');
                    }
                };

                setTimeout(() => {
                    const options = content.querySelectorAll('.radio-option');
                    options.forEach(option => {
                        option.onclick = () => {
                            options.forEach(opt => opt.classList.remove('selected'));
                            option.classList.add('selected');
                            option.querySelector('input').checked = true;
                        };
                    });
                }, 0);
                break;

            case 'avatar':
                content.innerHTML = `
                    <div class="page-header">
                        <h2>Create Your Guardian</h2>
                        <p>Choose your digital guardian's appearance!</p>
                    </div>
                    <div style="text-align: center; margin-bottom: var(--spacing-xl);">
                        <div id="avatar-preview" style="display: inline-block; margin-bottom: var(--spacing-lg);"></div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Guardian Name:</label>
                        <input type="text" id="guardian-name" class="form-input" placeholder="Enter your guardian's name" maxlength="20">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Choose Color:</label>
                        <div id="color-options" style="display: flex; gap: var(--spacing-md); flex-wrap: wrap; justify-content: center;">
                        </div>
                    </div>
                    <div style="display: flex; gap: var(--spacing-md);">
                        <button class="btn btn-secondary" id="back-btn">← Back</button>
                        <button class="btn btn-primary" id="finish-btn" style="flex: 1;">Start My Journey! →</button>
                    </div>
                `;

                const colors = [
                    { name: 'Orange', value: '#FF6B35' },
                    { name: 'Purple', value: '#A855F7' },
                    { name: 'Teal', value: '#2DD4BF' },
                    { name: 'Pink', value: '#EC4899' },
                    { name: 'Green', value: '#10B981' },
                    { name: 'Blue', value: '#3B82F6' }
                ];

                const colorContainer = content.querySelector('#color-options');
                let selectedColor = colors[0].value;

                colors.forEach(color => {
                    const colorBtn = document.createElement('button');
                    colorBtn.style.cssText = `
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        background: ${color.value};
                        border: 3px solid ${color.value === selectedColor ? 'white' : 'transparent'};
                        cursor: pointer;
                        transition: all var(--transition-base);
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                    `;
                    colorBtn.onclick = () => {
                        selectedColor = color.value;
                        colorContainer.querySelectorAll('button').forEach(btn => {
                            btn.style.border = '3px solid transparent';
                        });
                        colorBtn.style.border = '3px solid white';
                        updateAvatar();
                    };
                    colorContainer.appendChild(colorBtn);
                });

                const updateAvatar = () => {
                    const preview = content.querySelector('#avatar-preview');
                    preview.innerHTML = '';
                    preview.appendChild(Components.createAvatar({ color: selectedColor }, 120));
                };

                updateAvatar();

                content.querySelector('#back-btn').onclick = () => this.previousStep();
                content.querySelector('#finish-btn').onclick = () => {
                    const name = content.querySelector('#guardian-name').value.trim();
                    if (!name) {
                        Utils.showToast('Please enter a guardian name', 'warning');
                        return;
                    }
                    GameState.updateUser({
                        name: name,
                        avatar: { style: 'style1', color: selectedColor }
                    });

                    // Show welcome reward
                    Components.createRewardPopup({
                        icon: '🎉',
                        title: 'Welcome Aboard!',
                        message: 'You\'ve earned your first reward for joining SkillUp Safe!',
                        coins: 100
                    }, () => {
                        // Transition to Village when popup is closed
                        Village.render();
                    });

                    GameState.addCoins(100);
                };
                break;
        }

        return content;
    },

    /**
     * Go to next step
     */
    nextStep() {
        if (this.currentStep < this.steps.length - 1) {
            this.currentStep++;
            this.render();
        }
    },

    /**
     * Go to previous step
     */
    previousStep() {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.render();
        }
    }
};
