import Loadable from 'react-loadable';
import { Loading } from 'cooco_ui_lib';
import React from 'react';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading: ()=>{
  	return (<div style={{width:'100%'}}>
  		       <div style={{margin: '0 auto ',width: 200}}>
  	               <Loading/>
  	           </div>
  	       </div>);
  }
});

export default () => <LoadableComponent/>