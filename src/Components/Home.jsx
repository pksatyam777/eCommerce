import React from 'react'
import {CartState} from '../Context/Context'
import Context from '../Context/Context'
const Home=()=> {

    const { state:{Products} }=CartState()
    console.log("hola",state)
  return (
    <div>Home</div>
  )
}

export default Home