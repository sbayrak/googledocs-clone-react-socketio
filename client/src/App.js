import TextEditor from './TextEditor';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './Home';
import { v4 as uuidV4 } from 'uuid';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route
          path='/new-document'
          element={<Navigate to={`/documents/${uuidV4()}`} />}
        ></Route>

        <Route path='/documents/:id' element={<TextEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
