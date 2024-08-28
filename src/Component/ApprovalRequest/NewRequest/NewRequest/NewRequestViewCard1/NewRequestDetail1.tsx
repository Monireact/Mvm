import React from 'react'
import { Col,Row } from 'reactstrap'
import { Btn, H6 } from '../../../../../AbstractElements'
import { Chetpet, Department, Budget, TypeOfRequest, DueDate, VRPriority, Href, VRStatus, VRDescription } from '../../../../../utils/Constant'
import NewRequestCardImage from '../NewRequestViewCard/NewRequestCardImage'

const NewRequestDetail1 = () => {
  return (
    <div className="card-wrapper border rounded-3 checkbox-checked">
      {/* <H6 className="sub-title">{"View Details"}</H6> */}
      
          <div className="form-group row">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">School Name</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{Chetpet}</div>
            </div>
          <div className="form-group row">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Department</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{Department}</div>
            </div>

          <div className="form-group row mt-3">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12"> Budget</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{Budget}</div>
            </div>
          <div className="form-group row mt-3">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Request</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{TypeOfRequest}</div>
            </div>

        
          <div className="form-group row mt-3">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Due Date</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{DueDate}</div>
            </div>
          
          <div className="form-group row mt-3">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Priority</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{VRPriority}</div>
            </div>
          
          <div className="form-group row mt-3">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Image</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12 d-flex ms-1">
              <NewRequestCardImage/>
            </div>
            </div>
         
          <div className="form-group row mt-3">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Status</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <Btn color="secondary" href={Href}>{VRStatus}</Btn>
              </div>
            </div>
        
          <div className="form-group row mt-3">
            <label className="col-sm-3">Description</label>
            <div className="col-sm-10">{VRDescription}</div>
            </div>
        </div>
   
     
  )
}

export default NewRequestDetail1