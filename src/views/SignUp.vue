<template>
    <ion-page>
        <ion-content :fullscreen="true" class="signupBackground">
            <ion-grid>
                <ion-row>
                    <ion-col size="12">
                        <ion-img src="/assets/img/logo.png" class="iconImg"></ion-img>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="12">
                        <p class="singUpP">Sign Up</p>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="12" class="textAlCenter">
                        <input v-model="first_name" placeholder="First Name" class="singUpInput">
                    </ion-col>
                    <ion-col size="12" class="textAlCenter">
                        <input v-model="last_name" placeholder="Last Name" class="singUpInput">
                    </ion-col>
                    <ion-col size="12" class="textAlCenter">
                        <input v-model="email" placeholder="Email" class="singUpInput">
                    </ion-col>
                    <ion-col size="12" class="textAlCenter">
                        <input v-model="email_confirmation" placeholder="Confirm Email" class="singUpInput">
                    </ion-col>
                    <ion-col size="12" class="textAlCenter">
                        <input v-model="password" placeholder="Password" class="singUpInput" type="password">
                    </ion-col>
                    <ion-col size="12" class="textAlCenter">
                        <input v-model="password_confirmation" placeholder="Confirm Password" class="singUpInput"
                               type="password">
                        <div class="el-message-box__errormsg">{{errorMsg}}</div>
                    </ion-col>
                    <ion-col size="12" class="textAlCenter">
                            <button class="signUpButton" v-on:click="submitRegister()">Sign Up</button>
                        <div class="singUpLabelDiv">
                            <label class="signUpAlready">Already have an account?</label>
                            <a href="/login" class="signUpA">Log In</a>
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="12" class="textAlCenter">
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script>
    import {IonPage} from '@ionic/vue';
    // import {Router as router} from "vue-router";

    export default {
        name: 'SignUp',
        components: {IonPage},
        methods: {
            submitRegister() {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("X-Requested-With", "XMLHttpRequest");

                const raw = JSON.stringify({
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    email_confirmation: this.email_confirmation,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                });

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };
                fetch(this.api_url + 'auth/signup', requestOptions)
                    .then(response => response.text())
                    .then(result => {
                            const res = JSON.parse(result);
                            if (res.errors) {
                                this.errorMsg = res.message;
                            } else {
                                window.location.href='/login';
                            }
                        }
                    )
                    .catch(error => console.log(error));
            },
        },

        data() {
            return {
                email: '',
                email_confirmation: '',
                first_name: '',
                last_name: '',
                password: '',
                password_confirmation: '',
                errorMsg: ''
            }
        },
    }
</script>

<style>
    .displayBlock {
        display: block;
    }

    .signUpButton {
        background-image: linear-gradient(90deg, #EC2935, #3357D3);
        --background: none;
        --box-shadow: none;
        width: 302px;
        height: 44px;
        padding: 0px;
        border-radius: 22px;
        font-size: 16px;
        margin-top: 8px;
        color: white;
    }

    .singUpInput {
        height: 45px;
        background: white;
        margin: 2% 0;
        box-shadow: none;
        border: 1px solid #CFCFCF;
        border-radius: 8px;
        padding: 12px;
        color: black;
        width: 302px;
    }

    .signUpInputDiv {
        text-align: center;
    }

    .signupBackground {
        --background: #FFFFFF;
    }

    .iconImg {
        width: 164px;
        height: 59px;
        margin: auto;
        margin-top: 30px;
    }

    inputs {
        background: white;
    }

    .singUpP {
        color: #3C55CB;
        font-size: 25px;
        text-align: center;
    }

    .signUpAlready {
        color: #3357D3;
        font-size: 14px;
    }

    .signUpA {
        font-size: 14px;
        color: #EC2935;
        margin-left: 10px;
    }

    .singUpLabelDiv {
        margin-top: 10px;
        padding-bottom: 30px;
    }

    .textAlCenter {
        text-align: center;
    }
</style>
