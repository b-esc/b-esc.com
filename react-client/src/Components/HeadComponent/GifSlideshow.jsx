import React, {Component} from 'react';
import { Fade } from 'react-slideshow-image';


const heart_gif = "https://i.imgur.com/t4sYRdn.gif";
const ghost_gif = "https://i.imgur.com/9G7yib1.gif";
const skullglime_gif = "https://i.imgur.com/pKpttTA.gif";
const gifs = [heart_gif,ghost_gif,skullglime_gif];

const properties = {
  duration: 2500,
  transitionDuration: 250,
  infinite: true,
  indicators: false,
  arrows: false,
}

class GifSlideshow extends Component{
  render(){
  return(
      <div className="slide-container">
        <Fade {...properties}>
            <div className="fade-item">
              <div className="gif-container">
                <img className="gif-src" src={gifs[0]}/>
              </div>
            </div>
            <div className="fade-item">
              <div className="gif-container">
                <img className="gif-src" src={gifs[1]}/>
              </div>
            </div>
            <div className="fade-item">
              <div className="gif-container">
                <img className="gif-src" src={gifs[2]}/>
              </div>
            </div>
          </Fade>
        </div>
    )
  }
}

export default GifSlideshow
