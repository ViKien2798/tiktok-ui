import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './Profile.module.scss';
import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ModalContext } from '~/components/ModalProvider';
import { Wrapper } from '~/components/Popper';
import { BanIcon, FlagIcon, LinkRoundedIcon, ShareIcon } from '~/components/Icons';
import ShareAction from '~/components/ShareAction';
import HeadlessTippy from '@tippyjs/react/headless';
const cx = classNames.bind(styles);

function Profile() {
    const context = useContext(ModalContext);
    const location = useLocation();
    const data = location.state;

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/users/@${data.nickname}`)
            .then((response) => response.json())
            .then((json) => setVideos(json.data.videos));
    }, [data.nickname]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info-container')}>
                <div className={cx('info')}>
                    <div className={cx('basic')}>
                        <Image className={cx('avatar')} src={data?.avatar} alt={data?.avatar} />
                        <div className={cx('text')}>
                            <div className={cx('username')}>{data?.nickname}</div>
                            <div className={cx('name')}>{data.fullname || `${data.first_name} ${data.last_name}`}</div>
                            <Button primary onClick={context.handleShowModal} style={{ minWidth: '208px' }}>
                                Follow
                            </Button>
                        </div>
                    </div>
                    <div className={cx('counts')}>
                        <div className={cx('following')}>
                            <strong>{data.followings_count}</strong>
                        </div>
                        <div className={cx('follower')}>
                            <strong>{data.followers_count}</strong>
                        </div>
                        <div className={cx('likes')}>
                            <strong>{data.likes_count}</strong>
                        </div>
                    </div>
                    <div className={cx('bio')}>{data.bio ? data.bio : 'No bio yet'}</div>

                    <a href={data.website_url} target="blank">
                        {data.website_url && (
                            <div className={cx('website')}>
                                <LinkRoundedIcon className={cx('link')} />
                                {data.website_url}
                            </div>
                        )}
                    </a>
                </div>
                <div className={cx('side-btn')}>
                    <div className={cx('share-btn')}>
                        <ShareAction offset={[-100, 10]}>
                            <div>
                                <ShareIcon />
                            </div>
                        </ShareAction>
                    </div>

                    <HeadlessTippy
                        interactive
                        hideOnClick="false"
                        placement="bottom-end"
                        offset={[0, 10]}
                        delay={[0, 700]}
                        zIndex="99"
                        render={(attrs) => (
                            <div tabIndex="-1" {...attrs}>
                                <Wrapper className={cx('more-tab')}>
                                    <div className={cx('action-report')}>
                                        <p>
                                            <FlagIcon height="16" /> Report
                                        </p>
                                    </div>
                                    <div className={cx('action-block')}>
                                        <p>
                                            <BanIcon /> Block
                                        </p>
                                    </div>
                                </Wrapper>
                            </div>
                        )}
                    ></HeadlessTippy>
                </div>
            </div>
        </div>
    );
}

export default Profile;
