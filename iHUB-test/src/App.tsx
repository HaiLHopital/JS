import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

import firebase from 'firebase/app';
import 'firebase/firestore';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { time } from 'console';

firebase.initializeApp({
  apiKey: 'AIzaSyA9d8pSfgEM4FeQ5bhqKfFlSJylc5xkndk',
  authDomain: 'ihub-test-b12f6.firebaseapp.com',
  projectId: 'ihub-test-b12f6',
  storageBucket: 'ihub-test-b12f6.appspot.com',
  messagingSenderId: '339724387894',
  appId: '1:339724387894:web:4f1c388547b2ee086f7a97',
  measurementId: 'G-VFX78SEMWH',
});

const firestore = firebase.firestore()

export const docRef=firestore.collection("subscriptions")


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
