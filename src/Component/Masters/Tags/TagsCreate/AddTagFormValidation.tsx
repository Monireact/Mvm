import React, { useState } from 'react'
import { AddTagFormValidationProp } from '../../../../Types/Masters/Department/Departments';
import { ADDTAG_INITIALVALUE, ADDTAG_VALIDATIONSCHEMA } from '../../../../Data/Masters/School';
import CreateNewTagsForm from './CreateNewTagsForm';
import { Formik } from 'formik';
import { Col } from 'reactstrap';

const AddTagFormValidation = () => {
    const [submitErrors, setSubmitError] = useState<boolean>(false);

    const handleSubmit = (values: AddTagFormValidationProp, { resetForm }: { resetForm: () => void }) => {
        resetForm();
        setSubmitError(false);
    };

    return (
        <Col xl="12">
            <Formik initialValues={ADDTAG_INITIALVALUE} onSubmit={handleSubmit} validationSchema={ADDTAG_VALIDATIONSCHEMA}>
                {({ errors }) => <CreateNewTagsForm submitErrors={submitErrors} setSubmitError={setSubmitError} errors={errors} />}
            </Formik>
        </Col>
    );
}

export default AddTagFormValidation