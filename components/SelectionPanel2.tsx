'use client'
import { useDataContext } from "@/lib/provider/dataContext";
import StrodaDatePicker from "./StrodaDatePicker";
import { useEffect } from "react";
import useCharts from "@/hooks/useCharts";

/*********************************
 * SelectionPanel2
 * radio-Buttons und checkboxen für die Auswahl der Parameter,
 * die zur Darstellung der gewünschten Zeitverläufe erforderlich sind
 */

export default function SelectionPanel2() {

  const { groups, selectedGroup, setSelectedGroup, categories, categoryChecked, setCategoryChecked, firstDate, setFirstDate, lastDate, setLastDate, setShowChart, setSearchedCategory
  } = useDataContext();

  const [clearcategoryChecked] = useCharts();

  //.......................

  useEffect(() => {
    setSelectedGroup('')
  }, [])

  useEffect(() => {
    if (selectedGroup === 'Stromverbrauch') {
      setSearchedCategory('Gesamt')
    }
    if (selectedGroup === 'Stromverbrauch' || categoryChecked.includes(true)) {
      setShowChart(true);
    }
  }, [selectedGroup, categoryChecked])


  //.......................

  const handleCheckbox = (index: number) => {
    setSearchedCategory(categories[index])
    setCategoryChecked(
      categoryChecked.map((e, i) => {
        if (i === index) e = !e;
        return e;
      })
    );
  }

  const handleStartDate = (date: Date) => {
    setFirstDate(date);
  }
  const handleEndDate = (date: Date) => {
    setLastDate(date);
  }

  const handleClick = () => {
    setShowChart(true);
    setSelectedGroup('');
    clearcategoryChecked();
  }

  return (
    <div className="panel2" >
      <div className="datePicker-wrapper" >
        <StrodaDatePicker
        
          handleChange={handleStartDate}
          selected={firstDate}
        />
        <StrodaDatePicker
          handleChange={handleEndDate}
          selected={lastDate}
        />
        <button onClick={handleClick} >Reset</button>
      </div>
      <form className="radio-form" >
        {
          groups.map((group, index) => (
            <div key={index} >
              <input
                className="radio"
                type="radio"
                name="group"
                id={`group${index + 1}`}
                value={groups[index]}
                // checked={ } 
                onChange={() => setSelectedGroup(group)}
              ></input>
              <label>{group}</label>
            </div>
          ))
        }
      </form>
      {
        selectedGroup === 'Stromerzeugung' ?
          <form className="ckeckbox-form" >
            {
              categories.map((category, index) => (
                <div key={index} style={{ display: "flex", flexDirection: 'row' }} >
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="group"
                    id={`check${index + 1}`}
                    value={category}
                    // checked={categoryChecked[index]}
                    onChange={() => handleCheckbox(index)}
                  ></input>
                  <label>{category}</label>
                </div>
              ))
            }
          </form>
          : null
      }


    </div >
  )
}