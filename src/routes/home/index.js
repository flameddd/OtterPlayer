import { Component } from "preact";
import style from "./style";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [],
  playbackRates: [0.5, 1, 1.5, 2],
  userActions: {
    hotkeys(event) {
      // `this` is the player in this context

      // `k || K || space` key = start/pause
      if (event.which === 75 || event.which === 32) {
        if (this.paused()) {
          this.play();
        } else {
          this.pause();
        }
      }

      if (!this.duration()) {
        return; // No video loaded.
      }
      // `l || L || right arrow` key = fast-forward 15 seconds
      if (event.which === 76 || event.which === 39) {
        const currentTime = this.currentTime();
        const duration = this.duration();
        const lastDuration = Math.floor(duration - currentTime);
        if (lastDuration > 15) {
          this.currentTime(currentTime + 15);
        } else {
          this.currentTime(currentTime + lastDuration);
        }
      }

      // `j || J || left arrow` key = back-forward 15 seconds
      if (event.which === 74 || event.which === 37) {
        const currentTime = this.currentTime();
        if (Math.floor(currentTime) > 15) {
          this.currentTime(currentTime - 15);
        } else {
          this.currentTime(currentTime - Math.floor(currentTime));
        }
      }

      // up arrow key = higher volume
      if (event.which === 38 && this.volume() < 1) {
        this.volume((this.volume() * 10 + 1) / 10);
      }

      // down arrow key = lower volume
      if (event.which === 40 && this.volume() > 0) {
        this.volume((this.volume() * 10 - 1) / 10);
      }
    }
  }
};

class Home extends Component {
  componentDidMount() {
    this.updateVideCursor = this.updateVideCursor.bind(this);
    this.player = videojs(
      this.videoNode,
      { ...videoJsOptions },
      function onPlayerReady() {
        console.log("onPlayerReady", this);
      }
    );

    this.videoNode.addEventListener("pause", this.updateVideCursor);
    this.videoNode.addEventListener("playing", this.updateVideCursor);
  }

  componentDidUpdate() {
    this.player.src({
      src: this.props.objectURL,
      type: this.props.type
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  updateVideCursor() {
    if (!this.videoNode) {
      return;
    }

    if (this.videoNode.paused) {
      this.videoNode.style.cursor = "auto";
    } else {
      // hide cursor when video playing, for better user exp.
      setTimeout(() => {
        if (!this.videoNode.paused) {
          this.videoNode.style.cursor = "none";
        }
      }, 3000);
    }
  }

  render() {
    return (
      <div class={style.home}>
        <div data-vjs-player style={{ width: "100%", height: "100%" }}>
          <video
            ref={node => (this.videoNode = node)}
            className="video-js"
            disablePictureInPicture
          >
            <track kind="subtitles" id="subtitles" default />
          </video>
        </div>
      </div>
    );
  }
}

export default Home;
