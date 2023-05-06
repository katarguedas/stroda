'use client'
import { useDataCompContext } from "@/lib/provider/dataComparisonContext";
import { useStaticDataContext } from "@/lib/provider/staticDataProvider";



export default function SelectionPanel2() {

  const {  yearIsChecked, setYearIsChecked, selectedGroup, setSelectedGroup, selectedCategory, setSelectedCategory
  } = useDataCompContext();
  const { years, groups, categories } =useStaticDataContext();

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