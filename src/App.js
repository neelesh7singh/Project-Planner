import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import DashBord from './components/dashbord/Dashbord'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreatProject from './components/projects/CreateProject';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={DashBord}/> 
          <Route path='/project/:id' component={ProjectDetails}/> 
          <Route exact path='/signin' component={SignIn}/> 
          <Route exact path='/signup' component={SignUp}/> 
          <Route exact path='/create' component={CreatProject}/> 


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
