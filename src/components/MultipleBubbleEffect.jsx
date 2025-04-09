"use client"

import { useState } from "react"

const MultipleBubbleEffect = ({ children }) => {
  const [bubbles, setBubbles] = useState([])

  const createBubble = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newBubble = {
      id: Date.now(),
      x,
      y,
    }

    setBubbles((prevBubbles) => [...prevBubbles, newBubble])

    // Remove bubble after animation completes
    setTimeout(() => {
      setBubbles((prevBubbles) => prevBubbles.filter((bubble) => bubble.id !== newBubble.id))
    }, 1000)
  }

  return (
    <div className="relative overflow-hidden" onMouseMove={createBubble} style={{ cursor: "none" }}>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble-multiple"
          style={{
            left: bubble.x,
            top: bubble.y,
          }}
        />
      ))}
      {children}
    </div>
  )
}

export default MultipleBubbleEffect

