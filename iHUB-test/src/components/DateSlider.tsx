import React, { useRef } from 'react';
import { IonSlides, IonSlide, IonContent } from '@ionic/react';
import { DateType } from '../types/timeTypes';
import gettingCurrentSlide from '../services/currentSlide';
import { useAppDispatch } from '../hooks/reduxHooks';
import { fetchDate } from '../store/dateSlice';

const slideOpts = {
  initialSlide: 0,
  speed: 400,
  slidesPerView: 4,
};

const SliderDate: React.FC<IDate> = (dates) => {
  const slideRef = useRef<any>();

  const dispatch = useAppDispatch();

  const handleSlideChange = async () => {
    const resp = await gettingCurrentSlide(slideRef);
    dispatch(fetchDate(slideRef))
  };
  
  return (
    <>
      <h1>День</h1>
      <IonSlides ref={slideRef} onIonSlideDidChange={handleSlideChange} options={slideOpts}>
        {dates.data.map((item, index) => (
          <IonSlide key={index}>
            <h1>{item.date}</h1>
          </IonSlide>
        ))}
      </IonSlides>
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
