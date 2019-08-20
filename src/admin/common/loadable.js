import Loadable from 'react-loadable';
import { Loading } from 'cooco_ui_lib';
import React from 'react';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading: ()=>{
  	return <Loading/>
  }
});

export default () => <LoadableComponent/>