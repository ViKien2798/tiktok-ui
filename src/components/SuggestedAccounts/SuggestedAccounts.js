import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

import { useState, useEffect } from 'react';
import * as suggestedAccountService from '~/services/suggestedAccountService';
const cx = classNames.bind(styles);

function SuggestedAccounts({ label, value }) {
    const currentUser = value;
    const [suggests, setSuggests] = useState([]);
    const [seeAll, setSeeAll] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            if (!seeAll) {
                const result = await suggestedAccountService.suggest(1, 5);
                setSuggests(result);
            } else {
                const result = await suggestedAccountService.suggest(1, 16);
                setSuggests(result);
            }
        };
        fetchApi();
    }, [seeAll]);

    return (
        <div className={cx('wrapper')}>
            <div>
                <p className={cx('label')}>{label}</p>
                {suggests.map((suggest) => {
                    return <AccountItem key={suggest.id} data={suggest} />;
                })}
                {seeAll ? (
                    <div className={cx('see-all')} onClick={() => setSeeAll(false)}>
                        See less
                    </div>
                ) : (
                    <div className={cx('see-all')} onClick={() => setSeeAll(true)}>
                        See All
                    </div>
                )}
            </div>
            {currentUser && (
                <div className={cx('following')}>
                    <p className={cx('title')}>Following accounts</p>
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <div className={cx('see-all')}>See more</div>
                </div>
            )}
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
};

export default SuggestedAccounts;
