import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/home/Home";
import Gallery from "../pages/gallery/Gallery";
import Form from "../pages/form/Form"
import Chat from "../pages/chat/Chat"
import Task from "../pages/tareas/Task";
import Navbar from "./navbar/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/gallery" component={Gallery}></Route>
                    <Route exact path="/form" component={Form}></Route>
                    <Route exact path="/chat" component={Chat}></Route>

                </Switch>
        </BrowserRouter>
    );
}
export default App;
