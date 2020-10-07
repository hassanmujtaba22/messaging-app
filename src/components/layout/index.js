import React from 'react'
import Header from '../Header'

function Layout({children}) {
    return (
        <div>
            <Header/>
            <section>{children}</section>
        </div>
    )
}

export default Layout
