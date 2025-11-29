import React, { useState } from 'react'

function ClickMe() {
  const [clicked, setClicked] = useState(false)
  return (
    <div className="exo1-block">
      <h3>ClickMe</h3>
      <button className="exo1-button" onClick={() => setClicked(true)}>ClickMe</button>
      {clicked && <p className="exo1-output">Clicked</p>}
    </div>
  )
}

function ToggleButton() {
  const [count, setCount] = useState(0)
  return (
    <div className="exo1-block">
      <h3>Toggle (parity)</h3>
      <button className="exo1-button" onClick={() => setCount(count + 1)}>Click</button>
      <p className="exo1-output">{count % 2 === 0 ? 'Clicked' : 'Not Clicked'}</p>
    </div>
  )
}

function ButtonsDemo() {
  const [clicked, setClicked] = useState(null)
  return (
    <div className="exo1-block">
      <h3>Which Button?</h3>
      <div className="exo1-row">
        <button className="exo1-button" onClick={() => setClicked(1)}>Button1</button>
        <button className="exo1-button" onClick={() => setClicked(2)}>Button2</button>
        <button className="exo1-button" onClick={() => setClicked(3)}>Button3</button>
      </div>
      {clicked && <p className="exo1-output">Button #{clicked} was clicked</p>}
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="exo1-block">
      <h3>Counter</h3>
      <div className="exo1-counter">
        <button className="exo1-button" onClick={() => setCount(count + 1)}>Inc</button>
        <div className="exo1-count">{count}</div>
        <button className="exo1-button" onClick={() => setCount(count - 1)}>Dec</button>
      </div>
    </div>
  )
}

export default function Exo1() {
  return (
    <div className="exo1-container">
      <h1>EXO1 - Lab 5</h1>

      <div className="exo1-grid">
        <ClickMe />
        <ToggleButton />
        <ButtonsDemo />
        <Counter />
      </div>
    </div>
  )
}