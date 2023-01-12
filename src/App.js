import React, {Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";

import UsersContainer from "./components/Users/UsersContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializedApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy( () => import('./components/Dialogs/DialogsContainer'));

//import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
const ProfileContainer = React.lazy( () => import('./components/Profile/ProfileInfo/ProfileContainer'));



class App extends React.Component {
    componentDidMount() {
        this.props.initializedApp()

    }

    render() {
        if (!this.props.initialized)
            return <Preloader/>
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<div> <Preloader/> </div>}>
                        <Routes>
                            <Route exact path='/dialogs' element={<DialogsContainer
                            />}/>
                            <Route path='/profile' element={<ProfileContainer
                            />}/>
                            <Route path='/profile/:userID' element={<ProfileContainer
                            />}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/login' element={<LoginPage/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Setting/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, {initializedApp})(App);

let SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
}

export default SamuraiJSApp;