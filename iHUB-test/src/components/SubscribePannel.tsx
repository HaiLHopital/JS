import React from 'react';
import { IonButton, IonContent } from '@ionic/react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { setDay } from '../store/dateSlice';
import { docRef } from '../App';

const SubscribePannel: React.FC = () => {
  const dispatch = useAppDispatch();
  const { chosenD, chosenH } = useAppSelector((store) => store.dateReducer);
  
  const handleSubscribe = () => {
    docRef.doc('datetime').set({ datetime: chosenD.date + ' ' + chosenD.day + '' + chosenH.hhmm });
  };

  return (
    <IonContent>
      <h1>{chosenD.date + ' ' + chosenH.hhmm}</h1>
      <IonButton onClick={handleSubscribe} color="secondary" expand="block">
        like and suscribe
      </IonButton>
    </IonContent>
  );
};

export default SubscribePannel;
