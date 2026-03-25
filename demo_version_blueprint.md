# 🛠️ Demo Version Blueprint

This blueprint describes the core modifications required to add a restricted "Demo Version" to your games.

## 1. HTML Additions ([index.html](file:///Users/simonthomasallmer/Gemini/Antigravity/Simon%20Allmer%20App/Allmer%20Games/Elements%20Demo/index.html))

### Demo HUD Elements
Add these right at the start of your main application container (`#app`):
```html
<!-- Demo Timer -->
<div id="demo-timer" class="demo-timer">
    <span class="demo-label">DEMO</span>
    <span id="demo-time-left">10:00</span>
</div>
```

### Modals
Add these at the end of your main container, outside other screens:
```html
<!-- Demo Info Modal -->
<div id="demo-info-modal" class="modal hidden">
    <div class="modal-content demo-modal">
        <h2 class="arcade-title">ARCADE SUBSCRIPTION</h2>
        <p class="arcade-text">ACCESS UNLIMITED PLAY WITH AN ARCADE SUBSCRIPTION.</p>
        <a href="https://simonallmer.com/aboutarcade" class="btn-primary" style="text-decoration: none;">LEARN MORE</a>
        <button id="btn-close-demo-info" class="btn-text">CLOSE</button>
    </div>
</div>

<!-- Time Expired Modal -->
<div id="time-expired-modal" class="modal hidden">
    <div class="modal-content demo-modal">
        <h2 class="expired-title">Your daily demo time has ended.</h2>
        <p class="expired-text">Continue playing and unlock all features with an Arcade Subscription.</p>
        <a href="https://simonallmer.com/arcade" class="btn-primary" style="text-decoration: none;">SUBSCRIBE</a>
    </div>
</div>
```

## 2. Logic Implementation ([script.js](file:///Users/simonthomasallmer/Gemini/Antigravity/Simon%20Allmer%20App/Allmer%20Games/Elements%20Demo/script.js))

Add the `DemoManager` object and call `DemoManager.init()` in your main initialization function.

```javascript
// --- Demo Manager ---
const DemoManager = {
    TIME_LIMIT: 600, // 10 minutes (in seconds)
    STORAGE_KEY: 'game_name_demo_state', // Change per game
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
        // Trigger game stop/blur logic here
        document.getElementById('time-expired-modal')?.classList.remove('hidden');
    }
};
```

## 3. Styling ([style.css](file:///Users/simonthomasallmer/Gemini/Antigravity/Simon%20Allmer%20App/Allmer%20Games/Elements%20Demo/style.css))

Apply these styles to match the premium Demo aesthetic:

```css
/* Demo Version Label */
.demo-version-label {
    font-size: 0.9rem;
    letter-spacing: 4px;
    color: #dfc8a0; /* Gold */
    margin-bottom: 2rem;
    font-weight: 700;
}

/* Permanent Timer HUD */
.demo-timer {
    position: fixed; top: 20px; left: 20px;
    background: #2a2620; color: #dfc8a0; padding: 8px 18px; border-radius: 8px;
    z-index: 1000; cursor: pointer;
}

/* Restricted Buttons */
.btn-count.restricted {
    opacity: 0.4; filter: grayscale(1); cursor: pointer;
}

/* Modals */
.demo-modal {
    background: #1a1815 !important; border: 1px solid #dfc8a0 !important;
}
#time-expired-modal { backdrop-filter: blur(15px); }
```
