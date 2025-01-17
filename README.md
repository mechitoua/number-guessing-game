# Number Guessing Game

A simple interactive command-line number guessing game implemented in TypeScript using Deno. The game generates a random number between 1 and 100, and players need to guess it within the allowed number of attempts based on their chosen difficulty level.

## Features

- Random number generation between 1 and 100
- Three difficulty levels
- Interactive command-line interface
- Helpful hints during gameplay
- Attempt tracking

## Game Difficulty Levels

1. **Easy Mode**

   - 10 chances to guess the number
   - Perfect for beginners

2. **Medium Mode**

   - 5 chances to guess the number
   - Balanced challenge

3. **Hard Mode**
   - 3 chances to guess the number
   - For experienced players

## How to Play

1. Run the game using Deno
2. Select your preferred difficulty level (1-3)
3. Enter your guess when prompted
4. Receive hints whether your guess is too high or too low
5. Keep guessing until you find the correct number or run out of attempts

## Game Mechanics

- The game generates a random number between 1 and 100
- After each guess, you'll receive hints:
  - If your guess is too high, you'll be told to go lower
  - If your guess is too low, you'll be told to go higher
- The game ends when you either:
  - Correctly guess the number (Win!)
  - Run out of attempts (Game Over)

## Technical Details

- Language: TypeScript
- Runtime: Deno
- Main functions:
  - `createRandomNumbers()`: Generates random numbers
  - `startGame()`: Initiates the game and handles difficulty selection
  - `playGame()`: Manages the game loop and user interactions

## Running the Game

1. Make sure you have Deno installed
2. Clone this repository
3. Navigate to the project directory
4. Run the game:

```bash
deno run --allow-read src/main.ts
```

## Project Challenge Reference

[roadmap.sh challenge](https://roadmap.sh/projects/number-guessing-game)
