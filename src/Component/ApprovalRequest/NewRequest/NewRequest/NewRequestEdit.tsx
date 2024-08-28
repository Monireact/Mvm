import React from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import { ProjectCreates, Project } from '../../../../utils/Constant'
import EditNewRequestContainer from './EditNewRequestFrom'

const NewRequestEditContainer = () => {
    return (
        <>
          <Breadcrumbs mainTitle={ProjectCreates} parent={Project} />
          <Container fluid>
            <Row>
              <Col sm="12">
                <Card>
                  <CardBody>
                    <EditNewRequestContainer />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </> 
         )
}

export default NewRequestEditContainer