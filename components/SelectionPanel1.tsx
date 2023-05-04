'use client'
import { useDataCompContext } from "@/lib/provider/dataComparisonContext";
import { useEffect } from "react";



export default function SelectionPanel1() {

  const { years, isChecked, setIsChecked, categories, selectedCategory, setSelectedCategory,
    getDataForBarChart,
    // setOneYearData 
  } = useDataCompContext();

  console.log("isCheckedArray: ", isChecked);

  const handleChange = (index: number) => {
    setIsChecked(
      isChecked.map(
        (e, i) => { if (i === index) e = !e; return e }
      )
    );
  }

  // useEffect(() => {
  //   console.log("bin drin")
  //   years.map((year, index) => {
  //     if (isChecked[index])
  //       getDataForBarChart(selectedCategory, Number(year));
  //   })
  // }, [isChecked, selectedCategory])


  return (
    <div>
      <form className="radio-form" >
        {
          categories.map((category, index) => (
            <div key={index} >
              <input
                type="radio"
                name="category"
                id={category}
                value={categories[index]}
                // checked={ } 
                onChange={() => setSelectedCategory(categories[index])}
              ></input>
              <label>{category}</label>
            </div>
          ))
        }
      </form>
      <form className="ckeckbox-form" >
        {
          years.map((year, index) => (
            <div key={year} >
              <input
                type="checkbox"
                id={`check${index}`}
                name="year"
                value={year}
                // checked={isChecked[index]}
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
























{/* <form className="ckeckbox-form">
        <legend>Jahr</legend>
        <input type="checkbox" id="check1" name="year" value="2015" ></input>
        <label >2015</label>
        <input type="checkbox" id="check2" name="year" value="2016" ></input>
        <label >2016</label>
        <input type="checkbox" id="check3" name="year" value="2017" ></input>
        <label >2017</label>
        <input type="checkbox" id="check4" name="year" value="2018" ></input>
        <label >2018</label>
        <input type="checkbox" id="check5" name="year" value="2019" ></input>
        <label >2019</label>
        <input type="checkbox" id="check6" name="year" value="2020" ></input>
        <label >2020</label>
        <input type="checkbox" id="check7" name="year" value="2021" ></input>
        <label >2021</label>
        <input type="checkbox" id="check8" name="year" value="2022" ></input>
        <label >2022</label>
        <input type="checkbox" id="check9" name="year" value="2023" ></input>
        <label >2023</label>
      </form> */}