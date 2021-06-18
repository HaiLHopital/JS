import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Date } from "../components/DateSlider";
import { Hour } from "../components/HourSlider";
import { Slider } from '../components/Slider';
import './Home.css';

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
let hours = [10, 11, 12, 13, 14, 15];

const Home: React.FC = () => {
  let DatesComponent = Date(dates);
  let HourComponent = Hour(hours);
  return (
    <IonPage>
      <IonContent>
        {Slider(DatesComponent)}
        {Slider(HourComponent)}
      </IonContent>
    </IonPage>
  );
};

export default Home;
