/*import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {


    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'it\'s My first post', likesCount: 12},
                {id: 2, message: 'Hi, how are you?', likesCount: 15},
                {id: 3, message: 'Hi, how ?', likesCount: 152},
                {id: 4, message: 'What?', likesCount: 159},
                {id: 5, message: 'What is your name?', likesCount: 1529},
            ],
            newPostText: "it-kamasutra.com",
        },

        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are You?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'next'},
            ],
            newMessageBody: "",
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Svetlana'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Valera'},
                {id: 6, name: 'Viktor'},
            ],
        },

        sidebarPage:{

        }
    },

    _callSubscriber() {
        alert('Это совсем другая функция');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state)
        }
}





export default store;*/