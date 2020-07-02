import style from "./style.css";

const Header = ({ name = "", onInput, onInputSubTitle, ...props }) => (
  <header class={style.header} {...props}>
    <h1>OtterPlayer</h1>
    <label for="video" class="btn">
      <b>S</b>elect Video
    </label>
    <input
      type="file"
      id="video"
      accept="video/mp4,video/x-m4v,video/*,audio/*"
      style={{ visibility: "hidden", width: "0px" }}
      onchange={onInput}
    />
    <label for="subTitle" class="btn">
      <b>S</b>ubtitle
    </label>
    <input
      type="file"
      id="subTitle"
      accept=".vtt,.srt"
      style={{ visibility: "hidden", width: "0px" }}
      onchange={onInputSubTitle}
    />
    <title class={style.title}>{name}</title>
    <nav>
      <a
        href="https://github.com/flameddd/OtterPlayer"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </nav>
  </header>
);

export default Header;
