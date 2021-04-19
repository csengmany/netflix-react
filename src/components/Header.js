import logo from "../assets/images/logo.png";
import mini from "../assets/images/miniLogo.png";

const Header = () => {
    return (
        <div className="header">
            <img id="logo" src={logo} alt="netflix logo" />
            <img src={mini} alt="mini netflix logo" />
        </div>
    );
};
export default Header;
