<template>
    <div class="page-view">
        <span class="page-view-span">
            <span style="display: flex; justify-content: space-between; align-self: center;">
                <div style="width: 10px;">

                </div>    
                <div style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: center;">
                    <img src="../../public/headshot.jpeg" style="width: 300px; height: auto; margin: auto; padding: 25px; border-radius: 50%; text-align: center;" class="w3-circle" />
                    <div style="margin: auto; padding: 25px;">
                        <p style="color: grey; text-align: left; margin: 0px 0px 0px 2px; font-size: 16px;">HELLO! I AM</p>
                        <p style="color: #000000; text-align: left; margin: 0; font-size: 48px;">JOSEPH <span style="color: #00757b;">ROCK</span></p>
                        <p style="color: grey; text-align: left; font-size: 12px; margin: 10px 0px 25px 0px;">Web Developer | Business Intelligence</p>
                        <div style="margin-bottom: 30px; text-align: left;">
                            <b-button @click="pushPathToRouter('contact-me')" style="background-color: #e8ac21; border: 1px solid #e8ac21; margin-right: 15px;">CONTACT ME</b-button>
                            <b-button style="background-color: #e8ac21; border: 1px solid #e8ac21;">
                                <a href="/cv_josephrock.pdf" download="CV_JosephRock.pdf">DOWNLOAD CV</a>
                            </b-button>
                        </div>    
                        <div style="text-align: left;">
                            <font-awesome-icon @click="openLink('linkedin')" :icon="['fab', 'linkedin']" style="color: #0073b0; width: 32px; height: 32px; margin-right: 12px; cursor: pointer" />
                            <font-awesome-icon @click="openLink('github')" :icon="['fab', 'github']" style="color: #24292e; width: 32px; height: 32px; margin-right: 12px; cursor: pointer" />
                            <font-awesome-icon @click="openLink('facebook')" :icon="['fab', 'facebook']" style="color: #3c5998; width: 32px; height: 32px; cursor: pointer" />
                        </div>
                    </div>
                </div>
                <div style="width: 10px;">
                </div>        
            </span>
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
        openLink(website) {
            if (website === 'github') {
                window.open('https://github.com/josephrockqz');
            } else if (website === 'linkedin') {
                window.open('https://www.linkedin.com/in/joseph-rock-5bb234187/');
            } else if (website === 'facebook') {
                window.open('https://www.facebook.com/joseph.rock.372');
            }
        },
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