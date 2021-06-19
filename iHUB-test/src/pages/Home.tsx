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

//interface A {
//  type: 'A';
//  say: () => void;
//}
//
//interface B {
//  type: 'B';
//  say: () => void;
//}
//
//const sayA = (): void => console.log('sayA');
//const a = (): A => ({
//  type: 'A',
//  say: sayA,
//});
//let aword=a()
//const sayB = (): void => console.log('sayB');
//const b = (): B => ({
//  type: 'B',
//  say: sayB,
//});
//let bword=b()
//const saySomething = (x: A | B): void =>{ x.say()};
//saySomething(aword)
//saySomething(bword)

let dates = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let hours1 = [0, 5, 10, 11, 12, 13, 14, 15];

// this logic should be 100% moved from page

// I generaly think day/hour/min should be taken from backend, but for now I'll
//  get 20 of each just for demonstration

//may be I'll refactor it later if I'll have time

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const initialData = getInitialData(); // this function generates 20 days and hours starting from current time

    dispatch(setDay(initialData.days));
    dispatch(setTime(initialData.hours)); // filling state with initial data
    
  }, []);

  let DatesComponent = AppDate(dates);
  let HourComponent = AppHour(hours1);
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
