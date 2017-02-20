import ReactDataGrid from 'react-data-grid'
import React from 'react'
const { Toolbar, Data: { Selectors }, Editors, Formatters } = require('react-data-grid-addons')
const { AutoComplete: AutoCompleteEditor, DropDownEditor } = Editors
const { ImageFormatter } = Formatters

import Button from 'react-md/lib/Buttons/Button'

const bagOptions = [
  {id: 0, title: 'Bag, 12oz'},
  {id: 1, title: 'Tin, 8oz'},
  {id: 2, title: 'Standup Bag, Pour'},
  {id: 4, title: 'Packet, 4oz'}
]
// const priorityOptions = [
//   {id: 0, title: 'Standard'},
//   {id: 1, title: 'Medium'},
//   {id: 2, title: 'High'},
//   {id: 3, title: 'Critical'}
// ]
// const bagOptions = ['Reanimator', 'Fromm Food', '49th Parallel', 'Tommy\'s Coffee']
const priorityOptions = ['Critical', 'High', 'Medium', 'Low']
// const priorityOptions = [{ id: 0, title: 'Critical' }, { id: 1, title: 'High' }, { id: 2, title: 'Medium' }, { id: 3, title: 'Low'} ];

const PercentCompleteFormatter = ({value}) => (
  <div className='progress'>
    <div className='progress-bar' role='progressbar'
      aria-valuenow='60' aria-valuemin='0' aria-valuemax='100'
      style={{
        width: `${value}%`,
        color: value < 12 ? '#333' : '#fff',
        backgroundColor: value < 12 ? '#82B1FF' : '#428bca'
      }}>
      {`${value}%`}
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
        locked: true,
        resizable: true,
        filterable: true
      },
      {
        key: 'product',
        name: 'Product',
        width: 125,
        editor: <AutoCompleteEditor options={bagOptions} />,
        editable: true,
        locked: true,
        resizable: true,
        filterable: true,
        // update: () => console.log('Autocomplete update')
      },
      {
        key: 'priority',
        name: 'Priority',
        editor: <DropDownEditor options={priorityOptions} />,
        editable: true,
        width: 80,
        filterable: true
      },
      {
        key: 'complete',
        name: '% Complete',
        formatter: PercentCompleteFormatter,
        width: 120
      },
      {
        key: 'sales',
        name: 'Sales',
        formatter: ChatButton,
        width: 115
      },
      {
        key: 'graphics',
        name: 'Graphics',
        formatter: ChatButton,
        width: 115
      },
      {
        key: 'qa',
        name: 'QA',
        formatter: ChatButton,
        width: 115
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
        priority: ['Critical', 'High', 'Medium', 'Low'][Math.floor(Math.random() * 4)],
        complete: Math.min(100, Math.round(Math.random() * 110)),
        sales: true,
        graphics: true,
        qa: true
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

  handleGridRowsUpdated ({ fromRow, toRow, updated }) {
    let rows = this.state.rows.slice()

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i]
      let updatedRow = React.addons.update(rowToUpdate, {$merge: updated})
      rows[i] = updatedRow
    }

    this.setState({ rows })
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
          // minHeight={'80vh'}
          toolbar={<Toolbar enableFilter />}
          onGridRowsUpdated={this.handleGridRowsUpdated}
          onAddFilter={this.handleFilterChange}
          onClearFilters={this.onClearFilters} />
      </div>
    )
  }
})

export default Dashboard
