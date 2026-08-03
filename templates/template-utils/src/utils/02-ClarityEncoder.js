import { useState } from "react";
import { Cl } from "@stacks/transactions";

const ClarityEncoder = () => {
  const [clarityValueString, setClarityValueString] = useState("");
  const [hex, setHex] = useState("");
  const [error, setError] = useState("");

  const encodeClarity = (clarity) => {
    try {
      // `Cl.parse` reads Clarity syntax, `Cl.serialize` returns a hex string (v7)
      return `0x${Cl.serialize(Cl.parse(clarity))}`;
    } catch (err) {
      setError(`Failed to encode: ${err}`);
      return "";
    }
  };

  const decodeHex = (hex) => {
    try {
      // `Cl.deserialize` accepts hex (with or without `0x`) or bytes
      return Cl.prettyPrint(Cl.deserialize(hex));
    } catch (err) {
      setError(`Failed to decode: ${err}`);
      return "";
    }
  };

  const handleClarityChange = (e) => {
    setError("");
    const clarity = e.target.value;
    setClarityValueString(clarity);
    if (!clarity) return;
    setHex(encodeClarity(clarity));
  };

  const handleHexChange = (e) => {
    setError("");
    const hex = e.target.value;
    setHex(hex);
    if (!hex) return;
    setClarityValueString(decodeHex(hex));
  };

  return (
    <div className="Card">
      <h2>
        Clarity Encoder {error && <span className="Dot" title={error} />}
      </h2>
      <div className="Row">
        <label htmlFor="clarity">Clarity Value</label>
        <textarea
          id="clarity"
          className="Mono"
          rows="3"
          value={clarityValueString}
          onChange={handleClarityChange}
          placeholder="(ok u1)"
        />
      </div>
      <div className="Row">
        <label htmlFor="hex">Hex</label>
        <input
          id="hex"
          className="Mono"
          type="text"
          value={hex}
          onChange={handleHexChange}
          placeholder="0x07..."
        />
      </div>
      {error && <p className="Error">{error}</p>}
    </div>
  );
};

export default ClarityEncoder;
