import React from 'react'
import { H4, P, Image } from '../../../../AbstractElements'
import { Row, Col, Media } from 'reactstrap'
import { dynamicImage } from '../../../../Service'

const CategoriesViewCard = () => {
  return (
    <>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <div className="col-lg-12 col-md-12 mx-auto">
          <div className="row">
            <div className="col-lg-9 col-md-12 mx-auto mt-3">
          <div className="form-group row mt-2">
              <label className="control-label col-md-3">Catagory Name</label>
              <div className="col-md-9">{"Construction"}
              </div>
            </div>
            <div className="form-group row mt-2">
              <label className="control-label col-md-3">Description</label>
              <div className="col-md-9">{"Civil construction project"}
              </div>
            </div>
              <div className="form-group row mt-2">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Levels </label>
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Role </label>
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Type </label>
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Count</label>
              </div>
              <div className="form-group row mt-2">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Level 1 </label>
                <div className=" col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">{"School Admin"}</div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">{"Approve"}</div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">{"1"}</div>
              </div>
              <div className="form-group row mt-2">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Level 2 </label>
                <div className=" col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">{"AO"}</div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">{"Upload"}</div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">{"3"}</div>
              </div>
              <div className="form-group row mt-2">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Level 3</label>
                <div className=" col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">{"Committee Member"}</div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">{"Approve"}</div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">{"3"}</div>
              </div>
              <div className="form-group row mt-2">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Level 4</label>
                <div className=" col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">{"Purchase"}</div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">{"Upload"}</div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">{"1"}</div>
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
                <P>L1 : {"School Admin"} → {"Approve"} → {"1"}</P>
                <P>L2 : {"AO"} → {"Upload"} → {"3"}</P>
                <P>L3 : {"Committee Member"} → {"Approve"} → {"3"}</P>
                <P>L4 : {"Purchase"} → {"Upload"} → {"1"}</P>

              </Media>
            </Media>
          </Col>
          <Col md="6">
            <div className="text-md-end mt-4" id="project">
              <span>06-08-2024 1:30 PM</span>
            </div>
          </Col>
        </Row>
      </div></>
  )
}

export default CategoriesViewCard