<template>
    <div class="page-view">
        
        <iframe :src="pdfsrc"></iframe>

    </div>   
</template>

<script>
import axios from 'axios';

export default {
    data: () => ({
        pdfsrc: null
    }),
    methods: {
        getPDFPath () {
            return axios
            .get('https://drive.google.com/file/d/1cE9RT4pdAOvaI2uFEf4NnLHkKLLr9O5_/view?usp=sharing', {
                responseType: "blob"
            })
            .then(response => {
                console.log("Success", response.data)
                const blob = new Blob([response.data]);
                const objectUrl = URL.createObjectURL(blob);
                this.pdfsrc = objectUrl;
            })
            .catch(err => {
                console.log(err);
            });
        },  
        created() {
            this.getPDFPath();
        }
    }
}
</script>

<style scoped>

</style>