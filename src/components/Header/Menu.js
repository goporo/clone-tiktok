import Tippy from '@tippyjs/react/headless';

import React, { useState } from 'react'
import MenuItem from '../Sidebar/MenuItem';
import Header from './Header';
import Button from '../items/Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Menu = ({ children, items = [] }) => {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <Button
                    key={index}
                    data={item}
                    // onClick={() => {
                    //     if (isParent) {
                    //         setHistory((prev) => [...prev, item.children]);
                    //     } else {
                    //         onChange(item);
                    //     }
                    // }}
                    styles={`btn-wrapper leftIcon no-outline  account-btn account-items`}
                    leftIcon={item.icon}

                >{item.title}</Button>
            );
        });
    };


    const renderResult = (attrs) => (
        <div className='' tabIndex="-1" {...attrs}>
            <div className=''>
                {/* {history.length > 1 && <Header title={current.title} onBack={`handleBack`} />} */}
                <div className='popper-wrapper'>
                    {renderItems()}
                    {/* <button>helo</button> */}
                </div>
            </div>
        </div>
    );


    return (
        <Tippy
            interactive
            delay={[0, 600]}
            offset={[12, 8]}
            hideOnClick={true}
            placement="bottom-end"
            render={renderResult}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    )
}

export default Menu