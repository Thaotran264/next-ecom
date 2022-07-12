import React from 'react'
import { Nav } from 'react-bootstrap'

const MenuBar = () => {
    return (
        <Nav variant="tabs">
            <Nav.Item>
                <Nav.Link>Menu1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Menu2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled">
                    Menu3
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default MenuBar