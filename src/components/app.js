import { Component } from "preact";
import { Router } from "preact-router";

import style from "./style.css";
import Header from "./header";

import manifest from "../manifest.json";

// Code-splitting is automated for routes
import Home from "../routes/home";

let basename = "";

if (process.env.GITHUB_PAGES) {
  basename = `/${process.env.GITHUB_PAGES}`;
}

const vidoeKeyUpListener = event => {
  const { tagName, className } = event.target;
  if (tagName === "VIDEO" && className === "vjs-tech") {
    return;
  }
  const videoPlayer = document.getElementsByClassName("vjs-tech")[0];

  if (!videoPlayer.duration) {
    return;
  }

  // `k || K || space` key = start/pause
  if (event.which === 75 || event.which === 32) {
    if (videoPlayer.paused) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
  }

  // `l || L || right arrow` key = fast-forward 15 seconds
  if (event.which === 76 || event.which === 39) {
    const lastDuration = Math.floor(
      videoPlayer.duration - videoPlayer.currentTime
    );
    if (lastDuration > 15) {
      videoPlayer.currentTime = videoPlayer.currentTime + 15;
    } else {
      videoPlayer.currentTime = videoPlayer.currentTime + lastDuration;
    }
  }

  // `j || J || left arrow` key = back-forward 15 seconds
  if (event.which === 74 || event.which === 37) {
    if (Math.floor(videoPlayer.currentTime) > 15) {
      videoPlayer.currentTime = videoPlayer.currentTime - 15;
    } else {
      videoPlayer.currentTime =
        videoPlayer.currentTime - Math.floor(videoPlayer.currentTime);
    }
  }

  // up arrow key = higher volume
  if (event.which === 38 && videoPlayer.volume < 1) {
    videoPlayer.volume = (videoPlayer.volume * 10 + 1) / 10;
  }

  // down arrow key = lower volume
  if (event.which === 40 && videoPlayer.volume > 0) {
    videoPlayer.volume = (videoPlayer.volume * 10 - 1) / 10;
  }
};

const setSubtitles = subtitle => {
  document.getElementById("subtitles").src = subtitle;
};

const removeSubtitles = () => {
  if (document.getElementById("subtitles")) {
    document.getElementById("subtitles").src = "";
  }
};

export default class App extends Component {
  state = {
    objectURL: "",
    name: "",
    type: ""
  };

  headerRef = null;
  contentRef = null;
  mutationCallBack = mutations => {
    const mutatedClassName = mutations[mutations.length - 1].target.className;
    if (
      mutatedClassName.indexOf("vjs-playing") !== -1 &&
      mutatedClassName.indexOf("vjs-user-inactive") !== -1
    ) {
      // hide Header, cursor when video playing and user-inactive
      this.headerRef.base.style["flex-basis"] = "0px";
      this.contentRef.style.cursor = "none";
    } else if (this.headerRef.base.style["flex-basis"] !== "36px") {
      // element "#vjs_video_3" change className very often
      // set flex-basis only when <Header /> not show up
      // so, 「if !== "36px" 」 is for avoid unnecessary set value
      this.headerRef.base.style["flex-basis"] = "36px";
      this.contentRef.style.cursor = "auto";
    }
  };

  observer =
    typeof window !== "undefined"
      ? new MutationObserver(this.mutationCallBack)
      : undefined;

  componentDidMount() {
    window.addEventListener("keyup", vidoeKeyUpListener);

    const link = document.createElement("link");
    link.rel = "apple-touch-icon";
    link.sizes = "75x75";
    link.href = manifest.icons[0].src;
    document.head.appendChild(link);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", vidoeKeyUpListener);
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  /** Gets fired when the route changes.
   *  @param {Object} event    "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url  The newly routed URL
   */
  handleRoute = event => {
    this.currentUrl = event.url;
  };

  onInput = event => {
    if (event.target.files[0]) {
      const { name, type } = event.target.files[0];
      const objectURL = URL.createObjectURL(event.target.files[0]);
      this.setState({ objectURL, type, name });
      removeSubtitles();
    }
  };

  onInputSubTitle = event => {
    setSubtitles(URL.createObjectURL(event.target.files[0]));
  };

  render() {
    return (
      <div id="app" class={style.app}>
        <Header
          ref={ref => (this.headerRef = ref)}
          name={this.state.name}
          onInput={this.onInput}
          onInputSubTitle={this.onInputSubTitle}
        />
        <div class={style.content} ref={ref => (this.contentRef = ref)}>
          <Router onChange={this.handleRoute}>
            <Home
              path={`${basename}/`}
              {...this.state}
              observer={this.observer}
            />
          </Router>
        </div>
      </div>
    );
  }
}
