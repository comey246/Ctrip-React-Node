import React, { Fragment } from 'react'
import {Outlet} from "react-router-dom";


export default function index() {

  return (
    <Fragment>
        <Outlet></Outlet>
    </Fragment>
    )
}
