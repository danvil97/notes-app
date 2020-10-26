import NoteCard from "../NoteCard/NoteCard";

import "./NotesList.scss";

const LIST_NO_NOTES = "You don't have any notes!";

const NotesList = ({ notes }) => {
  return (
    <div className="notesList">
      {notes.length !== 0 &&
        notes.map((note) => <NoteCard note={note} key={note.id} />)}
      {notes.length === 0 && (
        <p className="notesList__alert">{LIST_NO_NOTES}</p>
      )}
    </div>
  );
};

export default NotesList;
