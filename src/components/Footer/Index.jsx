import logo from "/logo.jpg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
        <p> World Problems Log</p>
      </div>

      <p className="copyright">Copyright &copy; 2024 WorldProblemLogLLc.</p>

      <div className="footer__icons">
        <span className="footer__icon material-icons-sharp">hub</span>
        <span className="footer__icon material-icons-sharp">hub</span>
        <span className="footer__icon material-icons-sharp">hub</span>
        <span className="footer__icon material-icons-sharp">hub</span>
        <span className="footer__icon material-icons-sharp">hub</span>
      </div>
    </div>
  );
};

export default Footer;
