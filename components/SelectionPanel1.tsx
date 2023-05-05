'use client'
import { useDataCompContext } from "@/lib/provider/dataComparisonContext";
import { useEffect } from "react";
import SelectionPanel2 from "./SelectionPanel2";



export default function SelectionPanel1() {

  const { years, yearIsChecked, setYearIsChecked, groups, selectedGroup, setSelectedGroup, group
  } = useDataCompContext();

  const handleChange = (index: number) => {
    setYearIsChecked(
      yearIsChecked.map(
        (e, i) => { if (i === index) e = !e; return e }
      )
    );
  }

  const clearYearIsChecked = () => {
    setYearIsChecked(
      yearIsChecked.map((e, i) => {
        if (e === true) e = !e;
        return e;
      }),
    );
  };

  useEffect(() => {
    clearYearIsChecked()
  }, [selectedGroup])


  return (
    <div>
      <form className="radio-form" >
        {
          groups.map((group, index) => (
            <div key={index} >
              <input
                type="radio"
                name="group"
                id={group}
                value={groups[index]}
                // checked={ } 
                onChange={() => setSelectedGroup(groups[index])}
              ></input>
              <label>{group}</label>
            </div>
          ))
        }
      </form>
      {
        selectedGroup === 'Stromverbrauch' ? null : <SelectionPanel2 />
      }
      <form className="ckeckbox-form" >
        {
          years.map((year, index) => (
            <div key={year} >
              <input
                type="checkbox"
                id={`check${index}`}
                name="year"
                value={year}
                checked={yearIsChecked[index]}
                onChange={() => handleChange(index)}
              ></input>
              <label>{year}</label>
            </div>
          ))
        }
      </form>


    </div>
  )
}