import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab'
import Zoom from '@mui/material/Zoom'
const Home = ({onAdd}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(e){
    const{name, value} = e.target

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(e) {
    onAdd(note)
    setNote({
      title: "",
      content: "" 
    })
    e.preventDefault()
  }

  function expand() {
    setIsExpanded(true);
  }
  
  return (
    <main className="main">
    <form>
        {isExpanded && (
          <input
          name='title'
          placeholder='Title'
          onChange={handleChange}
          value={note.title}
          />
        )}

        <textarea 
          name='content'
          placeholder='take Note...'
          onChange={handleChange}
          value={note.content}
          onClick={expand}
          rows={isExpanded ? 3 : 1}
        />
        {/* <button onClick={submitNote}>+</button> */}
        <Zoom  in={isExpanded}>
        {/* Fab is for transition */}
        <Fab className='btn' onClick={submitNote}> 
          <AddIcon  /> 
        </Fab>
        </Zoom>
    </form>
     </main>
  )
}
export default Home;