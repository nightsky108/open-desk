// jshint ignore: start
import React from 'react'

class BooksList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      author: '',
      books: [
        { title: 'Harry Potter', author: 'JK Rowling' },
        { title: 'A Wizard of Earthsea', author: 'Ursula K. LeGuin' },
        { title: 'Moby Dick', author: 'Herman Melville' },
        { title: 'Ulysses', author: 'James Joyce' }
      ]
    }
  }
  
  handleSubmit (e) {
    e.preventDefault()  // Prevent refresh
    const oldBooks = this.state.books
    const newBooks = this.state.books.concat({
      title: this.state.title,
      author: this.state.author
    })  //Push is a mutation
    this.setState({
      title: '',
      author: '',
      books: newBooks
    })
    
  }
  render () {
    return (
      <div className='BooksList'>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <h1>Add a book</h1>
          <input label='Title' type='text' placeholder='Enter a title' value={this.state.title} onChange={(e) => this.setState({title: e.target.value})} />
          <input label='Author' type='text' placeholder='Book Author' value={this.state.author} onChange={(e) => this.setState({author: e.target.value})} />
          <input type='submit' />
        </form>
        <ul>
          {this.state.books.map((book, i) =>
            <li key={i}>{book.title} by {book.author}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default BooksList
