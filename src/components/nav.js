import React, { useState } from 'react'
import { Navbar, NavbarBrand, Button, Modal, ModalHeader, ModalFooter, ModalBody, ListGroupItem, Col, Row, Container, ListGroup } from 'reactstrap'

const Nav = (props) => {
  const [modal, setModal ] = useState(false)

  const toggleModal = () => {
    setModal(modal ? false : true)
  }

  const renderItems = (items) => {
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

  const onClickCart = () => {
    toggleModal()
  }

  const cartTotal = (cart) => {
    let result = 0
    for (let x = 0; x < cart.length; x++) {
      result+= parseFloat(cart[x].price)
    }
    return result.toFixed(2)
  }

    return (
      <div>
      <Navbar color="dark" dark>
        <NavbarBrand href="/" className="mr-auto">Weather Store</NavbarBrand>
        <Button color="primary" onClick={() => onClickCart()}>Cart</Button>
      </Navbar>
      <Modal isOpen={modal}>
          <ModalHeader>Cart:</ModalHeader>
          <ModalBody>
          <ListGroup>
            {renderItems(props.cart)}
            <ListGroupItem active>
              <Container>
                <Row>
                  <Col xs='9'>Total:</Col>
                  <Col xs='3'>${cartTotal(props.cart)}</Col>
                </Row>
              </Container>
            </ListGroupItem>
          </ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggleModal}>Purchase</Button>{' '}
            <Button color="secondary" onClick={toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
}

export default Nav
