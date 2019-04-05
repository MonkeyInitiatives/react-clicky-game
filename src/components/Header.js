import React from 'react';

const styles = {
    jumbotron: {
        textAlign: "center",
        color: "white",
        background: "none",
        textShadow: "2px 2px #000000"
      },
    jumbotronContainer: {
        backgroundImage: "url('http://standardflags.com/shop/wp-content/uploads/2013/01/Nylon-American-Flag-closeup-1.jpg')",
        background: "cover"
    }
  };

function Header (){
        return(
            <div className="jumbotron jumbotron-fluid" style={styles.jumbotronContainer}>
                <div className="container" style={styles.jumbotron}>
                    <h1 className="display-4">React US Flag Game!</h1>
                    <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
                </div>
            </div>
        );
}

export default Header;