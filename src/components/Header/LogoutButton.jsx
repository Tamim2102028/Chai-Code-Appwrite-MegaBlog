import { useDispatch } from "react-redux";
import { logout } from "../../store/slice/auth.Slice";
import authService from "../../appwrite/auth.service";

function LogoutButton() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-600 transition-colors"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
