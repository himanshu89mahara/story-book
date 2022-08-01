import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../Store/Context/AuthContext";
import { Button } from "../../atoms/Buttons/Button";

const Header = (props) => {
  const auth = useContext(AuthContext);
  return (
    <header>
      <ul>
        {!auth.isLoggedIn && (
          <li>
            <Link to="/">Login Page</Link>
          </li>
        )}
        {auth.isLoggedIn && (
          <li>
            <Link to="/dashboard">Event List Page</Link>
          </li>
        )}
        {auth.isLoggedIn && (
          <li>
            <Link to="/nominations">Nominations Page</Link>
          </li>
        )}

        {auth.isLoggedIn && (
          <li>
            <Link to="/">{auth.user.firstName}</Link>
          </li>
        )}
        {auth.isLoggedIn && (
          <li>
            <Button
              label="Logout"
              onClick={() => {
                auth.loggout();
              }}
            />
          </li>
        )}
      </ul>
    </header>
  );
};
export default Header;
