import React from 'react'
import AccountItem from './AccountItem';

const SuggestedAccounts = ({ label }) => {
    return (
        <div className='suggested-accounts'>
            <p className='side-label'>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <a href='/' className='side-primary'>See all</a>
        </div>
    );
}

export default SuggestedAccounts