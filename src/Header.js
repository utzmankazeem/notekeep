import React from 'react'
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const Header = ({header}) => {
  return (
    <header className="header">
        <h1>
        <NoteAddIcon />
        {header}
        </h1>
    </header>
  )
}

export default Header