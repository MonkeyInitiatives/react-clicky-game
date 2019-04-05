import React from 'react';

const styles = {
    jumbotron: {
        textAlign: "center",
        color: "white",
        backgroundImage: "url('https://media.graytvinc.com/images/810*455/American+Flag44.jpg')"
      }
  };

function Header (){
        return(
            <div className="jumbotron jumbotron-fluid bg-dark">
                <div className="container" style={styles.jumbotron}>
                    <h1 className="display-4">React US Flag Game!</h1>
                    <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
                </div>
            </div>
        );
}

export default Header;