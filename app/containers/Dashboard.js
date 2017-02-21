import ReactDataGrid from 'react-data-grid'
import React from 'react'
const { Toolbar, Data: { Selectors }, Editors } = require('react-data-grid-addons')
const { AutoComplete: AutoCompleteEditor, DropDownEditor } = Editors
// const { ImageFormatter } = Formatters

import update from 'immutability-helper'

import Button from 'react-md/lib/Buttons/Button'

const bagOptions = [
  {id: 0, title: 'Bag, 12oz'},
  {id: 1, title: 'Tin, 8oz'},
  {id: 2, title: 'Standup Bag, Pour'},
  {id: 3, title: 'Packet, 4oz'}
]
const priorityOptions = ['1 - Critical', '2 - High', '3 - Medium', '4 - Low']
// const priorityOptions = [
  // {id: 3, value: 3, title: 'Critical'},
  // {id: 2, value: 2, title: 'High'},
  // {id: 1, value: 1, title: 'Medium'},
  // {id: 0, value: 0, title: 'Low'}]

const PercentCompleteFormatter = ({value}) => (
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

const Dashboard = React.createClass({
  getInitialState () {
    this._columns = [
      {
        key: 'name',
        name: 'Name',
        locked: true,
        resizable: true,
        filterable: true,
        sortable: true,
        width: 100
      },
      {
        key: 'product',
        name: 'Product',
        editor: <AutoCompleteEditor options={bagOptions} />,
        editable: true,
        // locked: true,  //  Affects the ability to use AutoCompleteEditor
        resizable: true,
        filterable: true,
        sortable: true,
        width: 125
        // update: () => console.log('Autocomplete update')
      },
      {
        key: 'priority',
        name: 'Priority',
        editor: <DropDownEditor options={priorityOptions} />,
        editable: true,
        resizable: true,
        filterable: true,
        sortable: true,
        width: 80
      },
      {
        key: 'complete',
        name: 'Completion',
        formatter: PercentCompleteFormatter,
        editable: true,
        resizable: true,
        sortable: true,
        width: 120
      },
      {
        key: 'status',
        name: 'Status',
        editable: true,
        resizable: true,
        width: 300
      },
      {
        key: 'sales',
        name: '',
        formatter: <Button flat primary label='Sales' />,
        width: 110
      },
      {
        key: 'graphics',
        name: '',
        formatter: <Button flat primary label='Graphics' />,
        width: 110
      },
      {
        key: 'qa',
        name: '',
        formatter: <Button flat primary label='Q.A.' />,
        width: 110
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

  getRows () {
    return Selectors.getRows(this.state)
  },

  getSize () {
    return this.getRows().length
  },

  handleGridRowsUpdated ({ fromRow, toRow, updated }) {
    let rows = this.state.rows.slice()

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i]
      // Error here
      let updatedRow = update(rowToUpdate, {$merge: updated})
      rows[i] = updatedRow
    }

    this.setState({ rows })
  },

  rowGetter (rowIdx) {
    let rows = this.getRows()
    return rows[rowIdx]
  },

  componentDidMount () {
    //  Automatically sorts by incomplete orders first.
    this.setState({sortColumn: 'complete', sortDirection: 'ASC'})
  },

  handleGridSort (sortColumn, sortDirection) {
    this.setState({ sortColumn: sortColumn, sortDirection: sortDirection })
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
          rowsCount={this.getSize()}
          enableCellSelect
          cellNavigationMode='loopOverRow'
          // minHeight={'80vh'}
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
