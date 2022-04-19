import NoteContext from "./noteContext";
import { useState } from "react";

const NoteSate = (props) => {
  const host = "http://localhost:5000"

  const notesInitial = [ ]
  const [notes, setNotes] = useState(notesInitial)

  // Get note
  const getNote = async () => {
    // TODO API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkMTU4ZWU3ZDY0Njc5MmVhODUwZGUxIn0sImlhdCI6MTY0MTIyMDgyOX0.X1DM08WHE60o3dGUER9GtinF9LKhmD3_V_Bj2axUyT8"
      },
    });
    const json = await response.json()
    setNotes(json)
  }


  // Add note
  const addNote = async (title, description, tag) => {
    // TODO API CALL
    const response = await fetch(`${host}/api/notes/createnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkMTU4ZWU3ZDY0Njc5MmVhODUwZGUxIn0sImlhdCI6MTY0MTIyMDgyOX0.X1DM08WHE60o3dGUER9GtinF9LKhmD3_V_Bj2axUyT8"
      },
      body: JSON.stringify({title, description, tag})
    });
    const note = await response.json();
    setNotes(notes.concat(note))
  }



  // Edit note
  // API CALL
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkMTU4ZWU3ZDY0Njc5MmVhODUwZGUxIn0sImlhdCI6MTY0MTIyMDgyOX0.X1DM08WHE60o3dGUER9GtinF9LKhmD3_V_Bj2axUyT8"
      },
      body: JSON.stringify({title, description, tag})
    });

    // Logic to edit in client side

    let newNotes = JSON.parse(JSON.stringify(notes))

    for (let index = 0; index < newNotes.length; index++) {
      const element = notes[index];
      if (element._id == id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }

  // Delete note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkMTU4ZWU3ZDY0Njc5MmVhODUwZGUxIn0sImlhdCI6MTY0MTIyMDgyOX0.X1DM08WHE60o3dGUER9GtinF9LKhmD3_V_Bj2axUyT8"
      },
    });

    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteSate;