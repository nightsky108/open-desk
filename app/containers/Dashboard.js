import ReactDataGrid from 'react-data-grid'
import React from 'react'
import update from 'immutability-helper'
//  ES5 syntax seems to only work in this strange instance
//  Without this, double filters interfere.
import Columns from './Columns'
const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons')

import Firebase from '../firebase'

const Dashboard = React.createClass({
  getInitialState () {
    this._columns = Columns
    return {
      // rows: [],
      filters: {}
    }
  },

  componentWillMount () {
    Firebase.syncState(`cases`, {
      context: this,
      state: 'rows',
      asArray: true
    })
  },

  componentDidMount () {
    //  Automatically sorts by incomplete orders first.
    this.handleGridSort('priority', 'ASC')
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

  handleGridSort (sortColumn, sortDirection) {
    if (sortDirection !== 'NONE') {
      const comparer = (a, b) => {
        if (sortDirection === 'ASC') {
          return (a[sortColumn] > b[sortColumn]) ? 1 : -1
        } else if (sortDirection === 'DESC') {
          return (a[sortColumn] < b[sortColumn]) ? 1 : -1
        }
      }
      const rows = this.state.rows.sort(comparer)
      this.setState({ rows })
    }
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
      <div>
        {this.state.rows &&
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
      }
      </div>
    )
  }
})

export default Dashboard
