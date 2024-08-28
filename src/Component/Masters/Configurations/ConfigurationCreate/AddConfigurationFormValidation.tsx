import React, { useState } from 'react'
import { AddConfigurationFormValidationProp } from '../../../../Types/Masters/Department/Departments';
import { ADDCONFIGURATION_INITIALVALUE, ADDCONFIGURATION_VALIDATIONSCHEMA } from '../../../../Data/Masters/School';
import { Formik } from 'formik';
import { Col } from 'reactstrap';
import ConfigurationAddForm from './ConfigurationAddForm';

const AddConfigurationFormValidation = () => {
    const [submitErrors, setSubmitError] = useState<boolean>(false);

    const handleSubmit = (values: AddConfigurationFormValidationProp, { resetForm }: { resetForm: () => void }) => {
        resetForm();
        setSubmitError(false);
    };
    return (
        <Col xl="12">
            <Formik initialValues={ADDCONFIGURATION_INITIALVALUE} onSubmit={handleSubmit} validationSchema={ADDCONFIGURATION_VALIDATIONSCHEMA}>
                {({ errors }) => <ConfigurationAddForm submitErrors={submitErrors} setSubmitError={setSubmitError} errors={errors} />}
            </Formik>
        </Col>
    )
}

export default AddConfigurationFormValidation