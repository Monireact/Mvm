import React from 'react'
import { Badge, TabContent, TabPane } from 'reactstrap'
import { TabContentProp } from '../../../../../Types/Ui-Kits/UiKitsTypes'
import InprogressRequest from './InprogressRequest'
import CancelledRequest from './CancelledRequest'
import CompletedRequest from './CompletedRequest'
import PendingRequest from './PendingRequest'

const PendingRequestTabs: React.FC<TabContentProp> = ({ basicTab }) => {
  return (
    <>
      <TabContent activeTab={basicTab} className='mt-2'>
        <TabPane tabId="1">
          <PendingRequest />
        </TabPane>
        <TabPane tabId="2">
          <CompletedRequest />
        </TabPane>
        <TabPane tabId="3">
          <InprogressRequest />
        </TabPane>
        <TabPane tabId="4">
          <CancelledRequest />
        </TabPane>
      </TabContent>
    </>
  )
}

export default PendingRequestTabs