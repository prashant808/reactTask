import logo from "../imgs/logo.png";
import search from "../imgs/magnifying-glass.png";
import user from "../imgs/user.svg";
import crown from "../imgs/crown.png";
import down from "../imgs/downarrow.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const [menu, setMenu] = useState(false);

  const show = (event) => {
    event.preventDefault();
    document.body.classList.toggle('lock-scroll');
    setMenu(!menu);
  };
	const prevent = (e)=>{
		e.preventDefault();
	}

  return (
    <>
      <header className= " containernav ">
      <div className=" container">
        <nav className={menu ? "navbarresp Mont" : "navbar Mont"}>
          <div className={menu ? "flexnavsub" : "flexnav"}>
            <div>
              <div className="none hamburger">
                <Link
                  to="/"
                  type="button"
                  onClick={show}
                  className={menu ? "barshide" : " "}
                >
                  <i class="fa-solid fa-bars"></i>
                </Link>
              </div>
            </div>
            <div>
              <Link to="/" className={menu ? "logo" : " "}>
                <img src={logo} width="60%" alt="logo img" />
              </Link>
            </div>
            <Link to="/" onClick={show} className={menu ? "cross" : "crosclose"}>
              <i class="fa-solid fa-xmark"></i>
            </Link>
          </div>
          <div></div>
          <ul className={menu ? "navflx2" : "navflx"}>
            <li className="hide">
              <Link to="/">
                <img src={search} alt="search" /> Search
              </Link>
            </li>
            <li className={menu ? "subs" : " "}>
              <Link to="/">
                <img src={crown} alt="search" /> Subscribe
              </Link>
            </li>
            <li className="hide">
              <Link to="/">
                {" "}
                <img src={user} alt="search" /> Sign in
              </Link>
            </li>
          </ul>
        </nav>
        <subnav className="subnav Mont">
          <ul>
            <li>
              <Link to="/">Private Equity</Link>
            </li>
            <li>
              <Link to="/">Venture Capital</Link>
            </li>
            <li>
              <Link to="/">M&A</Link>
            </li>
            <li>
              <Link to="/">
                Industry <img src={down} alt="arrow" />
              </Link>
            </li>
            <li>
              <Link to="/">Stressed Assests</Link>
            </li>
            <li>
              <Link to="/">Limited Partner</Link>
            </li>
            <li>
              <Link to="/">founder</Link>
            </li>
          </ul>
          <ul>
            <li className="li">
              <Link to="/">
                Customize <img src={down} alt="arrow" />
              </Link>
            </li>
          </ul>
        </subnav>

        <div className={menu ? "mobmenu" : "hidemenu"}>
          <ul className="menu Montbold">
            <li className="menulist">
              <Link to="javascript;" onClick={prevent}>
                Home
              </Link>
            </li>
            <li className="menulist">
              <Link to="javascript;" onClick={prevent}>
                Sign-in
              </Link>
            </li>
            <li className="sub">
              <Link to="javascript;" onClick={prevent}>
                <img src={crown} alt="search" /> Subscribe
              </Link>
            </li>
            <li className="menulist">
              <Link to="javascript;" onClick={prevent}>
                Private Equity
              </Link>
            </li>
            <li className="menulist">
              <Link to="javascript;" onClick={prevent}>
                Venture Capital
              </Link>
            </li>
            <li className="menulist">
              <Link to="javascript;" onClick={prevent}>
                M&A
              </Link>
            </li>
            <li className="menulist">
              <Link
                to="javascript;"
                onClick={prevent}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>Industry</span>
                <span>
                  {" "}
                  <img src={down} alt="arrow" />
                </span>
              </Link>
            </li>
            <li className="menulist">
              <Link to="javascript;" onClick={prevent}>
                Stressed Assests
              </Link>
            </li>
            <li className="menulist">
              <Link to="javascript;" onClick={prevent}>
                Limited Partner
              </Link>
            </li>
            <li className="menulist">
              <Link to="javascript;" onClick={prevent}>
                founder
              </Link>
            </li>
            <li className="menulist">
              <Link to="javascript;" onClick={prevent}>
                About Us
              </Link>
            </li>
            <li className="menulist">
              <Link to="javascript;" onClick={prevent}>
                Tag Listing
              </Link>
            </li>
            <li className="menulist">
              <Link to="javascript;" onClick={prevent}>
                Advertise With us
              </Link>
            </li>
            <li className="menulist">
              <Link to="javascript;" onClick={prevent}>
                Contact Us
              </Link>
            </li>
            <li className="menulist">
              <Link to="javascript;" onClick={prevent}>
                VCC Mobile App
              </Link>
            </li>
          </ul>
        </div>
        </div>
      </header>
    </>
  );
};
function Footer() {
  return (
    <>
      <div className="Footer mt-30">
        <div className=" row">
          <div className="col-2"></div>
          <div className="col-8">
            <img
              src="../imgs/footlogo.png"
              alt="footer logo"
              width="auto"
              className=""
            />
            <ul className="footul">
              <li>
                <Link to="/">
                  <img src="../imgs/facebook.png" alt="facebook" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="../imgs/twitter.png" alt="twitter" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="../imgs/linkedin.png" alt="linkedin" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <ul className="footul2 flex2 MontMed">
              <li>
                <Link to="/" style={{ color: "#FFFFFFB2" }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "#FFFFFFB2" }}>
                  Advertise with us
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "#FFFFFFB2" }}>
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "#FFFFFFB2" }}>
                  Copyright
                </Link>
              </li>

              <li>
                <Link to="/" style={{ color: "#FFFFFFB2" }}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "#FFFFFFB2" }}>
                  Terms of use
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "#FFFFFFB2" }}>
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "#FFFFFFB2" }}>
                  Company Listing
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "#FFFFFFB2" }}>
                  Tag Listing
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <ul className="footul3 flex2 Montbold">
              <li>
                <Link to="/" style={{ color: "#FFFFFF" }}>
                  Our Products :
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "#FFFFFF" }}>
                  VCCircle
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "#FFFFFF" }}>
                  TechCircle{" "}
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "#FFFFFF" }}>
                  Events
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "#FFFFFF" }}>
                  Training
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "#FFFFFF" }}>
                  VCCEdge
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "#FFFFFF" }}>
                  SalesEdge
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "#FFFFFF" }}>
                  PartnerEdge
                </Link>
              </li>
              <li>
                <Link to="/" style={{ color: "#FFFFFF" }}>
                  Edge Insights
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="Montlight " style={{ color: "#FFFFFFB2" }}>
          <p>
            Copyright © 2022 VCCircle.com. Property of Mosaic Media Ventures
            Pvt. Ltd.
          </p>
        </div>
      </div>
    </>
  );
}

export { Nav, Footer };