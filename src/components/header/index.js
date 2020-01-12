import style from "./style.css";

const Header = ({ name = "", onInput }) => (
  <header class={style.header}>
    <h1>OtterPlayer</h1>
    <label for="files" class="btn">
      Select video
    </label>
    <input
      type="file"
      id="files"
      accept="video/*"
      style={{ visibility: "hidden", width: "0px" }}
      onchange={onInput}
    />
    <title class={style.title}>{name}</title>
    <nav>
      <a
        href="https://github.com/flameddd/OtterPlayer"
        target="_blank"
        rel="noopener noreferrer"
      >
        about
      </a>
    </nav>
  </header>
);

export default Header;
