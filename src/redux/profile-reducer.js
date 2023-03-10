import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST'

let initialState = {
    posts: [
        {id: 1, message: 'it\'s My first post', likesCount: 12},
        {id: 2, message: 'Hi, how are you?', likesCount: 15},
        {id: 3, message: 'Hi, how ?', likesCount: 152},
        {id: 4, message: 'What?', likesCount: 159},
        {id: 5, message: 'What is your name?', likesCount: 1529},
    ],
    profile: null,
    status: ""

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 110,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''

            };
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId),
            }
        default:
            return state;

    }
}

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST, newPostText
    }
}


export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS, status
    }
}

export const deletePost = (postId) => {
    return {
        type: DELETE_POST, postId
    }
}

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await userAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}


/*export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text })*/


export default profileReducer;