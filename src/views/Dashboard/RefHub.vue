<template>
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
    <ion-header>
        <ion-toolbar>
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
                                    <label class="chatHeader">Ref's Hub</label>
                                </ion-col>
                                <ion-col size="1">
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-toolbar>
                </ion-header>
            </div>
            <div class="linksDiv">
                <button class="tabLink" :class="{ 'activeLink': is_my }"><a
                        href="/dashboard/hub/my_games">My Games</a></button>
                <button class="tabLink" :class="{ 'activeLink': is_all }"><a href="/dashboard/hub/all_games">All
                    Games</a></button>

            </div>

        </ion-toolbar>
    </ion-header>
</template>

<script>
    export default {
        name: 'RefHub',
        data() {
            return {
                url_param: '',
                is_my: false,
                is_all: false,
            }
        },
        created: function () {
            this.url_param = this.$route.path.split('/')[this.$route.path.split('/').length - 1];
            if (this.url_param === 'my_games') {
                this.is_my = true
            } else {
                this.is_all = true
            }
            console.log(this.is_my,);
        }
    }
</script>

<style scoped>
    ion-content, ion-toolbar {
        --background: #18265A;
    }

    .linksDiv {
        background: #F9F9FE;
        display: flex;
        justify-content: space-evenly;
        border-radius: 21px 21px 0 0;
        height: 80px;
    }

    .tabLink {
        background: #F9F9FE;
        width: 35%;
        height: 73px;
    }

    .tabLink a {
        color: #717171;
        font-size: 14px;
    }

    .activeLink a {
        color: #3357D3;
        font-weight: bold;
    }

    .activeLink {
        border-bottom: 2px solid #3357D3;
    }
</style>
