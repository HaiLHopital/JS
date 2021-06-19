// I generaly think day/hour/min should be taken from backend, but for now I'll
//  get 20 of each just for demonstration

//may be I'll refactor it later if I'll have time
import { DateType, HoursType } from '../types/timeTypes';

export const getInitialData = () => {
  const currentTime: Date = new Date();
  console.log(currentTime);

  const setDateType = (prop: Date): DateType => {
    return { day: prop.getDay(), date: prop.getDate() };
  };

  const setHoursType = (prop: Date): HoursType => {
    if (prop.getMinutes() < 30) {
      prop.setMinutes(30);
    }

    prop.setHours(prop.getHours() + 1);
    prop.setMinutes(0);

    return { hhmm: prop.toLocaleTimeString().slice(0, 5) };
  };

  let days: DateType[] = [];
  let hours: HoursType[] = [];

  for (let i = 0; i < 20; i++) {
    const currentTime: Date = new Date();
    currentTime.setDate(currentTime.getDate() + i);
    days.push(setDateType(currentTime));
  }

  for (let i = 0; i < 20; i++) {
    //probably should be fixed
    const currentTime: Date = new Date();
    currentTime.setHours(currentTime.getHours() + i);
    hours.push(setHoursType(currentTime));
  }

  return {days,hours}
};
