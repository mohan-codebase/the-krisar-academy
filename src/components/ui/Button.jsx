

import React from 'react'

const Button = (props) => {

    const { children, onclick, className = "" } = props;
    const styles = `font-bold px-8 py-3 rounded bg-brand-secondary text-text-secondary ${className}`;

    return (
        <button className={styles} onClick={onclick}>
            {children}
        </button>
    )
}

export default Button














// export default function Button(props) {

//     const styles = `font-bold px-8 py-3 rounded bg-brand-secondary text-text-secondary`;

//     const { children , onclick} = props;


//     return (

//         <button className={styles} onClick={onclick}>{children}</button>

//     )
// }