import React, { Suspense, lazy } from 'react'
import { Route, Switch, HashRouter, Link } from 'react-router-dom'

const Table = lazy(() => import('../views/Table'))

export const routePaths = {
  table: '/table'
}

const router = () => (<HashRouter>
  <Suspense fallback="loading">
    <div>home</div>
    <ul>
      <li><Link to="/table" >table</Link></li>
      {/* <li><Link to="/" >home</Link></li> */}
    </ul>
    <div>------------------- examples ------------------</div>
    <Switch>
      <Route path={routePaths.table} render={props => <Table {...props} />}></Route>
    </Switch>
  </Suspense>
</HashRouter>)

export default router