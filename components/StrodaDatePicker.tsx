import { useDataContext } from "@/lib/provider/dataContext";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import { de } from 'date-fns/locale';
registerLocale("de", de)

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

type Props = {
  handleChange: (date: Date) => void;
  selected: Date;
}
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