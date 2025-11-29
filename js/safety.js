// ============================================
// SAFETY & PRIVACY MODULE
// ============================================

const Safety = {
    sosClicks: 0,
    sosTimer: null,

    /**
     * Initialize Safety Features
     */
    init() {
        console.log('Safety Module Initialized');
        this.setupInputMonitoring();
        this.setupSOSGesture();
    },

    /**
     * 1. Context-Aware Risk Alerts
     * Monitors input fields for potential PII
     */
    setupInputMonitoring() {
        document.addEventListener('input', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                this.checkInputRisk(e.target.value, e.target);
            }
        });
    },

    checkInputRisk(text, element) {
        // Simple regex patterns for PII
        const patterns = {
            phone: /(\+\d{1,3}[- ]?)?\d{10}/,
            email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
            address: /\d+\s+([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)/i, // Very basic address check
            location: /(live in|stay at|located at)/i
        };

        let riskDetected = false;
        let riskType = '';

        if (patterns.phone.test(text)) {
            riskDetected = true;
            riskType = 'Phone Number';
        } else if (patterns.email.test(text)) {
            riskDetected = true;
            riskType = 'Email Address';
        } else if (patterns.location.test(text) && patterns.address.test(text)) {
            riskDetected = true;
            riskType = 'Physical Location';
        }

        if (riskDetected && !element.dataset.warningShown) {
            this.showRiskAlert(riskType, element);
            element.dataset.warningShown = 'true';
        }
    },

    showRiskAlert(type, element) {
        // Create a non-intrusive popup near the element
        const rect = element.getBoundingClientRect();

        const alert = document.createElement('div');
        alert.className = 'risk-alert fade-in';
        alert.style.cssText = `
            position: absolute;
            top: ${rect.bottom + window.scrollY + 5}px;
            left: ${rect.left + window.scrollX}px;
            background: #FEF2F2;
            border: 1px solid #EF4444;
            border-radius: 8px;
            padding: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            max-width: 300px;
            font-size: 0.9rem;
            color: #7F1D1D;
        `;

        alert.innerHTML = `
            <div style="display: flex; gap: 8px; align-items: start;">
                <span style="font-size: 1.2rem;">⚠️</span>
                <div>
                    <strong>Wait! Is this safe?</strong>
                    <p style="margin: 4px 0 0 0; font-size: 0.85rem;">
                        Sharing your <strong>${type}</strong> here could put you at risk. 
                        Real apps might leak this data.
                    </p>
                    <button class="btn-text" style="color: #EF4444; font-size: 0.8rem; margin-top: 8px; text-decoration: underline; cursor: pointer;">
                        I understand, dismiss
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(alert);

        // Auto dismiss after 5 seconds or on click
        const dismiss = () => {
            alert.remove();
            // Reset warning flag after a delay so it can trigger again if needed
            setTimeout(() => {
                element.dataset.warningShown = '';
            }, 10000);
        };

        alert.querySelector('button').onclick = dismiss;
        setTimeout(dismiss, 8000);
    },

    /**
     * 2. Device Safety Checker
     * Mocked checks for educational purposes
     */
    runDeviceCheck() {
        return new Promise((resolve) => {
            const checks = [
                { name: 'GPS Location', status: 'warning', msg: 'Location services are ON. Apps can track your movement.' },
                { name: 'Bluetooth', status: 'safe', msg: 'Bluetooth is not discoverable.' },
                { name: 'App Permissions', status: 'critical', msg: '3 apps have access to your Camera/Mic unnecessarily.' },
                { name: 'Screen Lock', status: 'safe', msg: 'Device is secured with a PIN/Pattern.' }
            ];

            // Calculate score (safe=100, warning=50, critical=0)
            const totalPoints = checks.reduce((sum, check) => {
                if (check.status === 'safe') return sum + 100;
                if (check.status === 'warning') return sum + 50;
                return sum + 0; // critical
            }, 0);
            const score = Math.round(totalPoints / checks.length);

            // Simulate scanning time
            setTimeout(() => {
                resolve({ checks, score });
            }, 1500);
        });
    },

    /**
     * 3. Quick-SOS Gesture
     * Triple tap top-right corner to exit
     */
    setupSOSGesture() {
        document.addEventListener('click', (e) => {
            // Check if click is in top-right corner (approx 100x100 area)
            const isTopRight = e.clientX > window.innerWidth - 100 && e.clientY < 100;

            if (isTopRight) {
                this.sosClicks++;

                if (this.sosClicks === 1) {
                    this.sosTimer = setTimeout(() => {
                        this.sosClicks = 0;
                    }, 1000); // Reset if not 3 clicks within 1 second
                }

                if (this.sosClicks === 3) {
                    clearTimeout(this.sosTimer);
                    this.triggerSOS();
                }
            }
        });
    },

    triggerSOS() {
        console.log('SOS TRIGGERED');
        // 1. Wipe Data
        Storage.wipeData();

        // 2. Redirect to safe site (e.g., Google or Weather)
        // In a real app, this would be instant.
        // For this demo, we'll show a quick flash then redirect.

        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0; left: 0; width: 100vw; height: 100vh;
            background: white;
            z-index: 9999;
            display: flex; align-items: center; justify-content: center;
        `;
        overlay.innerHTML = '<h1>Loading Calculator...</h1>'; // Disguise
        document.body.appendChild(overlay);

        setTimeout(() => {
            // Reload to reset state effectively (simulating exit)
            // Or redirect to Google
            window.location.href = 'https://www.google.com';
        }, 500);
    }
};
