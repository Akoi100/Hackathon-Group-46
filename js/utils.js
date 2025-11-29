// ============================================
// UTILITY FUNCTIONS
// ============================================

const Utils = {
    /**
     * Generate a unique ID
     */
    generateId() {
        return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    },

    /**
     * Shuffle an array (Fisher-Yates algorithm)
     */
    shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },

    /**
     * Debounce function
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Format number with commas
     */
    formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    /**
     * Calculate percentage
     */
    calculatePercentage(current, total) {
        if (total === 0) return 0;
        return Math.round((current / total) * 100);
    },

    /**
     * Animate number counting
     */
    animateNumber(element, start, end, duration = 1000) {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                current = end;
                clearInterval(timer);
            }
            element.textContent = Math.round(current);
        }, 16);
    },

    /**
     * Show notification toast
     */
    showToast(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type} fade-in`;
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            border-radius: var(--radius-lg);
            backdrop-filter: blur(10px);
            box-shadow: var(--shadow-xl);
            z-index: 10000;
            max-width: 300px;
        `;

        if (type === 'success') {
            toast.style.borderColor = 'var(--color-success)';
        } else if (type === 'error') {
            toast.style.borderColor = 'var(--color-danger)';
        } else if (type === 'warning') {
            toast.style.borderColor = 'var(--color-warning)';
        }

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    },

    /**
     * Create confetti effect
     */
    createConfetti() {
        const colors = ['#FF6B35', '#A855F7', '#2DD4BF', '#F59E0B'];
        const confettiCount = 50;

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                top: -10px;
                left: ${Math.random() * 100}%;
                opacity: ${Math.random()};
                transform: rotate(${Math.random() * 360}deg);
                animation: confettiFall ${2 + Math.random() * 3}s linear forwards;
                z-index: 10000;
                pointer-events: none;
            `;
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 5000);
        }

        // Add confetti animation if not exists
        if (!document.getElementById('confetti-style')) {
            const style = document.createElement('style');
            style.id = 'confetti-style';
            style.textContent = `
                @keyframes confettiFall {
                    to {
                        top: 100vh;
                        transform: translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 720}deg);
                    }
                }
                @keyframes fadeOut {
                    from { opacity: 1; transform: translateY(0); }
                    to { opacity: 0; transform: translateY(-10px); }
                }
            `;
            document.head.appendChild(style);
        }
    },

    /**
     * Play sound effect (using Web Audio API)
     */
    playSound(type) {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        if (type === 'success') {
            oscillator.frequency.value = 523.25; // C5
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        } else if (type === 'error') {
            oscillator.frequency.value = 200;
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        } else if (type === 'click') {
            oscillator.frequency.value = 800;
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        }
    }
};
