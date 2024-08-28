import React from 'react'

const LinksViewCard = () => {
  return (
    <div className="col-lg-12 col-md-12 mx-auto">
      <div className="row">
        <div className="col-lg-9 col-md-12 mx-auto mt-3">
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">School Name</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"Tenkasi"}
            </div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Type</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"School Fees"}
            </div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Link</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"http://bitly.com/ret_21"}
            </div>
          </div>
          <div className="form-group row mt-2">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Description</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"To Collect School Fees"}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinksViewCard