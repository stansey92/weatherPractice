import React from 'react'
import { ListGroup, ListGroupItem, Container, Row, Col } from 'reactstrap';


class ItemList extends React.Component {
  render() {
    return (
      <div className='mt-3'>
        <ListGroup >
          <ListGroupItem className="font-weight-bold bg-primary text-light">Do you have everything for your adventure?</ListGroupItem>
          <ListGroupItem tag="button" action>
            <Container>
              <Row>
                <Col xs='9'>Cras justo odio</Col>
                <Col xs='2'>$6.99</Col>
                <Col xs='1'><img src="https://img.icons8.com/ios-glyphs/30/000000/add-shopping-cart.png"/></Col>
              </Row>
            </Container>
          </ListGroupItem>
          <ListGroupItem tag="button" action>
            <Container>
              <Row>
                <Col xs='9'>Cras justo odio</Col>
                <Col xs='2'>$6.99</Col>
                <Col xs='1'><img src="https://img.icons8.com/ios-glyphs/30/000000/add-shopping-cart.png"/></Col>
              </Row>
            </Container>
          </ListGroupItem>
          <ListGroupItem tag="button" action>
            <Container>
              <Row>
                <Col xs='9'>Cras justo odio</Col>
                <Col xs='2'>$6.99</Col>
                <Col xs='1'><img src="https://img.icons8.com/ios-glyphs/30/000000/add-shopping-cart.png"/></Col>
              </Row>
            </Container>
          </ListGroupItem>
          <ListGroupItem tag="button" action>
            <Container>
              <Row>
                <Col xs='9'>Cras justo odio</Col>
                <Col xs='2'>$6.99</Col>
                <Col xs='1'><img src="https://img.icons8.com/ios-glyphs/30/000000/add-shopping-cart.png"/></Col>
              </Row>
            </Container>
          </ListGroupItem>
          <ListGroupItem tag="button" action>
            <Container>
              <Row>
                <Col xs='9'>Cras justo odio</Col>
                <Col xs='2'>$6.99</Col>
                <Col xs='1'><img src="https://img.icons8.com/ios-glyphs/30/000000/add-shopping-cart.png"/></Col>
              </Row>
            </Container>
          </ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

export default ItemList
