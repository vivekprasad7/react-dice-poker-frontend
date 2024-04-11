import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const deleteAllPlayers = async () => {
    try {
        const response = await axios.delete(`${BASE_URL}/players`);
        return response.data.deletedPlayers;
    } catch (error) {
        throw new Error("Failed to delete all players: " + error.message);
    }
};