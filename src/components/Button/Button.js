import React from 'react';
import { MDBBtn } from "mdbreact";


const Button = props => {
    const { click, name, gradient } = props

    return (
        <>
            <MDBBtn onClick={click} outline color="dark">{name}</MDBBtn>
        </>
    );
}

export default Button;