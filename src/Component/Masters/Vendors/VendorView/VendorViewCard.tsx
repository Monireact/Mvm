import React from 'react'

import { Btn } from '../../../../AbstractElements'
import { Link } from 'react-router-dom'

const VendorViewCard = () => {
  return (
    
    <div className="row">
    <div className="col-lg-9 col-md-12 mx-auto mt-3">
      
     {/* <!-- General Details Card --> */}
      <div className="card mb-3">
        <div className="card-body">
        <h4 className="card-title mb-3"> General  Details</h4>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">School Name</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"Chetpet"}</div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Vendor Name</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"JK Tyres"}</div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Vendor ID</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"JK-001"}</div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Servies</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"Tyre supplier"}</div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">PAN Number</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"ABCTY1234D"}</div>
          </div>  
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Registration</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"Regular "}</div>
          </div>
         
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">GST Number</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"09AAACH7409R1ZZ."}</div>
          </div>
       
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Tags</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"Transport"}</div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Status</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"Active"}</div>
          </div>
        </div>
      </div>
  
      {/* <!-- Contacts Details Card --> */}
      <div className="card mb-3">
        <div className="card-body">
          <h4 className="card-title">Contacts Details</h4>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Contact person 1</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"SureshBabu"}</div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Phone Number 1</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"9953258745"}</div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Email id 1</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"sureshJkTyres@gmail.com"}</div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Contact person2</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"Yogi BAbu"}</div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Phone Number 2</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"9444283465"}</div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Email id 2</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"YogiJKtyres@gmail.com"}</div>
          </div>
        </div>
      </div>
  
      {/* <!-- BANK DETAILS--> */}
      <div className="card mb-3">
        <div className="card-body">
          <h4 className="card-title">Address Details</h4>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Address</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"12, Amman Street, T. Nagar"}</div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">City</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"Chennai"}</div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">State</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"Tamil Nadu"}</div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Pincode</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"6000200"}</div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h4 className="card-title">Bank Details</h4>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Bank Name</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"ABC BANK"}</div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Account Number</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"92520220031152"}</div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Branch</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"ABC Branch"}</div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">IFSC</label>
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-xs-12">{"EXAMP0001234"}</div>
          </div>
        </div>
      </div>
      <div className="offset-5 mt-5">
              <Link to={`${process.env.PUBLIC_URL}/masters/vendors`}>
                <Btn color="light" className="me-3">
                  {"Back"}
                </Btn>
              </Link>
            </div>
  
    </div>
  </div>
  
  )
}

export default VendorViewCard