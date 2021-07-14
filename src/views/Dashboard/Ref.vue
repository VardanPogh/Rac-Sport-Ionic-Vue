<template>
    <ion-page>
        <ion-menu side="start" content-id="main-content">
            <ion-header>
                <ion-toolbar translucent>
                    <ion-title>Menu</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-list>
                    <ion-item>
                        <ion-icon name="mail" slot="start"></ion-icon>
                        <ion-label>Inbox</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon name="paper-plane" slot="start"></ion-icon>
                        <ion-label>Outbox</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon name="heart" slot="start"></ion-icon>
                        <ion-label>Favorites</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon name="archive" slot="start"></ion-icon>
                        <ion-label>Archived</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon name="trash" slot="start"></ion-icon>
                        <ion-label>Trash</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon name="warning" slot="start"></ion-icon>
                        <ion-label>Spam</ion-label>
                    </ion-item>
                </ion-list>
            </ion-content>
        </ion-menu>
        <ion-content>
            <div id="main-content" class="chatList">
                <ion-header>
                    <ion-toolbar>
                        <ion-buttons slot="start">
                            <ion-menu-button></ion-menu-button>
                        </ion-buttons>
                        <ion-grid>
                            <ion-row>
                                <ion-col size="4">
                                </ion-col>
                                <ion-col size="7">
                                    <label class="chatHeader">Chats</label>
                                </ion-col>
                                <ion-col size="1">
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-toolbar>
                </ion-header>
            </div>
            <ion-list>
                <ion-grid>
                    <ion-row>
                        <ion-col size="6" v-for="(ref,index) in refs" :key="index">

                            <div class="refDiv">
                                <a href="/dashboard/hub/my_games">
                                    <img :src='ref.img' class="itemImages">
                                    <p class="titleRef" v-text="ref.title"></p>
                                </a>
                            </div>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-list>
        </ion-content>
    </ion-page>
</template>
<script>
    import {
        IonPage,
        IonList,
        IonItem,
        IonMenu,
        IonMenuButton,
        IonIcon,
        IonGrid,
        IonRow,
        IonCol,
        IonButtons,
        IonContent,
        IonToolbar,
        IonHeader,
        IonLabel,
        IonTitle
    } from '@ionic/vue';

    export default {
        name: "Ref",
        components: {
            IonPage,
            IonList,
            IonItem,
            IonMenu,
            IonMenuButton,
            IonIcon,
            IonGrid,
            IonRow,
            IonCol,
            IonButtons,
            IonContent,
            IonToolbar,
            IonHeader,
            IonLabel,
            IonTitle
        },
        data() {
            return {
                refs: [
                    {
                        id: 1,
                        img: 'assets/img/ref/1.jpg',
                        title: 'VIBES FFT'
                    },
                    {
                        id: 2,
                        img: 'assets/img/ref/2.png',
                        title: 'ALHAMBRA'
                    },
                    {
                        id: 3,
                        img: 'assets/img/ref/3.png',
                        title: 'AIR RAID TEST'
                    },
                    {
                        id: 4,
                        img: 'assets/img/ref/4.png',
                        title: 'ELITE FF'
                    },
                    {
                        id: 5,
                        img: 'assets/img/ref/5.png',
                        title: 'SORRENTO BEACH'
                    },
                    {
                        id: 6,
                        img: 'assets/img/ref/6.png',
                        title: 'ALHAMBRA'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    ion-content, ion-toolbar {
        --background: #18265A;
    }

    ion-list {
        background: #F9F9FE;
        border-radius: 21px 21px 0px 0px;
        height: calc(100% - 54px);
        position: relative;
        padding: 5%;
    }

    .itemImages {
        width: 110px;
        height: 85px;
        border-radius: 5px;
        display: block;
        margin: auto;
        object-fit: contain;
    }

    .titleRef {
        color: #3357D3;
        font-size: 14px;
        text-align: center;
        font-weight: bold;
    }

    .refDiv {
        background: #FFFFFF 0;
        box-shadow: 0px 0px 6px #E4E7EF;
        border-radius: 20px;
        padding: 5px;
    }
</style>