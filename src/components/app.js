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

export default class App extends Component {
  state = {
    objectURL: '',
    name: '',
    type: '',
  };
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
