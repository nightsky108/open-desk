import ReactDataGrid from 'react-data-grid'
import React from 'react'
const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons')

// Custom Formatter component
const PercentCompleteFormatter = React.createClass({
  propTypes: {
    value: React.PropTypes.number.isRequired
  },

  render () {
    const percentComplete = this.props.value + '%'
    return (
      <div className='progress'>
        <div className='bar' style={{width: percentComplete}}>{percentComplete}</div>
      </div>)
  }
})

/*
return (
  <div className='progress'>
    <div className='value'>{percentComplete}</div>
    <div className='bar' style={{width: percentComplete}} />
  </div>)
<div class="progress">
        <div class="value">100%</div>
        <div class="bar" style="width: 100%;"></div>
    </div>
*/

const Dashboard = React.createClass({
  getInitialState () {
    this._columns = [
      {
        key: 'id',
        name: 'Name',
        width: 150,
        filterable: true,
        locked: true,
        resizable: true
      },
      {
        key: 'task',
        name: 'Product',
        width: 150,
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
        key: 'issueType',
        name: 'Issue Type',
        width: 100,
        filterable: true
      },
      {
        key: 'startDate',
        name: 'Start Date',
        width: 100,
        filterable: true
      },
      {
        key: 'completeDate',
        name: 'Expected Complete',
        width: 100,
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
    for (let i = 1; i < 100; i++) {
      rows.push({
        id: i,
        task: `Task ${i}`,
        complete: Math.min(100, Math.round(Math.random() * 110)),
        priority: ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
        issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
        startDate: this.getRandomDate(new Date(2015, 3, 1), new Date()),
        completeDate: this.getRandomDate(new Date(), new Date(2016, 0, 1))
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
          minHeight={500}
          toolbar={<Toolbar enableFilter />}
          onAddFilter={this.handleFilterChange}
          onClearFilters={this.onClearFilters} />
      </div>
    )
  }
})

export default Dashboard
