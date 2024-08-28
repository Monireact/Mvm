import React, { useState } from 'react'

import { Col, Input, Label, Row } from 'reactstrap'
import { H6, P } from '../../../../AbstractElements'
import { School, MDepartments, PermissionCategories, PermissionRoles, PermissionUser, PermissionTags, PermissionVendor, PermissionBudgetConfiguration, } from '../../../../utils/Constant'



const RolesMasterPermissionCheckboxList = () => {
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [isDependentCheckboxDisabled, setIsDependentCheckboxDisabled] = useState(true);
    const handleCheckboxChange = (event: any) => {
        setIsCheckboxChecked(event.target.checked);
        setIsDependentCheckboxDisabled(!event.target.checked);
    };

    const [isDeptCheckboxChecked, setIsDeptCheckboxChecked] = useState(false);
    const [isDeptDependentCheckboxDisabled, setIsDeptDependentCheckboxDisabled] = useState(true);
    const handledeptCheckbox = (event: any) => {
        setIsDeptCheckboxChecked(event.target.checked);
        setIsDeptDependentCheckboxDisabled(!event.target.checked);
    };

    const [isCategoriesCheckboxChecked, setIsCategoriesCheckboxChecked] = useState(false);
    const [isCategoriesDependentCheckboxDisabled, setIsCategoriesDependentCheckboxDisabled] = useState(true);
    const handlecategoriesCheckbox = (event: any) => {
        setIsCategoriesCheckboxChecked(event.target.checked);
        setIsCategoriesDependentCheckboxDisabled(!event.target.checked);
    };

    const [isRolesCheckboxChecked, setIsRolesCheckboxChecked] = useState(false);
    const [isRolesDependentCheckboxDisabled, setIsRolesDependentCheckboxDisabled] = useState(true);
    const handleRolesCheckbox = (event: any) => {
        setIsRolesCheckboxChecked(event.target.checked);
        setIsRolesDependentCheckboxDisabled(!event.target.checked);
    };

    const [isUsersCheckboxChecked, setIsUsersCheckboxChecked] = useState(false);
    const [isUsersDependentCheckboxDisabled, setIsUsersDependentCheckboxDisabled] = useState(true);
    const handleUsersCheckbox = (event: any) => {
        setIsUsersCheckboxChecked(event.target.checked);
        setIsUsersDependentCheckboxDisabled(!event.target.checked);
    };

    const [isBudgetconfigCheckboxChecked, setIsBudgetconfigCheckboxChecked] = useState(false);
    const [isBudgetconfigDependentCheckboxDisabled, setIsBudgetconfigDependentCheckboxDisabled] = useState(true);
    const handleBudgetconfigCheckbox = (event: any) => {
        setIsBudgetconfigCheckboxChecked(event.target.checked);
        setIsBudgetconfigDependentCheckboxDisabled(!event.target.checked);
    };

    const [isVendorsCheckboxChecked, setIsVendorCheckboxChecked] = useState(false);
    const [isVendorDependentCheckboxDisabled, setIsVendorDependentCheckboxDisabled] = useState(true);
    const handleVendorCheckbox = (event: any) => {
        setIsVendorCheckboxChecked(event.target.checked);
        setIsVendorDependentCheckboxDisabled(!event.target.checked);
    };

    const [isTagsCheckboxChecked, setIsTagsCheckboxChecked] = useState(false);
    const [isVendorsDependentCheckboxDisabled, setIsTagsDependentCheckboxDisabled] = useState(true);
    const handleTagsCheckbox = (event: any) => {
        setIsTagsCheckboxChecked(event.target.checked);
        setIsTagsDependentCheckboxDisabled(!event.target.checked);
    };
    return (
        <Col md="12">
            <div className="card-wrapper border rounded-3">
                <H6 className="sub-title">{"Masters Permission"}</H6>
                <Row>
                    <Col sm="4">
                        <P className='mt-1'>{School}</P>
                    </Col>
                    <Col sm="8">
                        <div className="form-check checkbox checkbox-primary mb-2 d-flex gap-4">
                            <Input id="checkbox-primary-school-1" type="checkbox" checked={isCheckboxChecked} onChange={handleCheckboxChange} />
                            <Label for='checkbox-primary-school-1' check>{"View"}</Label>
                            <Input id="checkbox-primary-school-2" type="checkbox" disabled={isDependentCheckboxDisabled} />
                            <Label for='checkbox-primary-school-2' check>{"Add"}</Label>
                            <Input id="checkbox-primary-school-3" type="checkbox" disabled={isDependentCheckboxDisabled} />
                            <Label for='checkbox-primary-school-3' check>{"Edit"}</Label>
                        </div>
                    </Col>
                    <Col sm="4">
                        <P className='mt-1'>{MDepartments}</P>
                    </Col>
                    <Col sm="8">
                        <div className="form-check checkbox checkbox-primary mb-2 d-flex gap-4">
                            <Input id="checkbox-primary-dept-1" type="checkbox" checked={isDeptCheckboxChecked} onChange={handledeptCheckbox} />
                            <Label for='checkbox-primary-dept-1' check>{"View"}</Label>
                            <Input id="checkbox-primary-dept-2" type="checkbox" disabled={isDeptDependentCheckboxDisabled} />
                            <Label for='checkbox-primary-dept-2' check>{"Add"}</Label>
                            <Input id="checkbox-primary-dept-3" type="checkbox" disabled={isDeptDependentCheckboxDisabled} />
                            <Label for='checkbox-primary-dept-3' check>{"Edit"}</Label>
                        </div>
                    </Col>
                    <Col sm="4">
                        <P className='mt-1'>{PermissionCategories}</P>
                    </Col>
                    <Col sm="8">
                        <div className="form-check checkbox checkbox-primary mb-2 d-flex gap-4">
                            <Input id="checkbox-primary-categories-1" type="checkbox" checked={isCategoriesCheckboxChecked} onChange={handlecategoriesCheckbox} />
                            <Label for='checkbox-primary-categories-1' check>{"View"}</Label>
                            <Input id="checkbox-primary-categories-2" type="checkbox" disabled={isCategoriesDependentCheckboxDisabled} />
                            <Label for='checkbox-primary-categories-2' check>{"Add"}</Label>
                            <Input id="checkbox-primary-categories-3" type="checkbox" disabled={isCategoriesDependentCheckboxDisabled} />
                            <Label for='checkbox-primary-categories-3' check>{"Edit"}</Label>
                        </div>
                    </Col>
                    <Col sm="4">
                        <P className='mt-1'>{PermissionRoles}</P>
                    </Col>
                    <Col sm="8">
                        <div className="form-check checkbox checkbox-primary mb-2 d-flex gap-4">
                            <Input id="checkbox-primary-roles-1" type="checkbox" checked={isRolesCheckboxChecked} onChange={handleRolesCheckbox} />
                            <Label for='checkbox-primary-roles-1' check>{"View"}</Label>
                            <Input id="checkbox-primary-roles-2" type="checkbox" disabled={isRolesDependentCheckboxDisabled} />
                            <Label for='checkbox-primary-roles-2' check>{"Add"}</Label>
                            <Input id="checkbox-primary-roles-3" type="checkbox" disabled={isRolesDependentCheckboxDisabled} />
                            <Label for='checkbox-primary-roles-3' check>{"Edit"}</Label>
                        </div>
                    </Col>
                    <Col sm="4">
                        <P className='mt-1'>{PermissionUser}</P>
                    </Col>
                    <Col sm="8">
                    <div className="form-check checkbox checkbox-primary mb-2 d-flex gap-4 ">
                            <Input id="checkbox-primary-user-1" type="checkbox" checked={isUsersCheckboxChecked} onChange={handleUsersCheckbox} />
                            <Label for='checkbox-primary-user-1' check>{"View"}</Label>
                            <Input id="checkbox-primary-user-2" type="checkbox" disabled={isUsersDependentCheckboxDisabled} />
                            <Label for='checkbox-primary-user-2' check>{"Add"}</Label>
                            <Input id="checkbox-primary-user-3" type="checkbox" disabled={isUsersDependentCheckboxDisabled} />
                            <Label for='checkbox-primary-user-3' check>{"Edit"}</Label>
                        </div>
                    </Col>
                    <Col sm="4">
                        <P className='mt-1'>{PermissionBudgetConfiguration}</P>
                    </Col>
                    <Col sm="8">
                    <div className="form-check checkbox checkbox-primary mb-2 d-flex gap-4">
                            <Input id="checkbox-primary-budgetconfig-1" type="checkbox" checked={isBudgetconfigCheckboxChecked} onChange={handleBudgetconfigCheckbox} />
                            <Label for='checkbox-primary-budgetconfig-1' check>{"View"}</Label>
                            <Input id="checkbox-primary-budgetconfig-2" type="checkbox" disabled={isBudgetconfigDependentCheckboxDisabled} />
                            <Label for='checkbox-primary-budgetconfig-2' check>{"Add"}</Label>
                            <Input id="checkbox-primary-budgetconfig-3" type="checkbox" disabled={isBudgetconfigDependentCheckboxDisabled} />
                            <Label for='checkbox-primary-budgetconfig-3' check>{"Edit"}</Label>
                        </div>
                    </Col>
                    <Col sm="4">
                        <P className='mt-1'>{PermissionVendor}</P>
                    </Col>
                    <Col sm="8">
                    <div className="form-check checkbox checkbox-primary mb-2 d-flex gap-4">
                            <Input id="checkbox-primary-vendors-1" type="checkbox" checked={isVendorsCheckboxChecked} onChange={handleVendorCheckbox} />
                            <Label for='checkbox-primary-vendors-1' check>{"View"}</Label>
                            <Input id="checkbox-primary-vendors-2" type="checkbox" disabled={isVendorDependentCheckboxDisabled} />
                            <Label for='checkbox-primary-vendors-2' check>{"Add"}</Label>
                            <Input id="checkbox-primary-vendors-3" type="checkbox" disabled={isVendorDependentCheckboxDisabled} />
                            <Label for='checkbox-primary-vendors-3' check>{"Edit"}</Label>
                        </div>
                    </Col>
                    <Col sm="4">
                        <P className='mt-1'>{PermissionTags}</P>
                    </Col>
                    <Col sm="8">
                    <div className="form-check checkbox checkbox-primary mb-2 d-flex gap-4">
                            <Input id="checkbox-primary-tags-1" type="checkbox" checked={isTagsCheckboxChecked} onChange={handleTagsCheckbox} />
                            <Label for='checkbox-primary-tags-1' check>{"View"}</Label>
                            <Input id="checkbox-primary-tags-2" type="checkbox" disabled={isVendorsDependentCheckboxDisabled} />
                            <Label for='checkbox-primary-tags-2' check>{"Add"}</Label>
                            <Input id="checkbox-primary-tags-3" type="checkbox" disabled={isVendorsDependentCheckboxDisabled} />
                            <Label for='checkbox-primary-tags-3' check>{"Edit"}</Label>
                        </div>
                    </Col>
                </Row>

            </div>
        </Col>
    )
}

export default RolesMasterPermissionCheckboxList