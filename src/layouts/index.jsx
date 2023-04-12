import React, {Fragment} from 'react'
import { Outlet } from "react-router-dom";
 const  Index = (props) => {
  return (
      <Fragment>
          <div style={{border:"10px solid red"}}>
          <h2>laytouts/index</h2>
              <div style={{height:"500px"}}>
      <Outlet></Outlet></div></div>
      </Fragment>
  )
}
export default Index