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
            <div id="main-content">
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
                                    <!--                                    <ion-icon name="search-sharp"></ion-icon>-->
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-toolbar>
                </ion-header>
            </div>

            <ion-list lines='none'>
                <div v-for="(item,index) in chat" :key="index" class="mt-20">
                    <div v-if="item.id === selfId" class="fromMe" item-end>
                        <div v-for="(message,key) in item.messages" :key="key">
                            <p>{{message.text}}</p>
                        </div>
                    </div>
                    <div v-else class="d-inline">
                        <div>
                            <ion-avatar slot="start">
                                <img :src='image'>
                            </ion-avatar>
                        </div>
                        <div class="mt-20">
                            <div v-for="(message,key) in item.messages" :key="key" class="fromUser">
                                <p>{{message.text}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
    export default {
        name: "Messages",
        data() {
            return {
                selfId: 2,
                image: 'http://thispersondoesnotexist.com/image',
                chat: [
                    {
                        id: 1,
                        messages: [
                            {
                                time: 151318613518,
                                text: 'Helloo how are youu ?'
                            }
                        ]
                    },
                    {
                        id: 2,
                        messages: [
                            {
                                time: 56481212431,
                                text: 'Hii, good and You? '
                            }
                        ]
                    },
                    {
                        id: 1,
                        messages: [
                            {
                                time: 433423121323,
                                text: 'Fine fine! '
                            },
                            {
                                time: 433423121323,
                                text: 'Do you like a apple? '
                            }
                        ]
                    },
                    {
                        id: 2,
                        messages: [
                            {
                                time: 433423121323,
                                text: 'No goodbye '
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    ion-list {
        background: #F9F9FE;
        border-radius: 21px 21px 0px 0px;
        height: calc(100% - 54px);
        position: relative;
        padding: 5%;

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


    ion-item {
        --background: #F9F9FE;
        box-shadow: none;
        border-radius: 5px;
        margin: 13px;
        color: black;
    }

    .fromUser {
        background: #FFFFFF;
        box-shadow: 0px 0px 6px #3357D321;
        border-radius: 0px 20px 20px 20px;
        padding: 4px 28px;
        margin: 5px 0 0 14px;
        color: black;
    }

    .fromMe {
        background: #939EC4;
        box-shadow: 0px 0px 6px #3357d321;
        border-radius: 20px 0px 20px 20px;
        padding: 4px 28px;
        margin: 5px 9px 0 14px;
        max-width: 246px;
        float: right;
    }

    .d-inline {
        display: inline-flex;
    }

    .mt-20 {
        margin-top: 20px;
    }
</style>
