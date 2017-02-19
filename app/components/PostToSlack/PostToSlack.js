// jshint ignore: start
import React from 'react'
import axios from 'axios'

const endpoint = 'https://hooks.slack.com/services/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'

class PostToSlack extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      message: '',
      username: '',
      emoji: ':conga-parrot:'
    }
  }
  
  handleSubmit (e) {
    e.preventDefault()  // Prevent refresh
    axios.post(endpoint, JSON.stringify({
      username: this.state.username,
      text: this.state.message,
      icon_emoji: this.state.emoji
    })
    )
    .then((response) => {
      console.log(response)
      this.setState({
        username: '',
        message: '',
        emoji: ':conga-parrot:' // Default state
      })
    }) 
    .catch((error) => console.error(error))
  }
  
  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} >
        <input type='text' label='Message' placeholder='Message'
          value={this.state.message}
          onChange={(e) => this.setState({message: e.target.value})}/>
        <input type='text' label='Username' placeholder='Username'
          value={this.state.username}
          onChange={(e) => this.setState({username: e.target.value})} />
        <select label='Emoji' value={this.state.emoji}
          onChange={(e) => this.setState({emoji: e.target.value})}>
          <option value=':conga-parrot:'>Conga Parrot</option>
          <option value=':emily:'>Upside-down Emily</option>
          <option value=':turtle:'>Turtle (fun)</option>
          <option value=':+1:'>Thumbs up!</option>
          <option value=':deal-with-it-parrot:'>So cool.</option>
        </select>
        <input type='submit' />
      </form>
    )
  }

}

export default PostToSlack
