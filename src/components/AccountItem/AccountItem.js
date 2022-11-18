import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '../Image';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function AccountItem({ sidebar, data, ...passProps }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper', { sidebar })} {...passProps}>
            <Image className={cx('avatar')} src={data?.avatar} alt={data?.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data?.nickname}</span>
                    {data?.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.full_name || `${data?.first_name} ${data?.last_name}`}</span>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItem;
