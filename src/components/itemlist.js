import React, { useState, useEffect } from 'react'
import { ListGroup, ListGroupItem, Container, Row, Col } from 'reactstrap';


const ItemList = (props) => {
  const [items, setItems] = useState([])
  // count is only here to keep useEffect from re-rendering all the time
  const count = 0

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`http://localhost:3001/${determineWeatherCat(props.temp)}`)
      const json = await response.json()
      setItems(shuffleAndReturnFive(json))
    }
    fetchItems()
    //count below is there to keep useEffect from constantly rerendering
  }, [count])

  const determineWeatherCat = (num) => {
    if (num >= 80) return 'hot'
    if (num >= 40 && num < 80) return 'mild'
    if (num < 40) return 'cold'
  }

  const shuffleAndReturnFive = (data) => {
    let result = []
    for (let x = 0; x < 5; x++) {
      let rand = Math.floor(Math.random() * data.length)
      result.push(data[rand])
      data.splice(rand, 1)
    }
    return result
  }

  const onClickItem = (item) => {
    props.addToCart(item)
    let arr = [...items]
    let newArr = arr.filter(i => i !== item)
    setItems(newArr)
  }

  const renderItems = (items) => {
    return items.map(i =>
      <ListGroupItem key={i.id} tag="button" onClick={() => onClickItem(i)} action>
        <Container>
          <Row>
            <Col xs='6'>{i.item}</Col>
            <Col xs='4'>${i.price}</Col>
            <Col xs='2'><img src="https://img.icons8.com/ios-glyphs/20/000000/add-shopping-cart.png"/></Col>
          </Row>
        </Container>
      </ListGroupItem>)
  }

    return (
      <div className='mt-3'>
        <ListGroup>
          <ListGroupItem className="font-weight-bold bg-primary text-light">Do you have everything for your adventure?</ListGroupItem>
          {renderItems(items)}
        </ListGroup>
      </div>
    )
}

export default ItemList
