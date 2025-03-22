import React, { useState } from 'react'

export default function LiveCharacterCounter() {
  const [input,setInput]=useState('')
  const [warning,setWarning]=useState("")
  const [disable,setDisabled]=useState(false)

  const characterCount= input.replace(/\s/g,"").length
  const handleInputChange =(e: { target: { value: React.SetStateAction<string> } })=>{
    if(characterCount === 99)
    {
    setWarning("⚠️ Warning: You are approaching the character limit!")
    }
    else if(characterCount === 149){
      setWarning("❌ Character limit reached! No more input allowed.")
      setDisabled(true)
    }
    setInput(e.target.value)
    
  }

  return (
    <div>
       <input
        type="text"
        placeholder="Search..."
        value={input}
       onChange={handleInputChange}
       disabled={disable}
       />
      <span>{characterCount}/150</span>
      <span>{warning}</span>
    </div>
  )
}
