import './Entry.scss';
import Home from './components/Home/index';
import Play from './components/Play/index';

// Entry component, "home page"
function Entry() {
  return (
    <div className="entry">
      <Home />
      <Play />
    </div>
  );
}

export default Entry;
