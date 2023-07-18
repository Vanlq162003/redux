import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/client/Header'
import Footer from '../components/client/Footer'

type Props = {}

const Client = (props: Props) => {
    return <>
        <body className="bg-white">

        <Header />

        <Outlet />

        <Footer /> 
        </body >

    </>
}

export default Client