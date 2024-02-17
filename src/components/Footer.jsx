import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"


const Footer = () => {
  return (
    <footer>
        <div className="container footer-container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="footer logo" />
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nesciunt qui, aliquid cupiditate optio beatae praesentium ipsum cumque. Neque, minus.
                </p>
                <div className="footer-socials">
                    <a href="#" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a>
                    <a href="#" target="_blank" rel="noreferrer noopener"><FaFacebookF/></a>
                    <a href="#" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>
                    <a href="#" target="_blank" rel="noreferrer noopener"><AiFillInstagram/></a>
                </div>
            </article>

            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>

            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Community</Link>
                <Link to="/s">FAQs</Link>
            </article>

            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>

        <div className="footer-copyright">
            <small>2024 Mstack &copy;</small>
        </div>
    </footer>
  )
}

export default Footer