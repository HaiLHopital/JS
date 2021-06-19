import React, { useRef } from 'react';
import { IonSlides, IonSlide, IonContent } from '@ionic/react';

const slideOpts = {
  initialSlide: 1,
  speed: 400,
  slidesPerView: 4,
};

const SliderDate: React.FC<IDate> = (dates) => {
  const slideRef = useRef<any>();

  const handleSlideChange = () => {
  slideRef.current.getActiveIndex().then((v:any)=>console.log(v)) 
  };

  
  return (
    <>
      <h1>День</h1>
      <IonSlides ref={slideRef} onIonSlideDidChange={handleSlideChange} options={slideOpts}>
        {dates.data.map((item, index) => (
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

export const AppDate = (x: number[]): IDate => ({
  type: 'IDate',
  data: x,
  slider: SliderDate,
});
