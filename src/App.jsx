import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth.service";
import { login, logout } from "./store/slice/auth.Slice";
import { Header, Footer, Loader } from "./components/index";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.error("No user logged in:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  // if (loading) {
  //   return <Loader message="Checking authentication..." />;
  // }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 w-full max-w-4xl">
        {/* <Outlet /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
