import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Followers from './components/Followers';
import Following from './components/Following';
import ProtectedRoute from './components/Helper/ProtectedRoute';
import Login from './components/Login';
import MyProfile from './components/MyProfile';
import Repos from './components/Repos';
import UserProfile from './components/UserProfile';

import './styles/global.css';
import { UserStorage } from './UserContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Routes>
            <Route path="/" exact element={<Login />} />
            <ProtectedRoute path="profile" element={<MyProfile />} />
            <ProtectedRoute
              path="profile/:username"
              element={<UserProfile />}
            />
            <ProtectedRoute path="profile/followers" element={<Followers />} />
            <ProtectedRoute path="profile/following" element={<Following />} />

            <ProtectedRoute path="profile/repos" element={<Repos />} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
