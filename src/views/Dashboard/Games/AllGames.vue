<template>
    <ion-page>

        <RefHub/>
        <div class="tablesDiv" slot="top">
            <table class="tablesClass w-25">
                <thead>
                <th>
                    Home
                </th>
                </thead>
                <tbody>
                <tr v-for="(data,index) in tableData" :key="index">
                    <td scope="row">
                        <img class="homeImg" :src="data.home.image"><br>
                        <label class="homeText">{{ data.home.name }}</label>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="w-75">
                <ion-slides pager="true" class="sliderClass" fullWidth>
                    <ion-slide>
                        <table class="tablesClass w-75">
                            <thead>
                            <tr>
                                <th>
                                    Away
                                </th>
                                <th>
                                    Ref
                                </th>
                                <th>
                                    Week
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(data,index) in tableData" :key="index">
                                <td scope="row">
                                    <img class="homeImg" :src="data.away.image"><br>
                                    <label class="homeText">{{ data.away.name }}</label>
                                </td>
                                <td scope="row">
                                    {{ data.ref }}
                                </td>
                                <td scope="row">
                                    {{ data.week }}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </ion-slide>
                    <ion-slide>
                        <table class="tablesClass w-75">
                            <thead>
                            <tr>
                                <th>
                                    Away
                                </th>
                                <th>
                                    Ref
                                </th>
                                <th>
                                    Week
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(data,index) in tableData" :key="index">
                                <td scope="row">
                                    <img class="homeImg" :src="data.away.image"><br>
                                    <label class="homeText">{{ data.away.name }}</label>
                                </td>
                                <td scope="row">
                                    {{ data.ref }}
                                </td>
                                <td scope="row">
                                    {{ data.week }}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </ion-slide>
                </ion-slides>
            </div>
        </div>


    </ion-page>
</template>

<script>
    import {IonPage} from "@ionic/vue";
    import RefHub from "../RefHub";

    export default {
        name: "AllGames",
        components: {
            RefHub,
            IonPage,

        },
        data() {
            return {
                tableData: [
                    {
                        home: {
                            image: 'https://cdn.iconscout.com/icon/free/png-512/overwatch-2-569226.png',
                            name: 'Ween or booze'
                        },
                        away: {
                            image: 'https://cdn.iconscout.com/icon/free/png-512/overwatch-2-569226.png',
                            name: 'Ween or booze'
                        },
                        ref: 'Cody Luerra',
                        week: 1,

                    },

                    {
                        home: {
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_gcgh8ahVZrRxZ0KY3fcjp5stI-dNHNV2Vg&usqp=CAU',
                            name: 'BEARS'
                        },
                        away: {
                            image: 'https://cdn.iconscout.com/icon/free/png-512/overwatch-2-569226.png',
                            name: 'Ween or booze'
                        },
                        ref: 'Cody Luerra',
                        week: 1,
                    },

                    {
                        home: {
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55OXw9Ascq6lzFsIN554TMXdtNbfUQvS-eQ&usqp=CAU',
                            name: 'Panda'
                        },
                        away: {
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55OXw9Ascq6lzFsIN554TMXdtNbfUQvS-eQ&usqp=CAU',
                            name: 'Panda'
                        },
                        ref: 'Cody Luerra',
                        week: 1,
                    },

                ]
            }
        }
    }
</script>
<style>
    @import './games.css';
</style>
<style scoped>
    .ion-page {
        justify-content: flex-start;
        background: #F9F9FE;
        color: black;
    }

    ion-content {
        --background: #18265A;
    }

    .homeText {
        text-align: center;
    }

    .homeImg {
        width: 30px;
        height: 30px;
    }

    .tablesDiv {
        display: flex;
        background: #ffffff;
        padding: 0px 10px 30px;
    }

    .w-25 {
        width: 25%;
    }

    .w-75 {
        width: 75%;
    }

    .tablesClass {
        text-align: center;
    }

    .tablesClass th {
        color: #3357D3;
        padding: 2.7rem 0;
    }

    .tablesClass tr {
        height: 75px;
    }


</style>
