import React from 'react'
import { Card, CardTitle, Container, Row, Col, Button } from 'reactstrap';
import './form.css'

const Weather = (props) => {
    return (
      <div className='mt-3'>
        <Card className='form'>
        <Container>
          <Row>
            <CardTitle>Current Weather in {props.weather.name}</CardTitle>
          </Row>
          <Row>
            <Col>
              <div className='temp'>{props.weather.main.temp} F</div>
            </Col>
            <Col>
              <img className='weatherIcon' src={`http://openweathermap.org/img/w/${props.weather.weather[0].icon}.png`} />
            </Col>
          </Row>
          </Container>
          <Button onClick={e => props.showForm()}>change location</Button>
        </Card>
      </div>
    )
}

export default Weather
