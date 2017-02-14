import React from 'react'

const MessageBox = ({ author, message, date, handleDelete}) =>
  <li className='MessageBox'>
    <div className='message-header'>
      <img
        src={`http://message-list.appspot.com${author.photoUrl}`}
        alt={author.name} />
      <h4>{author.name}</h4>
      <button onClick={handleDelete}>Delete me!</button>
    </div>
    <div className='message-body'>
      <p>{message}</p>
    </div>
  </li>

const propTypes = {
  author: React.PropTypes.object,
  message: React.PropTypes.string,
  date: React.PropTypes.date,
  handleDelete: React.PropTypes.func
}

//      <button onClick={console.log('Delete me!')}>Delete me!</button>

export default Object.assign(MessageBox, propTypes)
