import { useDataContext } from "@/lib/provider/dataContext";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import { de } from 'date-fns/locale';
registerLocale("de", de)

import "react-datepicker/dist/react-datepicker.css";


type Props = {
  handleChange: (date: Date) => void;
  selected: Date;
}
/*******************************
 * StrodaDatePicker
 * zur Auswahl des Zeitraums, für welchen die Zeitverläufe dargestellt werden 
 */

const StrodaDatePicker = ({ handleChange, selected }: Props) => {

  const { lastDay } = useDataContext();

  return (
    <DatePicker
      locale='de'
      dateFormat="dd/MM/yyyy"
      selected={selected}
      onChange={handleChange}
      maxDate={(new Date(lastDay))}
    />
  );
};

export default StrodaDatePicker;