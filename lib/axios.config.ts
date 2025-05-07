import _ from "axios";


export const axios = _.create({
    baseURL: "http://10.5.220.194:8000",
   
});

// Get the token from AsyncStorage

export default axios;