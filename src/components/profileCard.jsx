export const ProfileCard = ({name, scoreCard, points}) => {
    return ( 
        <div className="border border-gray-400 rounded-2xl text-center">
            <div className=" relative ">
                <img src="https://topmate.io/images/homepage/expert-bg1.svg" alt="" srcset="" />
                <span className=" absolute top-[50px] rounded-full m-auto bg-black ">
                <img className="object-cover rounded-full m-auto w-14"src="https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.ap-south-1.amazonaws.com%2F4hEHanHW7mYhzweRzW81Qg.jpg&w=256&q=75" alt="" srcset="" />
                </span>
            </div>
        

            <h3>Jessica Parker {name}</h3>
            <div>
                <h3>Score: 1, 2, 3, 4, 5 {scoreCard}</h3>
            </div>

            <div>
                Points: 3 {points}
            </div>
        </div>
    )
}