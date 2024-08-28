import React, { useState } from 'react'
import { Form, Row, Col, FormGroup, Label, Input, Card, CardBody } from 'reactstrap'
import { CatagoriesList, SchoolList, UserRoles, } from '../../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import { Btn, H6 } from '../../../../AbstractElements'
import {  maprolesavadilist,  maprolesdepartmentchetpetlist, maprolesirrungatukottailist, maproleskumbakonamlist, maprolesmirslist, maprolespolacherylist,   maprolestenkasilist, maprolestrichylist } from '../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'
import { Link } from 'react-router-dom'

const MapRole = () => {
    const [selectedValue, setSelectedValue] = useState<string>();
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    }
    return (
        <>
            {/*view information */}
            <Card>
                <CardBody>
                    <div className="col-lg-9 col-md-9 mx-auto">
                        <div className="form-group row mt-2">
                            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Name </label>
                            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"Suresh"}
                            </div>
                        </div>
                        <div className="form-group row mt-2">
                            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Phone Number</label>
                            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"9214579886"}
                            </div>
                        </div>
                        <div className="form-group row mt-2">
                            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Email Id</label>
                            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"suresh123@gmail.com"}
                            </div>
                        </div>
                        {/* <div className="form-group row mt-2">
                        <div className="card-wrapper border rounded-3 checkbox-checked">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">School</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Department</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td >Chetpet</td>
                                        <td>Department Head</td>
                                        <td>Admin,Transport</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> */}
                    </div>

                </CardBody>
            </Card>
            {/* select school and select role */}
            <Card>
                <CardBody>
                    <Form className="custom-input">
                        <Col md="12">
                            <Row>
                                <Col md="4">
                                    <FormGroup>
                                        <Label check>{"Select Roles"}</Label>
                                        <Input type='select' name="schoollocation" className="form-control" defaultValue={"Select School"}>
                                            {UserRoles.map((data, index) => (<option key={index}>{data}</option>))}
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                        <Label check>{"Select School"}</Label>
                                        {/* <Input type='select' name="schoollocation" className="form-control" defaultValue={"Select School"}>
                                            {SchoolList.map((data, index) => (<option key={index}>{data}</option>))}
                                        </Input> */}
                                        <select id="static-dropdown" className="form-select" value={selectedValue} onChange={handleChange}>
                                            <option value="">-Select Roles-</option>
                                            <option value="chetpet">Chetpet</option>
                                            <option value="avadi">Avadi</option>
                                            <option value="polachery">Polacherry</option>
                                            <option value="trichy">Trichy</option>
                                            <option value="tenkasi">Tenkasi</option>
                                            <option value="mirs">MIRS</option>
                                            <option value="irungattukottai">Irungattukottai</option>
                                            <option value="Kumbakonam">Kumbakonam</option>
                                        </select>
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                        <Label check>{"Select Catagories"}</Label>
                                        <Input type='select' name="schoollocation" className="form-control" defaultValue={"Select School"}>
                                            {CatagoriesList.map((data, index) => (<option key={index}>{data}</option>))}
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Form>
                </CardBody>
            </Card>

            {/*select role,school,dept*/}
            {/* <Card>
                <CardBody>
                    <Form className="custom-input">
                        <Col md="12">
                            <Row>
                                <Col md="4">
                                    <FormGroup>
                                        <Label check>{"Select Roles"}</Label>
                                        <Input type='select' name="schoollocation" className="form-control" defaultValue={"Select School"}>
                                            {UserRoles.map((data, index) => (<option key={index}>{data}</option>))}
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                        <Label check>{"Select School"}</Label>
                                        <Input type='select' name="schoollocation" className="form-control" defaultValue={"Select School"}>
                                            {SchoolList.map((data, index) => (<option key={index}>{data}</option>))}
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                        <Label check>{"Select Department"}</Label>
                                        <Typeahead options={DepartmentMuliteselect} multiple clearButton labelKey="name" id="selectTwo" placeholder={"Select department"} />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Form>
                </CardBody>
            </Card> */}

            <Card>
                <CardBody>
                    {/* <Col md="12">
                        <div className="card-wrapper border rounded-3 checkbox-checked">
                            <H6 className="sub-title">{"Schools"}</H6>
                            <div className='d-flex gap-2'>
                                <Btn color='info'>{"Select All"}</Btn>
                                <Btn color='light'>{"Unselect All"}</Btn>
                            </div>
                            <div className="form-check-size mt-4">
                                {maprolesschoollist.map(({ id, text }, index) => (
                                    <div className="form-check form-check-inline checkbox checkbox-primary" key={index}>
                                        <Input id={id} type="checkbox" name="radio5" defaultChecked />
                                        <Label className="mb-0" for={id} check>
                                            {text}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col> */}
                    <Col md="12" >
                        {selectedValue === "chetpet" && (
                            <><div className="card-wrapper border rounded-3 checkbox-checked mt-3">
                                <H6 className="sub-title">{"Departments"}</H6>
                                <div className="form-check-size ">
                                    {maprolesdepartmentchetpetlist.map(({ id, text }, index) => (
                                        <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                                            <Input id={id} type="checkbox" defaultChecked />
                                            <Label className="mb-0" for={id} check>
                                                {text}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div><div className='text-end mt-2'>
                                    <Btn color='light' className='me-3'>{"Cancel"}</Btn>
                                    <Btn color='primary'>{"Add"}</Btn>
                                </div></>
                        )}
                        {selectedValue === "avadi" && (
                            <><div className="card-wrapper border rounded-3 checkbox-checked mt-3">
                                <H6 className="sub-title">{"Departments"}</H6>
                                <div className="form-check-size ">
                                    {maprolesavadilist.map(({ id, text }, index) => (
                                        <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                                            <Input id={id} type="checkbox" defaultChecked />
                                            <Label className="mb-0" for={id} check>
                                                {text}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div><div className='text-end mt-2'>
                                    <Btn color='light' className='me-3'>{"Cancel"}</Btn>
                                    <Btn color='primary'>{"Add"}</Btn>
                                </div></>
                        )}
                        {selectedValue === "polachery" && (
                            <><div className="card-wrapper border rounded-3 checkbox-checked mt-3">
                                <H6 className="sub-title">{"Departments"}</H6>
                                <div className="form-check-size ">
                                    {maprolespolacherylist.map(({ id, text }, index) => (
                                        <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                                            <Input id={id} type="checkbox" defaultChecked />
                                            <Label className="mb-0" for={id} check>
                                                {text}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div><div className='text-end mt-2'>
                                    <Btn color='light' className='me-3'>{"Cancel"}</Btn>
                                    <Btn color='primary'>{"Add"}</Btn>
                                </div></>
                        )}
                        {selectedValue === "trichy" && (
                            <><div className="card-wrapper border rounded-3 checkbox-checked mt-3">
                                <H6 className="sub-title">{"Departments"}</H6>
                                <div className="form-check-size ">
                                    {maprolestrichylist.map(({ id, text }, index) => (
                                        <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                                            <Input id={id} type="checkbox" defaultChecked />
                                            <Label className="mb-0" for={id} check>
                                                {text}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div><div className='text-end mt-2'>
                                    <Btn color='light' className='me-3'>{"Cancel"}</Btn>
                                    <Btn color='primary'>{"Add"}</Btn>
                                </div></>
                        )}
                        {selectedValue === "tenkasi" && (
                            <><div className="card-wrapper border rounded-3 checkbox-checked mt-3">
                                <H6 className="sub-title">{"Departments"}</H6>
                                <div className="form-check-size ">
                                    {maprolestenkasilist.map(({ id, text }, index) => (
                                        <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                                            <Input id={id} type="checkbox" defaultChecked />
                                            <Label className="mb-0" for={id} check>
                                                {text}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div><div className='text-end mt-2'>
                                    <Btn color='light' className='me-3'>{"Cancel"}</Btn>
                                    <Btn color='primary'>{"Add"}</Btn>
                                </div></>
                        )}
                        {selectedValue === "mirs" && (
                            <><div className="card-wrapper border rounded-3 checkbox-checked mt-3">
                                <H6 className="sub-title">{"Departments"}</H6>
                                <div className="form-check-size ">
                                    {maprolesmirslist.map(({ id, text }, index) => (
                                        <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                                            <Input id={id} type="checkbox" defaultChecked />
                                            <Label className="mb-0" for={id} check>
                                                {text}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div><div className='text-end mt-2'>
                                    <Btn color='light' className='me-3'>{"Cancel"}</Btn>
                                    <Btn color='primary'>{"Add"}</Btn>
                                </div></>
                        )}
                        {selectedValue === "Kumbakonam" && (
                            <><div className="card-wrapper border rounded-3 checkbox-checked mt-3">
                                <H6 className="sub-title">{"Departments"}</H6>
                                <div className="form-check-size ">
                                    {maproleskumbakonamlist.map(({ id, text }, index) => (
                                        <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                                            <Input id={id} type="checkbox" defaultChecked />
                                            <Label className="mb-0" for={id} check>
                                                {text}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div><div className='text-end mt-2'>
                                    <Btn color='light' className='me-3'>{"Cancel"}</Btn>
                                    <Btn color='primary'>{"Add"}</Btn>
                                </div></>
                        )}
                        {selectedValue === "irungattukottai" && (
                            <><div className="card-wrapper border rounded-3 checkbox-checked mt-3">
                                <H6 className="sub-title">{"Departments"}</H6>
                                <div className="form-check-size ">
                                    {maprolesirrungatukottailist.map(({ id, text }, index) => (
                                        <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                                            <Input id={id} type="checkbox" defaultChecked />
                                            <Label className="mb-0" for={id} check>
                                                {text}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div><div className='text-end mt-2'>
                                    <Btn color='light' className='me-3'>{"Cancel"}</Btn>
                                    <Btn color='primary'>{"Add"}</Btn>
                                </div></>
                        )}


                    </Col>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Role</th>
                                <th scope="col">School</th>
                                <th scope="col">Department</th>
                                <th scope="col">Catagories</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Department Head</td>
                                <td >Chetpet</td>
                                <td>Admin,Transport</td>
                                <td>-</td>
                                <td className='d-flex gap-2'>
                                    <Link to={''}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                                    <Link to={''}><i className="fa fa-trash" aria-hidden="true"></i></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>AO</td>
                                <td >Avdi</td>
                                <td>All</td>
                                <td>-</td>
                                <td className='d-flex gap-2'>
                                    <Link to={''}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                                    <Link to={''}><i className="fa fa-trash" aria-hidden="true"></i></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>Committee Member</td>
                                <td >All</td>
                                <td>All</td>
                                <td>All</td>
                                <td className='d-flex gap-2'>
                                    <Link to={''}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                                    <Link to={''}><i className="fa fa-trash" aria-hidden="true"></i></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>Structural Engineer</td>
                                <td >All</td>
                                <td>All</td>
                                <td>Construction</td>
                                <td className='d-flex gap-2'>
                                    <Link to={''}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                                    <Link to={''}><i className="fa fa-trash" aria-hidden="true"></i></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </CardBody>
            </Card>
            <Row >
                <Col className='d-flex gap-2 offset-sm-9 mt-2'>
                    <Link to={`${process.env.PUBLIC_URL}/masters/roles/maproles`}>
                        <Btn color='light'>Cancel</Btn></Link>
                    <Link to={`${process.env.PUBLIC_URL}/masters/roles/maproles`}>
                        <Btn color='primary'>Save</Btn></Link>
                </Col>
            </Row>


        </>
    )
}

export default MapRole