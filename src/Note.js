import React from 'react'
import DeleteIcon from '@mui/icons-material/DeleteForever' 
const Note = ({title, content, onDelete, id}) => {
  function handleClick() {
    onDelete(id) // this are props from the deletNote func in app
  }
  return (
    <div className='note'>
        <h3>{title}</h3>
        <p>{content}</p>
{/* handlclick func triggers the onDelete prop inside the deleteNote funck in app */}
        <span onClick={handleClick}><DeleteIcon /></span>
    </div>
  )
}

export default Note