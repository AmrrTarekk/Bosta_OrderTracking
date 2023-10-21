import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { translate } from "../../redux/slices/languageSlice";
import NavbarDropDown from "../NavbarDropDown/NavbarDropDown";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleLang = (event) => {
    event.preventDefault();
    dispatch(translate());
  };
  return (
    <div className="header">
      <Navbar className="pb-0 w-100" expand="lg">
        <Container>
          <Navbar className="d-flex align-items-center p-0" id="bosta-logo">
            <Link className="text-decoration-none  " to="/">
              <img
                className="imgLogo"
                src="/images/bosta.png"
                alt="bosta-logo"
              />
              <span className="logo fs-4">{t("bosta")}</span>
            </Link>
          </Navbar>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto ">
              <Nav className="px-0">
                <Link className="text-decoration-none" to="/">
                  {t("Home")}
                </Link>
              </Nav>
              <Nav.Link href="#action2">{t("Pricing")}</Nav.Link>
              <Nav.Link href="#action2">{t("ContactSales")}</Nav.Link>
            </Nav>
            <Nav className="d-flex">
              <Nav>
                <NavbarDropDown />
                <div className="line"></div>
                <Nav.Link href="#action2">{t("SignIn")}</Nav.Link>
                <Nav.Link id="language-btn" onClick={handleLang}>
                  {t("lang")}
                </Nav.Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
