import { Component } from 'preact';
import style from './style';
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [],
  playbackRates: [0.5, 1, 1.5, 2],
  userActions: {
    hotkeys: function (event) {
      // `this` is the player in this context
      // `K` key = start/pause
      
      if (event.which === 75) {
        if (this.paused()) {
          this.play();
        } else {
          this.pause();
        }
      }

      if (!this.duration()) {
        return; // No video loaded.
      }
      // `l || L` key = fast-forward 15 seconds
      if (event.which === 76) {
        const currentTime = this.currentTime();
        const duration = this.duration();
        const lastDuration = Math.floor(duration - currentTime);
        if (lastDuration > 15) {
          this.currentTime(currentTime + 15);
        } else {
          this.currentTime(currentTime + lastDuration);
        }
      }

      // `j || J` key = back-forward 15 seconds
      if (event.which === 74) {
        const currentTime = this.currentTime();
        if (Math.floor(currentTime) > 15) {
          this.currentTime(currentTime - 15);
        } else {
          this.currentTime(currentTime - Math.floor(currentTime));
        }
      }
    }
  }
}

class Home extends Component {
  componentDidMount() {
    this.player = videojs(
      this.videoNode,
      { ...videoJsOptions },
      function onPlayerReady() {
        console.log('onPlayerReady', this)
      }
    );
  }

  componentDidUpdate() {
    this.player.src({
      src: this.props.objectURL,
      type: this.props.type
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  render() {
    return (
      <div class={style.home}>
        <div
          data-vjs-player
          style={{ width: '100%', height: "100%" }}
        >
          <video
            ref={node => this.videoNode = node}
            className="video-js"
            disablePictureInPicture
          />
        </div>
      </div>)
  }
}

export default Home;
