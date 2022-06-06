import './Entry.scss';
import Home from './components/Home/index';
import Note from './components/Note/index';

// Entry component, "home page"
function Entry() {
  return (
    <div className="entry">
      <Home />
      <Note />
    </div>
  );
}

export default Entry;
