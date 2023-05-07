'use client'
import { useDataContext } from "@/lib/provider/dataContext";
import StrodaDatePicker from "./StrodaDatePicker";
import { useEffect } from "react";
//.......................

export default function SelectionPanel2() {

  const { groups, selectedGroup, setSelectedGroup, categories, setSelectedCategory, categoryChecked, setCategoryChecked, firstDate, setFirstDate, lastDate, setLastDate, showChart, setShowChart, setSearchedCategory
  } = useDataContext();

  //.......................

  useEffect(() => {
    setSelectedGroup('')
  }, [])


  useEffect(() => {
    console.log("first Day: ", firstDate)
  }, [firstDate])
  useEffect(() => {
    console.log("last Day: ", lastDate)
  }, [lastDate])

  useEffect(() => {
    console.log("SelectedGroup ist: ", selectedGroup)
    if (selectedGroup === 'Stromverbrauch') {
      setSearchedCategory('Gesamt')
    }
    if (selectedGroup === 'Stromverbrauch' || categoryChecked.includes(true)) {
      setShowChart(true);
    }
  }, [selectedGroup, categoryChecked])


  //.......................

  const handleCheckbox = (index: number) => {
    console.log("Temporär gesetzt:", categories[index])
    setSearchedCategory(categories[index])
    setCategoryChecked(
      categoryChecked.map((e, i) => {
        if (i === index) e = !e;
        return e;
      })
    );
  }

  //.......................

  const handleStartDate = (date: Date) => {
    setFirstDate(date);
  }
  const handleEndDate = (date: Date) => {
    setLastDate(date);
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