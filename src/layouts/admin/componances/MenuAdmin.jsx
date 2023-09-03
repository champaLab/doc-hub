import React from 'react'
import { AdminRoutes } from '../../../routes/adminRoute'
import { Link } from 'react-router-dom'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

const MenuAdmin = () => {
    return (
        <List>

            {AdminRoutes.map((item, index) => (
                <Link to={item.path} key={index + '-' + item.name} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {<item.icon />}
                            </ListItemIcon>
                            <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </Link>
            ))}
        </List>
    )
}

export default MenuAdmin