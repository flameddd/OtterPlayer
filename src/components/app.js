import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/about';

let basename = ''

try {
  console.log('===========')
  console.log(window)
  console.log(process)
  console.log(process.env.GITHUB_PAGES)
} catch (error) {
  
}
if (
  typeof window !== "undefined"
  && typeof process !== 'undefined'
  && process.env
  && process.env.GITHUB_PAGES
) {
  basename = `/${env.GITHUB_PAGES}`
}

console.log('basename = ')
console.log(basename)

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
			<div id="app">
        <Header name={this.state.name} onInput={this.onInput} />
				<Router onChange={this.handleRoute}>
          <Home path={`${basename}/`} {...this.state} />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
