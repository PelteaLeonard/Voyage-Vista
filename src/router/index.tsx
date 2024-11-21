import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Global from "../pages/global";
import Search from "../pages/search";
import General from "../components/profile-settings/general";
import ProfileSettings from "../pages/profile-settings";
import Email from "../components/profile-settings/email";
import Password from "../components/profile-settings/password";
import Map from "../pages/map";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Global />}>
          <Route path="" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/map" element={<Map />} />
          <Route path="/profile" element={<ProfileSettings />}>
            <Route path="/profile/change-general" element={<General />} />
            <Route path="/profile/change-email" element={<Email />} />
            <Route path="/profile/change-password" element={<Password />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
