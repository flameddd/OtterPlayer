import { Component } from 'preact';
import style from './style';
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: []
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
          />
        </div>
      </div>)
  }
}

export default Home;
