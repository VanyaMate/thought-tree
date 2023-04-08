import React, {useEffect} from 'react';
import Header from "./pageElements/Header/Header";
import Playground from "./pageElements/Playground/Playground";
import Bottom from "./pageElements/Bottom/Bottom";
import Gui from "./pageElements/Gui/Gui";
import { Routes, Route } from 'react-router-dom';
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Page404 from "./pages/404/Page404";
import Profile from "./pages/Profile/Profile";
import EntityPage from "./pages/EntityPage/EntityPage";
import Content from "./pageElements/Content/Content";
import {useMySelector} from "./hooks/redux.hook";
import {useValidateQuery} from "./store/auth/auth.api";
import AuthValidation from "./pageElements/AuthValidation/AuthValidation";
import {useAuth, useAuthReset} from "./hooks/useAuth";

const App = () => {
    const auth = useMySelector((state) => state.auth);
    const { isFetching, isError, data } = useValidateQuery(auth.bearer, { skip: !auth.bearer });
    const authHandler = useAuth();
    const resetHandler = useAuthReset();

    useEffect(() => {
        if (isError) {
            resetHandler();
            return;
        }

        if (data) {
            authHandler(data);
        }
    }, [data, isError])

    return (
        <Gui>
            <Header/>
            <Content>
                {
                    isFetching
                        ? <AuthValidation/>
                        : <Routes>
                            <Route path={'/'} element={<Home/>}/>
                            <Route path={'/:login'} element={<Profile/>}/>
                            <Route path={'/:login/:treeName'} element={<Playground/>}/>
                            <Route path={'/:login/:treeName/:entityId'} element={<EntityPage/>}/>
                            <Route path={'/auth'} element={<Auth/>}/>
                            <Route path={'*'} element={<Page404/>}/>
                        </Routes>
                }
            </Content>
            <Bottom/>
        </Gui>
    );
};

export default App;