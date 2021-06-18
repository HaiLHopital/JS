import React from 'react';
import { IonSlides, IonSlide, IonContent } from '@ionic/react';

const slideOpts = {
  initialSlide: 1,
  speed: 400,
  slidesPerView: 4,
};

const SliderHour: React.FC<IHour> = (hours) => {
    console.log(hours)
  return (
    <>
      <IonSlides options={slideOpts}>
        {hours.data.map((item,index) => (
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

export const Hour = (x: number[]): IHour => ({
  type: 'IDate',
  data: x,
  slider: SliderHour,
});
