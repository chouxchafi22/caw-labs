
import React, { useState } from 'react'

function DisplayList({ data }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <p className="exo2-empty">No items to display.</p>
  }
  return (
    <ul className="exo2-list">
      {data.map((e, i) => (
        <li key={i} className="exo2-item"><span className="label">{e}</span></li>
      ))}
    </ul>
  )
}

function RemovableList({ initial = [] }) {
  const [items, setItems] = useState(initial)

  const removeAt = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index))
  }

  if (items.length === 0) return <p className="exo2-empty">All items removed.</p>

  return (
    <ul className="exo2-list">
      {items.map((e, i) => (
        <li key={i} className="exo2-item">
          <span className="label">{i + 1}. {e}</span>
          <button className="exo2-btn" onClick={() => removeAt(i)}>Remove</button>
        </li>
      ))}
    </ul>
  )
}

export default function Exo2() {
  const tab = ['hello', 'world', 'from', 'react']

  return (
    <div className="exo2-root">
      <div className="exo2-header">
        <h1>EXO2 - Lab 5</h1>
        <p className="exo2-sub">Simple list and removable list examples</p>
      </div>

      <section className="exo2-section">
        <h2>Simple List</h2>
        <DisplayList data={tab} />
      </section>

      <section className="exo2-section">
        <h2>Removable List</h2>
        <RemovableList initial={tab} />
        <p className="exo2-note">Click Remove to remove an item.</p>
      </section>
    </div>
  )
}