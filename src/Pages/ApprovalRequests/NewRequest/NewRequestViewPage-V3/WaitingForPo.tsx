import React from 'react'
import SchoolAdminApprovedContainer from '../../../../Component/ApprovalRequest/NewRequest/NewRequest-V3/NewRequestContainer/SchoolAdminApproved'
import InprogressRequestContainer from '../../../../Component/ApprovalRequest/NewRequest/NewRequest-V3/NewRequestContainer/InprogressRequest'
import WaitingForPoContainer from '../../../../Component/ApprovalRequest/NewRequest/NewRequest-V3/NewRequestContainer/WaitingForPo'

const WaitingForPo = () => {
  return (
    <div className='page-body'><WaitingForPoContainer/></div>
  )
}

export default WaitingForPo