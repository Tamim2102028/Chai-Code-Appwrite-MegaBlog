import { Link } from "react-router-dom";
import { Container, LogoutButton } from "../index";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <>
      <header className="bg-white shadow py-3">
        <Container>
          <nav>
            <div className="mr-4 flex items-center justify-between">
              <Link to="/">MegaBlog</Link>
            </div>
            <ul className="flex gap-6">
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.slug}>
                      <Link to={item.slug}>{item.name}</Link>
                    </li>
                  )
              )}
              {authStatus && (
                <li>
                  <LogoutButton />
                </li>
              )}
            </ul>
          </nav>
        </Container>
      </header>
    </>
  );
}
export default Header;
