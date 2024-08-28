import React from 'react'

const   RolesViewCard = () => {
  return (
    <div className="col-lg-12 col-md-12 mx-auto">
      <div className="row">
        <div className="col-lg-9 col-md-12 mx-auto mt-3">
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Role Code </label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"MVM-DH"}
            </div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Role Name</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"Roster"}
            </div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Description</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"Department head or representative of the department to raise request"}
            </div>
          </div>
         
         
          
        </div>
      </div>
    </div>
  )
}

export default RolesViewCard