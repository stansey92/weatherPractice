import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Card } from 'reactstrap';
import './form.css'

class InputForm extends React.Component {
  state = {
    city: '',
  }

  onSubmit = (e, input) => {
    e.preventDefault()
    this.props.showForm()
    this.props.getWeather(this.state.city)
  }

  render() {
    return (
      <div onSubmit={e => this.onSubmit(e, this.state.city)} className='mt-3'>
        <Card>
          <Form className='form'>
            <FormGroup>
              <Label for="city">Where would you like to know the weather?</Label>
              <Input onChange={(e) => this.setState({city: e.target.value})} type="text" name="city" id="city" placeholder="enter city..." />
            </FormGroup>
            <Button color="primary">Submit</Button>
          </Form>
        </Card>
      </div>
    )
  }
}

export default InputForm
