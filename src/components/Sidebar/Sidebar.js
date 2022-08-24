import React from 'react'
import './Sidebar.scss'
import { routes } from '../../routes/route';
import MenuItem from './MenuItem';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '../../assets/icons';
import SuggestedAccounts from './SuggestedAccounts';
// import SuggestedAccounts from '~/components/SuggestedAccounts';



const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <div className='col'>
                <MenuItem title="For You" to={routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </div>

            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    )
}



export default Sidebar;