import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useDispatch } from 'redux'

const Home = () => {

    // const dispatch = useDispatch()

    // const counter = useSelector(state => state.counter)

    const dispatch = useDispatch()

    function handleSetIncrease() {
    }

    return (
        <div>
            <h1>Home</h1>
            {/* <h3>{counter.number}</h3> */}

            <Button onClick={() => dispatch(handleIncrease())}>ADD</Button>
            <Button onClick={handleSetIncrease}>ADD</Button>
        </div>
    )
}

export default Home