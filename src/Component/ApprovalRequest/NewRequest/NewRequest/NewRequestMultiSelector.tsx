import React from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import { Form } from 'reactstrap'
import { newrequestmultiselect } from '../../../../Data/Forms/FormsWidgets/Typeahead/Typeahead'

const NewRequestMultiSelector = () => {
    return (
        <div>
            <Form className="theme-form">
                <div>
                    <Typeahead options={newrequestmultiselect} multiple clearButton placeholder="Transport" labelKey="name" id="selectTwo" />
                </div>
            </Form>    
        </div>
    )
}

export default NewRequestMultiSelector