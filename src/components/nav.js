import React from 'react'
import { Navbar, NavbarBrand, Button, Modal, ModalHeader, ModalFooter, ModalBody, ListGroupItem, Col, Row, Container, ListGroup } from 'reactstrap'

class Nav extends React.Component {
  state = {
    modal: false
  }

  toggleModal = () => {
    this.setState({modal: this.state.modal ? false : true})
  }

  renderItems = (items) => {
    return items.map(i =>
      <ListGroupItem key={i.id}>
        <Container>
          <Row>
            <Col xs='9'>{i.item}</Col>
            <Col xs='3'>${i.price}</Col>
          </Row>
        </Container>
      </ListGroupItem>)
  }

  onClickCart = () => {
    this.toggleModal()
  }

  cartTotal = (cart) => {
    let result = 0
    for (let x = 0; x < cart.length; x++) {
      result+= parseFloat(cart[x].price)
    }
    return result.toFixed(2)
  }

  render() {
    return (
      <div>
      <Navbar color="dark" dark>
        <NavbarBrand href="/" className="mr-auto">Weather Store</NavbarBrand>
        <Button color="primary" onClick={() => this.onClickCart()}>Cart</Button>
      </Navbar>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Cart:</ModalHeader>
          <ModalBody>
          <ListGroup>
            {this.renderItems(this.props.cart)}
            <ListGroupItem active>
              <Container>
                <Row>
                  <Col xs='9'>Total:</Col>
                  <Col xs='3'>${this.cartTotal(this.props.cart)}</Col>
                </Row>
              </Container>
            </ListGroupItem>
          </ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>Purchase</Button>{' '}
            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Nav
