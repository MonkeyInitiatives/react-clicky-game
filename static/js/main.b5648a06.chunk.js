(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var c=t(0),i=t.n(c),l=t(7),n=t.n(l),r=t(1),m=t(2),o=t(4),s=t(3),d=t(5),g=(t(14),function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},i.a.createElement("a",{className:"navbar-brand",href:"/react-clicky-game"},"React US Flag Game!"),i.a.createElement("span",{className:"navbar-brand",id:"game-scores"},"Score: 0 | Top Score: 0")))}}]),a}(c.Component)),u={jumbotron:{textAlign:"center",color:"black",backgroundImage:"url('http://standardflags.com/shop/wp-content/uploads/2013/01/Nylon-American-Flag-closeup-1.jpg')",backgroundSize:"100% 100%"}};var h=function(){return i.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-dark"},i.a.createElement("div",{className:"container",style:u.jumbotron},i.a.createElement("h1",{className:"display-4"},"React US Flag Game!"),i.a.createElement("p",{className:"lead"},"Click on an image to earn points, but don't click on any more than once!")))},k=[],p=[],b=0,y=0,f={container:{paddingTop:"50px",paddingBottom:"50px",paddingLeft:"0px",paddingRight:"0px",display:"flex",flexWrap:"wrap",margin:"0 auto",justifyContent:"center"}},v=function(e){function a(){var e,t;Object(r.a)(this,a);for(var c=arguments.length,i=new Array(c),l=0;l<c;l++)i[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(i)))).randomImage=function(){var e=Math.floor(49*Math.random())+1;return k.includes(e)?t.randomImage():(k.push(e),"/react-clicky-game/us-flags/"+e+".png")},t.changeImages=function(){return{images:{height:"150px",width:"150px",margin:"8px 8px",padding:"0px",display:"block",backgroundImage:"url("+t.randomImage()+")",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}.images},t.imageClicked=function(e){var a=e.target.style.backgroundImage;p.includes(a)?(b=0,p=[],k=[],document.getElementById("game-scores").innerHTML="Score: "+b+" | Top Score: "+y,t.forceUpdate()):(p.push(a),++b>=y&&(y=b),document.getElementById("game-scores").innerHTML="Score: "+b+" | Top Score: "+y),t.shuffleBoard(document.getElementsByClassName("click-item"))},t.shuffleArray=function(e){for(var a=Array.prototype.slice.call(e),t=a.length-1;t>0;t--){var c=Math.floor(Math.random()*(t+1)),i=a[t];a[t]=a[c],a[c]=i}return a},t.shuffleBoard=function(e){for(var a=e,c=t.shuffleArray(a),i=0;i<c.length;i++)i<4?document.getElementById("row1").appendChild(c[i]):i<8?document.getElementById("row2").appendChild(c[i]):document.getElementById("row3").appendChild(c[i])},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("main",{className:"container",id:"gameBoard",style:f.container},i.a.createElement("div",{className:"row",id:"row1"},i.a.createElement("div",{role:"img","aria-label":"click item",className:"click-item .col-*",style:this.changeImages(),onClick:this.imageClicked}),i.a.createElement("div",{role:"img","aria-label":"click item",className:"click-item .col-*",style:this.changeImages(),onClick:this.imageClicked}),i.a.createElement("div",{role:"img","aria-label":"click item",className:"click-item .col-*",style:this.changeImages(),onClick:this.imageClicked}),i.a.createElement("div",{role:"img","aria-label":"click item",className:"click-item .col-*",style:this.changeImages(),onClick:this.imageClicked})),i.a.createElement("div",{className:"row",id:"row2"},i.a.createElement("div",{role:"img","aria-label":"click item",className:"click-item .col-*",style:this.changeImages(),onClick:this.imageClicked}),i.a.createElement("div",{role:"img","aria-label":"click item",className:"click-item .col-*",style:this.changeImages(),onClick:this.imageClicked}),i.a.createElement("div",{role:"img","aria-label":"click item",className:"click-item .col-*",style:this.changeImages(),onClick:this.imageClicked}),i.a.createElement("div",{role:"img","aria-label":"click item",className:"click-item .col-*",style:this.changeImages(),onClick:this.imageClicked})),i.a.createElement("div",{className:"row",id:"row3"},i.a.createElement("div",{role:"img","aria-label":"click item",className:"click-item .col-*",style:this.changeImages(),onClick:this.imageClicked}),i.a.createElement("div",{role:"img","aria-label":"click item",className:"click-item .col-*",style:this.changeImages(),onClick:this.imageClicked}),i.a.createElement("div",{role:"img","aria-label":"click item",className:"click-item .col-*",style:this.changeImages(),onClick:this.imageClicked}),i.a.createElement("div",{role:"img","aria-label":"click item",className:"click-item .col-*",style:this.changeImages(),onClick:this.imageClicked})))}}]),a}(c.Component),E=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement(g,null),i.a.createElement(h,null),i.a.createElement(v,null))}}]),a}(c.Component);n.a.render(i.a.createElement(E,null),document.getElementById("root"))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.b5648a06.chunk.js.map