import React from 'react'
import { ListGroup, ListGroupItem, Container, Row, Col } from 'reactstrap';


class ItemList extends React.Component {
  state = {
    items: []
  }

  async componentDidMount() {
    const response = await fetch(`http://localhost:3001/${this.determineWeatherCat(this.props.temp)}`)
    const json = await response.json()
    this.setState({items: this.shuffleAndReturnFive(json)})
  }

  determineWeatherCat = (num) => {
    if (num >= 80) return 'hot'
    if (num >= 40 && num < 80) return 'mild'
    if (num < 40) return 'cold'
  }

  shuffleAndReturnFive = (data) => {
    let result = []
    for (let x = 0; x < 5; x++) {
      let rand = Math.floor(Math.random() * data.length)
      result.push(data[rand])
      data.splice(rand, 1)
    }
    return result
  }

  onClickItem = (item) => {
    this.props.addToCart(item)
    let arr = [...this.state.items]
    let newArr = arr.filter(i => i !== item)
    this.setState({items: newArr})
  }

  renderItems = (items) => {
    return items.map(i =>
      <ListGroupItem key={i.id} tag="button" onClick={() => this.onClickItem(i)}action>
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
          {this.renderItems(this.state.items)}
        </ListGroup>
      </div>
    )
  }
}

export default ItemList
