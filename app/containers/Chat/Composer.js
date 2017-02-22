import React from 'react'

import TextField from 'react-md/lib/TextFields'

//  Array is raw due to the unique nature of each element
const Composer = () => (
  <TextField
    id='singleMultiline'
    lineDirection='right'
    rows={4}
    className='md-cell md-cell--bottom' //  Is this necessary?
  />
)

export default Composer
