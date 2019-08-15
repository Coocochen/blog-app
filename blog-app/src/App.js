import React from 'react';
import { GlobalStyle } from './style';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import BlogList from './pages/home/loadable.js';
import BlogDetail from './pages/blogdetail/loadable.js';
import Photos from './pages/photos/loadable.js';
import Admin from './admin/loadable.js';
import Login from './admin/components/login';
import TagManager from './admin/components/tagmanager';
import PhotosManager from './admin/components/photosmanager';
import EditPage from './admin/components/editorpage';
import CommentsManager from './admin/components/commentmanager';
class App extends React.PureComponent {
  render(){
    return (
    <React.Fragment>
      <Provider store={store}>
          <BrowserRouter>
             	<Route path="/" exact component={BlogList}/>
              <Route path="/tag/:id" exact component={BlogList}/>
             	<Route path="/blogdetail/:id" exact component={BlogDetail}/>
             	<Route path="/photos" exact component={Photos}/>
              <Route path="/admin" exact component={Admin} />
              <Route path="/login" exact component={Login} />
              <Route path="/tagmanager" exact component={TagManager} />
              <Route path="/photosmanager" exact component={PhotosManager} /> 
              <Route path="/edit/:id" exact component={EditPage} />
              <Route path="/commentmanager" exact component={CommentsManager} />
          </BrowserRouter>
      </Provider>
      <GlobalStyle />
    </React.Fragment>
  );
  }
}

export default App;
