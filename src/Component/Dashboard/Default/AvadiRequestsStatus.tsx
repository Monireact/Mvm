import { SVG } from 'leaflet'
import React from 'react'
import { Col, Card, CardHeader, CardBody, Table } from 'reactstrap'
import { H4 } from '../../../AbstractElements'
import { DeliveriesHeading, Href } from '../../../utils/Constant'
import DeliveriesTableBody from '../ProjectManagement/BoostUpYourSale/DeliveriesTableBody'
import { Link } from 'react-router-dom'

const AvadiRequestsStatus = () => {
  return (
    <Col md="3" sm="6">
      <Card>
        <CardHeader className="card-no-border total-revenue pb-0">
          <H4>{"Avadi"}</H4>
          {/* <div className="icon-menu-header">
            <SVG iconId="more-horizontal" />
          </div> */}
        </CardHeader>
        <CardBody className="pt-0">
          <div className="custom-scrollbar deliveries-percentage">
            <Table className="percentage-data w-100" responsive>
              <thead>
                <tr>
                  <th className="f-light f-12 f-w-500" scope="col">
                    Status
                  </th>
                  <th className="f-light f-12 f-w-500" scope="col">
                    Requests
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="f-w-400 f-10">
                    <Link className="line-clamp" to={Href}>
                      {"Open Request"}
                    </Link>
                  </td>
                  <td>
                    <div className="progress-value d-flex gap-2 align-items-center">
                      <span>{"2"}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="f-w-400 f-10">
                    <Link className="line-clamp" to={Href}>
                      {"More Info  Requested"}
                    </Link>
                  </td>
                  <td>
                    <div className="progress-value d-flex gap-2 align-items-center">
                      <span>{"2"}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="f-w-400 f-10">
                    <Link className="line-clamp" to={Href}>
                      {"Waiting For School Admin Approval"}
                    </Link>
                  </td>
                  <td>
                    <div className="progress-value d-flex gap-2 align-items-center">
                      <span>{"2"}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="f-w-400 f-10">
                    <Link className="line-clamp" to={Href}>
                      {"Waiting For Committee Approval"}
                    </Link>
                  </td>
                  <td>
                    <div className="progress-value d-flex gap-2 align-items-center">
                      <span>{"2"}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="f-w-400 f-10">
                    <Link className="line-clamp" to={Href}>
                      {"Waiting For PO"} <i className="fa fa-exclamation-triangle"></i>
                    </Link>
                  </td>
                  <td>
                    <div className="progress-value d-flex gap-2 align-items-center">
                      <span>{"2"}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="f-w-400 f-10">
                    <Link className="line-clamp" to={Href}>
                      {"Inprogress Requests"}
                    </Link>
                  </td>
                  <td>
                    <div className="progress-value d-flex gap-2 align-items-center">
                      <span>{"2"}</span>
                    </div>
                  </td>
                </tr>
              </tbody>            
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>  
  )
}

export default AvadiRequestsStatus