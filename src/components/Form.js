const Form = ({
  title,
  setTitle,
  author,
  setAuthor,
  isbn,
  setIsbn,
  currentBookId,
  handleSubmit,
  cancelEdit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        autoFocus
        required
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Author</label>
      <input
        type="text"
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label>ISBN#</label>
      <input
        type="text"
        required
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <button tabIndex="0" type="submit">
        {currentBookId !== null ? "Update" : "Add"}
      </button>
      {currentBookId !== null && <button onClick={cancelEdit}>Cancel</button>}
    </form>
  );
};

export default Form;

// CHALLENGE
/*
Your challenge is to pass the correct props into Form component
and pass the props in the appropriate way.
*/
