import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './SideBar.module.scss';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import Discover from './Discover';
import Footer from './Footer';
//
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import Button from '~/components/Button';
import { ModalContext } from '~/components/ModalProvider';
import { useContext } from 'react';

const cx = classNames.bind(styles);

function SideBar({ shrink }) {
    const currentUser = false;
    // const currentUser = true;

    const context = useContext(ModalContext);
    // const currentYear = new Date().getFullYear();

    return (
        <div className={cx('wrapper', { shrink: shrink })}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            {!currentUser && (
                <div className={cx('login')}>
                    <div className={cx('detail')}>
                        <p>Log in to follow creators, like videos, and view comments.</p>
                        <Button outline onClick={context.handleShowModal}>
                            Log in
                        </Button>
                    </div>
                </div>
            )}
            {/* -----Suggest Account */}

            <SuggestedAccounts label="Suggested accounts" value={currentUser} />
            <Discover />

            <Footer />
        </div>
    );
}

export default SideBar;
