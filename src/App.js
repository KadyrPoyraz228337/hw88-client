import React from 'react';
import './App.css';
import Navigation from "./components/navigation/navigation";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import PostsPage from "./components/PostsPage/PostsPage";
import NewPost from "./components/newPost/newPost";
import RegisterPage from "./components/registerPage/registerPage";
import LoginPage from "./components/loginPage/loginPage";
import Post from "./components/post/post";

function App() {
  return (
    <div>
      <Navigation/>
      <Container>
        <Switch>
          <Route path='/' exact component={PostsPage}/>
          <Route path='/new' exact component={NewPost}/>
          <Route path='/register' exact component={RegisterPage}/>
          <Route path='/login' exact component={LoginPage}/>
          <Route path='/:id' exact component={Post}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
