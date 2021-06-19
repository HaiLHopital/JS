import React, { useRef } from 'react';
import { IonSlides, IonSlide } from '@ionic/react';
import { fetchHour } from '../store/dateSlice';
import { useAppDispatch } from '../hooks/reduxHooks';
import { HoursType } from '../types/timeTypes';

const slideOpts = {
  initialSlide: 0,
  speed: 400,
  slidesPerView: 4,
};

//React Component for Hours Slider
const SliderHour: React.FC<IHour> = (hours) => {
  const slideRef = useRef<any>(); //ref to get acces to swiper
  const dispatch = useAppDispatch();

  //handling async action on slide change
  const handleSlideChange = async () => {
    dispatch(fetchHour(slideRef))
  };

  return (
    <><div style={{display:"flex",
    flexDirection:"column"}}></div>
      <h1>Свободное время</h1>
      <IonSlides ref={slideRef} onIonSlideDidChange={handleSlideChange} options={slideOpts}>
        {hours.data.map((item, index) => (
          <IonSlide key={index}>
            <h1>{item.hhmm}</h1>
          </IonSlide>
        ))}
      </IonSlides>
    </>
  );
};

//IHour object wich has react component as method
export interface IHour {
  type: 'IDate';
  data: HoursType[];
  slider: React.FC<IHour>;
}

//factory fanction wich return IHour objeect
export const AppHour = (x: HoursType[]): IHour => ({
  type: 'IDate',
  data: x,
  slider: SliderHour,
});
