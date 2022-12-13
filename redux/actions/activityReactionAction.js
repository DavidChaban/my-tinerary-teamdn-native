import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { data_url } from "../../.env/date.env";
const getReaction = createAsyncThunk("getReaction", async (data) => {
    try{
    const response = await axios.get(`${data_url}/api/reactions?itineraryId=${data.itineraryId}`);
    console.log(response)
    return {
        success: true,
        response: response.data.data,
      
    };
    } catch(error){ 
        return {
        success: false,
        response: error.response.data.data,
        }
    }
});


const activityReactionAction = {
    getReaction,
    
}

export default activityReactionAction;