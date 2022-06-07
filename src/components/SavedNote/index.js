import './styles.scss';

function SavedNote({notes}) {
  return (
      <div>
        {notes.map((note) => (
            <p key={note.id}>{note.note}</p>
        ))}
      </div>
  )
}

export default SavedNote;