

import React from 'react'
import { Link } from 'react-router-dom';

const Button = (props) => {
    const { children, onClick, to, className = "", type = "button", ...rest } = props;
    const styles = `font-bold px-6 py-3 md:px-4 md:py-2 rounded bg-brand-secondary text-brand-primary inline-flex items-center justify-center border-none cursor-pointer transition-all text-sm md:text-lg whitespace-nowrap ${className}`;

    if (to) {
        return (
            <Link to={to} className={styles} onClick={onClick} {...rest}>
                {children}
            </Link>
        )
    }

    if (rest.href) {
        return (
            <a className={styles} onClick={onClick} {...rest}>
                {children}
            </a>
        )
    }

    return (
        <button type={type} className={styles} onClick={onClick} {...rest}>
            {children}
        </button>
    )
}

export default Button

