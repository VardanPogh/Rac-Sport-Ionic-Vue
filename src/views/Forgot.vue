<template>
    <ion-page>
        <ion-content :fullscreen="true" class="signupBackground">
            <ion-grid>
                <ion-row>
                    <ion-col size="12">
                        <ion-img src="/assets/img/logo.png" class="iconImg"></ion-img>
                    </ion-col>
                </ion-row>
                <ion-row class="titleRow grayRow">
                    <ion-col size="12">
                        <ion-img src="/assets/img/forgot.svg" class="forgotImg"></ion-img>
                    </ion-col>
                    <ion-col size="12">
                        <p class="forgotP">Forgot password</p>
                    </ion-col>
                    <ion-col size="12">
                        <p class="forgotPSub">Confirm your email and we'll send the instructions</p>
                    </ion-col>
                </ion-row>
                <ion-row class="grayRow">
                    <ion-col size="12" class="textAlCenter">
                        <input v-model="email" placeholder="Email" class="singUpInput">
                    </ion-col>
                    <ion-col size="12" class="textAlCenter">
                        <button class="signUpButton">Next</button>
                    </ion-col>
                </ion-row>

            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script>
    import {IonPage} from '@ionic/vue';

    export default {
        name: 'Forgot',
        components: {IonPage}
    }
</script>

<style>
    .iconImg {
        width: 164px;
        height: 59px;
        margin: auto;
        margin-top: 30px;
    }

    .forgotPSub {
        text-align: center;
        font: normal normal 300 16px/22px Roboto;
        letter-spacing: 0px;
        color: #AAADC1;
        font-size: 16px;
        width: 238px;
        margin: auto;
    }

    .forgotPass, #checkboxLabel {
        color: #3357D3;
    }

    #checkbox {
        background: white;
        height: 15px;
        width: 15px;
        margin-right: 10px;
    }

    #checkboxLabel {
        position: relative;
        top: -1px;
    }

    .titleRow {
        margin-top: 30px;
        padding: 33px;
    }

    .grayRow {
        background: rgba(64, 83, 200, 0.03);
    }

    a {
        text-decoration: none;
    }

    .forgotRow {
        width: 302px;
        margin: auto;
    }
    .forgotImg{
        width: 43px;
        height: 50px;
        margin:auto;
    }
    .forgotP{
        color:#6A6E84;
        text-transform: uppercase;
        text-align: center;
        font-weight: bold;
    }
</style>