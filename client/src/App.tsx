import React from 'react';
import Header from "./pageElements/Header/Header";
import Playground from "./pageElements/Playground/Playground";
import Bottom from "./pageElements/Bottom/Bottom";

const App = () => {
    return (
        <div>
            <Header/>
            <Playground/>
            <Bottom/>
        </div>
    );
};

export default App;