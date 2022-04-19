import React from 'react'
import { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext'

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title:"", description:"", tag:""})

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        console.log(note)
        addNote(note.title,note.description,note.tag)
        var title = document.getElementById('title')
        var tag = document.getElementById('tag')
        var desc = document.getElementById('desc')
        title.value = ''
        tag.value = ''
        desc.value = ''
    }

    return ( 
        <div className="container">
            <div className="text-center pt-4 pb-2">
                <h1>ADD NOTE</h1>
            </div>
            <div className="box mt-3 shadow border">
                <form>
                    <div className="d-flex flex-row">
                        <div className="mb-3 pe-2 w-100">
                            <label htmlFor="title" className="form-label ms-1">Title</label>
                            <input type="text" name='title' id="title" className="form-control w-100" placeholder='Add title here...' aria-describedby="emailHelp" onChange={onChange} />
                        </div>
                        <div className="mb-3 w-100">
                            <label htmlFor="tag" className="form-label ms-1">Tag</label>
                            <input type="text" name='tag' id="tag" className="form-control w-100" placeholder='Add tag here...' onChange={onChange} />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label ms-1">Description</label>
                        <textarea className="form-control" name='description' id="desc" placeholder="Add description here..." style={{ height: '100px' }} defaultValue={""}  onChange={onChange} />
                    </div>
                    <div className="text-end p-1">
                        <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddNote
