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
  videoRef = null;

  componentDidMount() {
    this.player = videojs(
      this.videoRef,
      { ...videoJsOptions },
      function onPlayerReady() {
        console.log("onPlayerReady", this);
      }
    );

    if (this.props.observer) {
      this.props.observer.observe(document.querySelector("#vjs_video_3"), {
        attributes: true,
        attributeFilter: ["class"]
      });
    }
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

  render() {
    return (
      <div
        data-vjs-player
        class={style}
        style={{ width: "100%", height: "100%" }}
      >
        <video
          ref={ref => (this.videoRef = ref)}
          className="video-js"
          disablePictureInPicture
        >
          <track kind="subtitles" id="subtitles" default />
        </video>
      </div>
    );
  }
}

export default Home;
