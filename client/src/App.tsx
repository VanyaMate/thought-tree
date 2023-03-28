import React from 'react';
import Header from "./pageElements/Header/Header";
import Playground from "./pageElements/Playground/Playground";
import Bottom from "./pageElements/Bottom/Bottom";
import Gui from "./pageElements/Gui/Gui";

const App = () => {
    return (
        <Gui>
            <Header/>
            <Playground/>
            <Bottom/>
        </Gui>
    );
};

export default App;