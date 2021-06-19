import { DateType, HoursType } from '../types/timeTypes';


//converts string to custom types
//"date day hh:mm":string=>date:DateType, hours:HoursType
const parse = (str: string) => {
  const arr = str.split(' ');
  const date: DateType = { date: Number.parseInt(arr[0]), day: Number.parseInt(arr[1]) };
  const hour: HoursType = {hhmm:arr[2]}
  return {date,hour}
};

export default parse;
