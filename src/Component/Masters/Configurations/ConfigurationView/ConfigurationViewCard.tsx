import React from 'react'
import { Row, Col, Media } from 'reactstrap'
import { H4, P, Image, Btn } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { Link } from 'react-router-dom'

const ConfigurationViewCard = () => {
  return (
    <div className="col-lg-12 col-md-12 mx-auto">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <div className="row">
          <div className="col-lg-12 mx-auto mt-3">
            <div className="form-group row mt-2">
              <label className="control-label col-md-3">School Name</label>
              <div className="col-md-9">{"Polachery"}
              </div>
            </div>
            <div className="form-group row mt-2">
              <label className="control-label col-md-3">Budget</label>
              <div className="col-md-9">{"24,500"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <H4 className="text-success my-3">{"History"}</H4>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <Row>
          <Col md="6" className='mt-2'>
            <Media>
              <div className="media-left">
                <Image className="media-object rounded-circle img-50" src={dynamicImage("user/user.png")} alt="user" />
              </div>
              <Media body className="m-l-20">
                <H4 className="media-heading text-success">Shankar</H4>
                <P>Super Admin</P>
                <P>Budget: ₹ 24,500</P>
              </Media>
            </Media>
          </Col>
          <Col md="6">
            <div className="text-md-end mt-4" id="project">
              <span>08-08-2024 3:30 PM</span>
            </div>
          </Col>
          <div className="divderline"></div>
          <Col md="6" className='mt-2'>
            <Media>
              <div className="media-left">
                <Image className="media-object rounded-circle img-50" src={dynamicImage("user/user.png")} alt="user" />
              </div>
              <Media body className="m-l-20">
                <H4 className="media-heading text-success">Shankar</H4>
                <P>Super Admin</P>
                <P>Budget: ₹ 17,500</P>
              </Media>
            </Media>
          </Col>
          <Col md="6">
            <div className="text-md-end mt-4" id="project">
              <span>06-08-2024 1:30 PM</span>
            </div>
          </Col>
        </Row>
       
      </div>
      <div className="offset-5 mt-5">
              <Link to={`${process.env.PUBLIC_URL}/masters/configurations`}>
                <Btn color="light" className="me-3">
                  {"Back"}
                </Btn>
              </Link>
            </div>
    </div>

  )
}

export default ConfigurationViewCard