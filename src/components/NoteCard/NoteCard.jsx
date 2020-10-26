import { useDispatch } from "react-redux";
import { removeNote } from "../../store/actions/notesActions";

import "./NoteCard.scss";

const NoteCard = ({ note }) => {
  const handleRemoveNote = (index) => {
    dispatch(removeNote(index));
  };
  const dispatch = useDispatch();
  return (
    <div className="note">
      <button
        className="note__remove"
        onClick={() => {
          handleRemoveNote(note.id);
        }}
      >
        x
      </button>
      <p className="note__text">{note.text}</p>
    </div>
  );
};

export default NoteCard;
