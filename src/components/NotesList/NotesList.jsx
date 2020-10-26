import NoteCard from "../NoteCard/NoteCard";

import "./NotesList.scss";

const NotesList = ({ notes }) => {
  return (
    <div className="notesList">
      {notes.length !== 0 && notes.map((note) => <NoteCard note={note} />)}
      {notes.length === 0 && <p>You have 0 notes</p>}
    </div>
  );
};

export default NotesList;
