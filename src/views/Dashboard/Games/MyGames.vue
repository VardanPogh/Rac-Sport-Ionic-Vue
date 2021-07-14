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
                        <img class="homeImg" :src="back_url +data.icon"><br>
                        <label class="homeText">{{ data.name }}</label>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="w-75">
                <ion-slides pager="true" class="sliderClass" fullWidth>
                    <ion-slide>
                        <table class="tablesClass ">
                            <thead>
                            <tr>
                                <th>
                                    Away
                                </th>
                                <th>
                                    Field
                                </th>
                                <th>
                                    Field Side
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(data,index) in tableData" :key="index">
                                <td scope="row">
                                    <img class="homeImg" :src="back_url + data.away_icon"><br>
                                    <label class="homeText">{{ data.away_name }}</label>
                                </td>
                                <td scope="row">
                                    {{ data.city }}
                                </td>
                                <td scope="row">
                                    {{ data.field_side }}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </ion-slide>
                    <ion-slide>
                        <table class="tablesClass">
                            <thead>
                            <tr>
                                <th>
                                    Game Title
                                </th>
                                <th>
                                    League
                                </th>
                                <th>
                                    Score
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(data,index) in tableData" :key="index">
                                <td scope="row">
                                    {{ data.game_time }}
                                </td>

                                <td scope="row">
                                    {{ data.title }}
                                </td>
                                <td scope="row" class="scoreClass">
                                    {{data.home_score!==null? data.home_score : ''}} - {{data.away_score!==null? +
                                    data.away_score
                                    : '' }}
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
        name: "MyGames",
        components: {
            RefHub,
            IonPage,
        },
        data() {
            return {
                tableData: []
            }
        },
        mounted() {
            this.getMyGames();
        },

        methods: {
            async getMyGames() {

                var qs = require('qs');
                var data = qs.stringify({
                    'user_id': '2',
                    'type': 'recent'
                });
                var config = {
                    method: 'post',
                    url: this.api_url + 'allMyGames',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: data
                };
                let temp;
                await this.axios(config)
                    .then(function (response) {
                        temp = response.data;
                        // console.log(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                this.tableData = temp

            }
        },

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
        overflow: scroll;
    }

    .w-25 {
        width: 25%;
    }

    .w-75 {
        width: 75%;
    }

    .tablesClass {
        text-align: center;
        width: 100%;
    }

    .tablesClass th {
        color: #3357D3;
        padding: 2.7rem 0;
    }

    .tablesClass tr {
        height: 100px;
    }

    .scoreClass {
        width: 4rem;
    }


</style>
