import FoodData from "./FoodData.js";
import {MdStar} from "react-icons/md";

export const FoodCard = () => {


    return (
        <>
            <div className={'w-full flex flex-wrap mx-auto gap-5 '}>
                {FoodData.map((food) => {
                    return (
                        <div key={food.id}
                             className={'w-[280px] bg-white  mb-5 rounded-lg shadow-gray-500 shadow-sm hover:scale-110 transition-all duration-300 ease-in-out'}>
                            <img className={'w-[250px] h-[200px] mx-auto my-3'} src={food.img} alt=""/>
                            <div className={'flex justify-between font-bold items-center py-3 px-2'}>
                                <h3>{food.name}</h3>
                                <p>{food.price} TK</p>
                            </div>
                            <div>
                                <h3 className={'font-light text-[15px] text-justify px-2'}> {food.desc.slice(0, 105)} ...</h3>
                            </div>

                            <div className={'flex justify-between mt-10 items-center font-bold mb-5 px-2'}>
                                <div className={'flex items-center gap-1'}>
                                    <MdStar className={'text-yellow-600'}/>
                                    <h3>{food.rating}</h3>
                                </div>
                                <button
                                    className={'bg-green-500 text-white px-2 font-bold rounded-lg hover:bg-green-700'}>Add
                                    to
                                    Cart
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}