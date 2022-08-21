import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Mainlayout } from './layouts';
import { Activity, Todo } from './pages';

function App() {
  return (
    <Mainlayout>
      <BrowserRouter>
        <Routes>
          <Route path='/detail/:id' element={<Todo />} />
          <Route path='/' element={<Activity />} />
        </Routes>
      </BrowserRouter>
    </Mainlayout>
  );
}

export default App;
