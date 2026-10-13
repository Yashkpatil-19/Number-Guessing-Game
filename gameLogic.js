/**
 * Number Guessing Game Logic
 * 
 * Core Algorithm:
 * ----------------
 * const max = prompt("enter Your max number ");
 * const random = Math.floor(Math.random() * max ) + 1;
 * let guess = prompt("guess the Number ");
 * while(true){
 *     if(guess == "quit"){
 *         console.log("you quit the game");
 *         break;
 *     }
 *     if(guess == random){
 *         console.log("you guessed the number correctly", random);
 *         break;
 *     } else if(guess > random){
 *         guess = prompt("hint: your guess is larger than the Number, please try again");
 *     } else if(guess < random){
 *         guess = prompt("hint :your guess is smaller than the Number, please try again");
 *     } else {
 *         guess = prompt("wromg guess, please try again");
 *     }
 * }
 */

class GuessingGame {
  constructor(max = 100) {
    this.max = Math.max(5, Math.floor(Number(max)) || 100);
    this.random = Math.floor(Math.random() * this.max) + 1;
    this.currentMin = 1;
    this.currentMax = this.max;
    this.attempts = 0;
    this.isOver = false;
    this.history = [];
  }

  evaluate(rawInput) {
    if (this.isOver) {
      return { status: 'ended', message: 'Game has already ended. Start a new game.' };
    }

    const inputStr = String(rawInput).trim().toLowerCase();

    // 1. Quit condition
    if (inputStr === 'quit' || inputStr === 'q') {
      this.isOver = true;
      return {
        status: 'quit',
        message: 'you quit the game',
        random: this.random,
        isGameOver: true,
        isVictory: false,
      };
    }

    const guess = Number(inputStr);

    // 2. Invalid input check
    if (isNaN(guess) || inputStr === '' || !Number.isInteger(guess)) {
      return {
        status: 'invalid',
        message: 'wromg guess, please try again',
        isGameOver: false,
        isVictory: false,
      };
    }

    this.attempts++;

    // 3. Correct guess
    if (guess === this.random) {
      this.isOver = true;
      return {
        status: 'correct',
        message: `you guessed the number correctly, ${this.random}`,
        guess,
        random: this.random,
        attempts: this.attempts,
        isGameOver: true,
        isVictory: true,
      };
    }

    // 4. Larger hint
    if (guess > this.random) {
      if (guess < this.currentMax) this.currentMax = guess - 1;
      const diff = guess - this.random;
      this.history.push({ guess, hint: 'larger', diff });
      return {
        status: 'larger',
        message: 'hint: your guess is larger than the Number, please try again',
        guess,
        diff,
        currentMin: this.currentMin,
        currentMax: this.currentMax,
        isGameOver: false,
        isVictory: false,
      };
    }

    // 5. Smaller hint
    if (guess < this.random) {
      if (guess > this.currentMin) this.currentMin = guess + 1;
      const diff = this.random - guess;
      this.history.push({ guess, hint: 'smaller', diff });
      return {
        status: 'smaller',
        message: 'hint :your guess is smaller than the Number, please try again',
        guess,
        diff,
        currentMin: this.currentMin,
        currentMax: this.currentMax,
        isGameOver: false,
        isVictory: false,
      };
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GuessingGame };
}
