import { Formik, Field } from 'formik'
import React from 'react'
import { Form, Row, Col, Label } from 'reactstrap'

const NewRequestCAncelFnStaticForm = () => {
  return (
<Formik
            initialValues={{ oldPassword: "", newPassword: "" }}
            onSubmit={(value) => console.log(value)}
        >
            {() => (
                <Form>
                    <Row className="g-3">
                        <Col md="12">
                            <Label>{"Comments"}</Label>
                            <input  type="textarea" className="form-control" name="comments" value={" Cancel due to the spare availability"} />
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>  )
}

export default NewRequestCAncelFnStaticForm