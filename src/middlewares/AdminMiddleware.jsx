import React from 'react'
import { useSelector } from 'react-redux'
import Redirect from './Redirect'
import { Outlet } from 'react-router-dom'

function AdminMiddleware() {

    const auth = useSelector(state => state.auth)

    if (auth && !auth.isLogged) {
        return <Redirect />
    }
    return <Outlet />
}

export default AdminMiddleware