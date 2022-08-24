import React from 'react'
import './Button.scss'

const Button = ({
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    styles,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) => {
    return (
        <button className={styles}>
            {leftIcon && <span className='icon'>{leftIcon}</span>}
            <span className='title'>{children}</span>
            {rightIcon && <span className='icon'>{rightIcon}</span>}
        </button>
    )
}

export default Button