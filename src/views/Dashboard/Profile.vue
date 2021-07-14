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
                    </ion-toolbar>
                </ion-header>
            </div>

            <ion-grid>
                <ion-row>
                    <ion-col size="4">
                        <ion-avatar>
                            <img src="http://thispersondoesnotexist.com/image">
                            <ion-badge color="primary">
                                <ion-icon name="camera"></ion-icon>
                            </ion-badge>
                        </ion-avatar>
                    </ion-col>
                    <ion-col size="8">
                        <p class="nonVerticalMargin">
                            <ion-text color="danger">
                                <h4>Name Surname</h4>
                            </ion-text>
                        </p>
                        <p class="nonVerticalMargin">
                            <ion-text class="blueColor">
                                <h4>#15</h4>
                            </ion-text>
                        </p>
                        <p class="nonVerticalMargin">
                            <ion-text class="blueColor">
                                <h4>QUARTERBACK</h4>
                            </ion-text>
                        </p>
                    </ion-col>
                </ion-row>
                <ion-row>
                </ion-row>
            </ion-grid>


            <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="My Teames" name="1">
                    <template #title>
                        <div class="titleDiv">My Teames</div>
                    </template>
                    <el-table
                            header-cell-style="color:#3357D3;font-size:12px"
                            :data="tableData"
                            stripe
                            style="width: 100%">
                        <el-table-column prop="logo" label="Logo">
                            <template #default="scope"><img :src="scope.row.logo"/></template>
                        </el-table-column>
                        <el-table-column prop="team" label="Team"></el-table-column>
                        <el-table-column prop="wins" label="Wins"></el-table-column>
                        <el-table-column prop="losses" label="Losses"></el-table-column>
                        <el-table-column prop="league" label="League"></el-table-column>

                    </el-table>
                </el-collapse-item>
                <el-collapse-item title="Upcoming Games" name="2">
                    <template #title>
                        <div class="titleDiv">Upcoming Games</div>
                    </template>
                    <el-table
                            header-cell-style="color:#3357D3;font-size:12px"
                            :data="tableData"
                            stripe
                            style="width: 100%">
                        <el-table-column prop="logo" label="Logo">
                            <template #default="scope"><img :src="scope.row.logo"/></template>
                        </el-table-column>
                        <el-table-column prop="team" label="Team"></el-table-column>
                        <el-table-column prop="wins" label="Wins"></el-table-column>
                        <el-table-column prop="losses" label="Losses"></el-table-column>
                        <el-table-column prop="league" label="League"></el-table-column>

                    </el-table>
                </el-collapse-item>
                <el-collapse-item title="Recent Games" name="3" arrow=false>
                    <template #title>
                        <div class="titleDiv">Recent Games</div>
                    </template>
                    <el-table
                            header-cell-style="color:#3357D3;font-size:12px"
                            :data="tableData"
                            stripe
                            style="width: 100%">
                        <el-table-column prop="logo" label="Logo">
                            <template #default="scope"><img :src="scope.row.logo"/></template>
                        </el-table-column>
                        <el-table-column prop="team" label="Team"></el-table-column>
                        <el-table-column prop="wins" label="Wins"></el-table-column>
                        <el-table-column prop="losses" label="Losses"></el-table-column>
                        <el-table-column prop="league" label="League"></el-table-column>

                    </el-table>
                </el-collapse-item>
            </el-collapse>

        </ion-content>

    </ion-page>
</template>

<script>
    import {
        IonContent,
        IonHeader,
        IonItem,
        IonList,
        IonMenu,
        IonTitle,
        IonToolbar,
        IonPage,
        IonLabel,
        IonAvatar,
        IonGrid,
        IonRow,
        IonText,
        IonCol,
        IonBadge,
        IonButtons,
        IonIcon,
        IonMenuButton
    } from '@ionic/vue';

    export default {
        name: "profile",
        components: {
            IonContent,
            IonHeader,
            IonItem,
            IonList,
            IonMenu,
            IonTitle,
            IonToolbar,
            IonPage,
            IonLabel,
            IonAvatar,
            IonGrid,
            IonRow,
            IonText,
            IonCol,
            IonBadge,
            IonButtons,
            IonIcon,
            IonMenuButton
        },
        data() {
            return {
                activeName: '',
                tableData: [
                    {
                        logo: 'https://img-corp.com/images/logo@2x.png',
                        team: 'Tom',
                        wins: '1',
                        losses: '1',
                        league: '1',
                    },
                    {
                        logo: 'https://img.freepik.com/free-vector/elegant-circle-logo-icon_126523-971.jpg?size=626&ext=jpg&ga=GA1.2.1112793364.1617062400',
                        team: 'Jeck',
                        wins: '31',
                        losses: '2',
                        league: '1',
                    },

                ]
            }
        }
    }


</script>

<style scoped>

    ion-content {
        --background: #f9fafd;
    }

    ion-avatar {
        width: 90px;
        height: 90px;
    }

    ion-toolbar {
        --background: #f9fafd;
    }

    ion-menu-button {
        color: black;
    }

    .header-md::after {
        display: none;
    }


    ion-badge {
        float: right;
        position: relative;
        top: -1.5rem;
        border-radius: 21px;
    }

    .blueColor {
        color: #3357D3;
    }

    .nonVerticalMargin {
        margin-bottom: 0;
        margin-top: 0;
    }

    .nonVerticalMargin h4 {
        margin-bottom: 8px;
        margin-top: 8px;
    }

    .listHeader {
        background: #3357D3;
        color: #FFFFFF;
    }

    .listHeader h4 {
        margin: 10px;
        font-size: 14px;
    }

    .titleDiv {
        background-color: #2360DD;
        min-width: 106%;
        color: #ffffff;
    }

    .el-collapse-item__header {
        direction: rtl;
    }


</style>