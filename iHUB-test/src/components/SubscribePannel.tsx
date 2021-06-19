import React, { useEffect } from 'react';
import { IonButton,  IonCard } from '@ionic/react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { docRef } from '../App';
import { setActiveDay, setActiveTime } from '../store/dateSlice';
import parseFromDB from '../services/parseFromDB';

const SubscribePannel: React.FC<any> = ({ snapshot }) => {
  const dispatch = useAppDispatch();
  const { chosenD, chosenH } = useAppSelector((store) => store.dateReducer);

  const handleSubscribe = () => {
    docRef.doc('datetime').set({ datetime: chosenD.date + ' ' + chosenD.day + ' ' + chosenH.hhmm });
  };

  // after datetime changing value from undefined to server data we dispatch actions to update active values according to second part of task

  let datetime: string = snapshot?.docs[0]?.data().datetime; // probably not the best way to handle this, but I haven't managed to achive positive results with promises, I'm sure missing smth
  useEffect(() => {
    console.log(datetime);
    if (datetime) {
      const { date, hour } = parseFromDB(datetime);
      console.log(date, hour);
      dispatch(setActiveDay(date));
      dispatch(setActiveTime(hour));
    }
  }, [datetime]);

  return (
    
      <IonCard
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: "space-evenly"
        }}>
          <h1>{chosenD.date} </h1>
          <h1> {chosenH.hhmm}</h1>
        </div>

        <IonButton onClick={handleSubscribe} color="secondary" expand="block">
          ЗАПИСАТЬСЯ НА БЕСПЛАТНУЮ ВСТРЕЧУ
        </IonButton>
      </IonCard>
  );
};

export default SubscribePannel;
