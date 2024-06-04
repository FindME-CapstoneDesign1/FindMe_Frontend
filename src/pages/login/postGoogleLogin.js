import axios from 'axios';

export const postGoogleLogin = async (token) => {
    try {
        console.log(token);
        const response = await axios.post('http://localhost:8080/api/auth/google', { token });
        return response.data;  // 데이터만 반환
    } catch (error) {
        console.error("Google login failed:", error);
        throw error;
    }
};
