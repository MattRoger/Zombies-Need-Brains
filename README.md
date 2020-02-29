# Zombies Need Brains :bust_in_silhouette: :video_game:
A spelling and math game where players have to solve problems to restore zomebies brains.

[See The App](https://lit-crag-22298.herokuapp.com/)

## Why Zombies Need Brains?
This project was designed to showcase our knowledge of react.js and its related technologies.

## How to use?
Create an account and choose what game you would like to play.

Use the Guest LogIn

Username:Guest

Password: login!

## Tech/framework used
* React with Hooks
* Reactstrap 
* Styled-Components

## Features
* A user login
* Three spellings games
* Three math games.

## Build Status
MVP. Project still needs work before final release.

## Code style
### How The Spelling Games Work
[demo](https://github.com/MattRoger/screenshots/blob/master/znb/spellTheWord.gif?raw=true)
#### Question and answers array from questions.js
A sample of what the question and answer object looks like.
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
This is the frame work for the game
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
This component renders the players possible choices.
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

### QuestionBar component
This component renders the questions
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
This component is used to track the players lives, score, and what round they are on.
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

## Installation
* :trident: Fork it
* :sheep: Clone it
* Install React.js, reactstrap, styled-components, react-browser-router



## Credits / Contact information
* @MattRoger - Project Idea, created Spelling Games and helped with styling.
  * :man_office_worker: https://mattroger.github.io/
  * :e-mail: mattroger.webdev@gmail.com
  * :man_office_worker: www.linkedin.com/in/matt-roger/
  
  
* @barrett4467 - Created math games. Helped with styling
* @KailerS - Created Login and user page

