import './styles.scss';
import { useState } from 'react';

function Note() {
//Here is where we add a note
// write in the text box area, note will save
const [note, setNote] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    const savedNote = note;
}

    return (
        <form onSubmit = {handleSubmit} className="note-section">
            <div className="note-container">
                <textarea className="note" value={note} placeholder="enter a note" onChange={(e) => setNote(e.target.value)}></textarea>
            </div>
            <div className="save-div">
                <button className="save-btn">save</button>
            </div>
        </form>
    )
}

export default Note; 