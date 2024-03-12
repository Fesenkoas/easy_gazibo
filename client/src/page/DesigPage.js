import React from 'react'
import { DesigSideList } from './../components/DesigSideList';

export const DesigPage = () => {
  return (
    <div className="flex  absolute bottom-0 top-14 inset-x-0">
      {/* -------------------------------------Left---------------------------------------------------- */}
      <DesigSideList/>
      {/* --------------------------------------------------------------------------------------------- */}
    </div>
  )
}
