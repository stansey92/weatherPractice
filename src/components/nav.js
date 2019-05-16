import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

class Nav extends React.Component {
  render() {
    return (
      <div>
      <Navbar color="dark" dark>
        <NavbarBrand href="/" className="mr-auto">Weather Store</NavbarBrand>
      </Navbar>
      </div>
    )
  }
}

export default Nav
