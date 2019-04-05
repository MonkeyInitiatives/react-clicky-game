import React, { Component } from 'react';
class Navbar extends Component {

    render(){
        return(
            <div>
                <nav className="navbar navbar-dark bg-primary">
                    <a className="navbar-brand" href="/react-clicky-game">Clicky Game</a>
                    {/* <span className="navbar-brand">
                        Click an image to begin!
                    </span> */}
                    <span className="navbar-brand" id="game-scores">
                        Score: 0 | Top Score: 0
                    </span>
                </nav>
            </div>
        );
    }
}

export default Navbar;