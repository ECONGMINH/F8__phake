import React from 'react';
import PropTypes from 'prop-types';
import iconF8 from '../assets/img/header/f8_icon.png'
import './Style.scss'

Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <footer>
        <a href="/" className="footer__logo-f8">
            <img src={iconF8} alt="" />
        </a>

        <ul className="footer__links">
            <li><a href="">Giới thiệu</a></li>
            <li><a href="">Cơ hội việc làm</a></li>
        </ul>


        <ul className="footer__socials">
            <li>
                <a href="https://www.facebook.com/groups/f8official/">
                    <i className="fab fa-facebook-square"></i>
                </a>
            </li>

            <li>
                <a href="https://www.youtube.com/c/F8VNOfficial">
                <i className="fab fa-youtube-square"></i>
                </a>
            </li>
        </ul>
    </footer>
    );
}

export default Footer;