import React from 'react'
import Link from 'next/link'

const Header = () =>{

    return(
        <div className="bg_top" >
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <Link href="/" >
                        <a className="main_logo" >Stylo Fitnes Academia
                            {/* <img className="main_logo" alt="logo" /> */}
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default Header