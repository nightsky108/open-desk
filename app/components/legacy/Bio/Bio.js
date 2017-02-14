// jshint ignore: start
import React from 'react'
import _ from 'lodash'

const Bio = ({ myName, age, pronoun, favoriteActivity }) =>
  <div className='Bio'>
    <p>
      This is {myName} and he is {age}.
    </p>
    <p>{_.capitalize(pronoun.nominative)} likes {favoriteActivity}.</p>
  </div>

const propTypes = {
  myName: React.PropTypes.string,
  age: React.PropTypes.number,
  pronoun: React.PropTypes.object,
  favoriteActivity: React.PropTypes.string
}

export default Object.assign(Bio, propTypes)
