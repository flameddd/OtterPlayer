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

const removeSubtitles = subtitle => {
  document.getElementById("subtitles").src = "";
};

export default class App extends Component {
  state = {
    objectURL: "",
    name: "",
    type: ""
  };

  componentDidMount() {
    window.addEventListener("keyup", vidoeKeyUpListener);

    const script = document.createElement("script");
    const script2 = document.createElement("noscript");

    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WG3W59C');`;
    script2.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WG3W59C"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

    document.head.appendChild(script);
    document.body.appendChild(script2);

    const link = document.createElement("link");
    link.rel = "apple-touch-icon";
    link.sizes = "75x75";
    link.href = manifest.icons[0].src;
    document.head.appendChild(link);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", vidoeKeyUpListener);
  }

  /** Gets fired when the route changes.
   *  @param {Object} event    "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url  The newly routed URL
   */
  handleRoute = event => {
    this.currentUrl = event.url;
  };

  onInput = event => {
    const { name, type } = event.target.files[0];
    const objectURL = URL.createObjectURL(event.target.files[0]);
    this.setState({ objectURL, type, name });
    removeSubtitles();
  };

  onInputSubTitle = event => {
    setSubtitles(URL.createObjectURL(event.target.files[0]));
  };

  render() {
    return (
      <div id="app" class={style.app}>
        <Header
          name={this.state.name}
          onInput={this.onInput}
          onInputSubTitle={this.onInputSubTitle}
        />
        <Router onChange={this.handleRoute}>
          <Home path={`${basename}/`} {...this.state} />
        </Router>
      </div>
    );
  }
}
