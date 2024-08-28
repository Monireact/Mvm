import React from 'react'
import { TableActionType } from '../../../../../Types/ApprovalRequest/Request'
import { Href } from '../../../../../utils/Constant'
import { Link } from 'react-router-dom'
import { UL } from '../../../../../AbstractElements'
import { TagsConfigurationTableColumnTypes } from '../../../../../Types/Tables/Masters/Schools'

export const TagsTableData = [
  {
    id: 1,
    tagName: "Bus",
    description: "Bus Spare Parts ",
    action: "test"
  },
  {
    id: 2,
    tagName: "Desktop",
    description: "",
    action: "test"
  },
  {
    id: 3,
    tagName: "Laptop",
    description: "",
    action: "test"
  },
  {
    id: 4,
    tagName: "Stationery",
    description: "Includes all the stationary products",
    action: "test"
  },
  {
    id: 5,
    tagName: "Furniture",
    description: "Include table,desk,chair",
    action: "test"
  },
]

const TableAction = ({ id }: TableActionType) => {
  return (
    <UL className="action simple-list flex-row" id={id}>
      <div className="edit">
        <Link to={`${process.env.PUBLIC_URL}/masters/tags/edittagsform`}>
          <i className="icon-pencil-alt" />
        </Link>
      </div>
    </UL>
  )
}


export const TagsConfigurationColumn = [
  {
    name: "Tag Name",
    selector: (row: TagsConfigurationTableColumnTypes) => row["tagName"],
    sortable: true,
  },
  {
    name: "Description",
    selector: (row: TagsConfigurationTableColumnTypes) => `${row.description}`,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row: TagsConfigurationTableColumnTypes) => <TableAction id={row.action} />,
    sortable: true,
  },
]