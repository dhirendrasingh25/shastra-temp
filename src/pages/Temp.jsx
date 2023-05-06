import React from "react"

import Thumbnail from "../assets/home/carousel3.jpg"
export default function Events() {

    const upcoming_events = [
        {name:"One",
        criteria:"All",
        thumbnai:Thumbnail
        },
        {name:"Two",
        criteria:"All",
        thumbnai:Thumbnail
        },
        {name:"Three",
        criteria:"All",
        thumbnai:Thumbnail
        },
        {name:"Four",
        criteria:"All",
        thumbnai:Thumbnail
        },
        {name:"Five",
        criteria:"All",
        thumbnai:Thumbnail
        },
        {name:"Six",
        criteria:"All",
        thumbnai:Thumbnail
        },
        {name:"Seven",
        criteria:"All",
        thumbnai:Thumbnail
        }
]

const past_events = [
    {name:"One",
    criteria:"All",
    thumbnai:Thumbnail
    },
    {name:"Two",
    criteria:"All",
    thumbnai:Thumbnail
    },
    {name:"Three",
    criteria:"All",
    thumbnai:Thumbnail
    },
    {name:"Four",
    criteria:"All",
    thumbnai:Thumbnail
    },
    {name:"Five",
    criteria:"All",
    thumbnai:Thumbnail
    },
    {name:"Six",
    criteria:"All",
    thumbnai:Thumbnail
    },
    {name:"Seven",
    criteria:"All",
    thumbnai:Thumbnail
    }
]

    return (
        <div className="relative -z-10 min-h-[100%]">
            
            <div className="relative top-[150px] text-center h-[319px] grid items-center justify-center mx-auto">
                <h1 className="font-Ubuntu font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-8">
                    BRUSH YOUR CALIBRE BY <br/> PARTICIPATING IN <br/>UPCOMING EVENTS<br/> FEARURED BY
                </h1>
                <span className="font-Ubuntu font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-yellow-500 mt-1">SHASTRA</span>
                <div className="flex justify-center items-center space-x-4">
                    <button class="bg-[#01098D] font-Ubuntu font-bold text-white py-2 px-8 rounded-full text-lg md:text-xl mt-4 lg:text-2xl">Register Now</button>
                    <button class="border border-black font-Ubuntu text-black py-2 px-8 rounded-full text-lg md:text-xl mt-4 lg:text-2xl">Get Details</button>
                </div>
                </div>

            
            <div className="absolute inset-0 flex items-center justify-center z-0 mx-auto">
                <div className="absolute w-1559 h-460  top-[130px] flex items-center justify-center font-ubuntu font-bold text-black text-[370px] opacity-40">
                    EVENTS
                </div>
            </div>

            <div className="relative top-[340px] left-[100px] font-bold font-Ubuntu object-center">
                <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Upcoming Event!</h1>
                <div className="flex flex-wrap -mx-4 justify-center sm:justify-start gap-1 mt-2">
                    {upcoming_events.map(items => (
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-6  " key={items.name}>
                    <div class="w-full h-auto rounded-lg overflow-hidden shadow-lg relative mt-10 flex flex-col bg-gray-200">
                        <img class="w-full inline-block object-cover object-center p-[10px] rounded-lg" src={items.thumbnai} alt=""/>
                        <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-center">{items.name}</div>
                        <p class="text-gray-700 text-base text-center">{items.criteria}</p>
                        </div>
                    </div>
                    </div>
                    ))}
                </div>   
                </div>


            <div className="relative top-[380px] left-[100px] font-bold font-Ubuntu pb-[50px]">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Past Event!</h1>
                <div className="flex flex-wrap -mx-4 justify-center sm:justify-start gap-4 mt-2">
                    {
                        past_events &&
                        past_events.map(items => (
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-6 " key={items.name}>
                            <div class="w-full h-auto rounded-lg overflow-hidden shadow-lg relative mt-10 flex flex-col bg-gray-200">
                                <img class="w-full inline-block object-cover object-center p-[10px] rounded-lg" src={items.thumbnai} alt=""/>
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2 text-center">{items.name}</div>
                                    <p class="text-gray-700 text-base text-center">
                                    {items.criteria}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}