import React from 'react';
import './App.css'
import Form from './components/form'

class App extends React.Component {
  state = {
    weatherObj: {}
  }


  getWeather = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
    const json = await response.json()
    console.log(json)
    this.setState({weatherObj: json})
  }


  render() {
    return (
      <div>
        <Form getWeather={this.getWeather}/>
      </div>
    )
  }
}

export default App;
