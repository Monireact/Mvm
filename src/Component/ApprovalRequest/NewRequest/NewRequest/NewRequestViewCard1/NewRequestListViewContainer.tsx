import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ListView, JobSearch } from '../../../../../utils/Constant'
import NewRequestDetail1 from './NewRequestDetail1'
import NewRequestApproval1 from './NewRequestApproval1'

const NewRequestListViewContainer = () => {
    return (
        <>
          <Breadcrumbs mainTitle={ListView} parent={JobSearch} />
          <Container fluid>
            <Row>
              <Col xl="3" className="xl-40 box-col-12">
                <div className="md-sidebar">
                  <NewRequestDetail1 />
                </div>
              </Col>
              <Col xl="9" className="xl-60 box-col-12">
              </Col>
            </Row>
          </Container>
        </>
      )
}

export default NewRequestListViewContainer