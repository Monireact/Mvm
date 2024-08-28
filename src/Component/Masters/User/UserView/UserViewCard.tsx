import React from 'react'

const UserViewCard = () => {
  return (
    <div className="col-lg-12 col-md-12 mx-auto">
      <div className="row">
        <div className="col-lg-9 col-md-12 mx-auto mt-3">
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Name </label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"Suresh"}
            </div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Email Id/ User Id</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"suresh123@gmail.com"}
            </div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Phone Number</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"9214579886"}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserViewCard