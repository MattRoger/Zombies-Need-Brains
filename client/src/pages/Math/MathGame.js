import React, { useState } from "react";
import { BrowserRouter as  Router, Route, Switch, Link } from "react-router-dom";
import mathQuestions from "../../utils/mathQuestions";
import styled from "styled-components";
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';




const ProblemWrapper = styled.section`
    text-align: center;
    background-image: url("https://store-images.s-microsoft.com/image/apps.4851.68871528329885281.e03a829d-faa0-4a31-a5d8-785bb8b52288.f024a10d-396d-4f40-b63c-899ef8a8cb04?mode=scale&q=90&h=1080&w=1920")
`

const MathLinks = styled.section`
    position: relative;
    float: left;
    background-color: #ffffff;
    font-size: 25px;
    width: 177px;
    margin: 10px;
    padding: 15px;
`
const Card = styled.section`
    background-color: #ffffff;
    font-size: 45px;
    width: 60px;
    margin: 0 auto;
    padding: 16px;
    border: 2px solid black;
`
const OperatorCard = styled.section`
    background-color: #ffffff;
    font-size: 45px;
    margin: 0 auto;
    border: 2px solid black;
    width: 35px;
    
`
const Answers = styled.section`
    font-size: 25px;
    margin: 0 auto;
    width: 250px;
    height: 90px;
`

let questions = mathQuestions;
let num1 = 0;
let num2 = 0;
let index = 0;
let wrongAnswers = [];
let numWrong = 0;

let operator = "";

let userAnswer = "";
let correctAnswer = "";

const divisionQuestions = [
    {
        num1: 5,
        num2: 1,
        guessed: false
    },
    {
        num1: 9,
        num2: 3,
        guessed: false
    },
    {
        num1: 8,
        num2: 2,
        guessed: false
    },
    {
        num1: 8,
        num2: 1,
        guessed: false
    },
    {
        num1: 10,
        num2: 5,
        guessed: false
    },
    {
        num1: 9,
        num2: 1,
        guessed: false
    },
    {
        num1: 6,
        num2: 3,
        guessed: false
    },
    {
        num1: 2,
        num2: 1,
        guessed: false
    },
    {
        num1: 2,
        num2: 2,
        guessed: false
    },
    {
        num1: 6,
        num2: 2,
        guessed: false
    },
]

const subtractionQuestions = [
    {
        num1: 7,
        num2: 1,
        guessed: false
    },
    {
        num1: 9,
        num2: 2,
        guessed: false
    },
    {
        num1: 10,
        num2: 4,
        guessed: false
    },
    {
        num1: 8,
        num2: 3,
        guessed: false
    },
    {
        num1: 5,
        num2: 4,
        guessed: false
    },
    {
        num1: 1,
        num2: 1,
        guessed: false
    },
    {
        num1: 9,
        num2: 6,
        guessed: false
    },
    {
        num1: 10,
        num2: 9,
        guessed: false
    },
    {
        num1: 2,
        num2: 2,
        guessed: false
    },
    {
        num1: 7,
        num2: 2,
        guessed: false
    },
]

const display = () => {
    return(
        <ProblemWrapper>
            <Card>
                <h3 id="num1">{questions[num1].num1}</h3>
            </Card>
            <OperatorCard>
                <p id="operation">{operator}</p>
            </OperatorCard>
            <Card>
                <h3 id="num2">{questions[num2].num2}</h3>
            </Card>
            <form>
                <input type="text" placeholder="Answer" id="answer"></input>
                <button id="submit" onClick={handleSubmit}>Submit</button>
            </form>
            <div>
                <Button color="danger" onClick={toggle}></Button>
                <Modal isOpen={setModal} toggle={toggle}>
                    <ModalBody>
                    You Win!!
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={toggle}>Okay!</Button>{' '}
                    </ModalFooter>
                </Modal>
                </div>
            <Answers>
                <p id="userAnswer"></p>
                <p id="correctAnswer"></p>
            </Answers>
        </ProblemWrapper>
    )
}

let setModal = false;
const toggle = () => setModal = true;
console.log(setModal);
const nextLevel = () => {
    // alert(`You win: ${numWrong} questions were guessed incorrectly`);
    console.log(Modal);
    setModal= true;
    console.log(setModal);
}
setTimeout(nextLevel, 2000);

const getNewNumber = () => {

    if (index < questions.length - 1){
        //gets next question
        index++
        //send numbers to page 
        document.getElementById("num1").innerHTML = questions[index].num1;
        document.getElementById("num2").innerHTML = questions[index].num2;
    } else {
        //triggers end game
        nextLevel();
    }

}

//on submit of answer
const handleSubmit = (event) => {
    //prevent refresh
    event.preventDefault();
    //gets value that use types in field
    userAnswer = parseInt(document.getElementById("answer").value);

    //equates the math problem
    calculateAnswer();

    //puts user answer and correct answer to the page 
    document.getElementById("userAnswer").innerHTML = `Your Answer: ${userAnswer}`;
    document.getElementById("correctAnswer").innerHTML = `Correct Answer: ${correctAnswer}`

    //clears the input field
    document.getElementById("answer").value = "";
    //generates a new problem 
    console.log(numWrong);
    if (numWrong === 3){
        alert("You lose!");
    }else {
        getNewNumber();
    }
}
const compare = () => {
    const wrong = () => {
        numWrong++;
    }
    const right = () => {
        questions[index].guessed = true;
    }
        correctAnswer === userAnswer ?  right(): wrong();
    }

    console.log(wrongAnswers);
    


const calculateAnswer = () => {
    switch (operator) {
        case "+":
            correctAnswer = questions[index].num1 + questions[index].num2;
            compare();
            break
        case "-":
            correctAnswer = questions[index].num1 - questions[index].num2;
            compare();
            break
        case "x":
            correctAnswer = questions[index].num1 * questions[index].num2;
            compare();
            break
        case "/":
            correctAnswer = questions[index].num1 / questions[index].num2;
            compare();
            break
        default:
            break
    }
}

//the pages MathHome displays buttons 
const MathHome = () => {
    return(
        <>
            <Link to="/math/addition" className="link"><MathLinks>Addition</MathLinks></Link>
            <Link to="/math/subtraction" className="link"><MathLinks>Subtraction</MathLinks></Link>
            <Link to="/math/multiplication" className="link"><MathLinks>Multiplication</MathLinks></Link>
            <Link to="/math/division" className="link"><MathLinks>Division</MathLinks></Link> 
        </>
    )
}


const DisplayProblem = (props) => {
    const url = props.match.url;
    const urlSplit = url.split("/");
    operator = urlSplit[2];
    switch (operator){
        case "addition":
            operator = "+";
            break
        case "subtraction":
            operator = "-";
            questions= subtractionQuestions
            break
        case "multiplication":
            operator = "x";
            break
        case "division":
            operator = "/";
            questions = divisionQuestions;
            break
        default: 
            break;
        }
        return(
           display()

        )
}

//the actual math game component
const MathGame = () => {
    return(
        <>
            <Switch>
            <Route exact path={"/math/"} component={MathHome} />
            <Route exact path={"/math/addition"} component={DisplayProblem} />
            <Route exact path={"/math/subtraction"} component={DisplayProblem} />
            <Route exact path={"/math/multiplication"} component={DisplayProblem} />
            <Route exact path={"/math/division"} component={DisplayProblem} />
            </Switch>
        </>
    )
}
export default MathGame;