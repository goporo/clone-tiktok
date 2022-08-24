import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import React from 'react'

const AccountItem = () => {
    return (
        <div>
            <Tippy
                // interactive
                delay={[800, 0]}
                offset={[-20, 0]}
                placement="bottom"
            // render={renderPreview}
            >
                <div className='menu-item'>
                    <img
                        className='go__icon'
                        src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/153616986_118443363619146_116183389615272593_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WjVN8QjXO1MAX9fNYwe&tn=Wu2HfhY7yDlR_a8T&_nc_ht=scontent.fdad3-4.fna&oh=00_AT8Uauz1ULhvZase5znNj9isnb_e_ZYySLrZbvFBsiEtzw&oe=632D73A5"
                        alt=""
                    />
                    <div className='account-info'>
                        <p className='account-un'>
                            <strong>quocnguyenphu</strong>
                            <FontAwesomeIcon className='check-icon' icon={faCheckCircle} />
                        </p>
                        <p className='account-name'>Quốc Nguyễn Phú</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem