import React, { ReactElement } from 'react';
import { IonSlides, IonSlide, IonContent } from '@ionic/react';

const slideOpts = {
  initialSlide: 1,
  speed: 400,
  slidesPerView: 4,
};

const SliderDate: React.FC<IDate> = (dates) => {
    console.log(dates)
  return (
    <>
      <IonSlides options={slideOpts}>
        {dates.data.map((item,index) => (
          <IonSlide key={index}>
            <h1>{item}</h1>
          </IonSlide>
        ))}
      </IonSlides>
    </>
  );
};

export interface IDate {
  type: 'IDate';
  data: number[];
  slider: React.FC<IDate>;
}

export const Date = (x: number[]): IDate => ({
  type: 'IDate',
  data: x,
  slider: SliderDate,
});
