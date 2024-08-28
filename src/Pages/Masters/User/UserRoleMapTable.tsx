import React from 'react'
import UserRolemapTableMainContainer from '../../../Component/Masters/UserSchoolMapping/UserRoleMapMain'
import { H4 } from '../../../AbstractElements'





const UserRoleTables = () => {
  return (
    <>
    <H4>Assigned Roles</H4>
    <div className='page-body'>
      <UserRolemapTableMainContainer/>
    </div>  </>
    )
}

export default UserRoleTables