import * as PIXI from "pixi.js";

const app = new PIXI.Application({ 
    background: '#ffffff', 
    resizeTo: window,
    view: document.getElementById('pixi-canvas'),
});

document.body.appendChild(app.view);

export default app;