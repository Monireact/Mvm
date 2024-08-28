import React from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import { Form } from 'reactstrap'
import { UserMultiSelect } from '../../../Data/Forms/FormsWidgets/Typeahead/Typeahead'
import { H3 } from '../../../AbstractElements'



const UserMultiSelector = () => {
    return (
        <div>
            <Form className="theme-form">
                <div>
                    <H3>School</H3>
                    <Typeahead options={UserMultiSelect} multiple clearButton placeholder="" labelKey="name" id="selectTwo" />
                </div>
            </Form>    
        </div>
    )
}

export default UserMultiSelector