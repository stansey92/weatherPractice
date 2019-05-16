import React from 'react'
import { Card, CardTitle, Container, Row, Col, Button } from 'reactstrap';
import './form.css'

class Weather extends React.Component {

  render() {
    return (
      <div className='weather'>
        <Card className='form'>
        <Container>
          <Row>
            <CardTitle>Current Weather in {this.props.weather.name}</CardTitle>
          </Row>
          <Row>
            <Col>
              <div className='temp'>{this.props.weather.main.temp} F</div>
            </Col>
            <Col>
              <img className='weatherIcon' src={`http://openweathermap.org/img/w/${this.props.weather.weather[0].icon}.png`} />
            </Col>
          </Row>
          </Container>
          <Button onClick={e => this.props.showForm()}>change location</Button>
        </Card>
      </div>
    )
  }
}

export default Weather
