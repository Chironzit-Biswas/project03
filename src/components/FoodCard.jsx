import FoodData from "./FoodData.js";


export const FoodCard = () => {


    return (
        <div className={'w-full md:mx-auto h-auto flex justify-center flex-wrap gap-10 bg-white'}>

            {
                FoodData.map((foodData) => {
                    return (
                        <div key={foodData.id}
                             className={'w-[350px]  bg-white-300 p-4 rounded-lg shadow shadow-gray-700'}>
                            <div>
                                <img className={'w-[150px] h-[150px] mx-auto'} src={foodData.img}
                                     alt={foodData.name}/>
                            </div>
                            <div className={'flex justify-between items-center mb-4'}>
                                <h2 className={'font-semibold mt-3'}>{foodData.name}</h2>
                                <h3 className={'text-sm font-bold'}>{foodData.price} TK</h3>
                            </div>

                            <div className={''}>
                                <span className={'text-[13px]'}>{foodData.desc.slice(0, 80)}</span>
                            </div>
                            <div className={'flex justify-between  py-5 mt-3 items-center '}>
                                <p>{foodData.rating}</p>
                                <button
                                    className={' bg-green-500 px-3 rounded-md text-white font-bold '}>Add
                                    to
                                    Cart
                                </button>
                            </div>

                        </div>

                    )
                })
            }
        </div>
    )
}