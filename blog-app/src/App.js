import React from 'react';
import { GlobalStyle } from './style';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import BlogList from './pages/home';
import BlogDetail from './pages/blogdetail';
import Photos from './pages/photos';
import About from './pages/about';
import Admin from './admin';
import Login from './admin/components/login';
import TagManager from './admin/components/tagmanager';
import PhotosManager from './admin/components/photosmanager';

class App extends React.Component {
  render(){
    return (
    <React.Fragment>
      <Provider store={store}>
          <BrowserRouter>
             	<Route path="/" exact component={BlogList}/>
              <Route path="/tag/:id" exact component={BlogList}/>
             	<Route path="/blogdetail/:id" exact component={BlogDetail}/>
             	<Route path="/photos" exact component={Photos}/>
              <Route path="/about" exact component={About} />
              <Route path="/admin" exact component={Admin} />
              <Route path="/login" exact component={Login} />
              <Route path="/tagmanager" exact component={TagManager} />
              <Route path="/photosmanager" exact component={PhotosManager} />
          </BrowserRouter>
      </Provider>
      <GlobalStyle />
    </React.Fragment>
  );
  }
}

export default App;
