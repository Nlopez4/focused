import './styles.scss';

function Note() {
//Here is where we add a note
// write in the text box area, note will save
    return (
        <section className="note-section">
            <div className="note-container">
                <textarea className="note"></textarea>
            </div>
            <div className="save-div">
                <button className="save-btn">save</button>
            </div>
        </section>
    )
}

export default Note; 