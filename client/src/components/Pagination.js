import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import { ContextValue } from '../context/Context';


const PaginationBand = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  height: 5%;
  width: 100%;
  background-color: ${props => props.theme.carouselColor};
  border-radius: 10px
`

const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background:none;
  cursor: pointer;
  transition: transform 0.1s;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.9);
  }
  
  &::before {
    content: "";
    width: 0.8em;
    height: 0.8em;
    border: solid black;
    border-width: ${props => props.borderWidth};
    transform: rotate(135deg);
  }
`;

const QuestionContainer = styled.div`
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 40px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Question = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height:100%;
`;

const Option = styled.button`
  display: flex;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  border-radius: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: lightgrey;
  }
`;

const OptionText = styled.p`
  font-size: 16px;
  color: #333;
`;

const OptionCheck = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 2px solid lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const PageNumbers = styled.ul`
list-style: none;
display: flex;
`

const PageNumber = styled.li`
padding: 10px;
margin-left: 5px;
margin-right: 5px;
border:1px;
cursor: pointer;
color: ${props => props.active ? "blue" : "black"};

position: relative;
&:after {
  content: "";
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  height: 3px;
  background-color: black;
  width: 100%;
  display: ${props => props.active ? "block" : "none"};
}
`


function Pagination() {
  const [state, dispatch] = ContextValue();
  const [currentPage, setCurrentPage] = useState(0);

  const [pageNumberLimit, setpageNumberLimit] = useState(20);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(20);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const [isSubmitted, setSubmitted] = useState(false);


  const currentQuiz = state.currentQuiz;


  const questions = [
    {
      id: 1,
      question: "What is your favorite color? sfjuejufjus jseufjusjef jusefnseju fhnesujfsheuj hfesuh nufhseu hfuseh fusheuf husehf usehfu hseufn ujsehfnujsejhuej hfuheshfhuseu hesuhf husehufhuesufj esfısekfhju esfh uısehfj",
      options: ["Red", "Green", "Blue","frfr","rgfrf","rglofsolefol","efokkoes","fekofkeo","eoköfoelkf","feolfökoek"]
    },
    {
      id: 2,
      question: "What is your favorite animal?",
      options: ["Cat", "Dog", "Elephant", "Giraffe"]
    },
    {
      id: 3,
      question: "What is your favorite food?",
      options: ["Pizza", "Sushi", "Steak", "Tacos"]
    },
    {
      id: 4,
      question: "What is your favorite color?",
      options: ["Red", "Green", "Blue", "Yellow"]
    },
    {
      id: 5,
      question: "What is your favorite animal?",
      options: ["Cat", "Dog", "Elephant", "Giraffe"]
    },
    {
      id: 6,
      question: "What is your favorite food?",
      options: ["Pizza", "Sushi", "Steak", "Tacos"]
    },
    {
      id: 7,
      question: "What is your favorite color?",
      options: ["Red", "Green", "Blue", "Yellow"]
    },
    {
      id: 8,
      question: "What is your favorite animal?",
      options: ["Cat", "Dog", "Elephant", "Giraffe"]
    },
    {
      id: 9,
      question: "What is your favorite food?",
      options: ["Pizza", "Sushi", "Steak", "Tacos"]
    },
    {
      id: 10,
      question: "What is your favorite color?",
      options: ["Red", "Green", "Blue", "Yellow"]
    },
    {
      id: 11,
      question: "What is your favorite animal?",
      options: ["Cat", "Dog", "Elephant", "Giraffe"]
    },
    {
      id: 12,
      question: "What is your favorite food?",
      options: ["Pizza", "Sushi", "Steak", "Tacos"]
    },
    {
      id: 13,
      question: "What is your favorite color?",
      options: ["Red", "Green", "Blue", "Yellow"]
    },
    {
      id: 14,
      question: "What is your favorite animal?",
      options: ["Cat", "Dog", "Elephant", "Giraffe"]
    },
    {
      id: 15,
      question: "What is your favorite food?",
      options: ["Pizza", "Sushi", "Steak", "Tacos"]
    },
    {
      id: 16,
      question: "What is your favorite color?",
      options: ["Red", "Green", "Blue", "Yellow"]
    },
    {
      id: 17,
      question: "What is your favorite animal?",
      options: ["Cat", "Dog", "Elephant", "Giraffe"]
    },
    {
      id: 18,
      question: "What is your favorite food?",
      options: ["Pizza", "Sushi", "Steak", "Tacos"]
    },
    {
      id: 19,
      question: "What is your favorite color?",
      options: ["Red", "Green", "Blue", "Yellow"]
    },
    {
      id: 20,
      question: "What is your favorite animal?",
      options: ["Cat", "Dog", "Elephant", "Giraffe"]
    },
    {
      id: 21,
      question: "What is your favorite food?",
      options: ["Pizza", "Sushi", "Steak", "Tacos"]
    },
    {
      id: 22,
      question: "What is your favorite color?",
      options: ["Red", "Green", "Blue", "Yellow"]
    },
    {
      id: 23,
      question: "What is your favorite animal?",
      options: ["Cat", "Dog", "Elephant", "Giraffe"]
    },
    {
      id: 24,
      question: "What is your favorite food?",
      options: ["Pizza", "Sushi", "Steak", "Tacos"]
    },
    {
      id: 25,
      question: "What is your favorite color?",
      options: ["Red", "Green", "Blue", "Yellow"]
    },
    {
      id: 26,
      question: "What is your favorite animal?",
      options: ["Cat", "Dog", "Elephant", "Giraffe"]
    },
    {
      id: 27,
      question: "What is your favorite food?",
      options: ["Pizza", "Sushi", "Steak", "Tacos"]
    },
    {
      id: 28,
      question: "What is your favorite color?",
      options: ["Red", "Green", "Blue", "Yellow"]
    },
    {
      id: 29,
      question: "What is your favorite animal?",
      options: ["Cat", "Dog", "Elephant", "Giraffe"]
    },
    {
      id: 30,
      question: "What is your favorite food?",
      options: ["Pizza", "Sushi", "Steak", "Tacos"]
    }
  ];

  const [answers, setAnswers] = useState(Array(currentQuiz.questionDtoList.length).fill(null));


  const questionnumbers = [];
  for (let i=1; i<=Math.ceil(currentQuiz.questionDtoList.length/1); i++){
    questionnumbers.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id) -1 );

  };

  const renderQuestionNumbers = questionnumbers.map((number) => {
    if(number<maxPageNumberLimit+1 && number > minPageNumberLimit){
    return(
      <PageNumber key = {number} id={number} onClick={handleClick} active={currentPage === (number - 1)}>
        {number}
      </PageNumber>
    )
    }
    else{
      return null;
    }
  })



  const handleNext = () => {
    if(currentPage < currentQuiz.questionDtoList.length -1 ){

      setCurrentPage(currentPage + 1);
      if(currentPage + 2 > maxPageNumberLimit){
        setmaxPageNumberLimit(Number(maxPageNumberLimit+ pageNumberLimit));
        setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    }
    
  };

  const handlePrev = () => {
    if (currentPage > 0){
      setCurrentPage(currentPage - 1);

      if((currentPage) % pageNumberLimit == 0){
        setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit - pageNumberLimit)
      }
    }
  };

  const handleAnswerButtonClick = (questionId,currentPage,index) => {
    const newAnswers = [...answers];
    let data = {
      choiceId:currentQuiz.questionDtoList[currentPage].choiceDtoList[index].choiceId,
      questionId: questionId
    }
    //newAnswers[currentPage] = currentQuiz.questionDtoList[currentPage].choiceDtoList[index];
    newAnswers[currentPage] = data;
    setAnswers(newAnswers);
    console.log(newAnswers);
  };

  return (
    <>
    <PaginationBand>
    <PageNumbers>
      <PageNumber><ArrowButton onClick={handlePrev} borderWidth="0 0.2em 0.2em 0"></ArrowButton></PageNumber>
      {renderQuestionNumbers}
      <PageNumber><ArrowButton onClick={handleNext} borderWidth="0.2em 0 0 0.2em"></ArrowButton></PageNumber>
    </PageNumbers>
    </PaginationBand>
    <QuestionContainer>
        <Question>{currentQuiz.questionDtoList[currentPage].questionText}</Question>
        <OptionsContainer>
          {currentQuiz.questionDtoList[currentPage].choiceDtoList.map((option, index) => (
            <Option key={index} onClick={() => handleAnswerButtonClick(currentQuiz.questionDtoList[currentPage].questionId,currentPage,index)}>
              <OptionText>{option.choiceText}</OptionText>
              <OptionCheck>
                <i className="fa fa-check" />
              </OptionCheck>
            </Option>
          ))}
        </OptionsContainer>
      </QuestionContainer>
    </>
  )
}

export default Pagination