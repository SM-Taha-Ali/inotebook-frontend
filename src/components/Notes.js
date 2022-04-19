import React, { useContext, useEffect, useRef, useState } from 'react'
import './Home.css'
import './Noteitem.css'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem';


const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNote, editNote } = context
    useEffect(() => {
        getNote()
    }, [])
    const ref = useRef(null)

    const [note, setNote] = useState({id:"", title:"",description:"",tag:""})
     
    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
    const handleClick = () => {
        editNote(note._id,note.title,note.description,note.tag);
    }


    const updateNote = (currentNote) => {
        ref.current.click();
        setNote(currentNote);
    }
    return (
        <>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="d-flex flex-row">
                                    <div className="mb-3 pe-2 w-100">
                                        <label htmlFor="title" className="form-label ms-1">Title</label>
                                        <input type="text" name='title' id="title" className="form-control w-100" id="exampleInputEmail1" placeholder='Add title here...' aria-describedby="emailHelp" value={note.title} onChange={onChange} />
                                    </div>
                                    <div className="mb-3 w-100">
                                        <label htmlFor="tag" className="form-label ms-1">Tag</label>
                                        <input type="text" name='tag' id="tag" className="form-control w-100" placeholder='Add tag here...' id="exampleInputPassword1" value={note.tag} onChange={onChange} />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="desc" className="form-label ms-1">Description</label>
                                    <textarea className="form-control" name='description' id="desc" placeholder="Add description here..." id="floatingTextarea2" style={{ height: '100px' }} value={note.description} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Back</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClick} >Update</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="text-center pt-5 pb-2">
                    <h1>YOUR NOTES</h1>
                </div>
                <div className='text-center'>
                    <div className="box row g-0 mt-3 shadow border">
                        {console.log(notes)}
                        {notes.map((note) => {
                            return <Noteitem key={note._id} note={note} updateNote={updateNote} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notes
