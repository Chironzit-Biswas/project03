import FoodData from "./FoodData.js";
import {useEffect} from "react";


export const FoodCard = () => {

    const foodApi = () => {

    }
    useEffect(() => {
        foodApi(); // Fetch data from API and update state with the fetched data.
        // You can also use an async function to fetch data and update the state.
        // Example:
        // const response = await fetch('https://example.com/api/data');
        // const data = await response.json();
        // setData(data);
    }, []);
    return (
        <div className={'w-full'}>
            {/* Render food cards based on the fetched data */}
            {FoodData.map((food) => (
                <div key={food.id} className={''}>
                    <img className={'w-[200px] h-[150px]'} src={food.img} alt=""/>
                    <h2 className={'font-bold'}>{food.name}</h2>
                    <h3 className={'text-sm'}>{food.price}</h3>
                    <p>{food.desc}</p>
                    <p>{food.rating}</p>
                    <p>{food}</p>

                </div>
            ))}
        </div>
    )
}