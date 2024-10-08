import { useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Card from "./Note";
import Footer from "./Footer";
function App() {
  const [notes, setNotes] = useState([])
  function addNote(note){
    setNotes(prevNotes => {
      return[...prevNotes, note];
    })
  }
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id
      })
    })
  }
  return (
    <div className="App">
      <Header header='note'/>
      <Home onAdd={addNote}/>

      {notes.map((noteItem, index)=>      
       <Card
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete= {deleteNote}
        />
      )}     
      <Footer />
    </div>
  );
}
export default App;
