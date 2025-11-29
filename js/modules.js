// ============================================
// LEARNING MODULES
// ============================================

const Modules = {
    // Module Content Data
    data: {
        // ============================================
        // GENERAL MODULES (ALL GENDERS)
        // ============================================
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
        },

        // ============================================
        // MALE SPECIFIC MODULES
        // ============================================
        'accountability-gym': {
            title: 'Accountability Gym',
            levels: [
                {
                    id: 1,
                    title: 'The Locker Room Talk',
                    story: "You're in a group chat where boys are rating girls' photos and making crude comments. It feels wrong.",
                    lesson: "Real strength is speaking up when others are being disrespectful. 'Locker room talk' is no excuse for harassment.",
                    quiz: {
                        question: "What is the courageous thing to do?",
                        options: [
                            "Join in so you fit in",
                            "Say 'That's not cool' and leave the chat",
                            "Screenshot it and laugh",
                            "Ignore it completely"
                        ],
                        correct: 1,
                        explanation: "Calling out bad behavior takes guts. It shows you respect others and yourself."
                    },
                    reward: { coins: 100, message: "Integrity Builder!" }
                },
                {
                    id: 2,
                    title: 'The "No" Means "No"',
                    story: "You keep messaging a girl you like, but she hasn't replied in days. Your friend says 'try harder'.",
                    lesson: "Persistence isn't always romantic; it can be harassment. Respect silence as a 'No'.",
                    quiz: {
                        question: "What should you do?",
                        options: [
                            "Keep messaging until she answers",
                            "Stop messaging and respect her space",
                            "Ask her friends why she's ignoring you",
                            "Send an angry message"
                        ],
                        correct: 1,
                        explanation: "Respecting boundaries is key to healthy relationships. If she wants to talk, she will."
                    },
                    reward: { coins: 100, message: "Boundary Respecter!" }
                },
                {
                    id: 3,
                    title: 'The Pressure Cooker',
                    story: "Your friends are daring you to share a private photo someone sent you. They call you 'chicken' if you don't.",
                    lesson: "Sharing private photos without consent is non-consensual image sharing (revenge porn). It's illegal and deeply hurtful.",
                    quiz: {
                        question: "How do you handle the peer pressure?",
                        options: [
                            "Share it just this once",
                            "Refuse firmly. It's a crime and a betrayal of trust.",
                            "Show it but don't send it",
                            "Make fun of the person in the photo"
                        ],
                        correct: 1,
                        explanation: "Being a man means protecting trust, not breaking it for a cheap laugh."
                    },
                    reward: { coins: 150, badge: 'ally-badge', message: 'True Ally!' }
                }
            ]
        },

        // ============================================
        // FEMALE SPECIFIC MODULES
        // ============================================
        'survivor-library': {
            title: 'Survivor Library',
            levels: [
                {
                    id: 1,
                    title: 'The Unwanted DM',
                    story: "You receive a message from a stranger that makes you feel unsafe and uncomfortable.",
                    lesson: "You do not owe anyone a reply. Your safety comes first. Trust your gut feeling.",
                    quiz: {
                        question: "What is your right in this situation?",
                        options: [
                            "I must be polite and reply",
                            "I have the right to block and ignore them immediately",
                            "I should ask them why they messaged",
                            "I should tell them where I live"
                        ],
                        correct: 1,
                        explanation: "You have total control over who you talk to. Block without guilt."
                    },
                    reward: { coins: 100, message: "Boundary Queen!" }
                },
                {
                    id: 2,
                    title: 'The Gaslight',
                    story: "Someone you know online tells you that you are 'crazy' or 'imagining things' when you get upset about their mean jokes.",
                    lesson: "Gaslighting is a form of manipulation to make you doubt your reality. Your feelings are valid.",
                    quiz: {
                        question: "How do you respond to gaslighting?",
                        options: [
                            "Apologize for being sensitive",
                            "Trust your feelings and distance yourself from that person",
                            "Argue until they agree",
                            "Believe them"
                        ],
                        correct: 1,
                        explanation: "Trust yourself. If someone constantly makes you feel small or crazy, they are not a friend."
                    },
                    reward: { coins: 100, message: "Inner Strength!" }
                },
                {
                    id: 3,
                    title: 'Healing Stories',
                    story: "You read a story about a girl who overcame cyberbullying and started a support group.",
                    lesson: "You are not alone. There is strength in community and sharing your story when you are ready.",
                    quiz: {
                        question: "What can help you heal?",
                        options: [
                            "Keeping it a secret forever",
                            "Connecting with supportive communities and trusted friends",
                            "Isolating yourself",
                            "Revenge"
                        ],
                        correct: 1,
                        explanation: "Resilience is built together. Seeking support is a sign of bravery, not weakness."
                    },
                    reward: { coins: 150, badge: 'resilience-badge', message: 'Resilience Rising!' }
                }
            ]
        },
        'defense-dojo': {
            title: 'Self-Defense Dojo',
            levels: [
                {
                    id: 1,
                    title: 'The Block Button',
                    story: "An ex-boyfriend keeps creating new accounts to message you after you broke up.",
                    lesson: "This is harassment. You have the right to digital peace. Use the block button liberally.",
                    quiz: {
                        question: "What is the most effective tool against unwanted contact?",
                        options: [
                            "Yelling at them",
                            "The Block and Report buttons",
                            "Deactivating your account",
                            "Changing your name"
                        ],
                        correct: 1,
                        explanation: "Blocking stops the noise. Reporting alerts the platform to the harassment."
                    },
                    reward: { coins: 100, message: "Shield Up!" }
                },
                {
                    id: 2,
                    title: 'Evidence Locker',
                    story: "You are receiving threatening messages and want to go to the police.",
                    lesson: "Documentation is key. Screenshots, URLs, and timestamps are your evidence.",
                    quiz: {
                        question: "What should you save before blocking?",
                        options: [
                            "Nothing, just delete it",
                            "Screenshots of messages and the profile URL",
                            "Just the text",
                            "A drawing of the screen"
                        ],
                        correct: 1,
                        explanation: "Always keep receipts. They are proof if you need to take legal action."
                    },
                    reward: { coins: 100, message: "Evidence Secured!" }
                },
                {
                    id: 3,
                    title: 'Location Lockdown',
                    story: "You realize your fitness app is sharing your running route map publicly.",
                    lesson: "Location data can reveal your routine. Review privacy settings on ALL apps, especially fitness and photo apps.",
                    quiz: {
                        question: "How should you set your location sharing?",
                        options: [
                            "Public for everyone",
                            "Private or Friends Only",
                            "Broadcast to the world",
                            "It doesn't matter"
                        ],
                        correct: 1,
                        explanation: "Your movements are your business. Keep your location private to stay safe physically."
                    },
                    reward: { coins: 150, badge: 'guardian-badge', message: 'Digital Guardian!' }
                }
            ]
        },

        // ============================================
        // OTHER/NON-BINARY SPECIFIC MODULES
        // ============================================
        'identity-oasis': {
            title: 'Identity Oasis',
            levels: [
                {
                    id: 1,
                    title: 'The Real Name Policy',
                    story: "A social platform demands you use your legal name, but that's not who you are anymore.",
                    lesson: "Navigating 'real name' policies can be dangerous for trans and non-binary folks. Look for platforms that respect your chosen name.",
                    quiz: {
                        question: "Why might 'real name' policies be harmful?",
                        options: [
                            "They are boring",
                            "They can out people against their will",
                            "They cost money",
                            "They are too short"
                        ],
                        correct: 1,
                        explanation: "Your identity is yours to define. Being forced to use a deadname can be unsafe and painful."
                    },
                    reward: { coins: 100, message: "Identity Valid!" }
                },
                {
                    id: 2,
                    title: 'Finding Your Tribe',
                    story: "You feel isolated in your town but find a vibrant LGBTQ+ community on a discord server.",
                    lesson: "The internet can be a lifeline. Finding safe, moderated communities can provide essential support.",
                    quiz: {
                        question: "What makes an online community safe?",
                        options: [
                            "No rules at all",
                            "Active moderation and clear rules against hate speech",
                            "Anyone can post anything",
                            "It's anonymous only"
                        ],
                        correct: 1,
                        explanation: "Good moderation keeps spaces safe from trolls and hate speech."
                    },
                    reward: { coins: 100, message: "Community Found!" }
                },
                {
                    id: 3,
                    title: 'The Troll Attack',
                    story: "A hate group targets your profile with hateful comments because of your pronouns.",
                    lesson: "This is a targeted attack (brigading). Lock your account, report the group, and ask allies for help.",
                    quiz: {
                        question: "What should you do during a targeted attack?",
                        options: [
                            "Fight every single person",
                            "Go private (lock account) and report",
                            "Delete your account forever",
                            "Give them your address"
                        ],
                        correct: 1,
                        explanation: "Protect your peace. Going private stops the flood, and reporting helps remove the attackers."
                    },
                    reward: { coins: 150, badge: 'pride-badge', message: 'Unapologetically You!' }
                }
            ]
        },
        'survival-playbook': {
            title: 'Survival Playbook',
            levels: [
                {
                    id: 1,
                    title: 'Emergency Contacts',
                    story: "In a crisis, you need to know who to call immediately.",
                    lesson: "Identify 3 trusted people you can contact in an emergency.",
                    quiz: {
                        question: "Who is a good emergency contact?",
                        options: ["A stranger", "A trusted friend or family member", "Someone far away", "A social media follower"],
                        correct: 1,
                        explanation: "Choose someone who is reliable and can help you quickly."
                    },
                    reward: { coins: 50, message: "Step 1 Complete!" }
                },
                {
                    id: 2,
                    title: 'Safe Spaces',
                    story: "If you need to leave quickly, where can you go?",
                    lesson: "Plan a safe location (friend's house, shelter, public place) ahead of time.",
                    quiz: {
                        question: "What makes a space safe?",
                        options: ["It's crowded", "It's unknown to the abuser", "It's dark", "It's far away only"],
                        correct: 1,
                        explanation: "A safe space should be somewhere the abuser cannot easily find or reach you."
                    },
                    reward: { coins: 50, message: "Step 2 Complete!" }
                },
                {
                    id: 3,
                    title: 'Digital Exit',
                    story: "You need to browse for help without leaving a trace.",
                    lesson: "Use Incognito/Private mode or 'Shadow Mode' when searching for help.",
                    quiz: {
                        question: "Why use Incognito mode?",
                        options: ["It's faster", "It doesn't save history", "It's colorful", "It's cheaper"],
                        correct: 1,
                        explanation: "Preventing history storage keeps your plans private."
                    },
                    reward: { coins: 100, badge: 'planner-badge', message: 'Safety Plan Ready!' }
                }
            ]
        },

        // ============================================
        // NEW MALE MODULES (4 additional)
        // ============================================
        'emotional-dojo': {
            title: 'Emotional Dojo',
            levels: [
                {
                    id: 1,
                    title: 'Beyond Anger',
                    story: "You're feeling hurt because your friend canceled plans again, but you only know how to show anger.",
                    lesson: "Expressing vulnerability is strength, not weakness. 'I feel hurt' is more honest than 'Whatever, I don't care'.",
                    quiz: {
                        question: "How can you communicate better?",
                        options: [
                            "Hide your feelings and act tough",
                            "Say 'I feel disappointed when plans change'",
                            "Get angry and yell",
                            "Ghost them completely"
                        ],
                        correct: 1,
                        explanation: "Naming your true emotions builds deeper connections and self-awareness."
                    },
                    reward: { coins: 100, message: "Emotional Strength!" }
                },
                {
                    id: 2,
                    title: 'The Pressure to Perform',
                    story: "You're struggling in school but feel like you can't ask for help because 'men should figure it out alone'.",
                    lesson: "Asking for help is a sign of intelligence, not failure. No one succeeds alone.",
                    quiz: {
                        question: "What's the wise choice?",
                        options: [
                            "Suffer in silence to be 'manly'",
                            "Reach out to a teacher or friend for support",
                            "Give up entirely",
                            "Pretend everything is fine"
                        ],
                        correct: 1,
                        explanation: "Real men build networks of support. Isolation is a trap."
                    },
                    reward: { coins: 100, message: "Wisdom Unlocked!" }
                },
                {
                    id: 3,
                    title: 'Breaking the Mold',
                    story: "Your friends mock you for liking art or music instead of sports. It stings.",
                    lesson: "Your interests don't define your masculinity. Being true to yourself is the ultimate strength.",
                    quiz: {
                        question: "How do you respond?",
                        options: [
                            "Give up your hobbies to fit in",
                            "Own your passions proudly",
                            "Make fun of theirs back",
                            "Lie about liking sports"
                        ],
                        correct: 1,
                        explanation: "Authenticity is magnetic. The right people will respect you for being real."
                    },
                    reward: { coins: 150, badge: 'authentic-self', message: 'Authentic Warrior!' }
                }
            ]
        },
        'consent-commander': {
            title: 'Consent Commander',
            levels: [
                {
                    id: 1,
                    title: 'Enthusiastic Yes',
                    story: "You're about to share a funny but slightly embarrassing photo of your friend. They say 'I guess it's okay...' hesitantly.",
                    lesson: "Consent isn't just 'not saying no'. Look for an enthusiastic, clear YES.",
                    quiz: {
                        question: "Should you post the photo?",
                        options: [
                            "Yes, they said okay",
                            "No, hesitation means they're uncomfortable",
                            "Yes, but tag them so they can untag",
                            "Yes, it's funny"
                        ],
                        correct: 1,
                        explanation: "Anything less than enthusiastic is a no. Always err on the side of respect."
                    },
                    reward: { coins: 100, message: "Consent Champion!" }
                },
                {
                    id: 2,
                    title: 'The Gray Area',
                    story: "Someone said 'yes' to hanging out, but now they seem distant and uncomfortable during the chat.",
                    lesson: "Consent can be withdrawn at ANY time. Pay attention to body language and energy, not just words.",
                    quiz: {
                        question: "What's the right move?",
                        options: [
                            "Ignore the vibe, they said yes",
                            "Check in: 'You seem uncomfortable, want to stop?'",
                            "Keep going, they'll warm up",
                            "Get annoyed"
                        ],
                        correct: 1,
                        explanation: "Ongoing consent means constant awareness and respect for the other person's comfort."
                    },
                    reward: { coins: 100, message: "Respect Master!" }
                },
                {
                    id: 3,
                    title: 'Digital Boundaries',
                    story: "You want to screenshot a private conversation and show a friend for advice. Is that okay?",
                    lesson: "Private messages are given in trust. Sharing them without permission violates consent.",
                    quiz: {
                        question: "What should you do?",
                        options: [
                            "Screenshot and share",
                            "Ask permission first",
                            "Paraphrase without names",
                            "Show just your friend"
                        ],
                        correct: 1,
                        explanation: "Trust is earned by protecting confidences. Always ask before sharing private info."
                    },
                    reward: { coins: 150, badge: 'consent-guru', message: 'Consent Guru!' }
                }
            ]
        },
        'digital-gentleman': {
            title: 'Digital Gentleman',
            levels: [
                {
                    id: 1,
                    title: 'The DM Approach',
                    story: "You want to message someone you find interesting but don't know well. What's your opening line?",
                    lesson: "Respect starts with how you introduce yourself. Be genuine, not entitled or creepy.",
                    quiz: {
                        question: "Best opening message?",
                        options: [
                            "'Hey beautiful, send pics'",
                            "'Hi! I liked your post about [topic]. What got you into that?'",
                            "'You're too pretty to be single'",
                            "A generic copy-paste pickup line"
                        ],
                        correct: 1,
                        explanation: "Show genuine interest in who they are, not just what they look like."
                    },
                    reward: { coins: 100, message: "Respectful Intro!" }
                },
                {
                    id: 2,
                    title: 'When They Say No',
                    story: "You asked someone out online and they politely declined. What now?",
                    lesson: "Rejection is not a challenge or an insult. Graceful acceptance shows maturity.",
                    quiz: {
                        question: "How do you respond?",
                        options: [
                            "'Your loss'",
                            "'No problem! Thanks for being honest. Good luck!'",
                            "'Why not? Give me a chance'",
                            "Call them names"
                        ],
                        correct: 1,
                        explanation: "How you handle 'no' reveals your character. Be kind and move on."
                    },
                    reward: { coins: 100, message: "Grace Under Fire!" }
                },
                {
                    id: 3,
                    title: 'Calling Out Bros',
                    story: "A guy in your group is being disrespectful to women in the chat. Everyone's quiet.",
                    lesson: "Being a gentleman means calling out disrespect, even when it's uncomfortable.",
                    quiz: {
                        question: "What's your move?",
                        options: [
                            "Stay silent to avoid drama",
                            "Say 'That's not cool, man. Let's keep it respectful'",
                            "Laugh along",
                            "Leave the group quietly"
                        ],
                        correct: 1,
                        explanation: "Silence is complicity. Real men stand up for what's right."
                    },
                    reward: { coins: 150, badge: 'gentleman-badge', message: 'True Gentleman!' }
                }
            ]
        },
        'mental-pitstop': {
            title: 'Mental Pitstop',
            levels: [
                {
                    id: 1,
                    title: 'The Weight of Expectations',
                    story: "You're feeling overwhelmed and anxious but think 'I should just tough it out'.",
                    lesson: "Mental health struggles are not weakness. Your mind needs care just like your body.",
                    quiz: {
                        question: "What's the healthiest response?",
                        options: [
                            "Ignore it and push through",
                            "Talk to someone you trust or seek professional help",
                            "Hide it completely",
                            "Deal with it alone forever"
                        ],
                        correct: 1,
                        explanation: "Seeking help is a sign of self-awareness and strength, not failure."
                    },
                    reward: { coins: 100, message: "Self-Care Warrior!" }
                },
                {
                    id: 2,
                    title: 'Online Stress Signals',
                    story: "You notice you feel worse about yourself after scrolling social media. Is this normal?",
                    lesson: "Social media can fuel comparison and anxiety. Recognizing this is the first step to healthier habits.",
                    quiz: {
                        question: "What can you do?",
                        options: [
                            "Scroll more to distract yourself",
                            "Take breaks, unfollow accounts that make you feel bad",
                            "Assume you're the problem",
                            "Never use social media again"
                        ],
                        correct: 1,
                        explanation: "Curating your digital environment protects your mental health."
                    },
                    reward: { coins: 100, message: "Digital Wellness!" }
                },
                {
                    id: 3,
                    title: 'Supporting Others',
                    story: "A friend hints they're struggling mentally but you don't know what to say.",
                    lesson: "You don't need perfect words. Listening and showing you care is enough.",
                    quiz: {
                        question: "Best response?",
                        options: [
                            "'Just be positive!'",
                            "'I'm here if you want to talk. You're not alone.'",
                            "Change the subject",
                            "'Man up'"
                        ],
                        correct: 1,
                        explanation: "Being there for others creates a culture where asking for help is normal."
                    },
                    reward: { coins: 150, badge: 'supporter-badge', message: 'Mental Health Ally!' }
                }
            ]
        },

        // ============================================
        // NEW FEMALE MODULES (4 additional)
        // ============================================
        'financial-fortress': {
            title: 'Financial Fortress',
            levels: [
                {
                    id: 1,
                    title: 'The Romance Scam',
                    story: "Someone you've been chatting with online says they need money urgently for a 'family emergency'. You've never met in person.",
                    lesson: "Romance scammers build trust then ask for money. Real relationships don't start with financial requests.",
                    quiz: {
                        question: "What should you do?",
                        options: [
                            "Send the money to help",
                            "Block them immediately",
                            "Send a small amount to test",
                            "Ask for their bank details"
                        ],
                        correct: 1,
                        explanation: "This is a classic scam. Never send money to someone you haven't met in person."
                    },
                    reward: { coins: 100, message: "Scam Avoided!" }
                },
                {
                    id: 2,
                    title: 'Protecting Your Accounts',
                    story: "A 'bank' emails asking you to verify your password because of 'suspicious activity'.",
                    lesson: "Banks never ask for passwords via email or text. This is phishing.",
                    quiz: {
                        question: "How do you respond?",
                        options: [
                            "Click the link and enter your password",
                            "Ignore it and call your bank directly using their official number",
                            "Reply with your password",
                            "Forward it to friends"
                        ],
                        correct: 1,
                        explanation: "Always verify security requests through official channels, never through links in emails."
                    },
                    reward: { coins: 100, message: "Account Secured!" }
                },
                {
                    id: 3,
                    title: 'Financial Independence',
                    story: "Someone offers to 'manage your money' for you online, promising huge returns.",
                    lesson: "Your financial independence is power. Never give someone else control of your money.",
                    quiz: {
                        question: "What's the safest choice?",
                        options: [
                            "Give them access to try it out",
                            "Keep control of your own accounts and seek advice from licensed professionals only",
                            "Share your PIN 'just in case'",
                            "Let them invest a small amount"
                        ],
                        correct: 1,
                        explanation: "Financial autonomy protects you from abuse and scams. Your money, your control."
                    },
                    reward: { coins: 150, badge: 'finance-queen', message: 'Financial Queen!' }
                }
            ]
        },
        'career-climber': {
            title: 'Career Climber',
            levels: [
                {
                    id: 1,
                    title: 'The Uncomfortable DM',
                    story: "A professional contact sends you a message late at night with flirty undertones. You need this connection for work.",
                    lesson: "Professional boundaries exist for a reason. You can say no and still advance your career.",
                    quiz: {
                        question: "How do you handle this?",
                        options: [
                            "Ignore your discomfort and respond",
                            "Set a clear boundary: 'I prefer to keep our communication professional'",
                            "Flirt back to keep the connection",
                            "Never speak to them again"
                        ],
                        correct: 1,
                        explanation: "Protecting your boundaries maintains your dignity and professionalism."
                    },
                    reward: { coins: 100, message: "Boundary Pro!" }
                },
                {
                    id: 2,
                    title: 'Public vs Private Profile',
                    story: "You're job hunting and realize recruiters can see your personal social media.",
                    lesson: "Your digital footprint affects your career. Separate personal and professional carefully.",
                    quiz: {
                        question: "Best practice?",
                        options: [
                            "Delete all social media",
                            "Make personal accounts private, create professional profiles",
                            "Post whatever you want",
                            "Use a fake name everywhere"
                        ],
                        correct: 1,
                        explanation: "Strategic privacy protects your personal life while building your professional brand."
                    },
                    reward: { coins: 100, message: "Brand Builder!" }
                },
                {
                    id: 3,
                    title: 'Documenting Harassment',
                    story: "A colleague is making inappropriate comments on your work posts. You want to report it.",
                    lesson: "Evidence is power. Screenshot, date, and document before reporting.",
                    quiz: {
                        question: "What's your first step?",
                        options: [
                            "Confront them publicly",
                            "Screenshot everything with dates and report to HR/platform",
                            "Delete the posts",
                            "Ignore it and hope it stops"
                        ],
                        correct: 1,
                        explanation: "Documentation creates a paper trail that protects you and holds others accountable."
                    },
                    reward: { coins: 150, badge: 'career-shield', message: 'Career Shield!' }
                }
            ]
        },
        'sisterhood-signal': {
            title: 'Sisterhood Signal',
            levels: [
                {
                    id: 1,
                    title: 'The Subtle Check-In',
                    story: "You notice a friend's posts have gotten darker and sadder. She's not responding to messages.",
                    lesson: "Sometimes people need help but can't ask. A simple 'I'm here' can save a life.",
                    quiz: {
                        question: "What's the caring response?",
                        options: [
                            "Assume she's fine",
                            "Send a heartfelt message: 'I noticed you seem down. Want to talk? No pressure.'",
                            "Post about it publicly",
                            "Tell everyone you're worried"
                        ],
                        correct: 1,
                        explanation: "Direct, private support respects her privacy while offering a lifeline."
                    },
                    reward: { coins: 100, message: "Sister Support!" }
                },
                {
                    id: 2,
                    title: 'Girl Code Online',
                    story: "You see a girl being harassed in comments. You don't know her.",
                    lesson: "Digital solidarity matters. Supporting strangers builds a safer space for all women.",
                    quiz: {
                        question: "What can you do?",
                        options: [
                            "Scroll past",
                            "Comment support: 'That's not okay' and report the harassment",
                            "Join the pile-on",
                            "DM the harasser"
                        ],
                        correct: 1,
                        explanation: "Public allyship discourages harassers and shows the victim she's not alone."
                    },
                    reward: { coins: 100, message: "Digital Sister!" }
                },
                {
                    id: 3,
                    title: 'Building Your Circle',
                    story: "You want to find supportive online communities but worry about safety.",
                    lesson: "Safe spaces exist. Look for vetted, moderated groups with clear rules against harassment.",
                    quiz: {
                        question: "What makes a community safe?",
                        options: [
                            "No rules, complete freedom",
                            "Active moderation, anti-harassment policies, and verification",
                            "Male admins only",
                            "Anonymous and unmoderated"
                        ],
                        correct: 1,
                        explanation: "Good moderation and clear boundaries create spaces where women can thrive."
                    },
                    reward: { coins: 150, badge: 'sisterhood-badge', message: 'Sisterhood Strong!' }
                }
            ]
        },
        'wellness-garden': {
            title: 'Wellness Garden',
            levels: [
                {
                    id: 1,
                    title: 'The Comparison Trap',
                    story: "You're scrolling Instagram and feel worse about your life with each perfect post you see.",
                    lesson: "Social media shows highlight reels, not reality. Your worth isn't measured in likes.",
                    quiz: {
                        question: "How do you break the cycle?",
                        options: [
                            "Keep scrolling to feel worse",
                            "Take a break, unfollow accounts that trigger comparison",
                            "Buy things to feel better",
                            "Post more to compete"
                        ],
                        correct: 1,
                        explanation: "Protecting your mental space is self-care, not weakness."
                    },
                    reward: { coins: 100, message: "Self-Love Activated!" }
                },
                {
                    id: 2,
                    title: 'Digital Detox',
                    story: "You realize you check your phone 100+ times a day and can't sleep without scrolling.",
                    lesson: "Tech addiction is real. Setting boundaries with devices improves sleep, mood, and focus.",
                    quiz: {
                        question: "What's a healthy boundary?",
                        options: [
                            "Sleep with your phone under your pillow",
                            "Set a 'no screens 1 hour before bed' rule",
                            "Check notifications every 2 minutes",
                            "Never use your phone again"
                        ],
                        correct: 1,
                        explanation: "Small boundaries create big improvements in your wellbeing."
                    },
                    reward: { coins: 100, message: "Balance Master!" }
                },
                {
                    id: 3,
                    title: 'Nourishing Your Feed',
                    story: "You want your social media to feel uplifting instead of draining.",
                    lesson: "You control what you consume. Curate your feed like you'd curate your friendships.",
                    quiz: {
                        question: "What's the wellness strategy?",
                        options: [
                            "Follow everyone who follows you",
                            "Follow accounts that inspire, educate, and make you feel good",
                            "Only follow celebrities",
                            "Never unfollow anyone"
                        ],
                        correct: 1,
                        explanation: "Your feed is your mental diet. Choose nourishment over junk."
                    },
                    reward: { coins: 150, badge: 'wellness-warrior', message: 'Wellness Warrior!' }
                }
            ]
        },

        // ============================================
        // NEW OTHER/NON-BINARY MODULES (4 additional)
        // ============================================
        'pronoun-power': {
            title: 'Pronoun Power',
            levels: [
                {
                    id: 1,
                    title: 'Taking Up Space',
                    story: "You add your pronouns (they/them) to your bio and someone mocks you for it.",
                    lesson: "Your pronouns are not up for debate. Visibility matters even when it's uncomfortable.",
                    quiz: {
                        question: "How do you respond?",
                        options: [
                            "Remove your pronouns to avoid conflict",
                            "Keep them up. Your identity is valid.",
                            "Argue with everyone",
                            "Make your profile private"
                        ],
                        correct: 1,
                        explanation: "Living visibly helps others and affirms your own identity. You belong."
                    },
                    reward: { coins: 100, message: "Visible & Valid!" }
                },
                {
                    id: 2,
                    title: 'Correcting Misgendering',
                    story: "Someone keeps using the wrong pronouns for you online, even after you corrected them.",
                    lesson: "Persistent misgendering is disrespect, possibly harassment. You have the right to enforce your boundaries.",
                    quiz: {
                        question: "What's your right?",
                        options: [
                            "Accept it to keep the peace",
                            "Block them or report if it continues",
                            "Blame yourself",
                            "Never correct anyone"
                        ],
                        correct: 1,
                        explanation: "Respecting pronouns is basic decency. Don't tolerate deliberate harm."
                    },
                    reward: { coins: 100, message: "Boundary Enforcer!" }
                },
                {
                    id: 3,
                    title: 'Educate or Eliminate',
                    story: "A well-meaning person asks intrusive questions about your gender identity.",
                    lesson: "You don't owe anyone your story or education. You can choose when and how to share.",
                    quiz: {
                        question: "What's your choice?",
                        options: [
                            "Answer every personal question",
                            "Say 'I appreciate your curiosity but I'm not comfortable discussing that'",
                            "Get angry",
                            "Delete your account"
                        ],
                        correct: 1,
                        explanation: "Your identity is yours to share or protect. Boundaries are healthy."
                    },
                    reward: { coins: 150, badge: 'pronoun-pride', message: 'Pronoun Pride!' }
                }
            ]
        },
        'history-haven': {
            title: 'History Haven',
            levels: [
                {
                    id: 1,
                    title: 'Knowing Your Roots',
                    story: "You stumble upon the history of the Stonewall Riots and realize how recent the fight for LGBTQ+ rights is.",
                    lesson: "Your rights were fought for by brave people who came before you. Knowing this history empowers you.",
                    quiz: {
                        question: "Why does LGBTQ+ history matter?",
                        options: [
                            "It doesn't",
                            "It shows resilience and reminds us to protect our rights",
                            "It's just old news",
                            "Only for historians"
                        ],
                        correct: 1,
                        explanation: "Those who don't know history are doomed to repeat it. Your history is your power."
                    },
                    reward: { coins: 100, message: "Knowledge Is Power!" }
                },
                {
                    id: 2,
                    title: 'Digital Archives',
                    story: "You find online spaces preserving queer history and stories that were once erased.",
                    lesson: "The internet can be a tool for preservation and visibility. Seek out these resources.",
                    quiz: {
                        question: "What can digital archives do?",
                        options: [
                            "Nothing important",
                            "Preserve stories, educate, and create community",
                            "Only for academics",
                            "Replace real activism"
                        ],
                        correct: 1,
                        explanation: "Digital spaces keep queer history alive and accessible to new generations."
                    },
                    reward: { coins: 100, message: "Historian!" }
                },
                {
                    id: 3,
                    title: 'Sharing Your Story',
                    story: "You consider sharing your coming-out story online to help others.",
                    lesson: "Your story has power, but share only what feels safe. Visibility is a gift, not an obligation.",
                    quiz: {
                        question: "What's the balanced approach?",
                        options: [
                            "Share everything publicly",
                            "Share what you're comfortable with, when you're ready, with chosen audiences",
                            "Never share anything",
                            "Only share anonymously"
                        ],
                        correct: 1,
                        explanation: "You control your narrative. Share on your terms, for your healing and others' hope."
                    },
                    reward: { coins: 150, badge: 'storyteller-badge', message: 'Storyteller!' }
                }
            ]
        },
        'resource-radar': {
            title: 'Resource Radar',
            levels: [
                {
                    id: 1,
                    title: 'Finding Affirming Healthcare',
                    story: "You need to find a doctor who understands non-binary healthcare needs.",
                    lesson: "LGBTQ+-affirming healthcare exists. Online directories and communities can help you find it.",
                    quiz: {
                        question: "Where can you start?",
                        options: [
                            "Give up on healthcare",
                            "Search LGBTQ+ health directories or ask in safe online communities",
                            "See any random doctor",
                            "Avoid doctors forever"
                        ],
                        correct: 1,
                        explanation: "You deserve healthcare that respects your identity. Resources exist to help you find it."
                    },
                    reward: { coins: 100, message: "Health Advocate!" }
                },
                {
                    id: 2,
                    title: 'Legal Name Changes',
                    story: "You want to legally change your name but don't know where to start.",
                    lesson: "Many online resources and LGBTQ+ legal aid organizations guide you through the process for free or low-cost.",
                    quiz: {
                        question: "Best first step?",
                        options: [
                            "Assume it's impossible",
                            "Search for LGBTQ+ legal aid in your area or online guides",
                            "Try to do it without research",
                            "Give up your name"
                        ],
                        correct: 1,
                        explanation: "Legal resources exist to help you live authentically. Research empowers you."
                    },
                    reward: { coins: 100, message: "Legal Navigator!" }
                },
                {
                    id: 3,
                    title: 'Crisis Hotlines',
                    story: "You're in a dark place and need immediate support.",
                    lesson: "LGBTQ+-specific crisis lines exist (like Trevor Project). They understand your unique struggles.",
                    quiz: {
                        question: "What should you know?",
                        options: [
                            "No one can help",
                            "LGBTQ+ crisis hotlines are free, confidential, and available 24/7",
                            "Asking for help is shameful",
                            "Only cisgender people can use hotlines"
                        ],
                        correct: 1,
                        explanation: "You are never alone. Specialized support exists and they want to help you."
                    },
                    reward: { coins: 150, badge: 'resource-finder', message: 'Resource Hero!' }
                }
            ]
        },
        'expression-studio': {
            title: 'Expression Studio',
            levels: [
                {
                    id: 1,
                    title: 'Art as Armor',
                    story: "You want to express your identity through digital art but fear judgment.",
                    lesson: "Creative expression is healing and resistance. Your art matters.",
                    quiz: {
                        question: "What empowers you?",
                        options: [
                            "Hide your art forever",
                            "Create and share in safe, supportive spaces",
                            "Only create what others approve of",
                            "Never make art"
                        ],
                        correct: 1,
                        explanation: "Art is how we make sense of the world. Your voice deserves to be heard."
                    },
                    reward: { coins: 100, message: "Creative Soul!" }
                },
                {
                    id: 2,
                    title: 'Finding Your Aesthetic',
                    story: "You experiment with your online persona, trying different looks and vibes.",
                    lesson: "The digital world lets you explore identity safely. There's no 'wrong' way to express yourself.",
                    quiz: {
                        question: "What's true about self-expression?",
                        options: [
                            "You must pick one style forever",
                            "You can evolve and experiment as much as you want",
                            "Others must approve your choices",
                            "Expression is frivolous"
                        ],
                        correct: 1,
                        explanation: "Identity is a journey, not a destination. Explore freely."
                    },
                    reward: { coins: 100, message: "Authentic Creator!" }
                },
                {
                    id: 3,
                    title: 'Building Your Platform',
                    story: "You want to start creating queer content online but worry about backlash.",
                    lesson: "Your voice adds to a chorus of resistance and hope. Safety first, but don't silence yourself entirely.",
                    quiz: {
                        question: "How do you start safely?",
                        options: [
                            "Never create anything",
                            "Use privacy settings, build a supportive audience first, and have a safety plan",
                            "Post recklessly",
                            "Only create in secret"
                        ],
                        correct: 1,
                        explanation: "Strategic visibility protects you while amplifying queer joy and resilience."
                    },
                    reward: { coins: 150, badge: 'creator-badge', message: 'Creator Unleashed!' }
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
            Utils.showToast('Error: Module content missing!', 'error');
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

        // Accountability Score
        if (this.currentModuleId === 'accountability-gym') {
            GameState.addResponsibility(10);
        }

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
    },

    /**
     * Complete module
     */
    completeModule() {
        GameState.completeModule(this.currentModuleId);

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
