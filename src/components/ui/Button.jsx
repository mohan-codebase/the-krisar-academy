

import React from 'react'
import { Link } from 'react-router-dom';

// Sizing lives here rather than in a caller's className: padding and font-size passed
// from outside lose to these defaults, since same-group utilities resolve by stylesheet
// order and not by the order they appear in the class attribute.
const sizes = {
    md: 'px-6 py-3 md:px-4 md:py-2 text-sm md:text-lg',
    sm: 'px-4 py-2 text-sm',
};

const Button = (props) => {
    const { children, onClick, to, className = "", type = "button", size = "md", ...rest } = props;
    const styles = `font-bold ${sizes[size] ?? sizes.md} rounded bg-brand-secondary text-brand-primary inline-flex items-center justify-center border-none cursor-pointer transition-all whitespace-nowrap ${className}`;

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

