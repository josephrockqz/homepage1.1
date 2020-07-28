<template>
    <div id="page-view">
        <span style="display: flex; justify-content: space-between;">
            <div style="width: 10px;">

            </div>    
            <div style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: center;">
                <img src="../../public/family.jpeg" style="width: 250px; height: auto; margin: auto; border-radius: 50%; text-align: center;" class="w3-circle" />
                <div style="margin: 25px 0px 25px 40px;">
                    <p style="color: grey; text-align: left; margin: 0px 0px -10px 2px; font-size: 16px;">HELLO! I AM</p>
                    <p style="color: #000000; text-align: left; margin: 0; font-size: 48px;">JOSEPH <span style="color: #00757b;">ROCK</span></p>
                    <p style="color: grey; text-align: left; font-size: 12px; margin: 10px 0px 25px 0px;">Web Developer | Business Intelligence</p>
                    <div style="margin-bottom: 30px; text-align: left;">
                        <b-button @click="pushPathToRouter('contact-me')" style="background-color: #e8ac21; border: 1px solid #e8ac21; margin-right: 15px;">CONTACT ME</b-button>
                        <b-button style="background-color: #e8ac21; border: 1px solid #e8ac21;">
                            <a href="/cv_josephrock.pdf" download="CV_JosephRock.pdf">DOWNLOAD CV</a>
                        </b-button>
                    </div>    
                    <div style="text-align: left;">
                        <font-awesome-icon :icon="['fab', 'linkedin']" style="color: #0073b0; width: 32px; height: 32px; margin-right: 12px; cursor: pointer" />
                        <font-awesome-icon :icon="['fab', 'github']" style="color: #24292e; width: 32px; height: 32px; margin-right: 12px; cursor: pointer" />
                        <font-awesome-icon :icon="['fab', 'facebook']" style="color: #3c5998; width: 32px; height: 32px; cursor: pointer" />
                    </div>
                </div>
            </div>
            <div style="width: 10px;">
            </div>        
        </span>    
    </div>    
</template>

<script>
import store from '../store/index.js';

export default {
    data() {
        return {
            
        }
    },

    methods: {
        pushPathToRouter(pathName) {
            store.dispatch('pushPathToRouter', {
                pathName: pathName
            });
        }
    }
}
</script>

<style scoped>
a {
    color: #FFFFFF;
}

a:hover {
    color: #FFFFFF;
    text-decoration: none;
}
</style>