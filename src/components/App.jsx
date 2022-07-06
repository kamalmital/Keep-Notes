import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [EditMode, setEditMode] = useState({ title: "", content: "" });
  const [inEditMode,setinEditMode] = useState(false);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function handleEdit(data){
    setEditMode({title: data.title, content: data.content});
    setinEditMode(true);
    deleteNote(data.id);
}

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} setEditMode={setEditMode} inEditMode={inEditMode} isEditing={EditMode} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            setEditMode={setEditMode}
            editNote = {handleEdit}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
