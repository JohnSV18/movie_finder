import { useState } from 'react'
import { connect, useSelector } from 'react-redux'

import { addSearchedWord } from "../../actions";

function WordList() {
  const words = useSelector((state) => state.words)

  const wordList = words.map((pass, index) => {
      console.log(pass)
    return (
      <div key={index}>
        Word:{pass.word}
        
      </div>)
  })
  
  return (
    <div>
      {wordList}
    </div>
  )
}

export default WordList