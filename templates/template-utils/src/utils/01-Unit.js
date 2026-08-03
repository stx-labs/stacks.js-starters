import { useState } from "react";

// 1 STX = 1,000,000 microSTX
const MICRO_STX_IN_STX = 1_000_000;

const Units = () => {
  const [stx, setStx] = useState("");
  const [microStx, setMicroStx] = useState("");

  const handleStxChange = (e) => {
    const value = e.target.value;
    setStx(value);
    setMicroStx(value === "" ? "" : Number(value) * MICRO_STX_IN_STX);
  };

  const handleMicroStxChange = (e) => {
    const value = e.target.value;
    setMicroStx(value);
    setStx(value === "" ? "" : Number(value) / MICRO_STX_IN_STX);
  };

  return (
    <div className="Card">
      <h2>STX Unit Converter</h2>
      <div className="Row">
        <label htmlFor="stx">STX</label>
        <input
          id="stx"
          className="Mono"
          type="number"
          value={stx}
          onChange={handleStxChange}
        />
      </div>
      <div className="Row">
        <label htmlFor="microStx">microSTX</label>
        <input
          id="microStx"
          className="Mono"
          type="number"
          value={microStx}
          onChange={handleMicroStxChange}
        />
      </div>
    </div>
  );
};

export default Units;
