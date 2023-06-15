import axios from "axios";

const BASE_URL = "http://localhost:5216/api";

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
});

const ApplicantApi = {
    getApplicants: async () => {
        try {
            const response = await instance.get('/Applicant');
            return response.data;
        } catch (error) {
            // 处理错误
            throw error;
        }
    },

    getApplicant: async (applicantId) => {
        try {
            const response = await instance.get(`/Applicant/${applicantId}`);
            return response.data;
        } catch (error) {
            // 处理错误
            throw error;
        }
    },

    createApplicant: async (applicantData) => {
        try {
            const response = await instance.post('/Applicant', applicantData);
            return response.data;
        } catch (error) {
            // 处理错误
            throw error;
        }
    },
};


export default ApplicantApi;
