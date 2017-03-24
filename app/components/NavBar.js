import React from 'react';

export default class NavBar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="#">Menu Plus</a>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-item nav-link active" href="#">Login <span className="sr-only">(current)</span></a>
                  <a className="nav-item nav-link" href="#">Sign up</a>
                </div>
              </div>
            </nav>
        );
    }
}
