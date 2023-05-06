'use client'
import { useDataCompContext } from "@/lib/provider/dataComparisonContext";



export default function SelectionPanel2() {

  const {  categories, setSelectedCategory } = useDataCompContext();


  return (
    <div>

      <form className="radio-form-categories" >
        {
          categories.map((category, index) => (
            <div key={index} >
              <input
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
    </div>
  )
}

