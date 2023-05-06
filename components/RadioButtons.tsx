'use client'

import { useDataCompContext } from "@/lib/provider/dataComparisonContext";

type Props = {
  array: string[];
  handleChange: () => void;
}

export default function RadioButtons({ array, handleChange }: Props) {

  const {  } = useDataCompContext();

  return (

    <div>
      <form className="radio-form" >
        {
          array.map((element, index) => (
            <div key={index} >
              <input
                className="radio"
                type="radio"
                name="group"
                id={`group${index + 1}`}
                value={element[index]}
                // onChange={() => setSelectedGroup(groups[index])}
                onChange={() => handleChange}
              ></input>
              <label>{element}</label>
            </div>
          ))
        }
      </form>
    </div>
  )
}


