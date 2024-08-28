import React from 'react'
import { Form,Input,Label } from 'reactstrap'
import { SearchTableButton } from '../../../../utils/Constant'

const MapRoleSearch = () => {
  return (
    <Form className="theme-form">
     <div className="dataTables_filter d-flex ">
        <Label className="me-2">{SearchTableButton}:</Label>
        <Input  type="search"  /> 
      </div>
  </Form>  
  )
}

export default MapRoleSearch