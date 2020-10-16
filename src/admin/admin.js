//admin has two routes, log in and home
import React from 'react'
import {BrowserRouter as Router, Link, Switch,Route} from 'react-router-dom'

class Admin extends React.Component{
  render(){
    return <Router>
        <div>
          <nav></nav>
          <Switch>
            <Route exact path={`${this.props.match.path}/home`} component={()=>(this.props.match.path)}/>
            <Route exact path={`${this.props.match.path}`} >
              <div>Hi dude</div>
            </Route>
          </Switch>
        </div>
      </Router>
  }
}
export default Admin