<template>
    <div>
        <h2>Login</h2>
        <form v-on:submit="login">
            <input type="text" name="email" /><br />
            <input type="password" name="password" /><br />
            <input type="submit" value="Login" />
        </form>
    </div>
</template>

<script>
import router from "../router";
import axios from "axios";
const apiUrl = process.env.VUE_APP_API_URL || "http://localhost:3000";
export default {
    name: "Login",
    methods: {
        login: e => {
            e.preventDefault();
            let email = e.target.elements.email.value;
            let password = e.target.elements.password.value;
            let login = () => {
                let data = {
                    email: email,
                    password: password
                };
                const transport = axios.create({
                    withCredentials: true
                });
                transport
                    .post(`${apiUrl}/api/login`, data)
                    .then(response => {
                        console.log("Logged in");
                        router.push("/event");
                    })
                    .catch(errors => {
                        console.log("Cannot log in");
                    });
            };
            login();
        }
    }
};
</script>
