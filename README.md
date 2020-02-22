# Zombies Need Brains :bust_in_silhouette: :video_game:
A spelling and math game where players have to solve problems to restore zomebies brains.

[See The App](https://lit-crag-22298.herokuapp.com/)

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
### GameWrapper Component
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
#### endGame and playAgain functions
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
#### handleInputChange and handleFormSubmit functions
Used for when a player inputs a guess
```javascript
const handleInputChange = event => {
        setData({
            ...data,
            guess: event.target.value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        event.target.reset()
        if (guess.toLowerCase().trim() === answer[x].toLowerCase() && round === 10) {
            //   winner
            setData({
                ...data,
                passed: true
            })
            visible = false
        } else if (guess.toLowerCase().trim() === answer[x].toLowerCase()) {
            let currentScore = score
            currentScore++
            let currentRound = round
            currentRound++
            let currentX = x
            currentX++
            setData({
                ...data,
                score: currentScore,
                round: currentRound,
                x: currentX,             
            })
        } else {
            alert("Wrong " + answer[x])
            let currentRound = round
            currentRound++
            let currentLives = lives
            currentLives--
            let currentX = x
            currentX++
            setData({
                ...data,
                lives: currentLives,
                round: currentRound,
                x: currentX,              
            })
        } if (lives === 1) {
            alert("You lose")
            visible = false
        }        
    }
```
#### gameWrapper framework
```javascript
  return (
        <div>
            <GameBox>
                <StatsBar
                    round={round}
                    lives={lives}
                    score={score}
                />
                <h3>Spell The Word!</h3>
                <QuestionBar
                    question={question[x]}
                    image={image[x]}
                />
                <AnswerBar
                    handleInputChange={handleInputChange}
                    handleFormSubmit={handleFormSubmit}
                />
            </GameBox>
            <Results>
                <EndGame passed={true} />
            </Results>
        </div>
    )
```
### AnswerBar component
```javascript
    return (
        <AnswerBox>
            <Form onSubmit={props.handleFormSubmit}>
                <FormGroup >
                    <Input
                        name="text"
                        id="answerBox"
                        onChange={props.handleInputChange}
                        
                        //autoComplete="off" prevents input feild from auto populating
                        autoComplete="off"                        
                                    />
                </FormGroup>
                <Button id="answerbtn" type="submit">Submit</Button>
            </Form>
        </AnswerBox>
    )
}
```

### LoserWindow component
```javascript
  return (
    <div>
      <JumboWrapper>
        <Jumbotron className="jumbo">
          <h1 className="display-3">Out of Brains!</h1>
          <p className="lead">Try to do better next time</p>
          <hr className="my-2" />
          //ZombieDiv is a styled component
          <ZombieDiv>
            <img src={`${process.env.PUBLIC_URL}/assets/zombies/paperzombie.png`} alt="zombie"/>             
          </ZombieDiv>         
            <Button>Thanks For Playing</Button>
            <Button onClick={props.playAgain}>Play Again</Button>
         </Jumbotron>
      </JumboWrapper>
    </div>
  );
}
```
### QuestionBar component
```javascript
 return (
        <div>
            <div className="questionBox">                
                <ImgWrapper>
                    <img src={`${process.env.PUBLIC_URL}/${props.image}`} />                
                </ImgWrapper>
                <h2>{props.question}</h2>
            </div>            
        </div>        
    )
```
### StatsBar component
```javascript
return (
        <div>
            //Status is a styled component
            <Status>
                <div className="statsBar">
                    <p>Round: {props.round}</p>
                    <p>Lives: {props.lives} </p>
                    <p>Score: {props.score} </p>
                </div>
            </Status>
        </div>
    )
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
