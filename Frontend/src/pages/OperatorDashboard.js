import React from 'react'
import Sidebar from './../components/Operator/Sidebar';
import Body from './../components/Operator/Body';
function OperatorDashboard() {
  return (
    <>
      <div className="flex flex-row flex-wrap">
        <div className='md:w-1/5 md:h-full w-0 h-0 md:opacity-100 opacity-0'>
          <Sidebar />
        </div>
        <div class="w-4/5">
          <Body />
        </div>
      </div>
    </>
  )
}

export default OperatorDashboard;