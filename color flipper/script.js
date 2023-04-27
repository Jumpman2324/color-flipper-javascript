let colors = ["red", "blue", "green", "white", "black", "purple", "aqua", "yellow",]


function flipper() {
    let randomindex = Math.floor(Math.random() * colors.length);
    let randomColor = colors[randomindex]
    
        document.body.style.backgroundColor = randomColor; }
