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
                                    <ion-icon name="search-sharp"></ion-icon>

                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-toolbar>
                </ion-header>
            </div>
            <ion-list lines='none'>
                <ion-item no-lines v-for="(item,index) in listData" :key="index" class="itemClass" href="/chat/messages">
                    <ion-avatar slot="start">
                        <img :src='item.img'>
                    </ion-avatar>
                    <ion-label>
                        <h2>{{item.name}} {{item.surname}}</h2>
                        <p>{{item.lastMessage}}</p>
                    </ion-label>
                    <ion-label slot="end" class="dateLabel">
                        {{item.date}}
                    </ion-label>
                </ion-item>

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
        IonAvatar,
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
        name: "Chat",
        components: {
            IonPage,
            IonList,
            IonItem,
            IonMenu,
            IonMenuButton,
            IonIcon,
            IonAvatar,
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
                listData: [
                    {
                        name: 'Jack',
                        surname: 'Tom',
                        lastMessage: 'Hello, How are you?',
                        date: '4:22 PM',
                        img: 'http://thispersondoesnotexist.com/image'

                    },
                    {
                        name: 'Nick',
                        surname: 'Abdul',
                        lastMessage: 'I feel the good in you, the conflict...',
                        date: '8:20 PM',
                        img: 'http://thispersondoesnotexist.com/image'

                    },
                    {
                        name: 'Leonardo',
                        surname: 'Dicaprio',
                        lastMessage: 'You will remove these restraints and leave...?',
                        date: '10:32 PM',
                        img: 'http://thispersondoesnotexist.com/image'
                    },
                    {
                        name: 'Bob',
                        surname: 'Marley',
                        lastMessage: 'Listen, I`ve had a pretty messed up day...',
                        date: '2:50 AM',
                        img: 'http://thispersondoesnotexist.com/image'

                    },
                    {
                        name: 'Selena',
                        surname: 'Gomez',
                        lastMessage: 'I`ve got enough on my plate as it is, and I...',
                        date: '10:32 PM',
                        img: 'http://thispersondoesnotexist.com/image'
                    },


                ]
            }
        }
    }
</script>

<style scoped>
    .ion-page, ion-list {
        background: #F9F9FE;
    }


    ion-content, ion-toolbar {
        --background: #18265A;
    }

     ion-item {
        --background: #FFFFFF;
        box-shadow: 0px 0px 6px #3357D321;
        border-radius: 5px;
        margin: 13px;
        color: black;
    }

    .dateLabel {
        position: relative;
        text-align: right;
        font-size: 14px;
        margin-top: 0;
        padding-bottom: 11px;
        color: #7D7E81
    }

    ion-menu-button {
        color: white;
    }

    .header-md::after {
        display: none;
    }

    .chatHeader {
        color: white;
        text-align: center;
    }

    ion-icon {
        color: white;
        font-size: 18px;
        float: right;
        margin-right: 13px;
    }

    ion-list {
        border-radius: 35px;
        border: 1px solid black;
        position: relative;
        height: 104%;
    }
</style>
