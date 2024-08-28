import React from 'react'
import { Badge, Card, CardBody, Col, Media, Row } from 'reactstrap'
import { H6, P, Image, Badges, H4 } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { Link } from 'react-router-dom'
import { Href, ProjectDescription } from '../../../../../utils/Constant'
import { ApprovalRequest1data } from '../../../../../Data/Miscellaneous/JobSearch/JobSearch'
import NewRequestFolderFile from './NewRequestFolderFile'
import InvoiceNumber from '../../../../Application/Ecommerce/Invoices/Invoice-5/InvoiceNumber'

const NewRequestApproval1 = () => {
  return (
    <Col md="12" xl="12">
      <div className="card-wrapper border rounded-3 checkbox-checked">
      {ApprovalRequest1data.slice(0, 8).map((item) => (
          <Card >
            <div className="job-search">
              <CardBody>
                <div className="d-flex">
                  <Image className="img-40 b-r-0 img-fluid m-r-20" src={dynamicImage(`${item.logo}`)} alt="job logo"/>
                  <div className="flex-grow-1">
                    <H6 className="f-w-600">
                      <Link to={Href}>{item.name}</Link>
                      <Badges color={item.badgeType} className="pull-right">{item.badgeValue}</Badges>
                    </H6>
                    <P>
                      {item.designation} • {item.approvedOn}
                      {/* <Rating className="ms-1"  fillColor={"#FFAE1A"} initialValue={Math.random()*5} size={15} /> */}
                    </P>
                  </div>
                </div>
                <P>{item.description}</P>
              </CardBody>
            </div>
            <InvoiceNumber/>
          </Card>
        ))}
      </div>
    </Col>
  )
}

export default NewRequestApproval1