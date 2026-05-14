export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-row">
        <div className="left">
          <span className="freeman">freeman</span>
          <span className="sep" />
          <span>MIT License</span>
          <span className="sep" />
          <span>feito com Go</span>
        </div>
        <div className="foot-links">
          <a
            href="https://github.com/luizfiuzaa/freeman"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://github.com/luizfiuzaa/freeman/releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            Releases
          </a>
          <a
            href="https://github.com/luizfiuzaa/freeman/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            Issues
          </a>
        </div>
      </div>
    </footer>
  );
}
