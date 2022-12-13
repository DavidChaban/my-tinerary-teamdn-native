import { createAsyncThunk } from "@reduxjs/toolkit";
// import { BASE_URL } from "../../api/url";
import axios from "axios";
const BASE_URL = "https://back-team-dn.onrender.com"
 
const getToken = createAsyncThunk('getToken', async(data)=>{
    let headers = {headers: {'Authorization': `Bearer ${data}`}}
    let res= await axios.post(`${data_url} 
    /api/auth/token`, null, headers)
    // console.log( res.data.response.user);
    return {
        tokenList: res.data.response.user
        
    }
})

const tokenAction={
    getToken
}

export default tokenAction