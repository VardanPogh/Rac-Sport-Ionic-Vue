<template>
    <ion-page>
        <ion-content>
            <div class="background">
                <div class="textAlCenter centerDiv">
                    <ion-col size="12">
                        <ion-img src="/assets/img/checked.svg" class="checkedImage"></ion-img>
                    </ion-col>
                    <ion-col size="12">
                        <p class="passwordUpdateP">Password updated</p>
                    </ion-col>
                    <ion-col size="12">
                        <p class="passwordUpdateSubP">Your password has been updated!</p>
                    </ion-col>
                    <ion-col size="12">
                        <ion-button class="signUpButton passwordUpdateButton" href="/login">Log In</ion-button>
                    </ion-col>
                </div>

            </div>
        </ion-content>
    </ion-page>
</template>

<script>
    import {defineComponent} from 'vue';
    import {IonPage} from "@ionic/vue";

    export default defineComponent({
        components: {
            IonPage
        },
    });

</script>
<style>
    .background {
        background: url('/assets/img/password_update_background.png');
        width: 100%;
        height: 100%;
        background-size: cover;
    }


    ion-button {
        margin-top: 8rem;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        left: calc(50% - 193px / 2);
        width: 193px;
        height: 44px;
    }

    .checkedImage {
        width: 81px;
        height: 81px;
        margin: auto;
    }

    .passwordUpdateP {
        font-size: 16px;
        color: #FFFFFF;
        text-align: center;
        font-weight: bold;
    }
    .passwordUpdateSubP {
        font-size: 16px;
        color: #FFFFFF;
        text-align: center;
        margin-top: 0;
    }
    .centerDiv{
        position: relative;
        top: 27%;
    }
    .passwordUpdateButton{
        position: relative;
        left: 0;
        margin-top: 37px;
    }
</style>