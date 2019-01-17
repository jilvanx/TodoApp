import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import 'modules/jquery/dist/jquery.slim'
import 'modules/popper.js/dist/umd/popper'
import 'modules/bootstrap/dist/js/bootstrap.min.js'
import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

export default props => (
    <div>
        <Menu />
        <Routes />
    </div>
)