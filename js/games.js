// ============================================
// GAMES & ACTIVITIES
// ============================================

const Games = {
    /**
     * Start Memory Match Game
     */
    startMemoryMatch() {
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
                <div class="badge badge-primary">Memory Match</div>
            </div>
            <h2>Safety Match</h2>
            <p>Find the matching pairs of digital safety icons!</p>
        `;
        container.appendChild(header);

        // Game Board
        const gameBoard = document.createElement('div');
        gameBoard.style.cssText = `
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: var(--spacing-md);
            margin-top: var(--spacing-xl);
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        `;

        const icons = ['🔒', '🛡️', '🔑', '📱', '📧', '🚫', '👀', '💾'];
        const cards = [...icons, ...icons]
            .sort(() => Math.random() - 0.5)
            .map((icon, index) => ({ id: index, icon, matched: false }));

        let flippedCards = [];
        let matchedPairs = 0;
        let canFlip = true;

        cards.forEach(card => {
            const cardEl = document.createElement('div');
            cardEl.className = 'card game-card';
            cardEl.style.cssText = `
                aspect-ratio: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2.5rem;
                cursor: pointer;
                background: var(--glass-bg);
                transition: transform 0.3s ease, background 0.3s;
            `;
            cardEl.dataset.id = card.id;
            cardEl.innerHTML = '❓'; // Hidden state

            cardEl.onclick = () => {
                if (!canFlip || flippedCards.includes(card) || card.matched) return;

                // Flip
                cardEl.innerHTML = card.icon;
                cardEl.style.background = 'var(--glass-bg-hover)';
                cardEl.style.transform = 'rotateY(180deg)';
                flippedCards.push({ card, element: cardEl });

                if (flippedCards.length === 2) {
                    canFlip = false;
                    const [first, second] = flippedCards;

                    if (first.card.icon === second.card.icon) {
                        // Match
                        first.card.matched = true;
                        second.card.matched = true;
                        matchedPairs++;
                        flippedCards = [];
                        canFlip = true;
                        Utils.playSound('success');

                        if (matchedPairs === icons.length) {
                            setTimeout(() => {
                                Components.createRewardPopup({
                                    icon: '🧠',
                                    title: 'Memory Master!',
                                    message: 'You found all the pairs!',
                                    coins: 50
                                });
                                GameState.addCoins(50);
                            }, 500);
                        }
                    } else {
                        // No match
                        setTimeout(() => {
                            first.element.innerHTML = '❓';
                            second.element.innerHTML = '❓';
                            first.element.style.background = 'var(--glass-bg)';
                            second.element.style.transform = 'none';
                            flippedCards = [];
                            canFlip = true;
                        }, 1000);
                    }
                }
            };

            gameBoard.appendChild(cardEl);
        });

        container.appendChild(gameBoard);
        app.appendChild(container);

        container.querySelector('#back-btn').onclick = () => Village.render();
    },

    /**
     * Start Word Search Game
     */
    startWordSearch() {
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
                <div class="badge badge-primary">Word Search</div>
            </div>
            <h2>Safety Words</h2>
            <p>Find the hidden digital safety words!</p>
        `;
        container.appendChild(header);

        const words = ['PRIVACY', 'PASSWORD', 'SCAM', 'BULLY', 'SAFE', 'BLOCK'];
        const gridSize = 10;
        const grid = Array(gridSize).fill().map(() => Array(gridSize).fill(''));

        // Simple word placement (horizontal only for simplicity in this demo)
        words.forEach(word => {
            let placed = false;
            while (!placed) {
                const row = Math.floor(Math.random() * gridSize);
                const col = Math.floor(Math.random() * (gridSize - word.length));
                // Check if empty
                let clear = true;
                for (let i = 0; i < word.length; i++) {
                    if (grid[row][col + i] !== '') clear = false;
                }
                if (clear) {
                    for (let i = 0; i < word.length; i++) {
                        grid[row][col + i] = word[i];
                    }
                    placed = true;
                }
            }
        });

        // Fill empty
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                if (grid[i][j] === '') {
                    grid[i][j] = letters[Math.floor(Math.random() * letters.length)];
                }
            }
        }

        // Render Grid
        const gridEl = document.createElement('div');
        gridEl.style.cssText = `
            display: grid;
            grid-template-columns: repeat(${gridSize}, 1fr);
            gap: 2px;
            margin-top: var(--spacing-xl);
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
            background: var(--glass-border);
            padding: 2px;
        `;

        let selectedCells = [];

        grid.forEach((row, rIndex) => {
            row.forEach((char, cIndex) => {
                const cell = document.createElement('div');
                cell.style.cssText = `
                    aspect-ratio: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--glass-bg);
                    font-weight: bold;
                    cursor: pointer;
                    user-select: none;
                `;
                cell.textContent = char;
                cell.dataset.r = rIndex;
                cell.dataset.c = cIndex;

                cell.onclick = () => {
                    if (cell.classList.contains('found')) return;

                    cell.style.background = 'var(--color-primary)';
                    cell.style.color = 'white';
                    selectedCells.push({ r: rIndex, c: cIndex, char, element: cell });

                    // Check word
                    const selectedWord = selectedCells.map(c => c.char).join('');
                    if (words.includes(selectedWord)) {
                        // Found!
                        selectedCells.forEach(c => {
                            c.element.classList.add('found');
                            c.element.style.background = 'var(--color-success)';
                        });
                        Utils.playSound('success');
                        Utils.showToast(`Found ${selectedWord}!`, 'success');
                        selectedCells = [];

                        // Check win
                        const foundCount = gridEl.querySelectorAll('.found').length;
                        // Approximate check (total letters found)
                        // Better: track found words
                    } else if (selectedWord.length > 8) {
                        // Reset if too long
                        selectedCells.forEach(c => {
                            if (!c.element.classList.contains('found')) {
                                c.element.style.background = 'var(--glass-bg)';
                                c.element.style.color = 'var(--color-text)';
                            }
                        });
                        selectedCells = [];
                    }
                };

                gridEl.appendChild(cell);
            });
        });

        container.appendChild(gridEl);

        // Word List
        const wordList = document.createElement('div');
        wordList.style.cssText = `
            display: flex;
            gap: var(--spacing-md);
            justify-content: center;
            flex-wrap: wrap;
            margin-top: var(--spacing-lg);
        `;
        words.forEach(word => {
            const w = document.createElement('span');
            w.className = 'badge badge-secondary';
            w.textContent = word;
            wordList.appendChild(w);
        });
        container.appendChild(wordList);

        app.appendChild(container);
        container.querySelector('#back-btn').onclick = () => Village.render();
    },

    /**
     * Start Cyber Striker Game
     */
    startCyberStriker() {
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
                <div class="badge badge-primary">Cyber Striker</div>
            </div>
            <h2>Cyber Striker ⚽</h2>
            <p>Answer correctly to score a goal against the Hacker Goalie!</p>
        `;
        container.appendChild(header);

        // Game Area
        const gameArea = document.createElement('div');
        gameArea.className = 'card';
        gameArea.style.cssText = `
            background: linear-gradient(to bottom, #4ade80 0%, #22c55e 100%);
            min-height: 400px;
            position: relative;
            overflow: hidden;
            border: 4px solid white;
            box-shadow: inset 0 0 20px rgba(0,0,0,0.2);
        `;

        // Goal
        const goal = document.createElement('div');
        goal.style.cssText = `
            width: 60%;
            height: 150px;
            border: 5px solid white;
            border-bottom: none;
            position: absolute;
            top: 20px;
            left: 20%;
            background: rgba(255,255,255,0.1);
        `;
        gameArea.appendChild(goal);

        // Goalie
        const goalie = document.createElement('div');
        goalie.innerHTML = '🦹‍♂️';
        goalie.style.cssText = `
            font-size: 4rem;
            position: absolute;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            transition: left 0.5s ease;
        `;
        gameArea.appendChild(goalie);

        // Ball
        const ball = document.createElement('div');
        ball.innerHTML = '⚽';
        ball.style.cssText = `
            font-size: 3rem;
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
        `;
        gameArea.appendChild(ball);

        // Score
        const scoreBoard = document.createElement('div');
        scoreBoard.style.cssText = `
            position: absolute;
            top: 10px;
            left: 10px;
            background: rgba(0,0,0,0.5);
            color: white;
            padding: 5px 10px;
            border-radius: 10px;
            font-weight: bold;
        `;
        let score = 0;
        let attempts = 0;
        scoreBoard.textContent = `Score: ${score}/5`;
        gameArea.appendChild(scoreBoard);

        container.appendChild(gameArea);

        // Question Area
        const questionArea = document.createElement('div');
        questionArea.className = 'card slide-up';
        questionArea.style.marginTop = 'var(--spacing-lg)';
        questionArea.style.display = 'none'; // Hidden initially
        container.appendChild(questionArea);

        app.appendChild(container);

        // Game Logic
        const questions = [
            { q: "Is '123456' a strong password?", a: false },
            { q: "Should you share your address online?", a: false },
            { q: "Is it safe to meet online friends alone?", a: false },
            { q: "Should you tell parents about cyberbullying?", a: true },
            { q: "Are free robux generators usually scams?", a: true },
            { q: "Does a padlock icon mean a site is secure?", a: true },
            { q: "Should you click links from strangers?", a: false }
        ];

        let currentQuestion = null;
        let isKickPhase = false;

        const startRound = () => {
            if (attempts >= 5) {
                // Game Over
                setTimeout(() => {
                    Components.createRewardPopup({
                        icon: '🏆',
                        title: 'Match Finished!',
                        message: `You scored ${score} goals!`,
                        coins: score * 20
                    });
                    GameState.addCoins(score * 20);
                }, 1000);
                return;
            }

            // Reset positions
            ball.style.bottom = '20px';
            ball.style.left = '50%';
            ball.style.transform = 'translateX(-50%) scale(1)';
            goalie.style.left = '50%';

            // Show question
            currentQuestion = questions[Math.floor(Math.random() * questions.length)];
            questionArea.style.display = 'block';
            questionArea.innerHTML = `
                <h3 style="text-align: center; margin-bottom: var(--spacing-md);">Penalty Kick Question!</h3>
                <p style="font-size: 1.2rem; text-align: center; margin-bottom: var(--spacing-lg);">${currentQuestion.q}</p>
                <div style="display: flex; gap: var(--spacing-md);">
                    <button class="btn btn-success btn-block" id="ans-yes">YES</button>
                    <button class="btn btn-danger btn-block" id="ans-no">NO</button>
                </div>
            `;

            const handleAnswer = (ans) => {
                const correct = ans === currentQuestion.a;
                if (correct) {
                    Utils.playSound('success');
                    questionArea.innerHTML = `<h3 style="text-align: center; color: var(--color-success);">Correct! Pick a corner to shoot!</h3>`;
                    isKickPhase = true;
                    addKickTargets();
                } else {
                    Utils.playSound('error');
                    questionArea.innerHTML = `<h3 style="text-align: center; color: var(--color-danger);">Missed the chance!</h3>`;
                    setTimeout(() => {
                        attempts++;
                        scoreBoard.textContent = `Score: ${score}/5`;
                        startRound();
                    }, 1500);
                }
            };

            questionArea.querySelector('#ans-yes').onclick = () => handleAnswer(true);
            questionArea.querySelector('#ans-no').onclick = () => handleAnswer(false);
        };

        const addKickTargets = () => {
            // Add click zones to goal
            const zones = [20, 50, 80]; // Left, Center, Right percentages

            zones.forEach(leftPos => {
                const target = document.createElement('div');
                target.style.cssText = `
                    position: absolute;
                    top: 20px;
                    left: ${leftPos}%;
                    width: 50px;
                    height: 50px;
                    border: 2px dashed white;
                    border-radius: 50%;
                    transform: translateX(-50%);
                    cursor: pointer;
                    z-index: 10;
                `;
                target.onclick = () => kickBall(leftPos);
                gameArea.appendChild(target);
            });
        };

        const kickBall = (targetLeft) => {
            if (!isKickPhase) return;
            isKickPhase = false;

            // Remove targets
            const targets = gameArea.querySelectorAll('div[style*="dashed"]');
            targets.forEach(t => t.remove());

            // Goalie Move (Random)
            const goaliePos = [20, 50, 80][Math.floor(Math.random() * 3)];
            goalie.style.left = `${goaliePos}%`;

            // Ball Move
            ball.style.bottom = '140px';
            ball.style.left = `${targetLeft}%`;
            ball.style.transform = 'translateX(-50%) scale(0.7)';

            setTimeout(() => {
                if (targetLeft === goaliePos) {
                    // Saved
                    Utils.showToast('Saved by the keeper!', 'warning');
                } else {
                    // Goal
                    score++;
                    Utils.createConfetti();
                    Utils.showToast('GOAL!!!', 'success');
                }
                attempts++;
                scoreBoard.textContent = `Score: ${score}/5`;
                setTimeout(startRound, 2000);
            }, 600);
        };

        container.querySelector('#back-btn').onclick = () => Village.render();

        // Start first round
        startRound();
    }
};
