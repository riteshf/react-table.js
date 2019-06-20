import React from 'react'

const Header = (props) => {
    const headerStyle = props.header && props.header.style ? props.header.style : {};

    return (
        <header className="panel-heading" style={headerStyle}>
            <div onClick={() => props.showTable()}>
                {props.header.name}
            </div>
        </header>
    )
}
export { Header }