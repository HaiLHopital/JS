import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { AppDate } from '../components/DateSlider';
import { AppHour } from '../components/HourSlider';
import SubscribePannel from '../components/SubscribePannel';
import { Slider } from '../components/Slider';
import './Home.css';
import { DateType, HoursType } from '../types/timeTypes';
import { getInitialData } from '../services/fillingDates';
import { useAppDispatch } from '../hooks/reduxHooks';
import { setDay, setTime } from '../store/dateSlice';
import { useEffect } from 'react';
import { docRef } from '../App';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';

//
//const getActiveDate = () => {
//  docRef.doc('datetime').get().then((doc)=>{
//   if (doc.exists) {
//       console.log("Document data:", doc.data());
//       return doc.data()
//   } else {
//       // doc.data() will be undefined in this case
//       console.log("No such document!");
//   }
//}).catch((error) => {
//   console.log("Error getting document:", error);
//})
//
//};
//
const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const initialData = getInitialData(); // this function generates 20 days and hours starting from current time

  //getting date written in db, using react-firebase-hooks to avoid promises
  const [snapshot] = useCollectionOnce(docRef);
  const datetime = snapshot?.docs[0].data().datetime;

  useEffect(() => {
    dispatch(setDay(initialData.days));
    dispatch(setTime(initialData.hours)); // filling state with initial data
  }, []);

  let DatesComponent = AppDate(initialData.days);
  let HourComponent = AppHour(initialData.hours);
  return (
    <IonPage>
      <IonContent>
        {Slider(DatesComponent)}
        {Slider(HourComponent)}
        <SubscribePannel />
      </IonContent>
    </IonPage>
  );
};

export default Home;
