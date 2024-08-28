import React from 'react'
import Breadcrumbs from '../../CommonElements/Breadcrumbs/Breadcrumbs';
import { Card, CardBody, Container, Row } from 'reactstrap';
import  { OProfile, PEmailId, PMobileNumber, PName, PUserName }  from '../../utils/Constant';

const Profile = () => {
    return (
        <>
          <Breadcrumbs mainTitle={OProfile} parent={OProfile} />
            <Container fluid>
              <Row>
                <Card>
                  <CardBody>
                    <div className="col-lg-9 col-md-12 mx-auto mt-3">
                      <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Name</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{PName}
                        </div>
                      </div>
                      <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Email Id</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{PEmailId}
                        </div>
                      </div>
                      <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Phone Number</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{PMobileNumber}
                        </div>
                      </div>
                      
                      <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Username</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{PUserName}
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Row>
            </Container>
        </>
      );
}

export default Profile