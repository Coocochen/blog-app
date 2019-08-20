import React from 'react';
import { GlobalStyle } from './style';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BlogList from './pages/home/loadable';
import BlogDetail from './pages/blogdetail/loadable';
import Photos from './pages/photos/loadable';
import Admin from './admin/loadable';
import HeadAside from './common/header';
import Login from './admin/pages/login/loadable'

class App extends React.PureComponent {
  render(){
    return (
        <React.Fragment>
            <Provider store={store}>
                <BrowserRouter>
                    <HeadAside />
                        <Switch>
                            <Route path="/" exact component={BlogList}/>
                            <Route path="/tag/:id" exact component={BlogList}/>
                            <Route path="/blogdetail/:id" exact component={BlogDetail}/>
                            <Route path="/photos" exact component={Photos}/>
                            <Route path="/admin" exact component={Admin} />
                            <Route path="/login" exact component={Login} />
                        </Switch>
                </BrowserRouter>
            </Provider>
            <GlobalStyle />
        </React.Fragment>
  );
  }
}

export default App;
