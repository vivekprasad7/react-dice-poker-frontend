import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const getWinner = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/players/winner`);
        return response.data.winner;
    } catch (error) {
        throw new Error("Failed to retrieve winner: " + error.message);
    }
};