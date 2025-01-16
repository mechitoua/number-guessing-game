/**
 * function to create random numbers between 1 and 100
 * @returns number
 */
export function createRandomNumbers() {
  return Math.floor(Math.random() * 100)
}

/**
 * function to start the game
 * @returns nothing
 */
export function startGame() {
  console.log('Welcome to the Number Guessing Game!')
  console.log("I'm thinking of a number between 1 and 100.")

  // get user input
  const difficulty = prompt(
    'Please select the difficulty level:\n1. Easy (10 chances)\n2. Medium (5 chances)\n3. Hard (3 chances)'
  )

  // validate user input
  if (isNaN(Number(difficulty))) {
    console.log('Invalid difficulty level. Please select 1, 2, or 3.')
    return
  }

  // set number of chances based on difficulty level
  let numChances = 5

  switch (difficulty) {
    case '1':
      numChances = 10
      break
    case '2':
      numChances = 5
      break
    case '3':
      numChances = 3
      break
    default:
      console.error('Invalid difficulty selected. Defaulting to 5 chances.')
      break
  }

  console.log(`Great! You have selected the ${
    difficulty === '1' ? 'Easy' : difficulty === '2' ? 'Medium' : 'Hard'
  } difficulty level.
Let's start the game!`)

  // calculate the number of attemps the use took to get the right answer
  const numAttemps = numChances - 1

  // start game
  playGame(numChances, numAttemps)
}

/**
 * function to play the game
 * @param numChances - number of chances the user has to guess the number
 * @param numAttemps - number of attemps it took the user to guess the number
 * @returns  nothing
 */
export function playGame(numChances: number, numAttemps: number) {
  // generate random number
  const randomNumber = createRandomNumbers()

  // loop until user wins or loses
  for (let i = 0; i < numChances; i++) {
    // get user input
    const guess = prompt('Enter your guess: ')

    // validate user input
    if (isNaN(Number(guess))) {
      console.log('Invalid input. Please enter a number.')
      continue
    }

    // give hints to the user if the number is too high or too low
    if (Number(guess) > randomNumber) {
      console.log(`Incorrect! The number is less than ${guess}.`)
    } else if (Number(guess) < randomNumber) {
      console.log(`Incorrect! The number is greater than ${guess}.`)
    }

    // check if user won
    if (Number(guess) === randomNumber) {
      console.log(`Congratulations! You won in ${numAttemps} attempts!`)
      return
    }

    // check if user lost
    if (i === numChances - 1) {
      console.log(`Sorry, you lost. The number was ${randomNumber}.`)
      return
    }
  }
}
