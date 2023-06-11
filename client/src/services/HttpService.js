import axios from "axios";
import types from "./types";


const API_URL = "http://localhost:8080";

export const register =  async (author,body) => {
    return axios.post(API_URL + "/auth/"+author+"/register",body);
}

export const login =  async (body,dispatch) => {
    return axios.post(API_URL + "/auth/login",body);
}

/*
export const addExam =  async (body) => {
  return axios.post(API_URL + "/exam",body);
}
*/
export const addClassroom =  async (body) => {
  return axios.post(API_URL + "/classroom",body);
}


export const fetchUser = async (author,path,dispatch) => {
    return axios.get(API_URL+"/"+author+"/"+path).then((res) => {
        if (res.data.id){
            dispatch({
                type: types.FETCH_USER,
                payload:res.data
              })
        }
    }).catch((err) => console.log(err));
}

export const fetchAllUsers = async (dispatch) => {
  return axios.get(API_URL+"/user").then((res) => {
        dispatch({
            type: types.FETCH_ALL_USERS,
            payload:res.data
          })
  }).catch((err) => console.log(err));
}

export const fetchCourses = async (dispatch) => {
  return axios.get(API_URL+"/course").then((res) => {
    dispatch({
        type: types.FETCH_COURSES,
        payload:res.data
      })
  })
}

export const fetchAnalysis = async (id,dispatch) => {
  return axios.get(API_URL+"/student/"+id+"/analysis").then((res) => {
    dispatch({
        type: types.FETCH_ANALYSIS,
        payload:res.data
      })
  })
}

export const fetchStartExam = async (studentId,examId,dispatch) => {
  return axios.post(API_URL+"/student/"+studentId+"/exam/"+examId+"/start").then((res) => {
    dispatch({
        type: types.FETCH_QUIZ,
        payload:res.data.examDto
      })
  })
}

export const addQuestion = async (question,choices) => {
  const input1 = {
    questionDif : 0,
    questionImg : "string",
    questionText : question.questionText,
    subChapterId : 32
  }
  axios.post(API_URL+"/question",input1).then((res) => {
      const questionId =  res.data.questionId;

      choices.forEach((choice) => {
        const input2 = {
          choiceImg : "string",
          choiceText : choice.choiceText,
          correctAnswer : choice.correctAnswer,
          questionId : questionId
        }
        axios.post(API_URL+"/choice",input2)
      });



  }).catch((err) => console.log(err));
}
