import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = ({ name = '', onInput }) => (
	<header class={style.header}>
    <h1>Video.js</h1>
    <label for="files" class="btn">Select video</label>
    <input
      type="file"
      id="files"
      accept="video/*"
      style={{ visibility: 'hidden', width: '0px' }}
      onInput={onInput}
    />
    <title>{name}</title>
		<nav>
			<Link activeClassName={style.active} href="/">Player</Link>
			<Link activeClassName={style.active} href="/about">about</Link>
		</nav>
	</header>
);

export default Header;
