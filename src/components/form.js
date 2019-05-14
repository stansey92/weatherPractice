import React from 'react'
import './form.css'

class Form extends React.Component {
  state = {
    city: '',
  }

  onSubmit = (e, input) => {
    e.preventDefault()
    this.props.getWeather(this.state.city)
  }

  render() {
    return (
      <div className="center">
        <form onSubmit={e => this.onSubmit(e, this.state.city)}  className="border">
          <div className="form-group">
            <label htmlFor="input">Weather Finder</label>
            <input onChange={(e) => this.setState({city: e.target.value})} type="text" className="form-control" id="input" aria-describedby="emailHelp" placeholder="Enter city" required/>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
