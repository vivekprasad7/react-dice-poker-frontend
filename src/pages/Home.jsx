import { useState } from "react";
import { ProfileCard } from "../components/profileCard"
import { RollingDice } from "../components/rollingDice"
import { YourTurn } from "../components/yourTurn"
import { useAppContext } from "../contexts/appContext"

import { Box, Modal } from '@mui/material';
import { images } from "../utils/getImageUrl";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius:'10px',
    boxShadow: 24,
    p: 4,
  };

export const Home = () => {
    const {state, dispatch} = useAppContext()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)
    
    return(
        <div className="h-screen ">
            <div className="flex justify-center items-center p-4 mb-4">
                  <h1 className="text-3xl ">game of <span className="font-bold">dice</span></h1>  
            </div>
            <div className="flex flex-col justify-center items-center gap-2 h-1/3">
            <h3><span className="font-bold">{state?.players[state?.activePlayerIndex]}</span>, Ready For Your Turn?</h3>
                <button
                className="p-2 m-2 border-2 border-gray-800 rounded-md transition duration-300 hover:rounded-lg font-medium"
                 onClick={() => setIsModalOpen(true)}>Bring It On</button>
                {/* <YourTurn/> */}


                
                    <Modal
                    open={isModalOpen}
                    onClose={closeModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                        <RollingDice  isClose={closeModal}/> 
                        </Box>
            
                    </Modal>
                

      





            </div>
            <div className="flex flex-col justify-evenly items-center md:flex-row gap-3">
                {
                    state?.players.map((player, index) => <ProfileCard 
                    key={index} 
                    imageURL={images[index]}
                    name={player} 
                    scoreCard={state?.scores[index]} 
                    points={state?.points[index]}/> )
                }
             
            </div>
        </div>
    )
}