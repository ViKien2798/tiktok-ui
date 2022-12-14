import styles from './GetApp.module.scss';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import { PCIcon, SmartPhoneIcon, ForwardStepIcon } from '~/components/Icons';
import { Wrapper } from '../Popper';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);
function GetApp() {
    const [active, setActive] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setActive(true);
            } else {
                setActive(false);
            }
        });
    }, []);

    return (
        <div className={cx('wrapper', { active })}>
            <div className={cx('container')}>
                <HeadlessTippy
                    interactive
                    trigger="click"
                    placement="top-end"
                    offset={[0, -30]}
                    zIndex="99"
                    render={(attrs) => (
                        <div tabIndex="-1" {...attrs}>
                            <Wrapper>
                                <div className={cx('tippy-wrapper')}>
                                    <div className={cx('tippy-inner')}>
                                        <div className={cx('item')}>
                                            {' '}
                                            <PCIcon className={cx('icon')} /> <span>Get TikTok for desktop</span>
                                        </div>
                                        <div className={cx('splitter')}></div>
                                        <div className={cx('item')}>
                                            {' '}
                                            <SmartPhoneIcon className={cx('icon')} /> <span>Get TikTok App</span>
                                        </div>
                                    </div>
                                    {/* <div className={cx('close-btn')}>
                                        {' '}
                                        <XMarkIcon height={'2rem'} width={'2rem'} />{' '}
                                    </div> */}
                                </div>
                            </Wrapper>
                        </div>
                    )}
                >
                    <button className={cx('getApp-btn')}>Get App</button>
                </HeadlessTippy>
            </div>
            <div className={cx('back-to-top')} onClick={scrollToTop}>
                <ForwardStepIcon />
            </div>
        </div>
    );
}

export default GetApp;
