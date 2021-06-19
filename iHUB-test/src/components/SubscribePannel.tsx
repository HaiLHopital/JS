import React from 'react';
import { IonButton, IonContent } from '@ionic/react';
import { useAppDispatch } from '../hooks/reduxHooks';
import { setDay } from '../store/dateSlice'

const SubscribePannel: React.FC = () =>{
  const dispatch = useAppDispatch()
  const handleSubscribe = ()=>{dispatch(setDay([{day:1,date:1}]))}
  return (
    <IonContent>
      <IonButton onClick={handleSubscribe} color="secondary" expand="block" >
       like and suscribe
      </IonButton>
    </IonContent>
  );
}

export default SubscribePannel;
