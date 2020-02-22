import React, {useEffect} from 'react';
import logo from './logo.svg';
import {urlB64ToUint8Array, GetPushPermission} from './util/helpers';
import './App.css';





function SubscribePush(publicKey: string){

  navigator.serviceWorker.ready.then(async (serviceWorkerRegistration) => {
    if(!publicKey){
      publicKey = ""; // HTTP.GetKey(user identifier)
    }

 

    const options = {
      userVisibleOnly: true,
      applicationServerKey: urlB64ToUint8Array(publicKey)
    };


    serviceWorkerRegistration.pushManager.subscribe(options)
    .then((pushSubscription) => {
      //HTTP.SaveSubscrie(user identifier, pushSubscription); for later send notifications from server side
    })
    .catch(error=> console.error(`error at SubscribePush(): ${error}`))
  });

}


const App = () => {


  useEffect(()=> {

    async function Subscribe(){
      try {
        await GetPushPermission();
        SubscribePush("");
      } catch (error) {
        console.error(error)
      }
    }
    Subscribe();
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
