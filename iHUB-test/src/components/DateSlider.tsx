import React, { useRef } from 'react';
import { IonSlides, IonSlide, IonCard } from '@ionic/react';
import { DateType } from '../types/timeTypes';
import { useAppDispatch } from '../hooks/reduxHooks';
import { fetchDate } from '../store/dateSlice';

const dayOfTheWeek: string[] = ['Пон', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];//days of week

const slideOpts = {
  initialSlide: 0,
  speed: 400,
  slidesPerView: 3,
};               


//I don't understand how to change active slides style, but its something with  'swiper-slide-active' 

//React Component for date Slider
const SliderDate: React.FC<IDate> = (dates) => {
  const slideRef = useRef<any>(); //ref to get acces to swiper
  const dispatch = useAppDispatch();

//handling async action on slide change
  const handleSlideChange = async () => {
    dispatch(fetchDate(slideRef));
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Возможная дата</h1>
        <IonSlides ref={slideRef} onIonSlideDidChange={handleSlideChange} options={slideOpts}>
          {dates.data.map((item, index) => (
            <IonSlide key={index}>
              <IonCard style={{display: 'flex', flexDirection: 'column',width:"100px",margin:"10px"}}>
                <h2>{dayOfTheWeek[item.day]}</h2>
                <h1>{item.date}</h1>
              </IonCard>
            </IonSlide>
          ))}
        </IonSlides>
      </div>
    </>
  );
};

export interface IDate {
  type: 'IDate';
  data: DateType[];
  slider: React.FC<IDate>;
}

export const AppDate = (x: DateType[]): IDate => ({
  type: 'IDate',
  data: x,
  slider: SliderDate,
});
