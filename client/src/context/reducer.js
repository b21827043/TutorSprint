import types from '../services/types';

export const initialState = {
    searchedUsers: [],
    currentUser: null,
    allUsers: [],
    posts: [],
    currentPost: null,
    usersPosts: [],
    screenNum: -1,
    user: [],
    userInfo: [],
    currentClassroom:[],
    courses:[],
    analysis:[],
    users:[],
    currentQuiz:{}
};

const reducer = (state, action) => {
    switch(action.type){
        case types.FETCH_POSTS:
            return {
                ...state,
                posts: action.payload,
            };
        case types.FETCH_SINGLE_POST:
            return {
                ...state,
                currentPost: action.payload
            };
        case types.FETCH_USERS:
            return {
                ...state,
                searchedUsers:action.payload
            };
        case types.FETCH_SINGLE_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        case types.CHANGE_SCREEN:
            return {
                ...state, 
                screenNum: action.payload
            };
        case types.FETCH_USERS_POSTS:
            return{
                ...state,
                usersPosts: action.payload
            };
        case types.FETCH_USER:
            return{
                ...state,
                user:action.payload
            };
        case types.FETCH_USER_INFO:
            return{
                ...state,
                userInfo:action.payload
            };
        case types.FETCH_CURRENT_CLASSROOM:
            return{
                ...state,
                currentClassroom:action.payload
            };
        case types.FETCH_COURSES:
            return{
                ...state,
                courses:action.payload
            };
        case types.FETCH_ANALYSIS:
            return{
                ...state,
                analysis:action.payload
            };
        case types.FETCH_ALL_USERS:
            return{
                ...state,
                users:action.payload
            };
        case types.FETCH_QUIZ:
            return{
                ...state,
                currentQuiz:action.payload
            };
        default:
            return {...state};
    }
}

export default reducer;