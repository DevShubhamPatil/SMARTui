import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Utility from './components/Utility';

function App() {
  return (
    <div >
      <Header />
      <div className="appBody">
        <Sidebar />
        <div className='mainArea'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Utility />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
