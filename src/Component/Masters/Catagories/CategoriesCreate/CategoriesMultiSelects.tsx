import React from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import { Form } from 'reactstrap'
import { RolesMuliteselect } from '../../../../Data/Forms/FormsWidgets/Typeahead/Typeahead'


const CategoriestMultiSelector = () => {
    return (
        <div>
            <Form className="theme-form">
                <div>
                    <Typeahead options={RolesMuliteselect} multiple clearButton labelKey="name" id="selectTwo" />
                </div>
            </Form>    
        </div>
    )
}

export default CategoriestMultiSelector