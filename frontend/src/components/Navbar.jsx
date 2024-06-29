import React from "react";
import "../styles/Navbar.css";
import PlaceIcon from "@mui/icons-material/Place";
import logo from "../assets/amazon_logo_black.webp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ReactCountryFlag from "react-country-flag";

export default function Navbar() {
    return (
        <nav className="Navbar">
            <div className="NavItem">
                <img className="NavLogo" src={logo} />
            </div>
            <div className="NavItem">
                <PlaceIcon style={{ color: "white", padding: 5 }} />
                <div>
                    <div className="NavItemSubTitle">
                        Delivery to Indore 452001
                    </div>
                    <div className="NavItemTitle">Update location</div>
                </div>
            </div>
            <div className="SearchBar">

            </div>
            <div className="NavItem">
                <div>
                    <div className="NavItemSubTitle"></div>
                    <div className="NavItemTitle">
                        <ReactCountryFlag
                            svg
                            countryCode="IN"
                            style={{
                                paddingRight: 3,
                                marginTop: -3,
                                fontSize: "1.5em",
                            }}
                        />
                        EN
                    </div>
                </div>
                <ArrowDropDownIcon style={{ color: "white", paddingTop: 10 }} />
            </div>
            <div className="NavItem">
                <div>
                    <div className="NavItemSubTitle">Hello, sign in</div>
                    <div className="NavItemTitle">Account & Lists</div>
                </div>
            </div>
            <div className="NavItem">
                <div>
                    <div className="NavItemSubTitle">Returns</div>
                    <div className="NavItemTitle">& Order</div>
                </div>
            </div>
            <div className="NavItem">
                <ShoppingCartOutlinedIcon  style={{ color: "white", fontSize: '2.5em' }}/>
                <div>
                    <div className="NavItemSubTitle"></div>
                    <div className="NavItemTitle">Cart</div>
                </div>
            </div>
        </nav>
    );
}
