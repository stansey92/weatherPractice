import React, { useState } from 'react';
import './App.css'
import { Container, Row, Col } from 'reactstrap'
import InputForm from './components/form'
import Weather from './components/weather'
import Nav from './components/nav'
import ItemList from './components/itemlist'

const App = () => {
  const [weatherObj, setWeatherObj] = useState(null)
  const [showForm, setShowForm] = useState(true)
  const [cart, setCart] = useState([])

  const getWeather = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
    const json = await response.json()
    setWeatherObj(json)
  }

  const showHideForm = () => {
    return showForm ? setShowForm(false) : (setShowForm(true), setWeatherObj(null))
  }

  const addToCart = (item) => {
    setCart([...cart, item])
  }

    return (
      <div>
        <Nav cart={cart}/>
        <Container>
          <Row>
            <Col xs='12' sm='2'></Col>
            <Col xs='12' sm='8'>
            {showForm ? <InputForm showForm={showHideForm} getWeather={getWeather}/>  : null}
            {weatherObj === null ? null : <Weather showForm={showHideForm} weather={weatherObj}/> }
            {weatherObj === null ? null : <ItemList addToCart={addToCart} temp={weatherObj.main.temp}/> }
            </Col>
            <Col xs='0' sm='2'></Col>
          </Row>
        </Container>
      </div>
    )
}

export default App;
