import React from 'react'
import { H5, UL, LI, H6, P } from '../../../../../AbstractElements'
import { FileProps } from '../../../../../Types/Application/FileSideBar/FileSideBar'
import { MyFolderFiles } from '../../../../../Data/Miscellaneous/JobSearch/JobSearch'



const NewRequestFolderFile = () => {
  return (
    <>
      <UL className="files-content simple-list">
        {MyFolderFiles.map((data,i) => (
          <LI className="folder-box d-flex align-items-center" key={i}>
            <div className="d-flex align-items-center files-list">
              <div className="flex-shrink-0 file-left">
                <i className={`f-22 fa fa-${data.icons} font-${data.color}`} />
              </div>
              <div className="flex-grow-1 ms-3">
                <H6>{data.title}</H6>
                <P>{data.details}</P>
              </div>
            </div>
          </LI>
        ))}
      </UL>
    </>  )
}

export default NewRequestFolderFile