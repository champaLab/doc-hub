import React from 'react'
import { Outlet } from 'react-router-dom'
import MyDrawer from './components/MyDrawer'

const AdminLayout = () => {
    return (
        <div>
            <h1>AdminLayout</h1>
            <MyDrawer>
                <Outlet />
            </MyDrawer>
        </div>
    )
}

export default AdminLayout