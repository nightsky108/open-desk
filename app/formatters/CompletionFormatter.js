import React from 'react'

//  Styles are determined dynamically for readability.
const CompletionFormatter = ({value}) => (
  <div className='progress'>
    <div className='progress-bar' role='progressbar'
      aria-valuenow='60' aria-valuemin='0' aria-valuemax='100'
      style={{
        width: `${value}%`,
        color: value <= 20 ? '#333' : '#fff',
        backgroundColor: value <= 20 ? '#82B1FF' : '#428bca'
      }}>
      {`${value}%`}
    </div>
  </div>
)

export default CompletionFormatter
