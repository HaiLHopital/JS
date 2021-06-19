import React, { useRef } from 'react';
import { IonSlides, IonSlide, IonContent } from '@ionic/react';
import { fetchHour, setTime } from '../store/dateSlice';
import { AppDispatch } from '../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useAppDispatch } from '../hooks/reduxHooks';
import { HoursType } from '../types/timeTypes';
import gettingCurrentSlide from '../services/currentSlide';

const slideOpts = {
  initialSlide: 0,
  speed: 400,
  slidesPerView: 4,
};

const SliderHour: React.FC<IHour> = (hours) => {
  const slideRef = useRef<any>();
  const dispatch = useAppDispatch();

  const handleSlideChange = async () => {
    const resp = await gettingCurrentSlide(slideRef);
    dispatch(fetchHour(slideRef))
  };

  return (
    <>
      <h1>Время</h1>
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

export interface IHour {
  type: 'IDate';
  data: HoursType[];
  slider: React.FC<IHour>;
}

export const AppHour = (x: HoursType[]): IHour => ({
  type: 'IDate',
  data: x,
  slider: SliderHour,
});
