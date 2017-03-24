import React from 'react';
import SearchBar from './SearchBar';

export default class Jumbotron extends React.Component {
    render(){
        return(
            <div className="jumbotron">
                <SearchBar />
            </div>
        );
    }

}
