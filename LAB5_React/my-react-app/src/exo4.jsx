import React, { useState } from "react";

export default function Exo4() {
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(100);
  const [bg, setBg] = useState("#00aaff");
  const [boxes, setBoxes] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newBox = {
      id: Date.now(),
      height: Number(height),
      width: Number(width),
      bg,
    };
    setBoxes((prev) => [...prev, newBox]);
  }

  function handleRemove(id) {
    setBoxes((prev) => prev.filter((b) => b.id !== id));
  }

  return (
    <div>
      <h2>Exercise 4 — Add styled divs</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: 12 }}>
        <label>
          Height (px):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            min="10"
          />
        </label>
        <label style={{ marginLeft: 8 }}>
          Width (px):
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            min="10"
          />
        </label>
        <label style={{ marginLeft: 8 }}>
          Background:
          <input
            type="color"
            value={bg}
            onChange={(e) => setBg(e.target.value)}
          />
        </label>
        <button type="submit" style={{ marginLeft: 8 }}>
          Add Box
        </button>
      </form>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {boxes.map((b) => (
          <div key={b.id} style={{ position: "relative" }}>
            <div
              style={{
                height: b.height + "px",
                width: b.width + "px",
                background: b.bg,
              }}
            />
            <button
              className="small-btn"
              onClick={() => handleRemove(b.id)}
              style={{ display: "block", marginTop: 6 }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
