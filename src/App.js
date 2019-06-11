import React from 'react';
import './App.css'
import { Container, Row, Col } from 'reactstrap'
import InputForm from './components/form'
import Weather from './components/weather'
import Nav from './components/nav'
import ItemList from './components/itemlist'

class App extends React.Component {
  state = {
    weatherObj: null,
    showForm: true,
    cart: []
  }

  getWeather = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
    const json = await response.json()
    this.setState({weatherObj: json})
  }

  showHideForm = () => {
    this.state.showForm ? this.setState({showForm : false}) : this.setState({showForm : true, weatherObj: null})
  }

  addToCart = (item) => {
    this.setState({cart: [...this.state.cart, item]})
  }


  render() {
    return (
      <div>
        <Nav cart={this.state.cart}/>
        <Container>
          <Row>
            <Col xs='12' sm='2'></Col>
            <Col xs='12' sm='8'>
            {this.state.showForm ? <InputForm showForm={this.showHideForm} getWeather={this.getWeather}/>  : null}
            {this.state.weatherObj === null ? null : <Weather showForm={this.showHideForm} weather={this.state.weatherObj}/> }
            {this.state.weatherObj === null ? null : <ItemList addToCart={this.addToCart} temp={this.state.weatherObj.main.temp}/> }
            </Col>
            <Col xs='0' sm='2'></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
