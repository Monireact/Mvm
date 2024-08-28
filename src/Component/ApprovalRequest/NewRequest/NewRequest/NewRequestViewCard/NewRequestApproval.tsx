import React from 'react'
import { Badge, Card, CardBody, Col, Media, Row, } from 'reactstrap'
import { H6, P, Image, H4 } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { ProjectDescription } from '../../../../../utils/Constant'
import NewRequestFolderFile from '../NewRequestViewCard1/NewRequestFolderFile'
import { ApprovalRequest1data } from '../../../../../Data/Miscellaneous/JobSearch/JobSearch'

const NewRequestApproval = () => {
  return (
    <Col md="12" xl="12">
      <div className="card-wrapper border rounded-3 checkbox-checked">

        {ApprovalRequest1data.slice(0, 8).map((item) => (
          <>
            <Card>
              <CardBody>
                <Row>
                  <Col md="4">
                    <Media>
                      <div className="media-left">
                        <Image className="media-object rounded-circle img-60" src={dynamicImage(`${item.logo}`)} alt="user" />
                      </div>
                      <Media body className="m-l-20">
                        <H6 className="media-heading">{item.name} <Badge color={item.badgeType}>{item.badgeValue}</Badge></H6>
                        <P>{item.designation} • {item.approvedOn}</P>
                      </Media>
                    </Media>
                  </Col>
                  <Col md="8">
                    <div className="text-md-end" id="project">
                      <H6>{ProjectDescription}</H6>
                      <P>{item.description}</P>
                    </div>
                  </Col>
                </Row>
                <NewRequestFolderFile />
              </CardBody>
            </Card>
          </>
        ))}

      </div>
    </Col>
  )
}

export default NewRequestApproval