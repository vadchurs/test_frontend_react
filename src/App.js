import './App.css';
import React from 'react'
import UsersContainer from "./components/UsersContainer";
import DescriptionsUserContainer from "./components/DescriptionsUserContainer";
import SearchContainer from "./components/SearchContainer";

class App extends React.Component {

    render = () => {
        return (
            <div className="App">
                <SearchContainer/>
                <UsersContainer/>
                <DescriptionsUserContainer/>
            </div>
        );
    }
}

export default App;
