// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.

import { IDate } from './DateSlider';
import { IHour } from './HourSlider';

export const Slider: React.FC<any> = (props) => {
  
  return props.slider(props);
};
