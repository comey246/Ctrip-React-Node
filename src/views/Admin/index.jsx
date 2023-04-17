import React, { Fragment } from 'react'
import {Outlet, useNavigate} from "react-router-dom";


export default function index() {

  return (
    <Fragment>

        <Outlet></Outlet>
    </Fragment>
    )
}
