import { getImageUrl } from "../utils/getImageUrl";

export const ProfileCard = ({name, scoreCard, points, imageURL}) => {

    return ( 
        <div className="border  shadow-md rounded-2xl text-center p-2 mb-6">

<div className="relative flex justify-center items-center">
    <img src="https://topmate.io/images/homepage/expert-bg1.svg" alt="" />
    <span className="absolute top-[60px]">
        <img className="object-cover rounded-full w-[100px]" src={imageURL} alt="" />
    </span>
</div>

         
        

            <h3 className="mt-10 font-bold">{name}</h3>
            {/* <div>
                <h3>Score: {scoreCard}</h3>
            </div> */}

            <div className="flex justify-center items-center mt-2">
                <div className="border border-gray-400 p-3 m-1">{scoreCard[0]}</div>
                <div className="border border-gray-400 p-3 m-1">{scoreCard[1]}</div>
                <div className="border border-gray-400 p-3 m-1">{scoreCard[2]}</div>
                <div className="border border-gray-400 p-3 m-1">{scoreCard[3]}</div>
                <div className="border border-gray-400 p-3 m-1">{scoreCard[4]}</div>
            </div>

            <div className="mb-4 mt-2">
                {
                    points ?  <p>Points: {points}</p> : ""

                }
            </div>
        </div>
    )
}