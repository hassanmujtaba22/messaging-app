import React from 'react'
import {Route} from "react-router-dom"
function PrivateRoute({path,exact,component}) {
    return <Route path={path} exact={exact} component={component}/>
}

export default PrivateRoute
