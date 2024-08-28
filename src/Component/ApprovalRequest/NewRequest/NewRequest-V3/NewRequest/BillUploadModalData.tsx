import React from 'react'
import { Link } from 'react-feather'
import { Row, Col, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap'
import { Btn } from '../../../../../AbstractElements'

const BillUpdateModalData = () => {
    return (
        <>

            <Form className="g-3">
                <Row>
                    <Col sm="12">
                        <FormGroup>
                            <Label>{"Upload Bill"}</Label>
                            <Input type="file" name="uploadbill" />
                        </FormGroup>
                    </Col>

                </Row>
            </Form>
        </>


    )
}

export default BillUpdateModalData