import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

export const Layout = ({children}) =>{
    return (
        <React.Fragment>
            <Header/>
            <div>
                {children}
            </div>
            <Footer/>
        </React.Fragment>  
    )
}