import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Outlet } from 'react-router-dom'

function BlogsLayout() {
    return (
        <>
        <Header/>
        <Outlet/>
        </>
        
    )
}

export default BlogsLayout
