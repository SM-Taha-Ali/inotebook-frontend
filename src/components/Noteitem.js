import React from "react";
import ReactDOM from "react-dom";
import '../App.css';
import { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext'

const Noteitem = (props) => {
    const { note, updateNote } = props;
    const context = useContext(noteContext);
    const {deleteNote} = context;
    return (
        <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12 py-2 px-2'>
            <div className="card w-100" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-evenly">
                    <i className="fas fa-edit d-block ebtn" onClick={()=> {updateNote(note)}}></i>
                    <i className="fas fa-trash-alt d-block dbtn" onClick={() => {deleteNote(note._id)}}></i>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
