import { Formik } from 'formik';
import React, { useState } from 'react'
import { Col } from 'reactstrap';
import { ADDDEPARTMENT_INITIALVALUE, ADDDEPARTMENT_VALIDATIONSCHEMA } from '../../../Data/Masters/School';
import { AddDepartmentFormValidationProp } from '../../../Types/Masters/Department/Departments';
import CreateNewDepartmentForm from './CreateNewDepartmentForm';

const AddDepartmentFormValidation = () => {
    const [submitErrors, setSubmitError] = useState<boolean>(false);

    const handleSubmit = (values: AddDepartmentFormValidationProp, { resetForm }: { resetForm: () => void }) => {
        resetForm();
        setSubmitError(false);
    };

    return (
        <Col xl="12">
            <Formik initialValues={ADDDEPARTMENT_INITIALVALUE} onSubmit={handleSubmit} validationSchema={ADDDEPARTMENT_VALIDATIONSCHEMA}>
                {({ errors }) => <CreateNewDepartmentForm submitErrors={submitErrors} setSubmitError={setSubmitError} errors={errors} />}
            </Formik>
        </Col>
    );
}

export default AddDepartmentFormValidation