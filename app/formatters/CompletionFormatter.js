import React from 'react'

//  Styles are determined dynamically for readability.
const CompletionFormatter = ({value}) => (
  <div>
    <div className='progress'>
      <div className={'progress-bar'} role='progressbar'
        aria-valuenow='60' aria-valuemin='0' aria-valuemax='100'
        style={{width: `${value}%`}}>
        <span className={value <= 15 && 'visibility-adj'}>
          {`${value}%`}
        </span>
      </div>
    </div>
  </div>
)

export default CompletionFormatter
