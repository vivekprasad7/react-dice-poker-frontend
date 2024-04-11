import { useState } from "react";
import { ProfileCard } from "../components/profileCard"
import { RollingDice } from "../components/rollingDice"
import { YourTurn } from "../components/yourTurn"
import { useAppContext } from "../contexts/appContext"

import { Box, Modal } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
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
                  <h1>Game of Dice</h1>  
            </div>
            <div className="flex flex-col justify-center items-center gap-2 h-1/3">
                {`${state?.players[state?.activePlayerIndex]}, Ready For Your Turn?` }
                <button onClick={() => setIsModalOpen(true)}>Let's Play</button>
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
            <div className="flex justify-evenly items-center">
                {
                    state?.players.map((player, index) => <ProfileCard key={index} name={player} scoreCard={state?.scores[state?.activePlayerIndex]} points={state?.points[state?.activePlayerIndex]}/> )
                }
             
            </div>
        </div>
    )
}