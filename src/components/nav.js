import React from 'react'
import { Navbar, NavbarBrand, Button } from 'reactstrap'

class Nav extends React.Component {


  onClickCart = () => {
    console.log(this.props.cart)
  }

  render() {
    return (
      <div>
      <Navbar color="dark" dark>
        <NavbarBrand href="/" className="mr-auto">Weather Store</NavbarBrand>
        <Button color="primary" onClick={() => this.onClickCart()}>Cart</Button>
      </Navbar>
      </div>
    )
  }
}

export default Nav
