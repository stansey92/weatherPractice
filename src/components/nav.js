import React from 'react'
import { Navbar, NavbarBrand, Button } from 'reactstrap'

class Nav extends React.Component {
  render() {
    return (
      <div>
      <Navbar color="dark" dark>
        <NavbarBrand href="/" className="mr-auto">Weather Store</NavbarBrand>
        <Button color="primary">Cart</Button>
      </Navbar>
      </div>
    )
  }
}

export default Nav
