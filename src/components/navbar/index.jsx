import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { translate } from "../../redux/slices/languageSlice";
import NavbarDropDown from "../NavbarDropDown/NavbarDropDown";

const NavBar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleLang = (event) => {
    event.preventDefault();
    dispatch(translate());
  };
  return (
    <div className="header">
      <Navbar className="pb-0" expand="lg">
        <Container>
          <Navbar.Brand
            className="d-flex align-items-center"
            id="bosta-logo"
            href="/"
          >
            <img className="imgLogo" src="/images/bosta.png" alt="bosta-logo" />
            <span className="logo fs-4">{t("bosta")}</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto ">
              <Nav.Link href="/">{t("Home")}</Nav.Link>
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
