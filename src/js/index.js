import * as PIXI from 'pixi.js';
import Player from './Player/Player';
import { app } from './app/app';
import Asteroid from './Asteroid/Asteroid';
import getRandomInt from './helpers/getRandomInt';
import Stage from './Stage/Stage';
import stages from './Stage/stages.json';


function initGame()
{
    const stage = new Stage(stages[0]);

    stage.init();
}


// Load them google fonts before starting...
window.WebFontConfig = {
    google: {
        families: ['Press Start 2P'],
    },
    active()
    {
        initGame();
    }
};

/* eslint-disable */
// include the web-font loader script
(function() {
    const wf = document.createElement('script');
    wf.src = `${document.location.protocol === 'https:' ? 'https' : 'http'
    }://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js`;
    wf.type = 'text/javascript';
    wf.async = 'true';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
}());
