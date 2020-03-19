import React, { Suspense, lazy } from 'react'
import { Route, Switch, HashRouter, Link } from 'react-router-dom'

const Table = lazy(() => import('../views/Table'))
const Prize = lazy(() => import('../views/Prize'))

export const routePaths = {
  table: '/table',
  prize: '/prize'
}

const router = () => (<HashRouter>
  <Suspense fallback="loading">
    <div>home</div>
    <ul>
      <li><Link to="/table" >table</Link></li>
      <li><Link to="/prize" >prize</Link></li>
      {/* <li><Link to="/" >home</Link></li> */}
    </ul>
    <div>------------------- examples ------------------</div>
    <Switch>
      <Route path={routePaths.table} render={props => <Table {...props} />}></Route>
      <Route path={routePaths.prize} render={props => <Prize {...props} />}></Route>
    </Switch>
  </Suspense>
</HashRouter>)

export default router