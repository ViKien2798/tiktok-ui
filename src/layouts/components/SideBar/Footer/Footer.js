import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('links-1')}>
                <a href="https://www.tiktok.com/about?lang=en" target="blank">
                    About
                </a>
                <a href="https://www.tiktok.com/browse" target="blank">
                    TikTok Browse
                </a>
                <a href="https://newsroom.tiktok.com/" target="blank">
                    Newsroom
                </a>
                <a href="https://www.tiktok.com/about/contact?lang=en" target="blank">
                    Contact
                </a>
                <a href="https://careers.tiktok.com" target="blank">
                    Careers
                </a>
                <a href="https://www.bytedance.com/" target="blank">
                    ByteDance
                </a>
            </div>

            <div className={cx('links-2')}>
                <a href="https://www.tiktok.com/forgood" target="blank">
                    TikTok for Good
                </a>
                <a
                    href="https://www.tiktok.com/business/?attr_medium=tt_official_site_guidance&amp;attr_source=tt_official_site&amp;refer=tiktok_web"
                    target="blank"
                >
                    Advertise
                </a>
                <a href="https://developers.tiktok.com/?refer=tiktok_web" target="blank">
                    Developers
                </a>
                <a href="https://www.tiktok.com/transparency?lang=en" target="blank">
                    Transparency
                </a>
                <a href="https://www.tiktok.com/tiktok-rewards/en" target="blank">
                    TikTok Rewards
                </a>
            </div>

            <div className={cx('links-3')}>
                <a href="https://support.tiktok.com/en" target="blank">
                    Help
                </a>
                <a href="https://www.tiktok.com/safety?lang=en" target="blank">
                    Safety
                </a>
                <a href="https://www.tiktok.com/legal/terms-of-service?lang=en" target="blank">
                    Terms
                </a>
                <a href="https://www.tiktok.com/legal/privacy-policy-row?lang=en" target="blank">
                    Privacy
                </a>
                <a href="https://www.tiktok.com/creators/creator-portal/en-us/" target="blank">
                    Creator Portal
                </a>
                <a href="https://www.tiktok.com/community-guidelines?lang=en" target="blank">
                    Community Guidelines
                </a>
            </div>

            <span className={cx('copyright')}>
                <FontAwesomeIcon icon={faCopyright} /> <p>{currentYear} TikTok</p>
            </span>
        </div>
    );
}

export default Footer;
