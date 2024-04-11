import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const addPlayer = async (playerData) => {
    try {
        const response = await axios.post(`${BASE_URL}/players`,  playerData );
        return response.data.addedPlayer;
    } catch (error) {
        throw new Error("Failed to add player: " + error.message);
    }
};
