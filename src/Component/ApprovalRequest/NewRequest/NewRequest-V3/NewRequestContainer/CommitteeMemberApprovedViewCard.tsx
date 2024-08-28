import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import CommitteeMemberApproved from '../NewRequest/CommitteeMemberApproved'
import CommitteeMemberApprovedViewCard from '../NewRequest/CommitteeMemberApprovedViewCard'

const CommitteeMemberApprovedViewContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={"Committe Member Approved"} parent={"Requests"} /><Container fluid>
                <Row>
                    <Col sm="12">
                        <CommitteeMemberApprovedViewCard />
                    </Col>
                </Row>
            </Container>
        </>
        )
}

export default CommitteeMemberApprovedViewContainer