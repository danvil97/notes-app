import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, removeNote } from "../../store/actions/notesActions";
import "./Content.css";

export default function Content() {
  const [inputField, setInputField] = useState("");
  const notes = useSelector((state) => state.notesReducer);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInputField(event.target.value);
  };

  const handleNewNote = (text) => {
    dispatch(addNote(text));
  };

  const handleRemoveNote = (index) => {
    dispatch(removeNote(index));
  };

  return (
    <div className="content">
      <div className="newNote">
        <input type="text" value={inputField} onChange={handleChange} />
        <button
          onClick={() => {
            handleNewNote(inputField);
          }}
        >
          Add
        </button>
      </div>
      <div className="notesList">
        {notes.length !== 0 &&
          notes.map((note) => (
            <div className="note" key={note.id}>
              <button
                className="note__remove"
                onClick={() => {
                  handleRemoveNote(note.id);
                }}
              >
                x
              </button>
              <p>{note.text}</p>
            </div>
          ))}
        {notes.length === 0 && <p>There are no notes here :)</p>}
      </div>
    </div>
  );
}
