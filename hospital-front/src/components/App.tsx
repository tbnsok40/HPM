import React, {Suspense} from 'react';
import {Route} from 'react-router-dom';
import '../style/App.css';
import Main from "./Main";
import TestPage from "./TestPage"


function  App() {
    return (
        <div className="App">
            <Suspense fallback={<div>Loading...</div>}>

                <header className="App-header">
                    <Route path="/" component={Main} exact/>
                    <Route path="/testpage" component={TestPage} exact/>
                </header>
            </Suspense>
        </div>
    );
}

export default App;
