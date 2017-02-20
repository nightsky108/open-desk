import ReactDataGrid from 'react-data-grid'
import React from 'react'
const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons')

import Button from 'react-md/lib/Buttons/Button'

// const PercentCompleteFormatter = ({value}) => (
//   <div className='progress'>
//     <div className='bar' style={{width: `${value}%`}}>{`${value}%`}</div>
//   </div>
// )

const PercentCompleteFormatter = ({value}) => (
  <div className='progress'>
    <div className='progress-bar' role='progressbar'
      aria-valuenow='60' aria-valuemin='0' aria-valuemax='100'
      style={{width: `${value}%`}}
      >{`${value}%`}
    </div>
  </div>
)

const ChatButton = () => <Button flat primary label='Chat'>chat_bubble_outline</Button>

const Dashboard = React.createClass({
  getInitialState () {
    this._columns = [
      {
        key: 'name',
        name: 'Name',
        width: 125,
        filterable: true,
        locked: true,
        resizable: true
      },
      {
        key: 'product',
        name: 'Product',
        width: 125,
        filterable: true,
        locked: true,
        resizable: true
      },
      {
        key: 'priority',
        name: 'Priority',
        width: 100,
        filterable: true
      },
      {
        key: 'complete',
        name: '% Complete',
        formatter: PercentCompleteFormatter,
        width: 100,
        filterable: true
      },
      {
        key: 'sales',
        name: 'Sales',
        formatter: ChatButton,
        width: 110,
        filterable: true
      },
      {
        key: 'graphics',
        name: 'Graphics',
        formatter: ChatButton,
        width: 110,
        filterable: true
      },
      {
        key: 'qa',
        name: 'QA',
        formatter: ChatButton,
        width: 110,
        filterable: true
      }
    ]

    return { rows: this.createRows(), filters: {} }
  },

  getRandomDate (start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString()
  },

  createRows () {
    let rows = []
    for (let i = 1; i < 50; i++) {
      rows.push({
        name: ['Reanimator', 'Fromm Food', '49th Parallel', 'Tommy\'s Coffee'][Math.floor((Math.random() * 3) + 1)],
        product: ['Bag, 12oz', 'Tin, 8oz', 'Standup Bag, Pour', 'Packet, 4oz'][Math.floor((Math.random() * 3) + 1)],
        priority: ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
        complete: Math.min(100, Math.round(Math.random() * 110)),
        sales: true,
        graphics: true,
        qa: true,
        issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
        startDate: this.getRandomDate(new Date(2015, 3, 1), new Date()),
        completeDate: this.getRandomDate(new Date(), new Date(2016, 0, 1))
        /*
        id: i,
        task: `Task ${i}`,
        complete: Math.min(100, Math.round(Math.random() * 110)),
        priority: ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
        issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
        startDate: this.getRandomDate(new Date(2015, 3, 1), new Date()),
        completeDate: this.getRandomDate(new Date(), new Date(2016, 0, 1))
        */
      })
    }

    return rows
  },

  getRows () {
    return Selectors.getRows(this.state)
  },

  getSize () {
    return this.getRows().length
  },

  rowGetter (rowIdx) {
    let rows = this.getRows()
    return rows[rowIdx]
  },

  handleFilterChange (filter) {
    let newFilters = Object.assign({}, this.state.filters)
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter
    } else {
      delete newFilters[filter.column.key]
    }
    this.setState({ filters: newFilters })
  },

  onClearFilters () { // all filters removed
    this.setState({
      filters: {}
    })
  },

  render () {
    return (
      <div id='grid-wrapper'>
        <ReactDataGrid
          columns={this._columns}
          rowGetter={this.rowGetter}
          enableCellSelect
          rowsCount={this.getSize()}
          minHeight={'80vh'}
          toolbar={<Toolbar enableFilter />}
          onAddFilter={this.handleFilterChange}
          onClearFilters={this.onClearFilters} />
      </div>
    )
  }
})

export default Dashboard
