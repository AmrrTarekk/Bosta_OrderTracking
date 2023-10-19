import { Navbar, Nav, Container, NavDropdown, Form } from "react-bootstrap";
import "./navbar.css";

import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { translate } from "../../redux/slices/languageSlice";
// import { changeLanguage } from "i18next";

const NavBar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleLang = (event) => {
    event.preventDefault();
    dispatch(translate());
  };
  return (
    <div className="header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand
            className="d-flex align-items-center"
            id="bosta-logo"
            href="/"
          >
            <img
              className="imgLogo"
              src="../../../public/bosta.png"
              alt="bosta-logo"
            />
            <span className="logo fs-4">{t("bosta")}</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto ">
              <Nav.Link href="/">{t("Home")}</Nav.Link>
              <Nav.Link href="#action2">{t("Pricing")}</Nav.Link>
              <Nav.Link href="#action2">{t("ContactSales")}</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Nav c>
                <NavDropdown
                  title={t("TrackingShipment")}
                  id="navbarScrollingDropdown"
                >
                  {/* <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item> */}
                </NavDropdown>
                <Nav.Link href="#action2">{t("SignIn")}</Nav.Link>
                <Nav.Link id="language-btn" onClick={handleLang}>
                  {t("lang")}
                </Nav.Link>
              </Nav>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
