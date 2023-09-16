import React from 'react'
import Loading from '../../components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Card, Container, Grid, TextField, Typography } from '@mui/material'
import { handleSetLogin } from '../../store/features/auth'
import { useNavigate } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Login = () => {

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const user = {
        username: 'ChampaDev',
        role: "ADMIN",
        isLogged: true,
    }
    const _user = { user }

    function handleLogin() {
        dispatch(handleSetLogin(_user))
    }

    return (
        <div>
            <Box sx={{
                maxWidth: 720,
                mx: 'auto',
                width: "100%",
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Card sx={{
                    p: 2,
                    width: "100%",
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}   >
                            <Box sx={{
                                mx: 'auto',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                            }}>
                                <AccountCircleIcon sx={{ fontSize: 100, color: '#ff7a21', mb: 1 }} />
                                <Typography variant='h5' >ລະບົບຈັດເກັບເອກະສານ</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12}   >
                            <TextField
                                fullWidth
                                label="ຊື່ຜູ້ໃຊ້"
                                name='username'
                            />
                        </Grid>
                        <Grid item xs={12}   >
                            <TextField
                                fullWidth
                                label="ລະຫັດຜ່ານ"
                                name='password'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant='contained' fullWidth onClick={handleLogin}>ເຂົ້າສູ່ລະບົບ</Button>
                        </Grid>
                    </Grid>
                </Card>

            </Box>




        </div>
    )
}

export default Login