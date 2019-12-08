<template>
    <div>
        <h2>Dashboard</h2>
        <p>Name: {{ user.name }}</p>
    </div>
</template>
<script>
import axios from "axios";
import router from "../router";
const apiUrl = process.env.VUE_APP_API_URL || "http://localhost:3000";
export default {
    name: "Login",
    data() {
        return {
            user: {
                name: "Alina"
            }
        };
    },
    methods: {
        getUserData: function() {
            let self = this;
            axios
                .get(`${apiUrl}/api/user`)
                .then(response => {
                    console.log(response);
                    self.$set(this, "user", response.data.user);
                })
                .catch(errors => {
                    console.log(errors);
                    router.push("/");
                });
        }
    },
    mounted() {
        this.getUserData();
    }
};
</script>
