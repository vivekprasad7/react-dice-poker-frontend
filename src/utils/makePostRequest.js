import axios from 'axios';

export async function makePostRequest(playerData) {
    try {
        const response = await axios.post('your_api_endpoint', playerData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log('Post request successful:', response.data);
        return response.data; 
    } catch (error) {
        console.error('Error making post request:', error.message);
        throw error; 
    }
}
