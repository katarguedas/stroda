'use client'
import { useEffect } from "react";
import { useDataCompContext } from "@/lib/provider/dataComparisonContext";



export default function SelectionPanel2() {

  const { selectedGroup, setSelectedGroup, categories, categoryChecked, setCategoryChecked, group } = useDataCompContext();


  const clearCategoryCheck = () => {
    setCategoryChecked(
      categoryChecked.map((e, i) => {
        if (e === true) e = !e;
        return e;
      })
    );
  };

  const handleChange = (index: number) => {
    setCategoryChecked(
      categoryChecked.map(
        (e, i) => { if (i === index) e = !e; return e }
      )
    );
  }


  useEffect(() => {
    clearCategoryCheck()
  }, [selectedGroup])



  return (
    <div>

      <form className="ckeckbox-form-categories" >
        {
          categories.map((category, index) => (
            <div key={category} >
              <input
                type="checkbox"
                id={`check${index}`}
                name="year"
                value={category}
                checked={categoryChecked[index]}
                onChange={() => handleChange(index)}
              ></input>
              <label>{category}</label>
            </div>
          ))
        }
      </form>

    </div>
  )
}

