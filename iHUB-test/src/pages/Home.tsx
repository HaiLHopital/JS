import { IonContent, IonText, IonPage } from '@ionic/react';
import { AppDate } from '../components/DateSlider';
import { AppHour } from '../components/HourSlider';
import SubscribePannel from '../components/SubscribePannel';
import { Slider } from '../components/Slider';
import './Home.css';
import { getInitialData } from '../services/fillingDates';
import { useAppDispatch } from '../hooks/reduxHooks';
import { setDays, setTimes } from '../store/dateSlice';
import { useEffect } from 'react';
import { docRef } from '../App';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';
import someSvg from '../assets/somesvg.svg';
import face from '../assets/face.png';

const Home: React.FC = () => {
  const dispatch = useAppDispatch(); //typed dispatch hook

  const initialData = getInitialData(); // this function generates 20 days and hours starting from current time

  //getting data from db, using react-firebase-hooks 
  const [snapshot] = useCollectionOnce(docRef);

  useEffect(() => {
    dispatch(setDays(initialData.days));
    dispatch(setTimes(initialData.hours)); // filling state with initial data
  }, []);

  let DatesComponent = AppDate(initialData.days); //IDate obj
  let HourComponent = AppHour(initialData.hours);  //Ihour obj

  // a lot of inline style wich probably isn't good
  return (
    <IonPage>
      <IonContent style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
        <IonText>
          <h3 style={{ textAlign: 'center' }}>Алексей Карачинский</h3>
        </IonText>
        <div style={{ display: 'flex', flexDirection: 'row', width: '144px', height: '144px' }}>
          <img
            style={{}} //face
            src={face}
            alt="should be face hear"></img>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <IonText>
              <h4>Длительность консультации</h4>
            </IonText>
            <IonText>
              <h4>50 минут</h4>
            </IonText>
            <img src={someSvg} alt=""></img>
          </div>
        </div>

        {Slider(DatesComponent)}{/* factory produces 2 different types of slider*/}
        {Slider(HourComponent)}
        <SubscribePannel snapshot={snapshot} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
