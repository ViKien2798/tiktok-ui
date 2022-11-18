import classNames from 'classnames/bind';
import styles from './Discover.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faMusic } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Discover() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>Discover</p>
            <div className={cx('list')}>
                <div className={cx('hashtag')}>
                    <FontAwesomeIcon icon={faHashtag} className={cx('icon')} />
                    <p className={cx('text')}>suthatla</p>
                </div>
                <div className={cx('hashtag')}>
                    <FontAwesomeIcon icon={faHashtag} className={cx('icon')} />
                    <p className={cx('text')}>mackedoi</p>
                </div>
                <div className={cx('hashtag')}>
                    <FontAwesomeIcon icon={faHashtag} className={cx('icon')} />
                    <p className={cx('text')}>sansangthaydoi</p>
                </div>
                <div className={cx('hashtag')}>
                    <FontAwesomeIcon icon={faMusic} className={cx('icon')} />
                    <p className={cx('text')}>Yêu Đơn Phương Là Gì (MEE Remix) - Mee Remix sdaak</p>
                </div>
                <div className={cx('hashtag')}>
                    <FontAwesomeIcon icon={faMusic} className={cx('icon')} />
                    <p className={cx('text')}>
                        Về Nghe Mẹ Ru - NSND Bach Tuyet &amp; Hứa Kim Tuyền &amp; 14 Casper &amp; Hoàng Dũng
                    </p>
                </div>
                <div className={cx('hashtag')}>
                    <FontAwesomeIcon icon={faMusic} className={cx('icon')} />
                    <p className={cx('text')}>Thiên Thần Tình Yêu - RICKY STAR</p>
                </div>
                <div className={cx('hashtag')}>
                    <FontAwesomeIcon icon={faHashtag} className={cx('icon')} />
                    <p className={cx('text')}>7749hieuung</p>
                </div>
                <div className={cx('hashtag')}>
                    <FontAwesomeIcon icon={faHashtag} className={cx('icon')} />
                    <p className={cx('text')}>genzlife</p>
                </div>
                <div className={cx('hashtag')}>
                    <FontAwesomeIcon icon={faMusic} className={cx('icon')} />
                    <p className={cx('text')}>Tình Đã Đầy Một Tim - Huyền Tâm Môn</p>
                </div>
                <div className={cx('hashtag')}>
                    <FontAwesomeIcon icon={faMusic} className={cx('icon')} />
                    <p className={cx('text')}>Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham</p>
                </div>
            </div>
        </div>
    );
}

export default Discover;
