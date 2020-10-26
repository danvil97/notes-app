import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../store/actions/notesActions";

import NotesList from "../NotesList/NotesList";

import "./Content.scss";

export default function Content() {
  const [inputField, setInputField] = useState("");
  const notes = useSelector((state) => state.notesReducer);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInputField(event.target.value);
  };

  const handleNewNote = (text) => {
    if (text.trim().length !== 0) {
      dispatch(addNote(text));
      setInputField("");
    }
  };

  return (
    <div className="content">
      <div className="newNote">
        <input
          type="text"
          value={inputField}
          onChange={handleChange}
          onKeyPress={(ev) => {
            if (ev.key === "Enter") handleNewNote(inputField);
          }}
        />
        <button
          onClick={() => {
            handleNewNote(inputField);
          }}
        >
          Add
        </button>
      </div>
      <NotesList notes={notes} />
    </div>
  );
}
