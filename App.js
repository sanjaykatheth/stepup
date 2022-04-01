import { SignInContainer } from './Pages/Authentication';
import { DashboardContainer } from './Pages/Dashboard';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignInContainer />} />
        <Route path='/dashboard' element={<DashboardContainer />} />
      </Routes>
    </div>
  );
}

export default App;
