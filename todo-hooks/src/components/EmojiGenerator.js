import React, { useState } from 'react'

const emojiSet = ['😀', '😁', '😂', '🤣', '😃', '😄']

const EmojiGenerator = () => {
  const [emoji, setEmoji] = useState(emojiSet[0])

  const generateEmoji = () => {
    const randomIndex = Math.floor(Math.random()*emojiSet.length)
    const randomEmoji = emojiSet[randomIndex]

    setEmoji(randomEmoji)
  }

  return (
    <div>
      <span>{emoji}</span>
      <button onClick={generateEmoji}>Generate</button>
    </div>
  )
}

export default EmojiGenerator