import React from 'react';
import Header from "./pageElements/Header/Header";
import Playground from "./pageElements/Playground/Playground";
import Bottom from "./pageElements/Bottom/Bottom";
import Gui from "./pageElements/Gui/Gui";
import { Routes, Route } from 'react-router-dom';
import Auth from "./pageElements/Auth/Auth";
import Home from "./pageElements/Home/Home";
import Page404 from "./pageElements/404/Page404";
import Profile from "./pageElements/Profile/Profile";
import EntityPage from "./pageElements/EntityPage/EntityPage";
import Content from "./pageElements/Content/Content";

const App = () => {
    return (
        <Gui>
            <Header/>
            <Content>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/:login'} element={<Profile/>}/>
                    <Route path={'/:login/:treeName'} element={<Playground/>}/>
                    <Route path={'/:login/:treeName/:entityId'} element={<EntityPage/>}/>
                    <Route path={'/auth'} element={<Auth/>}/>
                    <Route path={'*'} element={<Page404/>}/>
                </Routes>
            </Content>
            <Bottom/>
        </Gui>
    );
};

export default App;