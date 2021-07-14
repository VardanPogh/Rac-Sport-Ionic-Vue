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
                        <p class="singUpP">Log In</p>
                    </ion-col>
                </ion-row>
                <ion-row class="grayRow">
                    <ion-col size="12" class="textAlCenter">
                        <input v-model="email" placeholder="Email" class="singUpInput">
                    </ion-col>
                    <ion-col size="12" class="textAlCenter">
                        <input v-model="password" placeholder="Password" class="singUpInput" type="password">
                    </ion-col>
                    <ion-col size="12" class="textAlCenter">
                        <ion-row class="forgotRow">
                            <ion-col size="6">
                                <a href="/forgot" class="forgotPass">Forgot Password?</a>
                            </ion-col>
                            <ion-col size="6">
                                <input type="checkbox" id="checkbox" v-model="remember_me">
                                <label for="checkbox" id="checkboxLabel">Remember me</label>
                            </ion-col>
                        </ion-row>
                        <div class="el-message-box__errormsg">{{errorMsg}}</div>
                    </ion-col>
                    <ion-col size="12" class="textAlCenter">
                        <button class="signUpButton" v-on:click="submitLogin()">Login</button>
                        <div class="singUpLabelDiv">
                            <label class="signUpAlready">New user?</label>
                            <a href="/signup" class="signUpA">Create an account</a>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script>
    import {IonPage} from '@ionic/vue';

    export default {
        name: 'Login',
        components: {IonPage},
        methods: {
            submitLogin() {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("X-Requested-With", "XMLHttpRequest");

                const raw = JSON.stringify({
                    email: this.email,
                    password: this.password,
                    remember_me: this.remember_me,
                });

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };
                fetch(this.api_url + 'auth/login', requestOptions)
                    .then(response => response.text())
                    .then(result => {
                            const res = JSON.parse(result);
                            if (res.errors) {
                                this.errorMsg = res.message;
                            } else {
                                sessionStorage.setItem('token',res.access_token);
                                sessionStorage.setItem('user_id',res.user_id);
                                window.location.href = 'dashboard';
                            }
                        }
                    )
                    .catch(error => console.log(error));
            },
        },
        data() {
            return {
                email: '',
                password: '',
                remember_me: false,
                errorMsg: '',
            }
        },
    }
</script>

<style>
    .iconImg {
        width: 164px;
        height: 59px;
        margin: auto;
        margin-top: 30px;
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
</style>
