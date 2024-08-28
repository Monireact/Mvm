import React from 'react'
import { Btn, P,H1 } from '../../../../../AbstractElements'
import { Col, Media, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

const NewRequetsViewUploadQuotation = () => {

  return (
    <>
    <div className='offset-sm-10'>
      {/* <Btn ><i className="fa fa-long-arrow-left"></i> {"Back"} */}
        <Link to={`${process.env.PUBLIC_URL}/approvalrequest/uploadquote`} className='btn btn-outline-dark btn-sm'><i className="fa fa-long-arrow-left"></i> {"Back"}</Link>
      {/* </Btn> */}
    </div>
      <div className="col-sm-12">
        <Row>
          <Col sm-6>
            <div className="form-group row mt-2">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Vendor</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"JK Tyre"}
              </div>
            </div>
          </Col>
          <Col sm-6>
            <div className="form-group row mt-2">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Email Id</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"jktyre@support.co.in"}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm-6>
            <div className="form-group row mt-2">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Address</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"No.12, Anna Nagar, Chennai-28"}
              </div>
            </div>
          </Col>
          <Col sm-6>
          <div className="form-group row mt-2">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">GST Number</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"29ABCDE1234F1Z5"}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm-6>
          <div className="form-group row mt-2">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Websit</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"https://www.jktyre.com/"}
              </div>
            </div>
            
          </Col>
          <Col sm-6>
            <div className="form-group row mt-2">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">PAN Number</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"THNDH82388"}
              </div>
            </div>
          </Col>
        </Row>
        <div className="card-wrapper border rounded-3 checkbox-checked">
          <Row>
            <Col md="8" className='mt-2'>
              <Media>
                <div className="media-left">
                  {/* <Image className="media-object  img-60" src={dynamicImage("user/32.png")} alt="user" /> */}
                </div>
                <Media body className="m-l-20 ">
                
                  <H1><i className="fa fa-file-word-o "></i> 
                   <span>Proposal.docx</span> </H1>
                  <P className='my-2'>Updated On: 20-07-2024
                    <br />
                    <span>Updated By: Admin Office</span>
                  </P>
                  <P>
                    In order to ensure the safety and reliability of school transportation, it is essential to establish clear guidelines for the selection and maintenance of tires used in school vehicles.Bus no:6656 Need to change the tyre.                    </P>
                </Media>
              </Media>
            </Col>
            <Col md="4" className='row '>
              <Link to={''}><Btn color="info" className='w-50'><i className="fa fa-"></i> {"Update"}</Btn></Link>
              <Link to={''}><Btn color="danger"  className='w-50'><i className="fa fa-"></i> {"Cancel"}</Btn></Link>
              <Link to={''}><Btn color="warning"  className='w-50'><i className="fa fa-"></i> {"Remove"}</Btn></Link>
              {/* <Link to={''}> <NewRequestSelectQuoteModal/></Link>
              <Link to={''}><NewRequestReQuoteModal/></Link>
              <Link to={''}><NewRequestCancelQuoteModal/></Link> */}
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default NewRequetsViewUploadQuotation