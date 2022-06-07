import './styles.scss';
import { useState, useEffect } from 'react';
import SavedNote from '../../components/SavedNote/index';

//Here is where we add a note
// write in the text box area, note will save


function Note() {
const [note, setNote] = useState('');
const [notes, setNotes] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setNotes(data)
            });
     }, []);

     const handleSubmit = (e) => {
        e.preventDefault();
        const postedNotes = {note}
        
        fetch('http://localhost:8000/notes', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(postedNotes)
        })
    }
    return (
        <form onSubmit = {handleSubmit} className="note-section">
            <div className="note-container">
                <textarea 
                className="note" 
                value={note} 
                placeholder="enter a note" 
                onChange={(e) => setNote(e.target.value)}>
                </textarea>
            </div>
            <div className="save-div">
                <button className="save-btn">save</button>
            </div>
           {notes && <SavedNote notes={notes}/>} 
        </form>
    )
}

export default Note; 