'use client'
import { useDataContext } from "@/lib/provider/dataContext";
import { useEffect } from "react";



export default function SelectionPanel1() {

  const { years, yearIsChecked, setYearIsChecked, groups, selectedGroup, setSelectedGroup, selectedCategory, categories, setSelectedCategory
  } = useDataContext();


  useEffect(() => {
    setSelectedGroup('')
  }, [])

  const handleChange = (index: number) => {
    setYearIsChecked(
      yearIsChecked.map((e, i) => {
        if (i === index) e = !e;
        return e;
      })
    );
  }

  return (
    <div className="panel1" >
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
          <form className="radio-form" >
            {
              categories.map((category, index) => (
                <div key={index} >
                  <input
                    className="radio"
                    type="radio"
                    name="group"
                    id={`group${index + 1}`}
                    value={category[index]}
                    // checked={categoryChecked[index]}
                    onChange={() => setSelectedCategory(category)}
                  ></input>
                  <label>{category}</label>
                </div>
              ))
            }
          </form>
          : null
      }
      {
        (selectedGroup === 'Stromerzeugung' && selectedCategory.length > 0) ||
          selectedGroup === 'Stromverbrauch' ?
          < form className="ckeckbox-form" >
            {
              years.map((year, index) => (
                <div key={year} >
                  <input
                    className="checkbox"
                    type="checkbox"
                    id={`check${index + 1}`}
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
          : null
      }

    </div >
  )
}