import React from 'react'
import Admin from './admin/admin'
import {
Switch, Route, Link, BrowserRouter as Router
} from 'react-router-dom'


class Everything extends React.Component{
  render(){
    return <Router>
<div>
  <nav></nav>
  <Switch>
    <Route exact path={`${this.props.match.path}/admin`} component={Admin}/>
    <Route exact path="/" component={()=>(<div>Hello user</div>)}/>
  </Switch>
</div>
    </Router>
  }
}
export default Everything