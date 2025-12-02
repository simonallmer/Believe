// ===================================
// BELIEVE CARD GAME - GAME LOGIC
// ===================================

// Global Error Handler
window.onerror = function (msg, url, lineNo, columnNo, error) {
  console.error('Global error:', msg, 'Line:', lineNo, 'Error:', error);
  // alert('Game Error: ' + msg); // Commented out to avoid spamming if not critical
  return false;
};

// === GAME DATA ===
const CARDS = [
  // Characters (1-5)
  { id: 1, name: "Man", category: "Character", examples: "", image: "card-man.png" },
  { id: 2, name: "Woman", category: "Character", examples: "", image: "card-woman.png" },
  { id: 3, name: "Child", category: "Character", examples: "", image: "card-child.png" },
  { id: 4, name: "Senior", category: "Character", examples: "" },
  { id: 5, name: "Pet", category: "Character", examples: "" },

  // Vehicles (6-10)
  { id: 6, name: "Automobile", category: "Vehicle", examples: "Car, Bus, Truck" },
  { id: 7, name: "Two-Wheeler", category: "Vehicle", examples: "Motorcycle, Bicycle, Moped, Electric Scooter" },
  { id: 8, name: "Train", category: "Vehicle", examples: "" },
  { id: 9, name: "Ship", category: "Vehicle", examples: "" },
  { id: 10, name: "Airplane", category: "Vehicle", examples: "" },

  // Objects (11-20)
  { id: 11, name: "Book", category: "Object", examples: "" },
  { id: 12, name: "Furniture", category: "Object", examples: "" },
  { id: 13, name: "Tool", category: "Object", examples: "" },
  { id: 14, name: "Clothing", category: "Object", examples: "" },
  { id: 15, name: "Money", category: "Object", examples: "" },
  { id: 16, name: "Digital Device", category: "Object", examples: "" },
  { id: 17, name: "Robot", category: "Object", examples: "" },
  { id: 18, name: "Stationary", category: "Object", examples: "" },
  { id: 19, name: "Food", category: "Object", examples: "" },
  { id: 20, name: "Beverage", category: "Object", examples: "" },

  // Animals (21-25)
  { id: 21, name: "Mammal", category: "Animal", examples: "" },
  { id: 22, name: "Bird", category: "Animal", examples: "" },
  { id: 23, name: "Herptile", category: "Animal", examples: "" },
  { id: 24, name: "Fish", category: "Animal", examples: "" },
  { id: 25, name: "Insect", category: "Animal", examples: "" },

  // Environment (26-35)
  { id: 26, name: "Urban Area", category: "Environment", examples: "" },
  { id: 27, name: "Suburb", category: "Environment", examples: "" },
  { id: 28, name: "Village", category: "Environment", examples: "" },
  { id: 29, name: "Grassland", category: "Environment", examples: "" },
  { id: 30, name: "Cave", category: "Environment", examples: "" },
  { id: 31, name: "Forest", category: "Environment", examples: "" },
  { id: 32, name: "Mountain", category: "Environment", examples: "" },
  { id: 33, name: "Desert", category: "Environment", examples: "" },
  { id: 34, name: "Island", category: "Environment", examples: "" },
  { id: 35, name: "Water", category: "Environment", examples: "" },

  // Continents (36-40)
  { id: 36, name: "North America", category: "Continent", examples: "" },
  { id: 37, name: "South America", category: "Continent", examples: "" },
  { id: 38, name: "Europe", category: "Continent", examples: "" },
  { id: 39, name: "Africa", category: "Continent", examples: "" },
  { id: 40, name: "Asia-Pacific", category: "Continent", examples: "" },

  // Entertainment (41-45)
  { id: 41, name: "Film", category: "Entertainment", examples: "" },
  { id: 42, name: "Music", category: "Entertainment", examples: "" },
  { id: 43, name: "Game", category: "Entertainment", examples: "" },
  { id: 44, name: "Sport", category: "Entertainment", examples: "" },
  { id: 45, name: "New Media", category: "Entertainment", examples: "" },

  // Timespan (46-50)
  { id: 46, name: "Minutes", category: "Timespan", examples: "" },
  { id: 47, name: "Hours", category: "Timespan", examples: "" },
  { id: 48, name: "Days", category: "Timespan", examples: "" },
  { id: 49, name: "Months", category: "Timespan", examples: "" },
  { id: 50, name: "Years", category: "Timespan", examples: "" },

  // Topics (51-60)
  { id: 51, name: "Breaking News", category: "Topic", examples: "" },
  { id: 52, name: "Discovery", category: "Topic", examples: "" },
  { id: 53, name: "True Crime", category: "Topic", examples: "" },
  { id: 54, name: "History", category: "Topic", examples: "" },
  { id: 55, name: "Current Trend", category: "Topic", examples: "" },
  { id: 56, name: "Famous Person", category: "Topic", examples: "" },
  { id: 57, name: "Insight", category: "Topic", examples: "" },
  { id: 58, name: "Special Skill", category: "Topic", examples: "" },
  { id: 59, name: "Hobby", category: "Topic", examples: "" },
  { id: 60, name: "Confession", category: "Topic", examples: "" },

  // Emotions (61-65)
  { id: 61, name: "Happiness", category: "Emotion", examples: "" },
  { id: 62, name: "Sadness", category: "Emotion", examples: "" },
  { id: 63, name: "Anger", category: "Emotion", examples: "" },
  { id: 64, name: "Fear", category: "Emotion", examples: "" },
  { id: 65, name: "Surprise", category: "Emotion", examples: "" },

  // Senses (66-70)
  { id: 66, name: "Hearing", category: "Sense", examples: "" },
  { id: 67, name: "Seeing", category: "Sense", examples: "" },
  { id: 68, name: "Smelling", category: "Sense", examples: "" },
  { id: 69, name: "Tasting", category: "Sense", examples: "" },
  { id: 70, name: "Touching", category: "Sense", examples: "" },

  // Occupations (71-75)
  { id: 71, name: "Provider", category: "Occupation", examples: "Farmer, Fisher, Cook, Trader" },
  { id: 72, name: "Protector", category: "Occupation", examples: "Soldier, Police, Firefighter, Security" },
  { id: 73, name: "Healer", category: "Occupation", examples: "Doctor, Nurse, Caregiver, Therapist" },
  { id: 74, name: "Teacher", category: "Occupation", examples: "Educator, Mentor, Scholar, Guide" },
  { id: 75, name: "Creator", category: "Occupation", examples: "Artist, Musician, Inventor, Engineer" },

  // Jokers (76-80)
  { id: 76, name: "Joker", category: "Joker", examples: "" },
  { id: 77, name: "Joker", category: "Joker", examples: "" },
  { id: 78, name: "Joker", category: "Joker", examples: "" },
  { id: 79, name: "Joker", category: "Joker", examples: "" },
  { id: 80, name: "Joker", category: "Joker", examples: "" }
];

const POINT_GOALS = {
  2: 6,
  3: 8,
  4: 10,
  5: 12,
  6: 14
};

// === GAME STATE ===
let gameState = {
  players: [],
  currentStorytellerIndex: 0,
  currentRound: 1,
  drawnCards: [],
  storytellerChoice: null, // 'truth' or 'lie' for classic mode
  lieCardIndex: null, // Index of the lie card for Hide The Lie mode
  playerVotes: {}, // { playerName: 'truth' or 'lie' } for classic, { playerName: cardIndex } for Hide The Lie
  deck: [...CARDS],
  pointGoal: 10,
  gameMode: 'classic' // 'classic' or 'hide-the-lie'
};

// === UTILITY FUNCTIONS ===
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function drawCards(count) {
  if (gameState.deck.length < count) {
    gameState.deck = shuffleArray([...CARDS]);
  }
  const drawn = gameState.deck.splice(0, count);
  return drawn;
}

function getCurrentStoryteller() {
  return gameState.players[gameState.currentStorytellerIndex];
}

function getOtherPlayers() {
  return gameState.players.filter((_, index) => index !== gameState.currentStorytellerIndex);
}

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}

function showPrivacyOverlay(message, callback) {
  const overlay = document.getElementById('privacy-overlay');
  const messageEl = document.getElementById('privacy-message');
  const continueBtn = document.getElementById('privacy-continue-btn');

  messageEl.textContent = message;
  overlay.classList.remove('hidden');

  continueBtn.onclick = () => {
    overlay.classList.add('hidden');
    callback();
  };
}

function createCardElement(card) {
  const cardDiv = document.createElement('div');
  cardDiv.className = card.category === 'Joker' ? 'card joker' : 'card';

  if (card.image) {
    cardDiv.classList.add('has-image');
    cardDiv.style.backgroundImage = `url('${card.image}')`;
  }

  cardDiv.innerHTML = `
    <div class="card-category">${card.category}</div>
    <div class="card-title">${card.name}</div>
    ${card.examples ? `<div class="card-examples">${card.examples}</div>` : '<div class="card-examples"></div>'}
  `;

  return cardDiv;
}

function updateScoreboard(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  gameState.players.forEach((player, index) => {
    const scoreItem = document.createElement('div');
    scoreItem.className = 'score-item';

    if (index === gameState.currentStorytellerIndex) {
      scoreItem.classList.add('current-storyteller');
    }

    if (player.score >= gameState.pointGoal) {
      scoreItem.classList.add('winner');
    }

    scoreItem.innerHTML = `
      <span class="player-name">${player.name}</span>
      <span class="player-score">${player.score}</span>
    `;

    container.appendChild(scoreItem);
  });
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')} `;
}

function startTimer(durationSeconds, displayId, barId, onComplete, onTick) {
  let remaining = durationSeconds;
  const display = document.getElementById(displayId);
  const bar = document.getElementById(barId);

  const updateDisplay = () => {
    if (display) {
      display.textContent = formatTime(remaining);
      // Add warning class in last 30 seconds
      if (remaining <= 30) {
        display.classList.add('warning');
      } else {
        display.classList.remove('warning');
      }
    }

    if (bar) {
      const percentage = (remaining / durationSeconds) * 100;
      bar.style.width = `${percentage}%`;
    }

    if (onTick) onTick(remaining);
  };

  updateDisplay(); // Initial update

  const interval = setInterval(() => {
    remaining--;
    updateDisplay();

    if (remaining <= 0) {
      clearInterval(interval);
      if (onComplete) onComplete();
    }
  }, 1000);

  return interval;
}

// === SCREEN HANDLERS ===

// Welcome Screen
document.getElementById('start-game-btn').addEventListener('click', () => {
  showScreen('mode-selection-screen');
});

document.getElementById('rules-btn').addEventListener('click', () => {
  showScreen('rules-screen');
});

document.getElementById('back-to-sa-btn').addEventListener('click', () => {
  window.location.href = 'https://simonallmer.com';
});

// Rules Screen
document.getElementById('back-to-welcome-btn').addEventListener('click', () => {
  showScreen('welcome-screen');
});

// Mode Selection Screen
document.getElementById('back-to-welcome-from-modes').addEventListener('click', () => {
  showScreen('welcome-screen');
});

// Classic Mode
document.querySelector('#classic-mode-card button').addEventListener('click', () => {
  gameState.gameMode = 'classic';
  document.getElementById('setup-game-description').innerHTML =
    '<strong>How to Play:</strong> Each storyteller draws 3 cards and tells an extraordinary story. The story can be true or a lie. Other players must guess correctly to earn points!';
  showScreen('setup-screen');
});

// Hide The Lie Mode
document.querySelector('#hide-lie-mode-card button').addEventListener('click', () => {
  gameState.gameMode = 'hide-the-lie';
  document.getElementById('setup-game-description').innerHTML =
    '<strong>How to Play:</strong> Each storyteller draws 3 cards and tells 3 separate quick stories or facts - one for each card. One story is a lie! All cards are visible to everyone. Other players click on the card they think is the lie to earn points!';
  showScreen('setup-screen');
});

// Setup Screen - Player Count Selection
document.querySelectorAll('.player-count-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.player-count-btn').forEach(b => b.classList.remove('selected'));
    e.target.classList.add('selected');

    const count = parseInt(e.target.dataset.count);
    gameState.pointGoal = POINT_GOALS[count];

    // Generate player input fields
    const inputsContainer = document.getElementById('player-inputs');
    inputsContainer.innerHTML = '';

    for (let i = 1; i <= count; i++) {
      const inputGroup = document.createElement('div');
      inputGroup.className = 'player-input-group';
      inputGroup.innerHTML = `
        <input type="text" id="player-${i}" placeholder="Enter name" value="Player ${i}">
      `;
      inputsContainer.appendChild(inputGroup);
    }

    document.getElementById('player-inputs-container').classList.remove('hidden');
  });
});

// Setup Screen - Start Game
document.getElementById('start-round-btn').addEventListener('click', () => {
  try {
    // 1. Validate Inputs
    const playerInputs = document.querySelectorAll('#player-inputs input');
    if (!playerInputs || playerInputs.length === 0) {
      throw new Error("No players found. Please select player count first.");
    }

    // 2. Create Players Array
    gameState.players = Array.from(playerInputs).map((input, index) => {
      const name = input.value.trim() || input.placeholder || `Player ${index + 1}`;
      return { name: name, score: 0 };
    });

    if (gameState.players.length < 2) {
      throw new Error("Need at least 2 players to start.");
    }

    // 3. Initialize Deck
    if (!CARDS || CARDS.length === 0) {
      throw new Error("Card database is empty.");
    }
    gameState.deck = shuffleArray([...CARDS]);

    // 4. Initialize Storyteller
    gameState.currentStorytellerIndex = Math.floor(Math.random() * gameState.players.length);

    // 5. Initialize Round
    gameState.currentRound = 1;

    // 6. Start the Round
    startRound();

  } catch (error) {
    console.error("CRITICAL ERROR starting game:", error);
    alert("Could not start game: " + error.message);
  }
});

// Round Start
function startRound() {
  try {
    // Verify Game State
    if (!gameState.players || gameState.players.length === 0) {
      throw new Error("Game state players empty in startRound");
    }

    const storyteller = getCurrentStoryteller();
    if (!storyteller) {
      throw new Error("Current storyteller is undefined");
    }

    // Update UI Elements
    const roundEl = document.getElementById('round-number');
    if (roundEl) roundEl.textContent = gameState.currentRound;

    const goalEl = document.getElementById('point-goal');
    if (goalEl) goalEl.textContent = gameState.pointGoal;

    const storytellerNameEl = document.getElementById('current-storyteller-name');
    if (storytellerNameEl) storytellerNameEl.textContent = storyteller.name;

    updateScoreboard('scoreboard-list');
    showOptionsButton(); // Safe version

    // Show Privacy Overlay
    showPrivacyOverlay(
      `Pass the device to ${storyteller.name} (the storyteller).`,
      () => showScreen('round-start-screen')
    );

  } catch (error) {
    console.error("Error in startRound:", error);
    alert("Error starting round: " + error.message);
  }
}

// Draw Cards
document.getElementById('draw-cards-btn').addEventListener('click', () => {
  gameState.drawnCards = drawCards(3);

  const cardsContainer = document.getElementById('drawn-cards');
  cardsContainer.innerHTML = '';

  // Reset button state
  const continueBtn = document.getElementById('choose-truth-lie-btn');
  continueBtn.disabled = false;

  if (gameState.gameMode === 'hide-the-lie') {
    // Hide The Lie: Select lie immediately
    continueBtn.textContent = 'Confirm Lie Selection';
    continueBtn.disabled = true; // Disabled until selection
    document.querySelector('#card-selection-screen h2').textContent = 'Choose The Lie';
    document.querySelector('#card-selection-screen p').textContent = 'Click on the card that will be your lie. The other two will be truth.';

    gameState.drawnCards.forEach((card, index) => {
      const cardEl = createCardElement(card);
      cardEl.style.cursor = 'pointer';
      cardEl.dataset.cardIndex = index;

      cardEl.addEventListener('click', () => {
        // Remove selection from all cards
        cardsContainer.querySelectorAll('.card').forEach(c => c.classList.remove('selected-lie'));
        // Select this card
        cardEl.classList.add('selected-lie');
        gameState.lieCardIndex = index;
        continueBtn.disabled = false;
      });

      cardsContainer.appendChild(cardEl);
    });
  } else {
    // Classic Mode
    continueBtn.textContent = 'Continue';
    document.querySelector('#card-selection-screen h2').textContent = 'Your Story Cards';
    document.querySelector('#card-selection-screen p').textContent = 'These are your 3 cards. Incorporate them into your story.';

    gameState.drawnCards.forEach(card => {
      cardsContainer.appendChild(createCardElement(card));
    });
  }

  showScreen('card-selection-screen');
});

// Continue to Truth/Lie Selection or Start Storytelling
document.getElementById('choose-truth-lie-btn').addEventListener('click', () => {
  if (gameState.gameMode === 'classic') {
    showScreen('truth-lie-screen');
  } else if (gameState.gameMode === 'hide-the-lie') {
    // Proceed directly to storytelling
    startStorytellingPhase();
  }
});

// Confirm Lie Selection (Hide The Lie Mode)
// Confirm Lie Selection (Hide The Lie Mode) - HANDLED BY choose-truth-lie-btn
// document.getElementById('confirm-lie-selection-btn').addEventListener('click', () => {
//   startStorytellingPhase();
// });

// Truth/Lie Selection
const truthBtn = document.getElementById('choose-truth-btn');
if (truthBtn) {
  truthBtn.addEventListener('click', () => {
    try {
      gameState.storytellerChoice = 'truth';
      startPreparationPhase();
    } catch (error) {
      console.error("Error choosing truth:", error);
      alert("Error choosing truth: " + error.message);
    }
  });
}

const lieBtn = document.getElementById('choose-lie-btn');
if (lieBtn) {
  lieBtn.addEventListener('click', () => {
    try {
      gameState.storytellerChoice = 'lie';
      startPreparationPhase();
    } catch (error) {
      console.error("Error choosing lie:", error);
      alert("Error choosing lie: " + error.message);
    }
  });
}

// Preparation Phase
let prepTimer;
function startPreparationPhase() {
  try {
    const choiceDisplay = document.getElementById('storyteller-choice-display');
    if (choiceDisplay) {
      choiceDisplay.textContent = gameState.storytellerChoice === 'truth' ? 'TRUTH' : 'LIE';
    }

    showScreen('preparation-screen');

    prepTimer = startTimer(60, 'prep-timer-display', 'prep-timer-bar', () => {
      startStorytellingPhase();
    });
  } catch (error) {
    console.error("Error starting prep phase:", error);
    alert("Error starting prep phase: " + error.message);
  }
}

// Skip preparation timer
const skipPrepBtn = document.getElementById('skip-prep-btn');
if (skipPrepBtn) {
  skipPrepBtn.addEventListener('click', () => {
    try {
      if (prepTimer) clearInterval(prepTimer);
      startStorytellingPhase();
    } catch (error) {
      console.error("Error skipping prep:", error);
    }
  });
}

// Storytelling Phase
let storyTimer;
function startStorytellingPhase() {
  const storytellingCards = document.getElementById('storytelling-cards');
  storytellingCards.innerHTML = '';

  // Update text based on game mode
  if (gameState.gameMode === 'hide-the-lie') {
    document.getElementById('storytelling-title').textContent = 'Tell Your 3 Stories';
    document.getElementById('storytelling-instructions').textContent =
      'Tell 3 quick, unrelated stories - one for each card. You have 3 minutes total.';

    // Show cards during storytelling for Hide The Lie
    gameState.drawnCards.forEach(card => {
      storytellingCards.appendChild(createCardElement(card));
    });
  } else {
    document.getElementById('storytelling-title').textContent = 'Tell Your Story';
    document.getElementById('storytelling-instructions').textContent =
      'You have up to 3 minutes. You can end early when finished.';
  }

  showScreen('storytelling-screen');

  storyTimer = startTimer(180, 'story-timer-display', 'story-timer-bar', () => {
    endStorytellingPhase();
  });
}

const endStoryBtn = document.getElementById('end-story-btn');
if (endStoryBtn) {
  endStoryBtn.addEventListener('click', () => {
    try {
      if (storyTimer) clearInterval(storyTimer);
      endStorytellingPhase();
    } catch (error) {
      console.error("Error ending story:", error);
      alert("Error ending story: " + error.message);
    }
  });
}

function endStorytellingPhase() {
  try {
    if (gameState.gameMode === 'hide-the-lie') {
      // Skip question phase for Hide The Lie, go straight to voting
      startHideLieVoting();
    } else {
      // Classic mode has question phase
      const storyteller = getCurrentStoryteller();
      if (storyteller) {
        document.getElementById('question-storyteller-name').textContent = storyteller.name;
      }
      showScreen('question-screen');
    }
  } catch (error) {
    console.error("Error in endStorytellingPhase:", error);
    alert("Error transitioning from story: " + error.message);
  }
}

// Question Phase
const proceedVotingBtn = document.getElementById('proceed-to-voting-btn');
if (proceedVotingBtn) {
  proceedVotingBtn.addEventListener('click', () => {
    try {
      startVotingPhase();
    } catch (error) {
      console.error("Error proceeding to voting:", error);
    }
  });
}

// Hide The Lie Voting Phase
function startHideLieVoting() {
  try {
    const storyteller = getCurrentStoryteller();
    if (!storyteller) throw new Error("Storyteller undefined");

    const storytellerNameEl = document.getElementById('hide-lie-voting-storyteller');
    if (storytellerNameEl) storytellerNameEl.textContent = storyteller.name;

    const votingGrid = document.getElementById('hide-lie-voting-grid');
    if (!votingGrid) throw new Error("Voting grid element not found");

    votingGrid.innerHTML = '';
    gameState.playerVotes = {};

    const otherPlayers = getOtherPlayers();
    if (!otherPlayers || otherPlayers.length === 0) {
      throw new Error("No other players found to vote");
    }

    // Create a single section showing the 3 cards
    const cardsSection = document.createElement('div');
    cardsSection.style.marginBottom = 'var(--spacing-xl)';

    const instruction = document.createElement('p');
    instruction.className = 'text-center mb-lg';
    instruction.style.fontSize = '1.1rem';
    instruction.style.color = 'var(--color-noir-silver)';
    instruction.id = 'voting-instruction';

    // Safe access to first player name
    const firstVoterName = otherPlayers[0] ? otherPlayers[0].name : "Player";
    instruction.textContent = `${firstVoterName}, click on the card you think is the lie.`;
    cardsSection.appendChild(instruction);

    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'card-grid';
    cardsContainer.id = 'voting-cards-container';

    if (!gameState.drawnCards || gameState.drawnCards.length === 0) {
      throw new Error("No drawn cards available for voting");
    }

    gameState.drawnCards.forEach((card, index) => {
      const cardEl = createCardElement(card);
      cardEl.style.cursor = 'pointer';
      cardEl.dataset.cardIndex = index;

      cardEl.addEventListener('click', () => {
        try {
          // Find current voting player
          const currentPlayers = getOtherPlayers();
          const currentVoterIndex = Object.keys(gameState.playerVotes).length;

          if (currentVoterIndex >= currentPlayers.length) {
            return; // All votes cast
          }

          const currentVoter = currentPlayers[currentVoterIndex];
          if (!currentVoter) return;

          // Record vote
          gameState.playerVotes[currentVoter.name] = parseInt(index);

          // Check if all votes are in
          if (Object.keys(gameState.playerVotes).length === currentPlayers.length) {
            const instructionEl = document.getElementById('voting-instruction');
            if (instructionEl) instructionEl.textContent = 'All votes cast! Click Reveal Results.';

            const revealBtn = document.getElementById('hide-lie-reveal-btn');
            if (revealBtn) revealBtn.disabled = false;
          } else {
            // Update instruction for next player
            const nextVoter = currentPlayers[currentVoterIndex + 1];
            const instructionEl = document.getElementById('voting-instruction');
            if (instructionEl && nextVoter) {
              instructionEl.textContent = `${nextVoter.name}, click on the card you think is the lie.`;
            }
          }
        } catch (e) {
          console.error("Error handling vote click:", e);
        }
      });

      cardsContainer.appendChild(cardEl);
    });

    cardsSection.appendChild(cardsContainer);
    votingGrid.appendChild(cardsSection);

    showScreen('hide-lie-voting-screen');
  } catch (error) {
    console.error("Error in startHideLieVoting:", error);
    alert("Error starting voting phase: " + error.message);
  }
}

// Voting Phase
function startVotingPhase() {
  document.getElementById('voting-storyteller-name').textContent = getCurrentStoryteller().name;

  const votingGrid = document.getElementById('voting-grid');
  votingGrid.innerHTML = '';
  gameState.playerVotes = {};

  getOtherPlayers().forEach(player => {
    const voteCard = document.createElement('div');
    voteCard.className = 'vote-card';
    voteCard.innerHTML = `
      <h3>${player.name}</h3>
      <div class="vote-buttons">
        <button class="vote-btn truth" data-player="${player.name}" data-vote="truth">TRUTH</button>
        <button class="vote-btn lie" data-player="${player.name}" data-vote="lie">LIE</button>
      </div>
      `;
    votingGrid.appendChild(voteCard);
  });

  // Add vote button listeners
  document.querySelectorAll('.vote-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const playerName = e.target.dataset.player;
      const vote = e.target.dataset.vote;

      // Remove selected from siblings
      e.target.parentElement.querySelectorAll('.vote-btn').forEach(b => b.classList.remove('selected'));
      e.target.classList.add('selected');

      gameState.playerVotes[playerName] = vote;

      // Enable reveal button if all votes are in
      if (Object.keys(gameState.playerVotes).length === getOtherPlayers().length) {
        document.getElementById('reveal-results-btn').disabled = false;
      }
    });
  });

  showScreen('voting-screen');
}

// Reveal Results
const revealResultsBtn = document.getElementById('reveal-results-btn');
if (revealResultsBtn) {
  revealResultsBtn.addEventListener('click', () => {
    try {
      calculateScores();
      showResults();
    } catch (error) {
      console.error("Error revealing results:", error);
      alert("Error revealing results: " + error.message);
    }
  });
}

// Hide The Lie Reveal Results
const hideLieRevealBtn = document.getElementById('hide-lie-reveal-btn');
if (hideLieRevealBtn) {
  hideLieRevealBtn.addEventListener('click', () => {
    try {
      calculateHideLieScores();
      showResults();
    } catch (error) {
      console.error("Error revealing hide-lie results:", error);
      alert("Error revealing results: " + error.message);
    }
  });
}

function calculateScores() {
  const storyteller = getCurrentStoryteller();

  // Calculate points
  getOtherPlayers().forEach(player => {
    const vote = gameState.playerVotes[player.name];

    if (vote === gameState.storytellerChoice) {
      // Player guessed correctly
      player.score += 1;
    } else {
      // Player guessed incorrectly - storyteller gains point
      storyteller.score += 1;
    }
  });
}

function calculateHideLieScores() {
  const storyteller = getCurrentStoryteller();

  // Calculate points for Hide The Lie
  getOtherPlayers().forEach(player => {
    const votedCardIndex = gameState.playerVotes[player.name];

    if (votedCardIndex === gameState.lieCardIndex) {
      // Player guessed the lie correctly
      player.score += 1;
    } else {
      // Player guessed wrong - storyteller gains point
      storyteller.score += 1;
    }
  });
}

function showResults() {
  // Show reveal based on game mode
  const revealEl = document.getElementById('reveal-result');

  if (gameState.gameMode === 'hide-the-lie') {
    const lieCard = gameState.drawnCards[gameState.lieCardIndex];
    revealEl.textContent = `THE LIE: ${lieCard.name}`;
    revealEl.className = 'reveal-result lie';
  } else {
    revealEl.textContent = gameState.storytellerChoice === 'truth' ? 'TRUTH' : 'LIE';
    revealEl.className = `reveal-result ${gameState.storytellerChoice}`;
  }

  // Show the 3 drawn cards
  const revealCardsEl = document.getElementById('reveal-cards');
  revealCardsEl.innerHTML = '';
  gameState.drawnCards.forEach((card, index) => {
    const cardEl = createCardElement(card);
    // Highlight the lie card in Hide The Lie mode
    if (gameState.gameMode === 'hide-the-lie' && index === gameState.lieCardIndex) {
      cardEl.classList.add('selected-lie');
    }
    revealCardsEl.appendChild(cardEl);
  });

  // Show voting results
  const resultsListEl = document.getElementById('voting-results-list');
  resultsListEl.innerHTML = '';

  getOtherPlayers().forEach(player => {
    const vote = gameState.playerVotes[player.name];
    let correct, voteText;

    if (gameState.gameMode === 'hide-the-lie') {
      correct = vote === gameState.lieCardIndex;
      const votedCard = gameState.drawnCards[vote];
      voteText = votedCard.name;
    } else {
      correct = vote === gameState.storytellerChoice;
      voteText = vote.toUpperCase();
    }

    const resultItem = document.createElement('p');
    resultItem.innerHTML = `
      <strong>${player.name}</strong> voted <strong class="${correct ? '' : 'text-red'}">${voteText}</strong>
      ${correct ? '✓ <span style="color: var(--color-noir-white);">+1 point</span>' : '✗'}
      `;
    resultItem.style.marginBottom = 'var(--spacing-sm)';
    resultsListEl.appendChild(resultItem);
  });

  // Add storyteller points info
  const storytellerPoints = getOtherPlayers().filter(p => {
    if (gameState.gameMode === 'hide-the-lie') {
      return gameState.playerVotes[p.name] !== gameState.lieCardIndex;
    } else {
      return gameState.playerVotes[p.name] !== gameState.storytellerChoice;
    }
  }).length;

  if (storytellerPoints > 0) {
    const storytellerItem = document.createElement('p');
    storytellerItem.innerHTML = `
      <strong>${getCurrentStoryteller().name}</strong> (storyteller) earned <strong class="text-red">+${storytellerPoints} point${storytellerPoints > 1 ? 's' : ''}</strong>
      `;
    storytellerItem.style.marginTop = 'var(--spacing-md)';
    storytellerItem.style.paddingTop = 'var(--spacing-md)';
    storytellerItem.style.borderTop = '1px solid var(--color-noir-gray)';
    resultsListEl.appendChild(storytellerItem);
  }

  // Update scoreboard
  document.getElementById('results-point-goal').textContent = gameState.pointGoal;
  updateScoreboard('results-scoreboard-list');

  // Check for winner
  const winner = gameState.players.find(p => p.score >= gameState.pointGoal);
  if (winner) {
    document.getElementById('next-round-btn').classList.add('hidden');
    document.getElementById('end-game-btn').classList.remove('hidden');
  } else {
    document.getElementById('next-round-btn').classList.remove('hidden');
    document.getElementById('end-game-btn').classList.add('hidden');
  }

  showScreen('results-screen');
}

// Next Round
const nextRoundBtn = document.getElementById('next-round-btn');
if (nextRoundBtn) {
  nextRoundBtn.addEventListener('click', () => {
    try {
      gameState.currentRound++;

      if (gameState.players && gameState.players.length > 0) {
        gameState.currentStorytellerIndex = (gameState.currentStorytellerIndex + 1) % gameState.players.length;
      }

      startRound();
    } catch (error) {
      console.error("Error starting next round:", error);
      alert("Error starting next round: " + error.message);
    }
  });
}

// End Game
const endGameBtn = document.getElementById('end-game-btn');
if (endGameBtn) {
  endGameBtn.addEventListener('click', () => {
    try {
      showFinalResults();
    } catch (error) {
      console.error("Error ending game:", error);
    }
  });
}

function showFinalResults() {
  // Sort players by score (descending)
  const sortedPlayers = [...gameState.players].sort((a, b) => b.score - a.score);

  const finalScoreboardEl = document.getElementById('final-scoreboard-list');
  finalScoreboardEl.innerHTML = '';

  sortedPlayers.forEach((player, index) => {
    const scoreItem = document.createElement('div');
    scoreItem.className = 'score-item';

    if (index === 0) {
      scoreItem.classList.add('winner');
    }

    scoreItem.innerHTML = `
      <span class="player-name">
        ${index === 0 ? '👑 ' : `${index + 1}. `}${player.name}
      </span>
      <span class="player-score">${player.score}</span>
      `;

    finalScoreboardEl.appendChild(scoreItem);
  });

  showScreen('game-end-screen');
}

// Play Again
const playAgainBtn = document.getElementById('play-again-btn');
if (playAgainBtn) {
  playAgainBtn.addEventListener('click', () => {
    try {
      // Reset game state but keep players if desired, or full reset
      // For now, full reset to welcome screen
      gameState.currentRound = 1;
      gameState.players.forEach(p => p.score = 0);
      gameState.currentStorytellerIndex = Math.floor(Math.random() * gameState.players.length);
      gameState.deck = shuffleArray([...CARDS]);

      showScreen('welcome-screen');
    } catch (error) {
      console.error("Error restarting game:", error);
      location.reload(); // Fallback to full reload
    }
    hideOptionsButton();
  });
}

// === OPTIONS BUTTON ===
const optionsButton = document.getElementById('options-button');
const optionsModal = document.getElementById('options-modal');

function showOptionsButton() {
  const btn = document.getElementById('options-button');
  if (btn) btn.classList.remove('hidden');
}

function hideOptionsButton() {
  const btn = document.getElementById('options-button');
  if (btn) btn.classList.add('hidden');
}

function updateOptionsModal() {
  // Update current turn info
  document.getElementById('options-storyteller').textContent = getCurrentStoryteller().name;
  document.getElementById('options-round').textContent = gameState.currentRound;
  document.getElementById('options-goal').textContent = gameState.pointGoal;

  // Update scoreboard
  const optionsScores = document.getElementById('options-scores');
  optionsScores.innerHTML = '';

  gameState.players.forEach((player, index) => {
    const scoreItem = document.createElement('div');
    scoreItem.className = 'options-score-item';

    if (index === gameState.currentStorytellerIndex) {
      scoreItem.classList.add('active');
    }

    scoreItem.innerHTML = `
      <span>${player.name}</span>
      <span>${player.score} pts</span>
      `;

    optionsScores.appendChild(scoreItem);
  });
}

// Options button click
optionsButton.addEventListener('click', () => {
  updateOptionsModal();
  optionsModal.classList.remove('hidden');
});

// Close options modal
document.getElementById('options-close').addEventListener('click', () => {
  optionsModal.classList.add('hidden');
});

document.getElementById('options-resume').addEventListener('click', () => {
  optionsModal.classList.add('hidden');
});

// End game and return home
document.getElementById('options-end-game').addEventListener('click', () => {
  // Reset game state
  gameState = {
    players: [],
    currentStorytellerIndex: 0,
    currentRound: 1,
    drawnCards: [],
    storytellerChoice: null,
    playerVotes: {},
    deck: [...CARDS],
    pointGoal: 10,
    gameMode: 'classic' // Reset to default
  };

  optionsModal.classList.add('hidden');
  hideOptionsButton();
  showScreen('welcome-screen');
});
