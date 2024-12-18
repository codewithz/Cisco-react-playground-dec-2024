import React, { useEffect, useState } from "react";
import { getColors } from "./colors";

export default function MyComponent() {
    const [data, setData] = useState([]);

    useEffect( () => {
        async function setColors(){
       const colors=await getColors()
       setData(colors)
        }

        setColors()
    }, [])

    return (
        <div>
            <ul>
                {
                    data.length > 0
                        ?
                        data.map((item) => (
                            <li key={item}>{item}</li>
                        ))
                        :
                        <h3>Loading ...</h3>

                }
            </ul>
            <p>This is after the ul tag</p>
        </div>
    );
}
