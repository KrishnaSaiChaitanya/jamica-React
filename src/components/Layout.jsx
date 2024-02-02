import Footer from "./footer";
import NavbarJamaica from "./navbarJamaica";
// import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <NavbarJamaica />
      <main>{children}</main>
      <Footer />
    </>
  );
}
