import React from 'react'
import { Col, Card, CardBody } from 'reactstrap'
import NRStaticTable from '../../NewRequest/NewRequestStaticTable.tsx/NRStaticTable'
import NewRequestListHeadContainer from '../../NewRequestHeader/NewRequestListHead'

const NewRequest = () => {
  return (
    <>
      <Col sm="12">
            <NewRequestListHeadContainer />
      </Col>
      {/* <Col sm="12">
        <Card>
          <CardBody>
            <div className="table-responsive">
              <NRStaticTable />
            </div>
          </CardBody>
        </Card>
      </Col> */}
    </>
  )
}

export default NewRequest