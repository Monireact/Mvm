import React, { useState } from 'react'
import { Col, Card, CardBody, Nav, NavItem, NavLink, Badge } from 'reactstrap';
import { Href } from '../../../../../utils/Constant';
import PendingRequestTabs from './PendingRequestTabs';

const PendingRequestTabContent = () => {
  const [basicTab, setBasicTab] = useState<string>("1");

  return (
    <Col sm="12" xl="12">
      <Card>
        <CardBody>
          <Nav tabs className="border-tab border-0 mb-0 nav-danger">
            <NavItem>
              <NavLink
                href={Href}
                className={`nav-border pt-0 txt-info nav-info ${basicTab === "1" ? "active" : ""}`}
                onClick={() => setBasicTab("1")}><i className="fa fa-external-link"></i>
                {"Open"}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href={Href}
                className={`nav-border pt-0 txt-primary nav-primary ${basicTab === "2" ? "active" : ""}`}
                onClick={() => setBasicTab("2")}><i className="fa fa-check-circle-o"></i>
                {"Completed"}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href={Href}
                className={`nav-border pt-0 txt-warning nav-warning ${basicTab === "3" ? "active" : ""}`}
                onClick={() => setBasicTab("3")}><i className="fa fa-pause-circle-o"></i>
                {"On Hold"}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href={Href}
                className={`nav-border pt-0 txt-danger nav-danger ${basicTab === "4" ? "active" : ""}`}
                onClick={() => setBasicTab("4")}><i className="fa fa-times-circle-o"></i>
                {"Cancelled"}
              </NavLink>
            </NavItem>
          <div className='offset-sm-2 d-flex gap-2'>
            {"Request Priority"} :
            <Badge color='success' className='rounded-5 p-2'>{' '}</Badge>
            <span>{'Low'}</span>
            <Badge color='warning' className='rounded-5 p-2'>{' '}</Badge>
            <span> {'Medium'}</span>
            <Badge color='danger' className='rounded-5 p-2'>{' '}</Badge>
            <span>{'High'}</span>
          </div>
          </Nav>
          <PendingRequestTabs basicTab={basicTab} />
        </CardBody>
      </Card>
    </Col>
  )
}

export default PendingRequestTabContent