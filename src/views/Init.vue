<template>
    <ion-page>
    <ion-content>
        <div class="background">
            <ion-button color="danger" shape="round" href="/signup">Sign Up</ion-button>
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
        background: url('/assets/img/login.png');
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

</style>