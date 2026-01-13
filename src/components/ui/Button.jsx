

import React from 'react'
import { Link } from 'react-router-dom';

const Button = (props) => {
    const { children, onClick, to, className = "", type = "button", ...rest } = props;
    const styles = `font-bold px-8 py-3 rounded bg-brand-secondary text-text-secondary inline-block border-none cursor-pointer hover:brightness-110 transition-all ${className}`;

    if (to) {
        return (
            <Link to={to} className={styles} onClick={onClick} {...rest}>
                {children}
            </Link>
        )
    }

    return (
        <button type={type} className={styles} onClick={onClick} {...rest}>
            {children}
        </button>
    )
}

export default Button

