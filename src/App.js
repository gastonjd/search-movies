import React from 'react';
import Detail from './peges/Detail';
import './App.css';
import 'bulma/css/bulma.css';

import Home from './peges/Home'


class App extends React.Component{


  render (){
    const url= new URL(document.location)
    const hasId = url.searchParams.has('id')

    if(hasId){
      return <Detail id={url.searchParams.get('id')}></Detail>
    }
    return(
      <div className="App">
        <Home></Home>
      </div>
    );
  }

}

export default App;
