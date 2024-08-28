import React from 'react'
import { Col, Card, CardBody } from 'reactstrap'
import NRStaticTable from '../../NewRequest/NewRequestStaticTable.tsx/NRStaticTable'
import NewRequestListHeadContainer from '../../NewRequestHeader/NewRequestListHead'

const NewRequestList = () => {
  return (
    <>
      <Col sm="12">
        <Card className='mt-0'>
          <CardBody>
            <NewRequestListHeadContainer />
          </CardBody>
        </Card>
      </Col>
      <Col sm="12">
        <Card>
          <CardBody>
              <NRStaticTable />
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default NewRequestList