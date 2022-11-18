import Header from '~/layouts/components/Header';
import SideBar from '~/layouts/components/SideBar';
//
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import PropTypes from 'prop-types';
import GetApp from '~/components/GetApp';

import { ModalContext } from '~/components/ModalProvider';
import ModalForm from '~/components/ModalForm';
import { useContext } from 'react';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    const context = useContext(ModalContext);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>
                    {children}
                    <GetApp />
                </div>
            </div>
            {context.active && <ModalForm onHide={context.handleHideModal} />}
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
