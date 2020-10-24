export const addNote = (text) => ({
  type: "ADD_NOTE",
  payload: { id: Date.now(), text },
});

export const removeNote = (id) => ({
  type: "REMOVE_NOTE",
  payload: id,
});
