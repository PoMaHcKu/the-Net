import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Footer from "./components/footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/dialogs/Dialogs";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar props={props.state.navbar}/>

                <div className="app-wrapper-content">
                    <Route path="/profile"
                           render={() => <Profile
                               profilePage={props.state.profileState}
                               addNewPost={props.addNewPost}
                               newPostTextUpdate={props.newPostTextUpdate}/>}/>
                    <Route path="/dialogs"
                           render={() => <Dialogs
                               dialogsState={props.state.dialogsState}
                               updateTextCurrentMessage={props.updateTextCurrentMessage}
                               addNewMessage={props.addNewMessage}
                           />}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};
export default App;