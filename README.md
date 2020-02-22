# Zombies Need Brains :bust_in_silhouette: :video_game:
A spelling and math game where players have to solve problems to restore zomebies brains.

## Why Zombies Need Brains?
This project was designed to showcase our knowledge of react.js and its related technologies. 

## Build Status
MVP. Project still needs work before final release.

## Code style
### How The Spelling Games Work
#### Question and answers array from questions.js
```javascript
const QAData = [{
    game1: {
        q1: ["Nation", "Defend", "Wisdom", "Globe", "Doze", "Revive", "Solution", "Launch", "Arctic", "Crew"],
        a1: ["Nation", "Defend", "Wisdom", "Globe", "Doze", "Revive", "Solution", "Launch", "Arctic", "Crew"],
        img1: [
            spell + "Nation.png",
            spell + "Defend.png",
            spell + "Wisdom.png",
            spell + "Globe.png",
            spell + "Doze.png",
            spell + "Revive.png",
            spell + "Solution.png",
            spell + "Launch.png",
            spell + "Arctic.png",
            spell + "Crew.png"],
    }
},
```
#### Game Wrapper
```javascript
 const [data, setData] = useState({
        qA: QAData[0],
        score: 0,
        lives: 3,
        round: 1,
        guess: "",
        x: 0,
        question: QAData[0].game1.q1,
        answer: QAData[0].game1.a1,
        image: QAData[0].game1.img1,
        passed: false,

    })
    const { guess, qA, score, answer, question, lives, round, x, passed,image } = data;    
```
### endGame and playAgain functions
```javascript
const EndGame = () => {
        if (passed) {
            return <WinnerWindow
                score={score} />
        } else {
            return <LoserWindow
                playAgain={playAgain}
            />
        }
    }
    const playAgain = event => {
        event.preventDefault()
        visible = true
        let currentRound = round
        currentRound = 1
        let currentLives = lives
        currentLives = 3
        let currentX = x
        currentX = 0
        let currentScore = score
        currentScore = 0
        setData({
            ...data,
            lives: currentLives,
            round: currentRound,
            x: currentX,
            score: currentScore,
        })
    }
```

## Tech/framework used
React with Hooks, Reactstrap, Styled-Components

## Features
A user login, three spellings games, and three math games.

## Installation
* :trident: Fork it
* :sheep: Clone it
* Install React.js, reactstrap, styled-components, react-browser-router

## How to use?
Create an account and choose what game you would like to play.

## Credits / Contact information
* @MattRoger - Project Idea, created Spelling Games and helped with styling.
  * :man_office_worker: https://mattroger.github.io/
  * :e-mail: mattroger.webdev@gmail.com
  * :man_office_worker: www.linkedin.com/in/matt-roger/
  
  
* @barrett4467 - Created math games. Helped with styling
* @KailerS - Created Login and user page

## License
