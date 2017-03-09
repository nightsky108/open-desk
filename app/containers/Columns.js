import React from 'react'
const { Editors } = require('react-data-grid-addons')
const { AutoComplete: AutoCompleteEditor, DropDownEditor } = Editors

import CompletionFormatter from '../formatters/CompletionFormatter'
import CaseFormatter from '../formatters/CaseFormatter'
// import SalesFormatter from '../formatters/SalesFormatter'
// import QualityFormatter from '../formatters/QualityFormatter'

const BagOptions = [
  {id: 0, title: 'Bag, 12oz'},
  {id: 1, title: 'Tin, 8oz'},
  {id: 2, title: 'Standup Bag, Pour'},
  {id: 3, title: 'Packet, 4oz'}
]
const PriorityOptions = ['1 - Critical', '2 - High', '3 - Medium', '4 - Low']

const TeamOptions = ['', 'Sales', 'Graphics', 'Q.A.', 'Completed']
const FacilityOptions = ['', 'Seattle', 'Kent', 'Tacoma']

const Columns = [
  {
    key: 'name',
    name: 'Name',
    locked: true,
    resizable: true,
    filterable: true,
    sortable: true,
    // draggable: false,
    width: 100
  },
  {
    key: 'product',
    name: 'Product',
    editor: <AutoCompleteEditor options={BagOptions} />,
    editable: true,
    // locked: true,  //  Negatively affects the ability to use AutoCompleteEditor
    resizable: true,
    filterable: true,
    sortable: true,
    // draggable: false,
    width: 125
    // update: () => console.log('Autocomplete update')
  },
  {
    key: 'priority',
    name: 'Priority',
    editor: <DropDownEditor options={PriorityOptions} />,
    editable: true,
    resizable: true,
    filterable: true,
    sortable: true,
    width: 80
  },
  {
    key: 'complete',
    name: 'Completion',
    formatter: CompletionFormatter,
    editable: true,
    resizable: true,
    sortable: true,
    width: 120
  },
  // const TeamOptions = ['Unassigned', 'Sales', 'Graphics', 'Q.A.', 'Completed']
  // const FacilityOptions = ['Unassigned', 'Seattle', 'Kent', 'Tacoma']
  {
    key: 'team',
    name: 'Team',
    editor: <DropDownEditor options={TeamOptions} />,
    editable: true,
    resizable: true,
    width: 100
  },
  {
    key: 'facility',
    name: 'Facility',
    editor: <DropDownEditor options={FacilityOptions} />,
    editable: true,
    resizable: true,
    width: 100
  },

  {
    key: 'status',
    name: 'Status',
    editable: true,
    resizable: true,
    width: 300
  },
  {
    key: 'record',
    name: '',
    formatter: CaseFormatter,
    width: 110
  }
]

export default Columns
