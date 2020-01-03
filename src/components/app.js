import { Component } from 'preact';
import { Router } from 'preact-router';

import style from './style.css';
import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';

let basename = ''

if (process.env.GITHUB_PAGES) {
  basename = `/${process.env.GITHUB_PAGES}`
}

const vidoeKeyUpListener = event => {
  const { tagName, className } = event.target
  if (tagName === "VIDEO" && className === "vjs-tech") {
    return;
  }
  const videoPlayer = document.getElementsByClassName("vjs-tech")[0]

  if (!videoPlayer.duration) {
    return;
  }

  // `k || K` key = start/pause
  if (event.which === 75) {
    if (videoPlayer.paused) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
  }

  // `l || L` key = fast-forward 15 seconds
  if (event.which === 76) {
    const lastDuration = Math.floor(
      videoPlayer.duration - videoPlayer.currentTime
    );
    if (lastDuration > 15) {
      videoPlayer.currentTime = videoPlayer.currentTime + 15;
    } else {
      videoPlayer.currentTime = videoPlayer.currentTime + lastDuration;
    }
  }

  // `j || J` key = back-forward 15 seconds
  if (event.which === 74) {
    if (Math.floor(videoPlayer.currentTime) > 15) {
      videoPlayer.currentTime = videoPlayer.currentTime - 15;
    } else {
      videoPlayer.currentTime = (
        videoPlayer.currentTime - Math.floor(videoPlayer.currentTime)
      );
    }
  }
}

export default class App extends Component {
  state = {
    objectURL: '',
    name: '',
    type: '',
  };

  componentDidMount() {
    window.addEventListener("keyup", vidoeKeyUpListener);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", vidoeKeyUpListener);
  }

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = event => {
		this.currentUrl = event.url;
	};

  onInput = event => {
    const { name, type } = event.target.files[0]
    const objectURL = URL.createObjectURL(event.target.files[0])
    this.setState({ objectURL, type, name })
  }

	render() {
		return (
      <div id="app" class={style.app}>
        <Header name={this.state.name} onInput={this.onInput} />
				<Router onChange={this.handleRoute}>
          <Home path={`${basename}/`} {...this.state} />
				</Router>
			</div>
		);
	}
}
