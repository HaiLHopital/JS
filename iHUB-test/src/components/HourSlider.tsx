import React, { useRef } from 'react';
import { IonSlides, IonSlide, IonContent } from '@ionic/react';
import { fetchHour, setTime } from '../store/dateSlice';
import { AppDispatch } from '../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useAppDispatch } from '../hooks/reduxHooks';

const slideOpts = {
  initialSlide: 1,
  speed: 400,
  slidesPerView: 4,
};

export const gettingCurrentSlide = async (ref:React.MutableRefObject<any>) => {
  const resp = await ref.current.getActiveIndex();
  return resp
}

const SliderHour: React.FC<IHour> = (hours) => {
  const slideRef = useRef<any>();
  const dispatch = useAppDispatch();

  const handleSlideChange = async () => {
    const resp = await gettingCurrentSlide(slideRef);
    dispatch(fetchHour(slideRef))
    console.log(resp)
  };

  return (
    <>
      <h1>время</h1>
      <IonSlides ref={slideRef} onIonSlideDidChange={handleSlideChange} options={slideOpts}>
        {hours.data.map((item, index) => (
          <IonSlide key={index}>
            <h1>{item}</h1>
          </IonSlide>
        ))}
      </IonSlides>
    </>
  );
};

export interface IHour {
  type: 'IDate';
  data: number[];
  slider: React.FC<IHour>;
}

export const AppHour = (x: number[]): IHour => ({
  type: 'IDate',
  data: x,
  slider: SliderHour,
});
