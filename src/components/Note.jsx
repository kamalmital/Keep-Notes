import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  function handleEdit(){
      props.setEditMode(true);
      props.editNote(props);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      
      <button onClick={handleEdit}>
        <Fab> <EditIcon/> </Fab>
      </button>

      <button onClick={handleClick}>
        <Fab>
        <DeleteIcon />
        </Fab> 
      </button>
       
    </div>
  );
}

export default Note;
