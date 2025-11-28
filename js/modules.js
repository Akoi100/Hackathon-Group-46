// ============================================
// LEARNING MODULES
// ============================================

const Modules = {
    // Module Content Data
    data: {
        'privacy-house': {
            title: 'Privacy House',
            levels: [
                {
                    id: 1,
                    title: 'The Open Door',
                    story: 'You arrive at your new digital house, but the front door is wide open! Anyone can see what you are doing inside.',
                    lesson: 'Your personal information (name, address, phone number) is like your home. You shouldn\'t leave the door open for strangers.',
                    quiz: {
                        question: 'What should you do to keep your digital house safe?',
                        options: [
                            'Leave the door open so friends can visit',
                            'Lock the door (use privacy settings) and only let in people you trust',
                            'Put a sign outside with your name and address'
                        ],
                        correct: 1,
                        explanation: 'Just like locking your front door, using privacy settings keeps your personal info safe from strangers.'
                    },
                    reward: { coins: 50, message: 'You secured your front door!' }
                },
                {
                    id: 2,
                    title: 'The Nosy Neighbor',
                    story: 'A neighbor you don\'t know asks for your spare key (password). They say they just want to "check something".',
                    lesson: 'Your password is the key to your digital life. Never share it with anyone, not even friends.',
                    quiz: {
                        question: 'Who should you share your password with?',
                        options: [
                            'My best friend',
                            'A nice person online',
                            'No one (except maybe my parents/guardians)'
                        ],
                        correct: 2,
                        explanation: 'Your password is for your eyes only. Sharing it is like giving away your house keys!'
                    },
                    reward: { coins: 50, message: 'You kept your key safe!' }
                },
                {
                    id: 3,
                    title: 'The Picture Window',
                    story: 'You want to hang a picture in the window. It shows your school uniform and your street name.',
                    lesson: 'Photos can reveal a lot of private information. Be careful what you show in the background.',
                    quiz: {
                        question: 'Is it safe to post this picture?',
                        options: [
                            'Yes, it looks cool',
                            'No, it shows where I go to school and live',
                            'Yes, but only for a few minutes'
                        ],
                        correct: 1,
                        explanation: 'Photos showing your school or street can help strangers find you in real life. Keep that info private!'
                    },
                    reward: { coins: 100, badge: 'privacy-shield', message: 'You are a Privacy Pro!' }
                }
            ]
        },
        'scam-shield': {
            title: 'Scam Shield Shop',
            levels: [
                {
                    id: 1,
                    title: 'The "Free" Gift',
                    story: 'A stranger in the market offers you a free legendary sword if you just fill out a form with your personal details.',
                    lesson: 'If something sounds too good to be true, it probably is. Scammers use "free" gifts to steal your info.',
                    quiz: {
                        question: 'What should you do?',
                        options: [
                            'Fill out the form quickly!',
                            'Ignore the offer and walk away',
                            'Ask them if they have other free stuff'
                        ],
                        correct: 1,
                        explanation: 'Free gifts that ask for personal info are usually traps. Walk away!'
                    },
                    reward: { coins: 50, message: 'You dodged a trap!' }
                },
                {
                    id: 2,
                    title: 'The Urgent Message',
                    story: 'You get a message saying "YOUR ACCOUNT WILL BE BANNED!! CLICK HERE NOW!!" from a weird looking email address.',
                    lesson: 'Scammers try to scare you into acting fast without thinking. Check the sender and don\'t panic.',
                    quiz: {
                        question: 'How should you react?',
                        options: [
                            'Click the link immediately to save my account',
                            'Reply and ask why',
                            'Check the sender address and report it as spam'
                        ],
                        correct: 2,
                        explanation: 'Urgent threats are a common scam tactic. Always verify the source before clicking anything.'
                    },
                    reward: { coins: 50, message: 'You spotted the fake!' }
                },
                {
                    id: 3,
                    title: 'The Fake Friend',
                    story: 'Someone pretending to be a famous YouTuber messages you asking for money to help them get home.',
                    lesson: 'Impersonation is common. Famous people will never message you privately asking for money.',
                    quiz: {
                        question: 'Is this really the famous YouTuber?',
                        options: [
                            'Yes, they need my help!',
                            'Probably not, I should block them',
                            'Maybe, I\'ll send a little money just in case'
                        ],
                        correct: 1,
                        explanation: 'Celebrities don\'t ask fans for money. This is an impersonation scam. Block and report!'
                    },
                    reward: { coins: 100, badge: 'scam-buster', message: 'You are a Scam Buster!' }
                }
            ]
        },
        'respectful-road': {
            title: 'Respectful Road',
            levels: [
                {
                    id: 1,
                    title: 'The Comment Section',
                    story: "You see a mean comment on a friend's photo. It makes you feel uncomfortable.",
                    lesson: "Cyberbullying hurts real people. Always be kind and report mean behavior.",
                    quiz: {
                        question: "What should you do if you see cyberbullying?",
                        options: ["Join in", "Ignore it", "Report it and support the victim", "Share it"],
                        correct: 2
                    },
                    reward: { coins: 100, message: "Kindness Hero!" }
                },
                {
                    id: 2,
                    title: 'Digital Footprint',
                    story: "You're about to post an angry status update because you had a bad day.",
                    lesson: "What you post stays online forever. Think before you post!",
                    quiz: {
                        question: "Is it okay to post when you are very angry?",
                        options: ["Yes, let it out", "No, wait until you are calm", "Only if it's funny", "Yes, if you delete it later"],
                        correct: 1
                    },
                    reward: { coins: 100, message: "Cool Headed!" }
                },
                {
                    id: 3,
                    title: 'The Caps Lock Warrior',
                    story: 'You are in a game and someone is shouting (typing in ALL CAPS) and calling people names because they are losing.',
                    lesson: 'Good sportsmanship applies online too. Losing is part of the game. Stay calm and respectful.',
                    quiz: {
                        question: 'How do you handle the angry gamer?',
                        options: [
                            'Yell back at them',
                            'Mute them and focus on the game',
                            'Quit the game'
                        ],
                        correct: 1,
                        explanation: 'Muting toxic players is the best way to keep your peace of mind. Don\'t let them ruin your fun.'
                    },
                    reward: { coins: 100, badge: 'kindness-hero', message: 'You are a Kindness Hero!' }
                }
            ]
        },
        'cipher-citadel': {
            title: 'Safety Stronghold',
            levels: [
                {
                    id: 1,
                    title: 'The Public Square',
                    story: "You are at a busy cafe using the 'Free Public Wi-Fi' to check your bank balance.",
                    lesson: "Public Wi-Fi is not secure. Hackers can see what you do. Never do banking or private things on public Wi-Fi.",
                    quiz: {
                        question: "What is safe to do on Public Wi-Fi?",
                        options: ["Check bank account", "Read the news", "Enter credit card info", "Send private photos"],
                        correct: 1
                    },
                    reward: { coins: 120, message: "Wi-Fi Warrior!" }
                },
                {
                    id: 2,
                    title: 'The Double Lock',
                    story: "A thief tries to open your digital safe, but there is a second lock that needs a code from your phone.",
                    lesson: "Two-Factor Authentication (2FA) adds a second lock. Even if someone steals your password, they can't get in.",
                    quiz: {
                        question: "Why is 2FA important?",
                        options: ["It makes logging in faster", "It stops hackers who have your password", "It looks cool", "It's required by law"],
                        correct: 1
                    },
                    reward: { coins: 120, message: "Double Secured!" }
                },
                {
                    id: 3,
                    title: 'The Unattended Gate',
                    story: "You leave your phone on the table while you go to order food. It is unlocked.",
                    lesson: "Always lock your screen when you step away. It takes only seconds for someone to steal your info.",
                    quiz: {
                        question: "What should you do before leaving your device?",
                        options: ["Turn up the volume", "Lock the screen", "Leave it open", "Hide it under a napkin"],
                        correct: 1
                    },
                    reward: { coins: 150, message: "Lock Master!", badge: 'security-badge' }
                }
            ]
        },
        'rumor-mill': {
            title: 'Truth Talk',
            levels: [
                {
                    id: 1,
                    title: 'The Forwarded Message',
                    story: "You get a message on WhatsApp: 'Forward this to 10 people or bad luck will happen!'",
                    lesson: "Chain messages are fake and used to scare people or spread spam. Do not forward them.",
                    quiz: {
                        question: "What should you do with a chain message?",
                        options: ["Forward it to everyone", "Delete it and ignore it", "Reply angrily", "Believe it"],
                        correct: 1
                    },
                    reward: { coins: 120, message: "Chain Breaker!" }
                },
                {
                    id: 2,
                    title: 'The Miracle Cure',
                    story: "A post claims a new 'magic tea' cures all diseases, but no doctors are talking about it.",
                    lesson: "Be careful of health advice online. Always check with a real doctor or trusted health organization.",
                    quiz: {
                        question: "Who should you trust for health advice?",
                        options: ["Random posts", "A doctor or health official", "A celebrity", "A stranger"],
                        correct: 1
                    },
                    reward: { coins: 120, message: "Health Hero!" }
                },
                {
                    id: 3,
                    title: 'The Panic Button',
                    story: "A video says 'The world is ending tomorrow!' and asks you to buy a survival kit.",
                    lesson: "Scammers use fear to make you pay money. Stay calm and check if major news channels are reporting it.",
                    quiz: {
                        question: "Why do scammers share scary news?",
                        options: ["To help you", "To make you panic and buy things", "To be funny", "To make friends"],
                        correct: 1
                    },
                    reward: { coins: 150, message: "Truth Seeker!", badge: 'truth-badge' }
                }
            ]
        },
        'glitch-garden': {
            title: 'Privacy Patch',
            levels: [
                {
                    id: 1,
                    title: 'The Flashlight App',
                    story: "You download a simple flashlight app, but it asks for permission to see your Contacts and Location.",
                    lesson: "Apps shouldn't ask for permission they don't need. A flashlight doesn't need your contacts!",
                    quiz: {
                        question: "Should you give the flashlight app your contacts?",
                        options: ["Yes, why not?", "No, deny permission", "Only if it asks nicely", "Yes, for better light"],
                        correct: 1
                    },
                    reward: { coins: 120, message: "Permission Pro!" }
                },
                {
                    id: 2,
                    title: 'The "Free" Game',
                    story: "A game is free to play, but it shows ads every 30 seconds and tracks where you go.",
                    lesson: "If an app is free, YOU are often the product. They sell your attention and data to advertisers.",
                    quiz: {
                        question: "How do many free apps make money?",
                        options: ["Donations", "Selling your data and showing ads", "Magic", "The government pays them"],
                        correct: 1
                    },
                    reward: { coins: 120, message: "Data Defender!" }
                },
                {
                    id: 3,
                    title: 'The Location Pin',
                    story: "You take a photo at home and post it. The app automatically adds a map pin showing exactly where you live.",
                    lesson: "Turn off location tagging for photos you post publicly. You don't want strangers knowing your address.",
                    quiz: {
                        question: "Is it safe to share your exact home location publicly?",
                        options: ["Yes, come visit!", "No, keep your home address private", "Only on weekends", "Yes, if you have a dog"],
                        correct: 1
                    },
                    reward: { coins: 150, message: "Privacy Guardian!", badge: 'privacy-badge' }
                }
            ]
        }
    },

    /**
     * Start a module
     */
    startModule(moduleId) {
        const moduleData = this.data[moduleId];
        if (!moduleData) {
            console.error('Module not found:', moduleId);
            return;
        }

        this.currentModuleId = moduleId;
        this.currentLevelIndex = 0; // Start at level 1 (index 0)

        // Check if user has progress
        const state = GameState.get();
        const levelProgress = state.progress.currentLevel[moduleId];
        if (levelProgress) {
            // Find the first uncompleted level
            const levels = moduleData.levels;
            for (let i = 0; i < levels.length; i++) {
                if (!levelProgress[levels[i].id]) {
                    this.currentLevelIndex = i;
                    break;
                }
            }
        }

        this.renderLevel();
    },

    /**
     * Render current level
     */
    renderLevel() {
        const moduleData = this.data[this.currentModuleId];
        const levelData = moduleData.levels[this.currentLevelIndex];

        if (!levelData) {
            // Module complete!
            this.completeModule();
            return;
        }

        const app = document.getElementById('app');
        app.innerHTML = '';
        app.className = 'page fade-in';

        const container = document.createElement('div');
        container.className = 'container';
        container.style.maxWidth = '800px';

        // Header
        const header = document.createElement('div');
        header.className = 'page-header';
        header.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-lg);">
                <button class="btn btn-ghost btn-sm" id="back-btn">← Back to Village</button>
                <div class="badge badge-primary">${moduleData.title} - Level ${levelData.id}/${moduleData.levels.length}</div>
            </div>
            <h2>${levelData.title}</h2>
        `;
        container.appendChild(header);

        // Content Card
        const contentCard = document.createElement('div');
        contentCard.className = 'card slide-up';
        contentCard.innerHTML = `
            <div style="display: flex; gap: var(--spacing-xl); align-items: flex-start; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 300px;">
                    <div style="font-size: 4rem; margin-bottom: var(--spacing-md);">📖</div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-md);">
                        <h3>The Story</h3>
                        <button class="btn btn-sm btn-ghost" id="tts-btn" title="Read Aloud">🔊</button>
                    </div>
                    <p style="font-size: var(--font-size-lg); line-height: 1.8;" id="story-text">${levelData.story}</p>
                    
                    <div style="background: var(--glass-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); margin-top: var(--spacing-xl); border-left: 4px solid var(--color-accent);">
                        <h4 style="color: var(--color-accent); margin-bottom: var(--spacing-sm);">💡 Safety Tip</h4>
                        <p style="margin: 0;">${levelData.lesson}</p>
                    </div>
                </div>
                
                <div style="flex: 1; min-width: 300px; background: rgba(0,0,0,0.2); padding: var(--spacing-lg); border-radius: var(--radius-lg);">
                    <h3 style="margin-bottom: var(--spacing-lg);">Challenge</h3>
                    <p style="margin-bottom: var(--spacing-lg); font-weight: bold;">${levelData.quiz.question}</p>
                    
                    <div class="radio-group">
                        ${levelData.quiz.options.map((option, index) => `
                            <label class="radio-option" data-index="${index}">
                                <input type="radio" name="quiz" value="${index}">
                                <span>${option}</span>
                            </label>
                        `).join('')}
                    </div>

                    <button class="btn btn-primary btn-block mt-xl" id="submit-answer">Submit Answer</button>
                </div>
            </div>
        `;

        // Navigation Footer
        const footer = document.createElement('div');
        footer.className = 'module-footer';
        footer.style.cssText = `
            display: flex;
            justify-content: space-between;
            margin-top: var(--spacing-xl);
            padding-top: var(--spacing-lg);
            border-top: 1px solid var(--glass-border);
        `;

        const isLastLevel = this.currentLevelIndex === moduleData.levels.length - 1;
        const nextBtnText = isLastLevel ? 'Finish Module' : 'Next Level';

        footer.innerHTML = `
            <button class="btn btn-ghost" id="nav-home">🏠 Home</button>
            <div style="display: flex; gap: var(--spacing-md);">
                <button class="btn btn-secondary" id="nav-back" ${this.currentLevelIndex === 0 ? 'disabled' : ''}>← Previous</button>
                <button class="btn btn-primary" id="nav-next" disabled>${nextBtnText} →</button>
            </div>
        `;

        contentCard.appendChild(footer);
        container.appendChild(contentCard);
        app.appendChild(container);

        // Navigation Events
        container.querySelector('#nav-home').onclick = () => Village.render();

        container.querySelector('#nav-back').onclick = () => {
            if (this.currentLevelIndex > 0) {
                this.currentLevelIndex--;
                this.renderLevel();
            }
        };

        const nextBtn = container.querySelector('#nav-next');
        nextBtn.onclick = () => {
            if (isLastLevel) {
                this.completeModule();
            } else {
                this.currentLevelIndex++;
                this.renderLevel();
            }
        };

        // Event Listeners
        container.querySelector('#back-btn').onclick = () => {
            window.speechSynthesis.cancel();
            Village.render();
        };

        // TTS Logic
        const ttsBtn = container.querySelector('#tts-btn');
        ttsBtn.onclick = () => {
            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
                ttsBtn.textContent = '🔊';
            } else {
                const text = levelData.story + '. ' + levelData.lesson;
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.onend = () => { ttsBtn.textContent = '🔊'; };
                window.speechSynthesis.speak(utterance);
                ttsBtn.textContent = '🔇';
            }
        };

        // Selection logic
        const options = container.querySelectorAll('.radio-option');
        options.forEach(option => {
            option.onclick = () => {
                options.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                option.querySelector('input').checked = true;
            };
        });

        // Submit logic
        container.querySelector('#submit-answer').onclick = () => {
            const selected = container.querySelector('input[name="quiz"]:checked');
            if (!selected) {
                Utils.showToast('Please select an answer', 'warning');
                return;
            }

            const answerIndex = parseInt(selected.value);
            const isCorrect = answerIndex === levelData.quiz.correct;

            GameState.recordAnswer(isCorrect);

            Components.createFeedbackPopup(
                isCorrect,
                levelData.quiz.explanation,
                () => {
                    if (isCorrect) {
                        // Enable next button
                        const nextBtn = document.getElementById('nav-next');
                        if (nextBtn) {
                            nextBtn.disabled = false;
                            nextBtn.classList.add('pulse');
                        }
                        this.handleLevelComplete(levelData);
                    }
                }
            );
        };
    },

    /**
     * Handle level completion
     */
    handleLevelComplete(levelData) {
        // Update progress
        GameState.updateLevelProgress(this.currentModuleId, levelData.id, true);

        // Give rewards
        GameState.addCoins(levelData.reward.coins);

        let rewardMessage = levelData.reward.message;

        // Check for badge
        if (levelData.reward.badge) {
            GameState.unlockBadge(levelData.reward.badge);
            rewardMessage += ' You also earned a new Badge!';
        }

        Components.createRewardPopup({
            icon: '🌟',
            title: 'Level Complete!',
            message: rewardMessage,
            coins: levelData.reward.coins
        });

        // Move to next level
        this.currentLevelIndex++;

        // Wait for popup to close then render next level
        // Note: The popup removes itself, but we need to trigger the next render
        // We can hook into the popup close or just wait a bit? 
        // Better: The popup is modal, user clicks close. We can re-render then?
        // Actually createRewardPopup doesn't take a callback. 
        // Let's just re-render immediately behind the popup or modify createRewardPopup to take a callback?
        // For now, let's just re-render. The popup is fixed position so it will stay on top.

        // Auto-advance removed in favor of manual navigation
        // Just show reward and let user click Next
    },

    /**
     * Complete module
     */
    completeModule() {
        GameState.completeModule(this.currentModuleId);

        // Unlock next module logic could go here if we had linear progression
        // For now, just go back to village

        Components.createRewardPopup({
            icon: '🏆',
            title: 'Module Mastered!',
            message: `You have completed ${this.data[this.currentModuleId].title}!`,
            coins: 200
        });

        GameState.addCoins(200);

        setTimeout(() => {
            Village.render();
        }, 3000);
    }
};
