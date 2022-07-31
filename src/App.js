import logo from './logo.svg';
import './App.css';
import { Button } from './Components/atoms/Buttons/Button';
import { PageLink } from './Components/atoms/Anchor/PageLink';
import { Link, Route, Router, Routes } from 'react-router-dom';
import LoginPage from './Pages/Login/Login.Page';
import EventsPage from './Pages/Events/Events.Page';
import NominationPage from './Pages/Nominations/Nominations.Page';

function App() {
  return (
    <div className="App">
      {/* <Button  primary label="dsfdsfsdf" icon="fa-check-circle" />
      <PageLink>sdfdsf</PageLink> */}
      <header>
        <ul>
          <li><Link to="/">Login Page</Link></li>
          <li><Link to="/dashboard">Event List Page</Link></li>
          <li><Link to="/nominations">Nominations Page</Link></li>
        </ul>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<EventsPage />} />
          <Route path="/nominations" element={<NominationPage />} />

        </Routes>
      </main>


    </div>
  );
}

export default App;
