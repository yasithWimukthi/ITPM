import axios from "axios";

// const HOST = "https://rent-x-api.herokuapp.com";
const HOST = "http://localhost:4000";


//for add an employee
export const addClassScheduleService = async (payload) => {
    try {
        await axios.post(`${HOST}/api/classSchedule`, payload);
        return {
            ok: true,
        };
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
};