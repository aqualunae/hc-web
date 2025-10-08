import React, { useState } from 'react'

type ButtonProps = {
    icon: string,
    url: string,
    title: string
}

const LinkButton = (props: ButtonProps) => {

    const [ iconColor, setIconColor ] = useState("dark");

    const onHover = () => {
        setIconColor("lit");
    }

    const onBlur = () => {
        setIconColor("dark");
    }

    return (
        <a href={ props.url } title={ props.title } className="link-button" onMouseEnter={ onHover } onMouseLeave={ onBlur } onFocus={ onHover } onBlur={ onBlur }>
            <img src={ `/assets/${ props.icon }-${ iconColor }.png` } alt={ props.title } />
        </a>
    )
}

export default LinkButton