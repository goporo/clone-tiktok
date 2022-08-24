import React, { useEffect } from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import './Header.scss'
import Search from './Search'
import images from '../../assets/images'
import Menu from './Menu';
import { InboxIcon, MessageIcon } from '../../assets/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEarthAsia, faKeyboard, faQuestionCircle, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Button from '../items/Button';

const Header = () => {

    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faQuestionCircle} />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ];

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];


    const currentUser = true;

    const handleMenuChange = () => {

    }

    return (
        <div className='wrapper'>
            <div className='header'>
                <a href='/'>
                    <img src={images.logo} alt='Tiktok' />
                </a>
                <Search />
                <div className='right-buttons'>
                    {currentUser ? (
                        <>
                            <Button
                                styles={`btn-wrapper leftIcon rectangle`}
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Tippy delay={[0, 50]} content="Messages" placement="bottom">
                                <button className='action-btn'>
                                    <MessageIcon width='26' />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className='action-btn'>
                                    <InboxIcon width='32' />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <button >Upload</button>
                            <button >Log in</button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                src={images.ava}
                                alt="Nguyen Van A"
                                className='ava'
                            />
                        ) : (
                            <button >
                                something
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default Header