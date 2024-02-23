import { signOut } from "firebase/auth";
import { FaBookmark, FaSignOutAlt, FaUser } from "react-icons/fa";
import { auth } from "../libs/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  const onLogout = async () => {
    await signOut(auth);
    window.location.href = "/login";
  };
  return (
    <div className="w-full py-3 px-6 shadow-lg  bg-white flex items-center sm:justify-around justify-between">
      <a href="/">
        <h1 className="font-bold text-xl text-slate-800">CookTab</h1>
      </a>
      {loading ? (
        <>
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        </>
      ) : (
        <>
          {user !== null ? (
            <div className="flex gap-3 items-center">
              <a href="/bookmarks" className="p-2 rounded-sm border">
                <FaBookmark />
              </a>
              <a href="/profile" className="p-2 rounded-sm border">
                <FaUser />
              </a>
              <button
                onClick={() => onLogout()}
                className="p-2 rounded-sm bg-slate-800 text-white"
              >
                <FaSignOutAlt />
              </button>
            </div>
          ) : (
            <div className="flex gap-3 items-center">
              <a href="/login" className="p-2 rounded-sm border">
                Sign In
              </a>
              <a
                href="/register"
                className="p-2 rounded-sm bg-slate-800 text-white"
              >
                Sign Up
              </a>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Navbar;
