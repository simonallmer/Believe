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
  { id: 36, name: "North America", category: "Continent", examples: "USA, Canada, Mexico" },
  { id: 37, name: "South America", category: "Continent", examples: "Brazil, Argentina, Colombia" },
  { id: 38, name: "Europe", category: "Continent", examples: "France, Germany, Italy" },
  { id: 39, name: "Africa", category: "Continent", examples: "Egypt, South Africa, Nigeria" },
  { id: 40, name: "Asia-Pacific", category: "Continent", examples: "China, Japan, Australia" },

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

// === OBJECTS MODE CARDS ===
const OBJECT_CARDS = [
  // Scale & Dimensions (The "Tape Measure" Cards)
  { id: 101, name: "Microscopic", category: "Scale", examples: "Bacteria, dust mites, atoms" },
  { id: 102, name: "Pocket-sized", category: "Scale", examples: "Keys, phone, wallet" },
  { id: 103, name: "Hand-sized", category: "Scale", examples: "Cup, book, remote" },
  { id: 104, name: "Human-sized", category: "Scale", examples: "Door, chair, person" },
  { id: 105, name: "Room-filling", category: "Scale", examples: "Bed, wardrobe, sofa" },
  { id: 106, name: "Giant", category: "Scale", examples: "Building, ship, mountain" },
  { id: 107, name: "Long/Thin", category: "Scale", examples: "Ruler, pole, noodle" },
  { id: 108, name: "Flat", category: "Scale", examples: "Paper, leaf, credit card" },

  // Physics & Material (The "Touch" Cards)
  { id: 109, name: "Metallic", category: "Material", examples: "Coin, key, spoon" },
  { id: 110, name: "Wooden", category: "Material", examples: "Chair, pencil, floor" },
  { id: 111, name: "Gaseous", category: "Material", examples: "Smoke, steam, air" },
  { id: 112, name: "Liquid", category: "Material", examples: "Water, oil, honey" },
  { id: 113, name: "Transparent", category: "Material", examples: "Glass, water, diamond" },
  { id: 114, name: "Reflective", category: "Material", examples: "Mirror, metal, lake" },
  { id: 115, name: "Organic", category: "Material", examples: "Leather, bone, cotton" },
  { id: 116, name: "Synthetic", category: "Material", examples: "Plastic, nylon, rubber" },
  { id: 117, name: "Magnetic", category: "Material", examples: "Magnet, compass, iron" },
  { id: 118, name: "Buoyant", category: "Material", examples: "Wood, rubber duck, boat" },
  { id: 119, name: "Adhesive", category: "Material", examples: "Tape, glue, sticky note" },
  { id: 120, name: "Elastic", category: "Material", examples: "Rubber band, balloon, spring" },

  // Sensory & Temperature (The "Input" Cards)
  { id: 121, name: "Freezing", category: "Temperature", examples: "Ice, snow, freezer" },
  { id: 122, name: "Scolding", category: "Temperature", examples: "Boiling water, iron, fire" },
  { id: 123, name: "Body-temp", category: "Temperature", examples: "Water, human, animal" },
  { id: 124, name: "Luminous", category: "Temperature", examples: "Sun, lamp, firefly" },
  { id: 125, name: "Pitch Black", category: "Temperature", examples: "Void, cave, pupil" },
  { id: 126, name: "Silent", category: "Temperature", examples: " Feather, cloud, vacuum" },
  { id: 127, name: "Deafening", category: "Temperature", examples: "Jet engine, siren, thunder" },
  { id: 128, name: "Pungent", category: "Temperature", examples: "Onion, garbage, ammonia" },
  { id: 129, name: "Spicy/Toxic", category: "Temperature", examples: "Chili, poison ivy, venom" },
  { id: 130, name: "Textured/Rough", category: "Temperature", examples: "Sandpaper, rock, bark" },
  { id: 131, name: "Slimy/Wet", category: "Temperature", examples: "Slug, mucus, oil" },
  { id: 132, name: "Fuzzy/Hairy", category: "Temperature", examples: "Fur, wool, caterpillar" },

  // Dynamic & State (The "Action" Cards)
  { id: 133, name: "Stationary", category: "Dynamic", examples: "Rock, building, table" },
  { id: 134, name: "Fast", category: "Dynamic", examples: "Car, bullet, jet" },
  { id: 135, name: "Slow", category: "Dynamic", examples: "Snail, turtle, glacier" },
  { id: 136, name: "Airborne", category: "Dynamic", examples: "Bird, plane, drone" },
  { id: 137, name: "Submerged", category: "Dynamic", examples: "Fish, submarine, coral" },
  { id: 138, name: "Spinning", category: "Dynamic", examples: "Wheel, fan, Earth" },
  { id: 139, name: "Expanding", category: "Dynamic", examples: "Balloon, dough, universe" },
  { id: 140, name: "Melting", category: "Dynamic", examples: "Ice cream, wax, butter" },
  { id: 141, name: "Fragile", category: "Dynamic", examples: "Glass, egg, porcelain" },
  { id: 142, name: "Indestructible", category: "Dynamic", examples: "Diamond, titanium, rock" },

  // Origin & Context (The "Story" Cards)
  { id: 143, name: "Mass-Produced", category: "Origin", examples: "Phone, chair, car" },
  { id: 144, name: "Ancient", category: "Origin", examples: "Fossil, pyramid, scroll" },
  { id: 145, name: "Edible", category: "Origin", examples: "Apple, bread, cheese" },
  { id: 146, name: "Electronic", category: "Origin", examples: "Laptop, TV, phone" },
  { id: 147, name: "Expensive", category: "Origin", examples: "Diamond, gold, mansion" },
  { id: 148, name: "Valueless", category: "Origin", examples: "Trash, pebble, leaf" },
  { id: 149, name: "Extraterrestrial", category: "Origin", examples: "Meteorite, satellite, astronaut" },
  { id: 150, name: "Underground", category: "Origin", examples: "Mineral, root, tunnel" },
  { id: 151, name: "Medical", category: "Origin", examples: "Syringe, bandage, pill" },
  { id: 152, name: "Lethal", category: "Origin", examples: "Gun, poison, bomb" }
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
  gameMode: 'classic', // 'classic', 'hide-the-lie', or 'objects'
  storytellersUsedRedraw: [], // Track which storyteller indices have used their redraw
  // Objects mode specific:
  objectCardsPlayed: [], // Cards played in current object round
  currentPlayerClaimed: null, // 'knows' or 'false' or null
  claimedObjectName: null, // The object name if someone claimed to know
  objectsRoundHistory: [], // [{ cards: [], claimedObject: string, isValid: bool, caller: string, namer: string, points: number }]
  falseCaller: null // The player who called FALSE in current round
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
  
  // Show options button on all screens except welcome screen
  const optionsBtn = document.getElementById('options-button');
  if (screenId === 'welcome-screen') {
    optionsBtn.classList.add('hidden');
  } else {
    optionsBtn.classList.remove('hidden');
  }
}

function showPrivacyOverlay(message, callback) {
  const overlay = document.getElementById('privacy-overlay');
  const messageEl = document.getElementById('privacy-message');
  const continueBtn = document.getElementById('privacy-continue-btn');
  const optionsBtn = document.getElementById('options-button');

  messageEl.textContent = message;
  overlay.classList.remove('hidden');
  
  // Hide options button during privacy overlay
  optionsBtn.classList.add('hidden');

  continueBtn.onclick = () => {
    overlay.classList.add('hidden');
    // Show options button again after privacy overlay is dismissed
    optionsBtn.classList.remove('hidden');
    callback();
  };
}

function createCardElement(card, showTip = true) {
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

  // Add click listener for tips (only for non-Objects mode cards)
  if (showTip && card.examples && gameState.gameMode !== 'objects') {
    cardDiv.style.cursor = 'pointer';
    cardDiv.addEventListener('click', (e) => {
      // Prevent event bubbling if needed, but for now allow
      showFloatingTip(cardDiv, card.examples);
    });
  }

  return cardDiv;
}

function showFloatingTip(cardElement, examples) {
  const tip = document.createElement('div');
  tip.className = 'card-tip';
  tip.textContent = examples;

  // Position it centered above the card
  const rect = cardElement.getBoundingClientRect();
  tip.style.left = (rect.left + rect.width / 2) + 'px';
  tip.style.top = rect.top + 'px';

  document.body.appendChild(tip);

  // Remove after 2 seconds
  setTimeout(() => {
    if (tip.parentNode) {
      document.body.removeChild(tip);
    }
  }, 2000);
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

// === WELCOME CARD ROTATION ===
const cardRotation = {
  cards: ['card-man.png', 'card-woman.png', 'card-child.png'],
  shown: [],
  currentIndex: 0,
  rotationInterval: null,

  init() {
    this.resetCycle();
    this.startRotation();
    // Also allow manual cycling with clicks
    const cardImg = document.getElementById('welcome-card-image');
    if (cardImg) {
      cardImg.addEventListener('click', () => this.nextCard());
    }
  },

  resetCycle() {
    this.shown = [];
    this.shuffleCards();
  },

  shuffleCards() {
    this.shown = [];
    this.currentIndex = 0;
  },

  getNextCard() {
    // Find cards that haven't been shown in this cycle
    const unshown = this.cards.filter((_, index) => !this.shown.includes(index));
    
    if (unshown.length === 0) {
      // All cards have been shown, reset cycle
      this.resetCycle();
      unshown = this.cards.filter((_, index) => !this.shown.includes(index));
    }

    // Pick random from unshown
    const randomIndex = Math.floor(Math.random() * unshown.length);
    const pickedIndex = this.cards.indexOf(unshown[randomIndex]);
    
    if (!this.shown.includes(pickedIndex)) {
      this.shown.push(pickedIndex);
    }
    
    return pickedIndex;
  },

  nextCard() {
    const nextIndex = this.getNextCard();
    this.displayCard(nextIndex);
  },

  displayCard(index) {
    const cardImg = document.getElementById('welcome-card-image');
    if (cardImg) {
      // Fade out
      cardImg.style.opacity = '0.5';
      
      // Change image and fade back in
      setTimeout(() => {
        cardImg.src = this.cards[index];
        cardImg.style.opacity = '0.9';
      }, 500);
    }
  },

  startRotation() {
    if (this.rotationInterval) clearInterval(this.rotationInterval);
    
    // Start with first random card
    this.nextCard();
    
    // Change card every 10 seconds
    this.rotationInterval = setInterval(() => {
      this.nextCard();
    }, 10000);
  },

  stopRotation() {
    if (this.rotationInterval) {
      clearInterval(this.rotationInterval);
      this.rotationInterval = null;
    }
  }
};

// Initialize card rotation when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    cardRotation.init();
  });
} else {
  cardRotation.init();
}

// === SCREEN HANDLERS ===

// Welcome Screen
document.getElementById('start-game-btn').addEventListener('click', () => {
  showScreen('mode-selection-screen');
});

document.getElementById('rules-btn').addEventListener('click', () => {
  showScreen('rules-screen');
});

document.getElementById('back-to-arcade-btn').addEventListener('click', () => {
  window.location.href = 'https://simonallmer.com/arcade';
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

// Objects Mode
document.querySelector('#objects-mode-card button').addEventListener('click', () => {
  gameState.gameMode = 'objects';
  document.getElementById('setup-game-description').innerHTML =
    '<strong>How to Play:</strong> Players take turns playing attribute cards to describe a real object. On your turn, either play a card OR claim to know the object and name it. If correct, you gain points equal to cards played. If wrong, you lose those points. The previous player can call False - if they\'re right, they gain 1 point. First to 10 points wins!';
  showScreen('setup-screen');
});

// Setup Screen - Player Count Selection
document.querySelectorAll('.player-count-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    // Check if button is restricted
    if (btn.classList.contains('restricted')) {
      document.getElementById('demo-info-modal')?.classList.remove('hidden');
      return;
    }
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

    // Add event listeners to clear default names on focus
    document.querySelectorAll('#player-inputs input').forEach((input, index) => {
      const defaultName = `Player ${index + 1}`;
      input.addEventListener('focus', () => {
        if (input.value === defaultName) {
          input.value = '';
        }
      });
    });

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
      const name = input.value.trim() || `Player ${index + 1}`;
      return { name: name, score: 0 };
    });

    if (gameState.players.length < 2) {
      throw new Error("Need at least 2 players to start.");
    }

    // 3. Initialize Deck based on game mode
    if (gameState.gameMode === 'objects') {
      // Initialize Objects mode
      gameState.deck = shuffleArray([...OBJECT_CARDS]);
      gameState.pointGoal = 10; // Objects mode always 10 points
      initObjectsMode();
      startObjectsRound();
    } else {
      // Classic or Hide The Lie mode
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
    }

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

  // Update redraw button state
  const redrawBtn = document.getElementById('draw-new-cards-btn');
  if (gameState.storytellersUsedRedraw.includes(gameState.currentStorytellerIndex)) {
    redrawBtn.disabled = true;
    redrawBtn.textContent = 'Already Redrawn';
  } else {
    redrawBtn.disabled = false;
    redrawBtn.textContent = 'Draw New Cards';
  }
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

// Draw New Cards (once per storyteller per game)
document.getElementById('draw-new-cards-btn').addEventListener('click', () => {
  // Check if this storyteller has already used their redraw
  if (gameState.storytellersUsedRedraw.includes(gameState.currentStorytellerIndex)) {
    alert("You've already used your redraw for this game!");
    return;
  }

  // Mark this storyteller as having used their redraw
  gameState.storytellersUsedRedraw.push(gameState.currentStorytellerIndex);

  // Redraw cards
  gameState.drawnCards = drawCards(3);

  const cardsContainer = document.getElementById('drawn-cards');
  cardsContainer.innerHTML = '';

  // Reset button state
  const continueBtn = document.getElementById('choose-truth-lie-btn');
  continueBtn.disabled = false;

  if (gameState.gameMode === 'hide-the-lie') {
    gameState.drawnCards.forEach((card, index) => {
      const cardEl = createCardElement(card);
      cardEl.style.cursor = 'pointer';
      cardEl.dataset.cardIndex = index;

      cardEl.addEventListener('click', () => {
        cardsContainer.querySelectorAll('.card').forEach(c => c.classList.remove('selected-lie'));
        cardEl.classList.add('selected-lie');
        gameState.lieCardIndex = index;
        continueBtn.disabled = false;
      });

      cardsContainer.appendChild(cardEl);
    });
  } else {
    // Classic Mode
    gameState.drawnCards.forEach(card => {
      cardsContainer.appendChild(createCardElement(card));
    });
  }

  // Disable the redraw button after use
  const redrawBtn = document.getElementById('draw-new-cards-btn');
  redrawBtn.disabled = true;
  redrawBtn.textContent = 'Already Redrawn';
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

    // Display cards during preparation
    const prepCardsContainer = document.getElementById('preparation-cards');
    prepCardsContainer.innerHTML = '';
    gameState.drawnCards.forEach(card => {
      prepCardsContainer.appendChild(createCardElement(card));
    });

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
      gameState.storytellersUsedRedraw = []; // Reset redraw tracking
      
      // Reset Objects mode state
      gameState.objectCardsPlayed = [];
      gameState.currentPlayerClaimed = null;
      gameState.claimedObjectName = null;
      objectsDeck = [];
      playerHands = {};
      objectsCurrentPlayerIndex = 0;

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
  const storytellerEl = document.getElementById('options-storyteller');
  const roundEl = document.getElementById('options-round');
  const goalEl = document.getElementById('options-goal');

  if (gameState.players && gameState.players.length > 0) {
    const storyteller = getCurrentStoryteller();
    storytellerEl.textContent = storyteller ? storyteller.name : "N/A";
    roundEl.textContent = gameState.currentRound;
  } else {
    storytellerEl.textContent = "Wait for Setup";
    roundEl.textContent = "-";
  }
  
  goalEl.textContent = gameState.pointGoal;

  // Update scoreboard
  const optionsScores = document.getElementById('options-scores');
  optionsScores.innerHTML = '';

  if (gameState.players && gameState.players.length > 0) {
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
  } else {
    optionsScores.innerHTML = '<p style="text-align:center; color:var(--color-noir-silver); opacity:0.6;">No players yet</p>';
  }
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
    gameMode: 'classic', // Reset to default
    storytellersUsedRedraw: [],
    objectCardsPlayed: [],
    currentPlayerClaimed: null,
    claimedObjectName: null
  };

  // Reset Objects mode state
  objectsDeck = [];
  playerHands = {};
  objectsCurrentPlayerIndex = 0;

  optionsModal.classList.add('hidden');
  hideOptionsButton();
  showScreen('welcome-screen');
});

// Back to Arcade from options
document.getElementById('options-back-to-arcade').addEventListener('click', () => {
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
    gameMode: 'classic',
    storytellersUsedRedraw: [],
    objectCardsPlayed: [],
    currentPlayerClaimed: null,
    claimedObjectName: null
  };

  // Reset Objects mode state
  objectsDeck = [];
  playerHands = {};
  objectsCurrentPlayerIndex = 0;

  optionsModal.classList.add('hidden');
  hideOptionsButton();
  window.location.href = 'https://simonallmer.com/arcade';
});

// ==========================================
// OBJECTS MODE GAME LOGIC
// ==========================================

let objectsDeck = [];
let playerHands = {}; // { playerName: [cards] }
let objectsCurrentPlayerIndex = 0;

function initObjectsMode() {
  // Initialize objects deck
  objectsDeck = shuffleArray([...OBJECT_CARDS]);
  
  // Reset game state for objects mode
  gameState.objectCardsPlayed = [];
  gameState.currentPlayerClaimed = null;
  gameState.claimedObjectName = null;
  gameState.objectsRoundHistory = [];
  objectsCurrentPlayerIndex = 0;
  
  // Deal 3 cards to each player
  playerHands = {};
  gameState.players.forEach(player => {
    playerHands[player.name] = drawObjectCards(3);
  });
  
  // Reset scores to 0 for new game
  gameState.players.forEach(p => p.score = 0);
  
  // Set point goal to 10 for Objects mode
  gameState.pointGoal = 10;
}

function drawObjectCards(count) {
  if (objectsDeck.length < count) {
    objectsDeck = shuffleArray([...OBJECT_CARDS]);
  }
  return objectsDeck.splice(0, count);
}

function startObjectsRound() {
  // Reset for new round
  gameState.objectCardsPlayed = [];
  gameState.currentPlayerClaimed = null;
  gameState.claimedObjectName = null;
  gameState.falseCaller = null;
  objectsCurrentPlayerIndex = 0;
  
  // Redraw cards for all players (up to 3 each)
  gameState.players.forEach(player => {
    const currentHandSize = playerHands[player.name] ? playerHands[player.name].length : 0;
    const cardsNeeded = 3 - currentHandSize;
    if (cardsNeeded > 0) {
      playerHands[player.name] = playerHands[player.name] || [];
      const newCards = drawObjectCards(cardsNeeded);
      playerHands[player.name].push(...newCards);
    }
  });
  
  updateObjectsTurnScreen();
  
  // Show privacy overlay to pass device
  const currentPlayer = getObjectsCurrentPlayer();
  showPrivacyOverlay(
    `Pass the device to ${currentPlayer.name}.`,
    () => showScreen('objects-turn-screen')
  );
}

function getObjectsCurrentPlayer() {
  return gameState.players[objectsCurrentPlayerIndex];
}

function getObjectsPreviousPlayer() {
  const prevIndex = (objectsCurrentPlayerIndex - 1 + gameState.players.length) % gameState.players.length;
  return gameState.players[prevIndex];
}

function updateObjectsTurnScreen() {
  const currentPlayer = getObjectsCurrentPlayer();
  const hand = playerHands[currentPlayer.name];
  const hasCards = hand.length > 0;
  const totalCardsInDeck = objectsDeck.length + hand.length + gameState.objectCardsPlayed.length;
  
  // Update info
  document.getElementById('objects-round-num').textContent = gameState.currentRound;
  document.getElementById('objects-card-num').textContent = gameState.objectCardsPlayed.length + 1;
  document.getElementById('objects-current-player').textContent = currentPlayer.name;
  document.getElementById('objects-played-count').textContent = gameState.objectCardsPlayed.length;
  document.getElementById('objects-point-goal').textContent = gameState.pointGoal;
  
  // Show played cards
  const playedCardsContainer = document.getElementById('objects-played-cards');
  playedCardsContainer.innerHTML = '';
  if (gameState.objectCardsPlayed.length === 0) {
    playedCardsContainer.innerHTML = '<p style="color: var(--color-noir-silver); text-align: center;">No cards played yet</p>';
  } else {
    gameState.objectCardsPlayed.forEach(card => {
      playedCardsContainer.appendChild(createCardElement(card, false));
    });
  }
  
  // Show hand cards
  const handContainer = document.getElementById('objects-hand-cards');
  handContainer.innerHTML = '';
  
  if (!hasCards && totalCardsInDeck === 0) {
    // All cards used - last player must name object or call FALSE
    handContainer.innerHTML = '<p style="color: var(--color-noir-red); text-align: center;">No cards left! You must call FALSE or name an object.</p>';
  } else {
    hand.forEach((card, index) => {
      const cardEl = createCardElement(card, false);
      cardEl.style.cursor = 'pointer';
      cardEl.dataset.cardIndex = index;
      cardEl.addEventListener('click', () => {
        playObjectCard(index);
      });
      handContainer.appendChild(cardEl);
    });
  }
  
  // Update scoreboard
  updateObjectsScoreboard('objects-scoreboard-list');
  
  // Disable Call FALSE button if no cards played in current round
  const falseBtn = document.getElementById('objects-call-false-btn');
  if (gameState.objectCardsPlayed.length === 0) {
    falseBtn.disabled = true;
    falseBtn.style.opacity = '0.5';
  } else {
    falseBtn.disabled = false;
    falseBtn.style.opacity = '1';
  }
}

// Play a card from hand
function playObjectCard(cardIndex) {
  const currentPlayer = getObjectsCurrentPlayer();
  const hand = playerHands[currentPlayer.name];
  
  // Remove card from hand and add to played (NO refilling - only refill after round ends)
  const card = hand.splice(cardIndex, 1)[0];
  gameState.objectCardsPlayed.push(card);
  
  // Move to next player
  objectsCurrentPlayerIndex = (objectsCurrentPlayerIndex + 1) % gameState.players.length;
  
  // Check if ALL players have no cards left (all cards used up - rare case)
  const allPlayersOutOfCards = gameState.players.every(p => {
    const pHand = playerHands[p.name];
    return !pHand || pHand.length === 0;
  });
  
  if (allPlayersOutOfCards) {
    // All cards used! Last player must name an object
    const lastPlayer = getObjectsCurrentPlayer();
    
    showPrivacyOverlay(
      `All cards used! Pass to ${lastPlayer.name} to name an object or call FALSE.`,
      () => {
        document.getElementById('claim-know-card-count').textContent = gameState.objectCardsPlayed.length;
        
        const cardsContainer = document.getElementById('claim-know-cards');
        cardsContainer.innerHTML = '';
        gameState.objectCardsPlayed.forEach(card => {
          cardsContainer.appendChild(createCardElement(card, false));
        });
        
        document.getElementById('objects-object-input').value = '';
        document.getElementById('objects-object-input').placeholder = "All cards used! Enter the object name...";
        showScreen('objects-claim-know-screen');
      }
    );
    return;
  }
  
  updateObjectsTurnScreen();
  
  // Show privacy overlay for next player (if they have cards)
  const nextPlayer = getObjectsCurrentPlayer();
  const nextHand = playerHands[nextPlayer.name];
  if (nextHand && nextHand.length > 0) {
    showPrivacyOverlay(
      `Pass the device to ${nextPlayer.name}.`,
      () => showScreen('objects-turn-screen')
    );
  } else {
    // Next player has no cards - skip to next one who has cards
    let attempts = 0;
    while (attempts < gameState.players.length) {
      objectsCurrentPlayerIndex = (objectsCurrentPlayerIndex + 1) % gameState.players.length;
      const checkPlayer = getObjectsCurrentPlayer();
      const checkHand = playerHands[checkPlayer.name];
      if (checkHand && checkHand.length > 0) break;
      attempts++;
    }
    updateObjectsTurnScreen();
    const skipPlayer = getObjectsCurrentPlayer();
    showPrivacyOverlay(
      `Pass the device to ${skipPlayer.name}.`,
      () => showScreen('objects-turn-screen')
    );
  }
}

// Show Call False screen
function showCallFalseScreen() {
  const previousPlayer = getObjectsPreviousPlayer();
  
  document.getElementById('call-false-prev-player').textContent = previousPlayer.name;
  
  const cardsContainer = document.getElementById('call-false-cards');
  cardsContainer.innerHTML = '';
  if (gameState.objectCardsPlayed.length === 0) {
    cardsContainer.innerHTML = '<p style="color: var(--color-noir-silver);">No cards played in this round yet.</p>';
  } else {
    gameState.objectCardsPlayed.forEach(card => {
      cardsContainer.appendChild(createCardElement(card, false));
    });
  }
  
  showScreen('objects-call-false-screen');
}

// Confirm FALSE call - now passes device to previous player to name object
document.getElementById('objects-false-confirm-btn').addEventListener('click', () => {
  const currentPlayer = getObjectsCurrentPlayer();
  const previousPlayer = getObjectsPreviousPlayer();
  
  // Store who called false for scoring
  gameState.currentPlayerClaimed = 'false';
  gameState.falseCaller = currentPlayer.name;
  
  // Pass device to previous player to enter object name
  showPrivacyOverlay(
    `Pass the device to ${previousPlayer.name} to name the object.`,
    () => {
      document.getElementById('claim-know-card-count').textContent = gameState.objectCardsPlayed.length;
      
      const cardsContainer = document.getElementById('claim-know-cards');
      cardsContainer.innerHTML = '';
      gameState.objectCardsPlayed.forEach(card => {
        cardsContainer.appendChild(createCardElement(card, false));
      });
      
      document.getElementById('objects-object-input').value = '';
      document.getElementById('objects-object-input').placeholder = "Enter the object name you're thinking of...";
      showScreen('objects-claim-know-screen');
    }
  );
});

// Cancel FALSE call
document.getElementById('objects-false-cancel-btn').addEventListener('click', () => {
  updateObjectsTurnScreen();
  showScreen('objects-turn-screen');
});

// Submit answer for object (called after FALSE or when all cards used)
document.getElementById('objects-submit-answer-btn').addEventListener('click', () => {
  const answer = document.getElementById('objects-object-input').value.trim();
  if (!answer) {
    alert('Please enter an object name!');
    return;
  }
  
  gameState.claimedObjectName = answer;
  gameState.currentPlayerClaimed = 'knows';
  
  // Check if this is the "all cards used" case (no FALSE caller)
  // In that case, we don't have a falseCaller
  const hasFalseCaller = gameState.falseCaller && gameState.falseCaller.length > 0;
  
  if (!hasFalseCaller) {
    // All cards used scenario - just show verification screen
    // We'll handle scoring differently based on verification
    document.getElementById('verified-object-name').textContent = answer;
    
    const verificationCards = document.getElementById('verification-cards');
    verificationCards.innerHTML = '';
    gameState.objectCardsPlayed.forEach(card => {
      verificationCards.appendChild(createCardElement(card, false));
    });
    
    showScreen('objects-verification-screen');
    return;
  }
  
  // Normal FALSE call scenario - proceed to verification
  document.getElementById('verified-object-name').textContent = answer;
  
  const verificationCards = document.getElementById('verification-cards');
  verificationCards.innerHTML = '';
  gameState.objectCardsPlayed.forEach(card => {
    verificationCards.appendChild(createCardElement(card, false));
  });
  
  showScreen('objects-verification-screen');
});

// Verify answer - Object is VALID
document.getElementById('objects-verify-true-btn').addEventListener('click', () => {
  const previousPlayer = getObjectsPreviousPlayer(); // The one who named the object
  const cardCount = gameState.objectCardsPlayed.length;
  
  // Check if there was a FALSE caller
  const hasFalseCaller = gameState.falseCaller && gameState.falseCaller.length > 0;
  
  if (hasFalseCaller) {
    // Normal FALSE call scenario
    const currentPlayer = getObjectsCurrentPlayer(); // The one who called FALSE
    
    // Previous player (who claimed to know) wins: gains N points
    previousPlayer.score += cardCount;
    
    // FALSE caller loses 1 point
    currentPlayer.score -= 1;
    
    // Record in history
    gameState.objectsRoundHistory.push({
      cards: [...gameState.objectCardsPlayed],
      claimedObject: gameState.claimedObjectName,
      isValid: true,
      caller: currentPlayer.name,
      namer: previousPlayer.name,
      points: cardCount,
      noCaller: false
    });
    
    // Show results
    showObjectsResults(true, 
      `${previousPlayer.name} correctly identified the object!`, 
      `${previousPlayer.name} gains +${cardCount} points, ${currentPlayer.name} loses -1 point`);
  } else {
    // All cards used case - no FALSE caller
    // Only the namer gains points, no one loses
    previousPlayer.score += cardCount;
    
    // Record in history
    gameState.objectsRoundHistory.push({
      cards: [...gameState.objectCardsPlayed],
      claimedObject: gameState.claimedObjectName,
      isValid: true,
      caller: null,
      namer: previousPlayer.name,
      points: cardCount,
      noCaller: true
    });
    
    // Show results
    showObjectsResults(true, 
      `${previousPlayer.name} correctly identified the object (all cards used)!`, 
      `${previousPlayer.name} gains +${cardCount} points`);
  }
});

// Verify answer - Object is FALSE
document.getElementById('objects-verify-false-btn').addEventListener('click', () => {
  const previousPlayer = getObjectsPreviousPlayer(); // The one who named the object
  const cardCount = gameState.objectCardsPlayed.length;
  
  // Check if there was a FALSE caller
  const hasFalseCaller = gameState.falseCaller && gameState.falseCaller.length > 0;
  
  if (hasFalseCaller) {
    // Normal FALSE call scenario
    const currentPlayer = getObjectsCurrentPlayer(); // The one who called FALSE
    
    // Previous player (who claimed to know) loses: loses N points
    previousPlayer.score -= cardCount;
    
    // FALSE caller gains 1 point
    currentPlayer.score += 1;
    
    // Record in history
    gameState.objectsRoundHistory.push({
      cards: [...gameState.objectCardsPlayed],
      claimedObject: gameState.claimedObjectName,
      isValid: false,
      caller: currentPlayer.name,
      namer: previousPlayer.name,
      points: -cardCount,
      noCaller: false
    });
    
    // Show results
    showObjectsResults(false, 
      `${previousPlayer.name}'s object was FALSE!`,
      `${previousPlayer.name} loses ${cardCount} points, ${currentPlayer.name} gains +1 point`);
  } else {
    // All cards used case - no FALSE caller
    // No points change (since no one called false and was wrong)
    // Record in history
    gameState.objectsRoundHistory.push({
      cards: [...gameState.objectCardsPlayed],
      claimedObject: gameState.claimedObjectName,
      isValid: false,
      caller: null,
      namer: previousPlayer.name,
      points: 0,
      noCaller: true
    });
    
    // Show results
    showObjectsResults(false, 
      `${previousPlayer.name}'s object was FALSE (all cards used)!`,
      `No points changed (no one called FALSE)`);
  }
});

// Show Objects results
function showObjectsResults(success, resultTitle, scoringDetails) {
  const resultEl = document.getElementById('objects-result-text');
  resultEl.textContent = success ? '✓ OBJECT VERIFIED' : '✗ OBJECT REJECTED';
  resultEl.className = `reveal-result ${success ? 'truth' : 'lie'}`;
  
  // Show cards
  const cardsContainer = document.getElementById('objects-result-cards');
  cardsContainer.innerHTML = '';
  gameState.objectCardsPlayed.forEach(card => {
    cardsContainer.appendChild(createCardElement(card, false));
  });
  
  // Show claimed object
  const claimedText = document.getElementById('objects-claimed-object-text');
  claimedText.innerHTML = `<strong>Claimed Object:</strong> <span class="text-red">${gameState.claimedObjectName}</span>`;
  
  // Show scoring details
  const scoringEl = document.getElementById('objects-scoring-details');
  scoringEl.innerHTML = `<p>${scoringDetails}</p>`;
  
  // Update scoreboard
  document.getElementById('objects-results-goal').textContent = gameState.pointGoal;
  updateObjectsScoreboard('objects-results-scoreboard');
  
  // Check for winner
  const winner = gameState.players.find(p => p.score >= gameState.pointGoal);
  if (winner) {
    document.getElementById('objects-next-round-btn').classList.add('hidden');
    document.getElementById('objects-end-game-btn').classList.remove('hidden');
  } else {
    document.getElementById('objects-next-round-btn').classList.remove('hidden');
    document.getElementById('objects-end-game-btn').classList.add('hidden');
  }
  
  showScreen('objects-results-screen');
}

function updateObjectsScoreboard(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  
  gameState.players.forEach((player, index) => {
    const scoreItem = document.createElement('div');
    scoreItem.className = 'score-item';
    
    if (index === objectsCurrentPlayerIndex) {
      scoreItem.classList.add('current-storyteller');
    }
    
    scoreItem.innerHTML = `
      <span class="player-name">${player.name}</span>
      <span class="player-score">${player.score}</span>
    `;
    
    container.appendChild(scoreItem);
  });
}

// Objects mode button handlers
document.getElementById('objects-play-card-btn').addEventListener('click', () => {
  // Play first card from hand automatically (or could show selection)
  const currentPlayer = getObjectsCurrentPlayer();
  const hand = playerHands[currentPlayer.name];
  if (hand && hand.length > 0) {
    playObjectCard(0);
  } else {
    // No cards - must call FALSE instead
    alert('You have no cards left! You must call FALSE.');
    showCallFalseScreen();
  }
});

document.getElementById('objects-call-false-btn').addEventListener('click', () => {
  // Must have at least one card played to call false
  if (gameState.objectCardsPlayed.length === 0) {
    alert('At least one card must be played before calling FALSE!');
    return;
  }
  showCallFalseScreen();
});

// Objects next round
document.getElementById('objects-next-round-btn').addEventListener('click', () => {
  gameState.currentRound++;
  startObjectsRound();
});

// Objects end game - show final results with all rounds history
document.getElementById('objects-end-game-btn').addEventListener('click', () => {
  showObjectsFinalResults();
});

function showObjectsFinalResults() {
  // Sort players by score (descending)
  const sortedPlayers = [...gameState.players].sort((a, b) => b.score - a.score);

  const finalScoreboardEl = document.getElementById('objects-final-scoreboard-list');
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

  // Show history
  const historyContainer = document.getElementById('objects-history-container');
  historyContainer.innerHTML = '';

  if (gameState.objectsRoundHistory.length === 0) {
    historyContainer.innerHTML = '<p style="text-align: center; color: var(--color-noir-silver);">No rounds played.</p>';
  } else {
    gameState.objectsRoundHistory.forEach((round, index) => {
      const roundDiv = document.createElement('div');
      roundDiv.className = 'game-info';
      roundDiv.style.marginBottom = 'var(--spacing-md)';
      
      // Create cards HTML
      let cardsHtml = '<div class="card-grid" style="grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: var(--spacing-sm);">';
      round.cards.forEach(card => {
        cardsHtml += `
          <div class="card" style="width: 150px; height: 200px; padding: var(--spacing-sm);">
            <div class="card-category" style="font-size: 0.65rem;">${card.category}</div>
            <div class="card-title" style="font-size: 1rem;">${card.name}</div>
          </div>
        `;
      });
      cardsHtml += '</div>';

      const objectColor = round.isValid ? 'var(--color-noir-white)' : 'var(--color-noir-red)';
      const objectLabel = round.isValid ? '✓ VERIFIED' : '✗ FALSE';
      
      // Handle no caller case (all cards used)
      const callerText = round.noCaller ? 'No caller (all cards used)' : `Caller: ${round.caller}`;
      
      roundDiv.innerHTML = `
        <h3 style="margin-bottom: var(--spacing-sm);">Round ${index + 1}</h3>
        <p style="margin-bottom: var(--spacing-xs);">
          ${callerText} | 
          <strong>Namer:</strong> ${round.namer}
        </p>
        <p style="margin-bottom: var(--spacing-sm);">
          <strong>Object:</strong> <span style="color: ${objectColor}; font-weight: bold;">${round.claimedObject}</span>
          <span style="color: ${objectColor}; margin-left: var(--spacing-sm);">${objectLabel}</span>
        </p>
        ${cardsHtml}
      `;
      
      historyContainer.appendChild(roundDiv);
    });
  }

  showScreen('objects-final-screen');
}

// Play Again handler for Objects mode
document.getElementById('objects-play-again-btn').addEventListener('click', () => {
  // Reset to mode selection
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
    gameMode: 'classic',
    storytellersUsedRedraw: [],
    objectCardsPlayed: [],
    currentPlayerClaimed: null,
    claimedObjectName: null,
    objectsRoundHistory: []
  };

  // Reset Objects mode state
  objectsDeck = [];
  playerHands = {};
  objectsCurrentPlayerIndex = 0;

  hideOptionsButton();
  showScreen('mode-selection-screen');
});

// --- Demo Manager ---
const DemoManager = {
  TIME_LIMIT: 600, // 10 minutes (in seconds)
  STORAGE_KEY: 'believe_game_demo_state', // Change per game
  timerInterval: null,
  timeLeft: 600,

  init() {
    this.loadState();
    this.startTimer();
    this.updateDisplay();

    // Event listeners
    document.getElementById('demo-timer')?.addEventListener('click', () => {
      document.getElementById('demo-info-modal')?.classList.remove('hidden');
    });
    document.getElementById('btn-close-demo-info')?.addEventListener('click', () => {
      document.getElementById('demo-info-modal')?.classList.add('hidden');
    });
  },

  loadState() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    const today = new Date().toLocaleDateString();
    if (saved) {
      const data = JSON.parse(saved);
      this.timeLeft = data.lastUpdateDate === today ? data.timeLeft : this.TIME_LIMIT;
    } else {
      this.timeLeft = this.TIME_LIMIT;
    }
    this.saveState();
  },

  saveState() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify({
      timeLeft: this.timeLeft,
      lastUpdateDate: new Date().toLocaleDateString()
    }));
  },

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.updateDisplay();
        if (this.timeLeft % 10 === 0) this.saveState();
        if (this.timeLeft <= 0) this.onTimeExpired();
      }
    }, 1000);
  },

  updateDisplay() {
    const mins = Math.floor(this.timeLeft / 60);
    const secs = this.timeLeft % 60;
    const el = document.getElementById('demo-time-left');
    if (el) el.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
  },

  onTimeExpired() {
    clearInterval(this.timerInterval);
    this.saveState();
    // Blur the app and show modal
    document.getElementById('time-expired-modal')?.classList.remove('hidden');
    // Hide options button to prevent escape
    document.getElementById('options-button')?.classList.add('hidden');
  }
};

// Initialize Demo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    DemoManager.init();
  });
} else {
  DemoManager.init();
}

