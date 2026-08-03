const Intro = () => {
  return (
    <div className="Card">
      <h1>Stacks Utils</h1>
      <p className="Muted">
        Stacks.js examples in <span className="Mono">src/utils</span>: unit
        conversion, Clarity value encoding/decoding, and an STX transfer.
      </p>
      <p className="Muted">
        <a
          className="Link"
          href="https://docs.hiro.so/stacks.js"
          rel="noopener noreferrer"
          target="_blank"
        >
          Stacks.js docs
        </a>
      </p>
    </div>
  );
};

export default Intro;
