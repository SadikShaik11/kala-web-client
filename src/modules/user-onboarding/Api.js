import axios from "axios";

class Onboarding {
    constructor() {
        this.API_URL = process.env.API_URL;
    }



    async login(email, password) {
        try {
            const response = await axios.post(`${this.API_URL}/user/login`, {
                email,
                password,
            });
            return response
        } catch (error) {
            return error
        }
    }

    async signup(email, mobileNumber, password, confirmPassword) {
        try {
            const response = await axios.post(`${this.API_URL}/user/signup`,
                {
                    email,
                    mobileNumber,
                    password,
                    confirmPassword,
                }, {
                headers: {
                    "Content-Type": "application/json",
                },
            }

            );
            return response

        } catch (error) {
            return error
        }
    }
}

export default new Onboarding();
