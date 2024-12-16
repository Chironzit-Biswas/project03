import FoodData from "./FoodData.js";
import {MdStar} from "react-icons/md";
import {useState} from "react";
import {FaCartArrowDown} from "react-icons/fa";

export const FoodCard = () => {

    const [cartOpen, setCartOpen] = useState(false)
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
            <div
                className={`fixed right-0 top-0 h-full w-[400px] bg-green-700 ${cartOpen ? "right-0 transition-all duration-700" : "right-[-500px] transition-all duration-700"}`}>
                <div className={'flex justify-between items-center px-2'}>
                    <h3 className={'text-white text-center  p-4 text-2xl font-bold'}>Shopping Cart</h3>
                    <button onClick={() => setCartOpen(!cartOpen)}
                            className={'text-xl font-bold h-[30px] w-[30px] rounded-lg hover:bg-amber-300 hover:text-white border-white-700 border '}>X
                    </button>
                </div>
                <div className={'flex  flex-col gap-5'}>
                    {/*Cart Item Here*/}
                    {
                        // Cart Item
                        FoodData.map((food) => {
                            return (
                                <div key={food.id}
                                     className={'flex items-center gap-3 px-4 py-4 text-black mx-4 rounded-lg bg-white'}>
                                    <img className={'w-[40px] h-[40px]'} src={food.img} alt={food.name}/>
                                    <div>
                                        <h3 className={'font-bold text-gray-700 text-xl'}>{food.name}</h3>
                                        <p className={'font-bold text-gray-700'}>{food.price} TK</p>
                                    </div>
                                </div>
                            )
                        })

                        // Empty Cart
                    }
                </div>

                {/* ! Here is our store Icon*/}
                <div
                    className={'absolute bottom-0 items-center flex justify-center content-center mx-auto bg-green-700 w-[400px]'}>
                    <button
                        className={' text-white bg-blue-500 font-bold px-4 py-2  rounded-lg hover:bg-blue-700 m-5'}>Checkout
                    </button>
                </div>
                {/* ! Here is our store Icon*/}

            </div>
            <div
                className={'fixed right-7 bottom-4 h-[60px] w-[60px] bg-green-700 flex items-center justify-center rounded-full p-5 '}>
                <button
                    onClick={() => setCartOpen(!cartOpen)}
                    className={'text-4xl'}>
                    <FaCartArrowDown/>
                </button>
            </div>

        </>
    )
}