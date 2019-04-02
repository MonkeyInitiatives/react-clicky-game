import React from 'react';

const styles = {
    jumbotron: {
        textAlign: "center",
        color: "white",
      }
  };

function Header (){
        return(
            <div className="jumbotron jumbotron-fluid bg-dark">
                <div className="container" style={styles.jumbotron}>
                    <h1 className="display-4">Clicky Game!</h1>
                    <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
                </div>
            </div>
        );
}

export default Header;