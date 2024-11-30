import { Socials } from './socials/socials'
import './footer.css'

export const Footer = () => {
    return (
        <div class="footer">
            <div class="footer-container flex flex-column">
                <Socials />
                <div class="ruler"></div>
                <div class="info flex">
                    <div class="info-column">
                        <div class="footer-brand">
                            <img src="https://chicksgold.com/logo/chicks-logo-large.svg" alt="chicks_logo" />
                        </div>
                        <span>support@chicksgold.com</span>
                    </div>
                    <div class="info-column">
                        <div class="info-heading">Chicks Gold</div>
                        <a href="#">Games</a>
                        <a href="#">About Us</a>
                        <a href="#">Blog</a>
                        <a href="#">Sitemap</a>
                    </div>
                    <div class="info-column">
                        <div class="info-heading">Support</div>
                        <a href="#">Contact Us</a>
                        <a href="#">FAQ</a>
                    </div>
                    <div class="info-column">
                        <div class="info-heading">Legal</div>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Copyright Policy</a>
                    </div>
                    <div class="info-column">
                        <img src="https://chicksgold.com/home/star_full.svg" alt="star" />
                        <img src="https://chicksgold.com/home/star_full.svg" alt="star" />
                        <img src="https://chicksgold.com/home/star_full.svg" alt="star" />
                        <img src="https://chicksgold.com/home/star_full.svg" alt="star" />
                        <img src="https://chicksgold.com/home/star_full.svg" alt="star" />
                        <span>Trustpilot Reviews</span>
                    </div>
                </div>
                <div class="copyright">© 2017 - {new Date().getFullYear()}, ChicksGold.com. All Rights Reserved.</div>
            </div>
        </div>
    )
}