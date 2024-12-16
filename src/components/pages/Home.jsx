import React from 'react'
import {FoodCard} from "../FoodCard.jsx";


export const Home = () => {
    const catagory = [
        {name: 'All'},
        {name: 'Lunch'},
        {name: 'Breakfast'},
        {name: 'Dinner'},
        {name: 'Snakes'}
    ]
    return (
        <>
            <div className={'max-w-[1200px] md:mx-auto mx-[50px] my-[100px]'}>
                <div>
                    <h3 className={'text-xl font-bold'}>Find the best food</h3>
                </div>
                <div className={'w-full mx-auto'}>
                    <ul className={'flex gap-5 font-bold my-4'}>
                        {catagory.map((catagory) => {
                            return (
                                <button className={'hover:bg-emerald-600 rounded px-2'}
                                        key={catagory.name}>{catagory.name}
                                </button>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <FoodCard/>
                </div>
            </div>

        </>
    )
}