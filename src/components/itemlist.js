import React from 'react'
import { ListGroup, ListGroupItem, Container, Row, Col } from 'reactstrap';


class ItemList extends React.Component {
  state = {
    items: []
  }

  async componentDidMount() {
    const response = await fetch(`http://localhost:3001/${this.determineWeatherCat(this.props.temp)}`)
    const json = await response.json()
    this.setState({items: [...json]})
  }

  determineWeatherCat = (num) => {
    if (num >= 80) return 'hot'
    if (num >= 40 && num < 80) return 'mild'
    if (num < 40) return 'cold'
  }

  renderItems = () => {
    return this.state.items.map(i =>
      <ListGroupItem tag="button" action>
        <Container>
          <Row>
            <Col xs='9'>{i.item}</Col>
            <Col xs='2'>${i.price}</Col>
            <Col xs='1'><img src="https://img.icons8.com/ios-glyphs/30/000000/add-shopping-cart.png"/></Col>
          </Row>
        </Container>
      </ListGroupItem>)
  }



  render() {
    return (
      <div className='mt-3'>
        <ListGroup >
          <ListGroupItem className="font-weight-bold bg-primary text-light">Do you have everything for your adventure?</ListGroupItem>
          {this.renderItems()}
        </ListGroup>
      </div>
    )
  }
}

export default ItemList
