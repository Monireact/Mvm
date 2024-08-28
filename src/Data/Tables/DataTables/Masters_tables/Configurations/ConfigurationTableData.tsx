import React from 'react'
import { ConfigurationsColumnTypes } from '../../../../../Types/Tables/Masters/Schools'
import { TableActionType } from '../../../../../Types/ApprovalRequest/Request'
import { Link } from 'react-router-dom'
import { UL } from '../../../../../AbstractElements'


export const ConfigurationsTableData = [
  {
    id:1,
    schoolName:"Polachery",
    budget:"24,500",
    action:"test"
  },
  {
    id:2,
    schoolName:"MIRS",
    budget:"34,500",
    action:"test"
  },
  {
    id:3,
    schoolName:"Avadi",
    budget:"78,500",
    action:"test"
  },
  {
    id:4,
    schoolName:"Trichy",
    budget:"56,500",
    action:"test"
  },
  {
    id:5,
    schoolName:"Kumbakonam",
    budget:"43,500",
    action:"test"
  },
  {
    id:6,
    schoolName:"Irungatukottai",
    budget:"38,500",
    action:"test"
  },
  {
    id:7,
    schoolName:"Chetpet",
    budget:"78,500",
    action:"test"
  },
  {
    id:8,
    schoolName:"Tenkasi",
    budget:"77,500",
    action:"test"
  },
]

export const ConfigurationsColumn = [
    {
        name:"S.NO",
        selector:(row:ConfigurationsColumnTypes) => row["id"],
        sortable:true,
    },
    {
        name:"School Name",
        selector:(row:ConfigurationsColumnTypes) => row["schoolName"],
        sortable:true,
    },
    {
        name:"Budget",
        selector:(row:ConfigurationsColumnTypes) => `${row.budget}`,
        sortable:true,
    },
    {
        name:"Action",
        cell:(row:ConfigurationsColumnTypes) => <TableAction id = {row.action}/>
    }
]

const TableAction = ({id}: TableActionType) => {
    return (
        <UL className="action simple-list flex-row" id={id}>
        <div className="info">
          <Link to={`${process.env.PUBLIC_URL}/masters/configuration/configurationview`}>
            <i className="fa fa-eye"></i>
          </Link>
          </div>
          <div className="edit">
          <Link to={`${process.env.PUBLIC_URL}/masters/configuration/configurationeditform`}>
            <i className="icon-pencil-alt" />
          </Link>
          </div>
          
          {/* <div className="delete">
            <Link to={Href}>
              <i className="icon-trash" />
            </Link>
          </div> */}
         
      </UL>    
    )

}