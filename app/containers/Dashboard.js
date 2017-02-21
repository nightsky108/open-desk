import ReactDataGrid from 'react-data-grid'
import React from 'react'
import update from 'immutability-helper'
//  ES5 syntax seems to only work in this strange instance
//  Without this, double filters interfere.
const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons')

import Columns from './Columns'

const Dashboard = React.createClass({
  getInitialState () {
    this._columns = Columns
    return { rows: this.createRows(), filters: {} }
  },

  //  Generate Test Data
  getRandomDate (start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString()
  },
  createRows () {
    let rows = []
    for (let i = 1; i < 10; i++) {
      rows.push({
        id: i,
        name: ['Reanimator', 'Fromm Food', '49th Parallel', 'Tommy\'s Coffee'][Math.floor(Math.random() * 4)],
        product: ['Bag, 12oz', 'Tin, 8oz', 'Standup Bag, Pour', 'Packet, 4oz'][Math.floor(Math.random() * 4)],
        priority: ['1 - Critical', '2 - High', '3 - Medium', '4 - Low'][Math.floor(Math.random() * 4)],
        complete: Math.min(100, Math.round(Math.random() * 110)),
        status: ['Tear Ordered', 'Proof Review', 'Awaiting Charges', 'Customer AWOL'][Math.floor(Math.random() * 4)],
        sales: 1,
        graphics: 1,
        qa: 1
      })
    }
    return rows
  },

  getRows () { return Selectors.getRows(this.state) },
  getSize () { return this.getRows().length },

  handleGridRowsUpdated ({ fromRow, toRow, updated }) {
    //  Copy state
    let rows = this.state.rows.slice()
    let rowToUpdate = this.getRows()[fromRow]
    let updatedRow = update(rowToUpdate, {$merge: updated})
    //  Got the updated row
    // console.log('Updated Row', updatedRow)

    //  Replace the row in state that has a matching UUID.
    for (let i in rows) {
      if (rows[i].id === updatedRow.id) {
        rows[i] = updatedRow
        this.setState({ rows })
        break
      }
    }
  },

  rowGetter (rowIdx) {
    let rows = this.getRows()
    return rows[rowIdx]
  },

  //  Automatically sorts by incomplete orders first.
  // componentWillMount () { this.handleGridSort('priority', 'ASC') },

  handleGridSort (sortColumn, sortDirection) {
    const comparer = (a, b) => {
      if (sortDirection === 'ASC') {
        return (a[sortColumn] > b[sortColumn]) ? 1 : -1
      } else if (sortDirection === 'DESC') {
        return (a[sortColumn] < b[sortColumn]) ? 1 : -1
      }
    }

    const rows = sortDirection === 'NONE' ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer)
    this.setState({ rows })
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

  // all filters removed
  onClearFilters () { this.setState({ filters: {} }) },

  render () {
    return (
      <div id='grid-wrapper'>
        <ReactDataGrid
          columns={this._columns}
          rowGetter={this.rowGetter}
          rowsCount={this.getSize()}
          enableCellSelect
          cellNavigationMode='loopOverRow'
          toolbar={<Toolbar enableFilter />}
          onGridRowsUpdated={this.handleGridRowsUpdated}
          onGridSort={this.handleGridSort}
          onAddFilter={this.handleFilterChange}
          onClearFilters={this.onClearFilters} />
      </div>
    )
  }
})

export default Dashboard
