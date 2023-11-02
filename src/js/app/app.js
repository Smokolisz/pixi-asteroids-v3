import * as PIXI from "pixi.js";

const app = new PIXI.Application({ 
    background: '#212121', 
    resizeTo: window,
    view: document.getElementById('pixi-canvas'),
});

document.body.appendChild(app.view);


const particleContainer = new PIXI.Container();
app.stage.addChild(particleContainer);

const playersContainer = new PIXI.Container();
app.stage.addChild(playersContainer);

const asteroidsContainer = new PIXI.Container();
app.stage.addChild(asteroidsContainer);

const uiContainer = new PIXI.Container();
app.stage.addChild(uiContainer);

export {
    app,
    particleContainer,
    playersContainer,
    asteroidsContainer,
    uiContainer,
};