import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from '../Image';
import Button from '~/components/Button';
import { useContext } from 'react';
import { ModalContext } from '~/components/ModalProvider';

const cx = classNames.bind(styles);

function AccountItem({ sidebar, data, ...passProps }) {
    const context = useContext(ModalContext);

    return (
        <div>
            <HeadlessTippy
                interactive
                hideOnClick="false"
                appendTo={document.body}
                delay={[1000, 0]}
                offset={[-20, 0]}
                placement="bottom"
                zIndex="99"
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('account-tab')}>
                            <div className={cx('header')}>
                                <Image className={cx('tippy-avatar')} src={data?.avatar} alt={data?.avatar} />
                                <Button primary onClick={context.handleShowModal}>
                                    Follow
                                </Button>
                            </div>
                            <div className={cx('tippy-username')}>
                                <span>{data?.nickname}</span>
                                {data?.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                            </div>
                            <div className={cx('tippy-name')}>
                                {data?.full_name || `${data?.first_name} ${data?.last_name}`}
                            </div>

                            <div className={cx('user-stats')}>
                                <div className={cx('follower-stats')}>
                                    <span className={cx('bold')}>{data?.followers_count}</span> Followers
                                </div>

                                <div className={cx('like-stats')}>
                                    <span className={cx('bold')}>{data?.likes_count}</span> Likes
                                </div>
                            </div>
                        </PopperWrapper>
                    </div>
                )}
            >
                <Link
                    to={`/@${data?.nickname}`}
                    className={cx('account-item', { sidebar })}
                    {...passProps}
                    state={data}
                >
                    <Image className={cx('avatar')} src={data?.avatar} alt="" />
                    <div className={cx('item-info')}>
                        <div className={cx('username')}>
                            <span className={cx('nickname')}>{data?.nickname}</span>
                            {data?.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </div>

                        <div className={cx('name')}>{data?.full_name || `${data?.first_name} ${data?.last_name}`}</div>
                    </div>
                </Link>
            </HeadlessTippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
