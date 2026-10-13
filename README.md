# 🎯 The Mind Reader - Number Guessing Game

> An arcade-style, gamified Number Guessing Game built with pure JavaScript, dynamic possibilities visualizers, real-time Web Audio sound synthesis, and high-dopamine streak mechanics.

[![Live Demo](https://img.shields.io/badge/demo-play%20online-brightgreen?style=for-the-badge)](https://yashkpatil-19.github.io/Number-Guessing-Game/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 🚀 Live Demo & Quick Play

- **Play on GitHub Pages**: [https://yashkpatil-19.github.io/Number-Guessing-Game/](https://yashkpatil-19.github.io/Number-Guessing-Game/)
- **Run Locally**: Clone the repo and double-click `index.html` in your browser. No server or dependencies required!

---

## 🧠 Core Game Logic

The backend logic faithfully implements the core number guessing loop:

```javascript
const max = prompt("enter Your max number ");
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the Number ");
while (true) {
    if (guess == "quit") {
        console.log("you quit the game");
        break;
    }
    if (guess == random) {
        console.log("you guessed the number correctly", random);
        break;
    } else if (guess > random) {
        guess = prompt("hint: your guess is larger than the Number, please try again");
    } else if (guess < random) {
        guess = prompt("hint :your guess is smaller than the Number, please try again");
    } else {
        guess = prompt("wromg guess, please try again");
    }
}
```

---

## ✨ Addictive Game Features

1. **⚡ Range Squeeze Visualizer**:
   - A dynamic possibility constriction bar showing `[Min Bound ... ? ... Max Bound]`.
   - Watching the remaining possibilities physically shrink from 100 down to 3 creates intense suspense and dopamine buildup.

2. **🔥 Proximity Heat Thermometer**:
   - 🌋 **Boiling Hot** (Within 2 numbers of target — glowing pulse!)
   - 🔥 **Hot Fire** (Within 5 numbers)
   - ☀️ **Warm** (Getting closer)
   - 🧊 **Cool**
   - ❄️ **Freezing Cold**

3. **🔊 Web Audio API Sound Synthesizer**:
   - 100% synthesized sound design in pure JavaScript (zero audio file downloads!).
   - Ascending chime on *Too Low*.
   - Descending bass sweep on *Too High*.
   - Tension heartbeat on *Near Miss*.
   - Triumphant 5-chord arpeggio victory fanfare when solved!

4. **🏆 Streaks, Multipliers & Ranks**:
   - Consecutive win streak counter (🔥 2x, 3x Streak!).
   - Rank progression:
     - *Novice Guesser* 🎯
     - *Number Sleuth* 🔍
     - *Mind Reader* 🧠
     - *Telepathic Oracle* 🔮
     - *Quantum Grandmaster* 👑
   - Persistent stats in `localStorage`: High Score, Best Streak, Total Wins.

5. **🎮 3 Game Modes**:
   - 🎯 **Classic Mode**: Choose custom or preset max numbers (50, 100, 500). Aim for the lowest guess count!
   - 💖 **Survival Mode**: You only have 7 lives! Every wrong guess burns a heart container.
   - ⚡ **60s Blitz Mode**: Race against a ticking 60-second timer to crack as many numbers as you can!

6. **⚡ Instant Replay Loop**:
   - Full-screen canvas confetti explosion on victory.
   - Press **Spacebar** or **Enter** to restart immediately with zero lag.

---

## 💻 Tech Stack

- **Frontend**: HTML5, CSS3 Glassmorphism, Vanilla JavaScript
- **Audio**: Web Audio API (Synthesizer)
- **Visuals**: HTML5 Canvas (Confetti Particles)
- **Storage**: Browser LocalStorage for persistent high scores

---

## 📦 How to Deploy on GitHub Pages

1. Go to your repository on GitHub: `https://github.com/Yashkpatil-19/Number-Guessing-Game`
2. Click **Settings** ➔ **Pages** (on the left sidebar).
3. Under **Branch**, select `main` and root `/` folder.
4. Click **Save**.
5. Your game will be live at `https://yashkpatil-19.github.io/Number-Guessing-Game/`!

---

## 📄 License

MIT License. Free to use, modify, and distribute.
