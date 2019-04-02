import React, { Component } from 'react';

let imageArray = [];

let currentGameArray = [];

let currentScore = 0;
let highScore = 0;

const styles = {
    container:{
        paddingTop: "50px",
        paddingBottom: "50px",
        display: "flex",
        flexWrap: "wrap",
        margin: "0 auto",
        justifyContent: "center",
    }
};

class Game extends Component {
    
    randomImage = () =>{
        // console.log(imageArray);
        let randomNumber = (Math.floor(Math.random() * 49)+1);
        if(imageArray.includes(randomNumber)){
            return this.randomImage();
        }
        else{
            imageArray.push(randomNumber);
            return "%PUBLIC_URL%/us-flags/"+randomNumber+".png";
        }
    }
    changeImages = () =>{
        const styles = {
            images: {
                height: "150px",
                width: "150px",
                margin: "8px 25px",
                display: "block",
                backgroundImage: 'url(' + this.randomImage() + ')',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }
        };
        return styles.images;
    }

    imageClicked = (e) =>{
        let backgroundURL = e.target.style.backgroundImage;
        if(currentGameArray.includes(backgroundURL)){
            //reset score, clear array, etc
            currentScore=0;
            // highScore=0;
            currentGameArray=[];
            imageArray = [];
            document.getElementById("game-scores").innerHTML = "Score: "+currentScore+" | Top Score: "+highScore;
            this.forceUpdate();
        }
        else{
            currentGameArray.push(backgroundURL);
            currentScore++;
            if(currentScore>=highScore){
                highScore=currentScore;
            }
            document.getElementById("game-scores").innerHTML = "Score: "+currentScore+" | Top Score: "+highScore;
        }
        this.shuffleBoard(document.getElementsByClassName("click-item"));
    };

    shuffleArray = (array) => {
        var newArray = Array.prototype.slice.call( array )
        for (var i = newArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = newArray[i];
            newArray[i] = newArray[j];
            newArray[j] = temp;
        }
        return newArray;
    }

    shuffleBoard = (elems) => {
    
        var divs = elems;
        let newDivs = this.shuffleArray(divs);
        for(let i = 0; i<newDivs.length; i++){
            if(i<4){
                document.getElementById("row1").appendChild(newDivs[i]);
            }
            else if(i<8){
                document.getElementById("row2").appendChild(newDivs[i]);
            }
            else{
                document.getElementById("row3").appendChild(newDivs[i]);
            }
        }
    }

    render() {
        return (
            <main className="container" id="gameBoard" style={styles.container}>
                <div className="row" id="row1">
                    <div role="img" aria-label="click item" className="click-item" style={this.changeImages()} onClick={this.imageClicked}>
                    </div>
                    <div role="img" aria-label="click item" className="click-item" style={this.changeImages()} onClick={this.imageClicked}>
                    </div>
                    <div role="img" aria-label="click item" className="click-item" style={this.changeImages()} onClick={this.imageClicked}>
                    </div>
                    <div role="img" aria-label="click item" className="click-item" style={this.changeImages()} onClick={this.imageClicked}>
                    </div>
                </div>
                <div className="row" id="row2">
                    <div role="img" aria-label="click item" className="click-item" style={this.changeImages()} onClick={this.imageClicked}>
                    </div>
                    <div role="img" aria-label="click item" className="click-item" style={this.changeImages()} onClick={this.imageClicked}>
                    </div>
                    <div role="img" aria-label="click item" className="click-item" style={this.changeImages()} onClick={this.imageClicked}>
                    </div>
                    <div role="img" aria-label="click item" className="click-item" style={this.changeImages()} onClick={this.imageClicked}>
                    </div>
                </div>
                <div className="row" id="row3">
                    <div role="img" aria-label="click item" className="click-item" style={this.changeImages()} onClick={this.imageClicked}>
                    </div>
                    <div role="img" aria-label="click item" className="click-item" style={this.changeImages()} onClick={this.imageClicked}>
                    </div>
                    <div role="img" aria-label="click item" className="click-item" style={this.changeImages()} onClick={this.imageClicked}>
                    </div>
                    <div role="img" aria-label="click item" className="click-item" style={this.changeImages()} onClick={this.imageClicked}>
                    </div>
                </div>
            </main>
        );
    };
}

export default Game;