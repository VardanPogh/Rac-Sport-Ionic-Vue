<template>
    <ion-page>

            <div class="stats_app_child_div">
                <div class="stats-container-2020 m-0 w-100 p-2">
                    <!-- Start Header -->
                    <div class="row col-12 w-100 m-0 p-0 stats-header-2020 align-items-center bg-white border-bottom">
                        <div class="col-6" @click="setOTeam(teams.homeTeam,teams.awayTeam )">
                            <table class="table table-borderless header-table">
                                <tr>
                                    <td class="text-right center-table-td" style="padding-top: 1.2rem !important;">
                                        <p :class="{'active-team': o_team.team_id === teams.homeTeam.team_id}"
                                           class="team-text">
                                            <span class="text-bold text-uppercase"> {{teams.homeTeam.abb}}</span>
                                            <br>
                                            <span class="text-grey">{{teams.homeTeam.wins}}-{{teams.homeTeam.losses}}</span>
                                        </p>
                                    </td>
                                    <td class="text-right center-table-td" style="padding-top: 1.2rem !important;">
                                        <img :src="teams.homeTeam.icon" class="team-img"/>
                                    </td>
                                    <td class="text-right center-table-td team-text">
                                        <h4 style="height: 1.2rem;" class="p-0 m-0"
                                            :class="{'active-team': o_team.team_id === teams.homeTeam.team_id}"><i
                                                v-if="o_team.team_id === teams.homeTeam.team_id"
                                                class="fas fa-caret-left"></i></h4>
                                        <h1 class="p-0 m-0"
                                            :class="{'active-team': o_team.team_id === teams.homeTeam.team_id}">
                                            {{stats.homeScore}}</h1>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="col-6 " @click="setOTeam(teams.awayTeam,teams.homeTeam )">
                            <table class="table table-borderless header-table">
                                <tr>
                                    <td class="text-left center-table-td team-text">
                                        <h4 style="height: 1.2rem;" class="p-0 m-0"
                                            :class="{'active-team': o_team.team_id === teams.awayTeam.team_id}"><i
                                                v-if="o_team.team_id === teams.awayTeam.team_id"
                                                class="fas fa-caret-right"></i>
                                        </h4>
                                        <h1 class="p-0 m-0"
                                            :class="{'active-team': o_team.team_id === teams.awayTeam.team_id}">
                                            {{stats.awayScore}} </h1>
                                    </td>
                                    <td class="text-left center-table-td" style="padding-top: 1.2rem !important;">
                                        <img :src="teams.awayTeam.icon" class="team-img"/>
                                    </td>
                                    <td class="text-left center-table-td" style="padding-top: 1.2rem !important;">
                                        <p :class="{'active-team': o_team.team_id === teams.awayTeam.team_id}"
                                           class="team-text">
                                            <span class="text-bold text-uppercase"> {{teams.awayTeam.abb}} </span>
                                            <br>
                                            <span class="text-grey">{{teams.awayTeam.wins}}-{{teams.awayTeam.losses}}</span>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <!-- Down Game Clock and Play Clock-->
                    <div class="row mx-auto p-0 bg-row clock-down-2020 w-100">
                        <div class="col-4 text-center game-info-2020 border-right">
                            <div @click="stats.down++">{{downPlacement}}</div>
                        </div>
                        <div class="col-4 text-center game-info-2020 border-right">
                            <!--                    <div v-if="nav.showClock" @click="timeout()">{{clock.game_clock}}</div>-->
                            <div v-if="nav.showClock" @click="timeout()">
                                {{stats.half}}<span v-show="stats.half === 1">st</span><span
                                    v-show="stats.half !== 1">nd</span>
                                Half
                            </div>

                            <div v-if="nav.showStart" @click="startGame()">Start</div>
                        </div>
                        <!--                <div class="col-4 text-center game-info-2020">:{{clock.play_clock}}</div>-->
                        <div class="col-4 text-center game-info-2020">{{qb.number}} {{qb.last_name}}</div>

                    </div>
                    <div v-show="nav.showStart" class="row m-auto bg-row qb-run-2020 justify-content-center">
                        <div class="col-6 p-0 pt-2 my-0 stat-box-2020-left text-center"
                             @click="selectPosition('qb')"
                             v-on:click="setOTeam(teams.homeTeam,teams.awayTeam )">
                            <div class="box-stat-icons">
                                <img class='w-50 stats-icons' src="/assets/img/2020_design/stat_icons/qb.svg"
                                     alt="My SVG Icon">
                            </div>
                            <div class="box-stat-text  text-uppercase">{{teams.homeTeam.team_name}}</div>
                            <small>QB: {{home_qb.number}} {{home_qb.first_name}} {{home_qb.last_name}}</small>
                        </div>
                        <div v-show="!nav.showMain" class="col-6 stat-box-2020-right p-0 pt-2 my-0 text-center"
                             @click="selectPosition('qb')"
                             v-on:click="setOTeam(teams.awayTeam,teams.homeTeam )">
                            <div class="box-stat-icons">
                                <img class='w-50 stats-icons' src="/assets/img/2020_design/stat_icons/qb.svg"
                                     alt="My SVG Icon">
                            </div>
                            <div class="box-stat-text  text-uppercase">{{teams.awayTeam.team_name}}</div>
                            <small>QB: {{away_qb.number}} {{away_qb.first_name}} {{away_qb.last_name}}</small>

                        </div>
                    </div>
                    <div v-show="nav.showMain" class="row m-auto bg-row qb-run-2020 justify-content-center">
                        <div class="col-6 p-0 pt-2 my-0 stat-box-2020-left text-center" data-toggle="modal"
                             data-target="#" @click="selectPosition('qb_top')">
                            <div class="box-stat-icons">
                                <img class='w-50 stats-icons' src="/assets/img/2020_design/stat_icons/qb.svg"
                                     alt="My SVG Icon">
                            </div>
                            <p class="box-stat-text">QUARTERBACK</p>
                        </div>
                        <div class="col-6 stat-box-2020-right p-0 pt-2 my-0 text-center" v-show="league_options.run"
                             @click="statClick('run')"
                             data-toggle="modal"
                             data-target="#">
                            <div class="box-stat-icons">
                                <img class='w-50 stats-icons' src="/assets/img/2020_design/stat_icons/run_.svg"
                                     alt="My SVG Icon">
                            </div>
                            <p class="box-stat-text">RUN</p>
                        </div>
                    </div>
                    <div v-show="nav.showMain" class="row m-auto bg-row comp-int-2020 justify-content-center">
                        <div class="col-6 p-0 pt-2 my-0 stat-box-2020-left text-center" @click="statClick('comp')">
                            <!-- data-toggle="modal" data-target="#selectWR"-->
                            <div class="box-stat-icons">
                                <img class='w-50 stats-icons' src="/assets/img/2020_design/stat_icons/comp.svg"
                                     alt="My SVG Icon">
                            </div>
                            <p class="box-stat-text">COMPLETION</p>
                        </div>
                        <div class="col-6 stat-box-2020-right p-0 pt-2 my-0 text-center"
                             data-toggle="modal"
                             data-target="#"
                             @click="statClick('incomp')">
                            <div class="box-stat-icons">
                                <img class='w-50 stats-icons' src="/assets/img/2020_design/stat_icons/incompletion.svg"
                                     alt="My SVG Icon">
                            </div>
                            <p class="box-stat-text">INCOMPLETION</p>
                        </div>
                    </div>
                    <div v-show="nav.showMain" class="row m-auto  bg-row int-sck-2020 justify-content-center">
                        <div class="col-6 p-0 pt-2 my-0 stat-box-2020-left text-center" @click="statClick('int')"
                             data-toggle="modal"
                             data-target="#">
                            <div class="box-stat-icons">
                                <img class='w-50 stats-icons' src="/assets/img/2020_design/stat_icons/int.svg"
                                     alt="My SVG Icon">
                            </div>
                            <p class="box-stat-text">INTERCEPTION</p>
                        </div>
                        <div class="col-6 stat-box-2020-right p-0 pt-2 my-0 text-center" v-show="league_options.sack"
                             @click="statClick('sack')"
                             data-toggle="modal"
                             data-target="#">
                            <div class="box-stat-icons">
                                <img class='w-50 stats-icons' src="/assets/img/2020_design/stat_icons/sack_.svg"
                                     alt="My SVG Icon">
                            </div>
                            <p class="box-stat-text">SACK</p>
                        </div>
                    </div>
                    <div v-show="nav.showMain" v-if="league_options.midfield"
                         class="row m-auto  bg-row int-sck-2020 justify-content-center">
                        <div class="col-12 stat-box-2020-right p-0 pt-2 my-0 text-center" :style="midfieldStyle"
                             v-on:click="midfieldActive = !midfieldActive" @click="midfieldOptionsSet()"
                             data-toggle="modal"
                             data-target="#">
                            <p class="box-stat-text">Midfield</p>
                        </div>
                    </div>
                    <div v-show="nav.showMain" v-if="league_options.redzone"
                         class="row m-auto  bg-row int-sck-2020 justify-content-center">
                        <div class="col-12 stat-box-2020-right p-0 pt-2 my-0 text-center" :style="redzoneStyle"
                             v-on:click="redzoneActive = !redzoneActive" @click="redzoneOptionsSet()"
                             data-toggle="modal"
                             data-target="#">
                            <p class="box-stat-text">Redzone</p>
                        </div>
                    </div>
                    <div v-show="nav.showMain"
                         class="row m-auto  bg-row int-sck-2020 justify-content-center">
                        <div v-if="league_options.kr" class="col-6 stat-box-2020-right p-0 pt-2 my-0 text-center"
                             @click="statClick('kr')"
                             data-toggle="modal"
                             data-target="#">
                            <p class="box-stat-text">KR</p>
                        </div>
                        <div v-if="league_options.pr" class="col-6 stat-box-2020-right p-0 pt-2 my-0 text-center"
                             @click="statClick('pr')"
                             data-toggle="modal"
                             data-target="#">
                            <p class="box-stat-text">PR</p>
                        </div>
                    </div>

                    <!-- Offense Players-->
                    <div v-show="nav.showOPlayers" class="row mx-auto qb-run-2020 number-names w-100">
                        <div class="col-4 mb-2 py-2 text-center bg-white number-names-box"
                             @click="setPlayer(not_listed)">
                            <h2 class="" :style="numberColor">{{not_listed.number}}</h2>
                            <p class="p-0 m-0 mt-2 line-h-8">
                                <small class="m-0 d-block" :style="numberColor">{{not_listed.last_name}}</small>
                                <!--                        <small class="m-0 d-block" :style="numberColor2">{{user.last_name}}</small>-->
                            </p>
                        </div>
                        <div class="col-4 mb-2 py-2 text-center bg-white number-names-box"
                             v-for="(user,index) in o_players"
                             :key="index"
                             @click="setPlayer(user)">
                            <h2 class="" :style="numberColor" v-if="user.number >= 0">{{user.number}}</h2>
                            <h4 class="" :style="numberColor" v-else>Sub</h4>

                            <p class="p-0 m-0 mt-2 line-h-8">
                                <small class="m-0 d-block" :style="numberColor">{{user.first_name}}</small>
                                <small class="m-0 d-block" :style="numberColor">{{user.last_name}}</small>
                            </p>
                        </div>
                    </div>
                    <!-- Defense Players-->
                    <div v-show="nav.showDPlayers" class="row mx-auto qb-run-2020 number-names w-100">
                        <div class="col-4 mb-2 py-2 text-center bg-white number-names-box"
                             @click="setPlayer(not_listed)">
                            <h2 class="" :style="numberColor2">{{not_listed.number}}</h2>
                            <p class="p-0 m-0 mt-2 line-h-8">
                                <small class="m-0 d-block" :style="numberColor2">{{not_listed.last_name}}</small>
                                <!--                        <small class="m-0 d-block" :style="numberColor2">{{user.last_name}}</small>-->
                            </p>
                        </div>
                        <div class="col-4 mb-2 py-2 text-center bg-white number-names-box"
                             v-for="(user,index) in d_players"
                             :key="index"
                             @click="setPlayer(user)">
                            <h2 class="" :style="numberColor2" v-if="user.number >= 0">{{user.number}}</h2>
                            <h4 class="" :style="numberColor2" v-else>Sub</h4>
                            <p class="p-0 m-0 mt-2 line-h-8">
                                <small class="m-0 d-block" :style="numberColor2">{{user.first_name}}</small>
                                <small class="m-0 d-block" :style="numberColor2">{{user.last_name}}</small>
                            </p>
                        </div>
                    </div>
                    <!-- Show Selected Players-->
                    <div v-if="nav.showFinal" class="row mx-auto  qb-run-2020 number-names w-100">
                        <div class="col-4 my-2 text-center border bg-white" @click="selectPosition('qb')">
                            <p class="box-stat-text m-0 p-0">QB</p>
                            <h2 class="m-0 p-0" :style="numberColor">{{qb.number}}</h2>
                            <p class="m-0 p-0" :style="numberColor"> {{qb.last_name}}</p>
                        </div>
                        <div class="col-4 my-2 text-center border bg-white" @click="selectPosition('wr')">
                            <p class="box-stat-text m-0 p-0">WR</p>
                            <h2 class="m-0 p-0" :style="numberColor">{{wr.number}}</h2>
                            <p class="m-0 p-0" :style="numberColor"> {{wr.last_name}}</p>
                        </div>
                        <div class="col-4 my-2 text-center border bg-white" @click="selectPosition('d')">
                            <p class="box-stat-text m-0 p-0">D</p>
                            <p v-show="stats.comp || stats.run || stats.int"><small>Flag Pull</small></p>
                            <h2 class="m-0 p-0" :style="numberColor2">{{d.number}}</h2>
                            <p class="m-0 p-0" :style="numberColor2">{{d.last_name}}</p>
                        </div>
                    </div>
                    <!-- Yards-->
                    <div v-show="nav.showYards" class="row mx-auto qb-run-2020 number-names w-100 ">
                        <div class="row m-0 p-0 mb-3 w-100  h-100">
                            <div class="col-4 my-2 py-2 text-center border bg-white" v-show="!stats.pitch_id"
                                 v-for="(item,index) in yard_range" :key="index">
                                <h4 class="disable-dbl-tap-zoom"
                                    @click="yardsCalc(item)"
                                    aria-label="Text input with radio button">{{item}}
                                </h4>
                            </div>
                            <div class="col-4 my-2 py-2 text-center border bg-white" v-show="stats.pitch_id"
                                 v-for="(item,index) in yard_range_pitch" :key="index">
                                <h4 class="disable-dbl-tap-zoom"
                                    @click="yardsCalc(item)"
                                    aria-label="Text input with radio button">{{item}}
                                </h4>
                            </div>
                        </div>
                        <div v-show="!stats.pitch_id" class="row m-0 p-0 mb-3 w-100 h-100">
                            <h4 class="col-6 my-2 text-center border bg-white">
                                <div class="row m-0 p-0">
                                    <div class="col-6">
                                        <input type="number" class="w-100 bg-success h-100 border-0 pl-4"
                                               v-model.number="stats.yards">
                                    </div>
                                    <div class="col-6 my-2">
                                        <span>YDS</span>
                                    </div>
                                </div>
                            </h4>
                            <div class="col-3 my-2 text-center border bg-white">
                                <h4 class="disable-dbl-tap-zoom text-success my-2"
                                    v-on:click="stats.yards = stats.yards +1"
                                    aria-label="Text input with radio button"
                                >+1
                                </h4>
                            </div>
                            <div class="col-3 my-2 text-center border bg-white">
                                <h4 class="disable-dbl-tap-zoom  text-danger my-2"
                                    v-on:click="stats.yards -= 1"
                                    aria-label="Text input with radio button">-1
                                </h4>
                            </div>
                        </div>
                        <div v-show="stats.pitch_id" class="row m-0 p-0 mb-3 w-100 h-100">
                            <h4 class="col-6 my-2 text-center border bg-white">
                                <div class="row m-0 p-0">
                                    <div class="col-6 ">
                                        <input type="number" class="w-100 h-100 bg-success border-0 pl-4"
                                               v-model.number="stats.pitch_yards">
                                    </div>
                                    <div class="col-6 my-2">
                                        <span>YDS</span>
                                    </div>
                                </div>
                            </h4>
                            <div class="col-3 my-2 text-center border bg-white">
                                <h4 class="disable-dbl-tap-zoom text-success my-2"
                                    v-on:click="stats.pitch_yards = stats.pitch_yards +1"
                                    aria-label="Text input with radio button"
                                >+1
                                </h4>
                            </div>
                            <div class="col-3 my-2 text-center border bg-white">
                                <h4 class="disable-dbl-tap-zoom  text-danger my-2"
                                    v-on:click="stats.pitch_yards -= 1"
                                    aria-label="Text input with radio button">-1
                                </h4>
                            </div>
                        </div>


                    </div>
                    <div v-show="nav.showYards" class="row mx-auto submit number-names w-100">
                        <div class="col-12 my-2 text-center border bg-white ">
                            <p class="box-stat-text my-2" v-on:click="nextFromYards()">NEXT</p>
                        </div>
                    </div>
                    <!-- final stats-->
                    <div v-if="nav.showFinal" class="row mx-auto  play-input-2020 number-names w-100">
                        <div class="col-12 my-2 text-center border bg-white" v-for="(item, key) in final_buttons"
                             :key="key">
                            <p v-on:click="statClick(key)" :style="[ stats[key] === 1 ? statClicked: '']"
                               class="box-stat-text my-2 text-uppercase">{{item}}
                            </p>
                        </div>
                    </div>
                    <div v-if="nav.showFinal" class="row mx-auto  submit number-names w-100">
                        <div class="col-12 my-2 text-center border bg-white ">
                            <button class=" btn form-control my-2 btn-info" v-show="submitButton"
                                    @click="submitButton = false"
                                    v-on:click="addPlay()">SUBMIT
                            </button>
                            <p class=" my-2" v-show="!submitButton">Sending..</p>

                        </div>
                    </div>
                    <!-- end game-->
                    <div v-if="nav.showEnd" class="row mx-auto  play-input-2020 number-names w-100">
                        <!--            add player or switch team -->
                        <button class="btn btn-info form-control text-uppercase" @click="add_players = !add_players">
                            <span v-show="!add_players">Add Players</span>
                            <span v-show="add_players">Finish Adding</span>
                        </button>
                        <div v-show="add_players" class="row m-auto justify-content-between my-3 ">
                            <div class="col">
                                <select class="form-control" v-model="addPlayerToHome">
                                    <option v-for="(player,index) in allPlayersLeague" v-bind:value="player.id"
                                            :key="index">
                                        {{player.first_name}} {{player.last_name}}
                                    </option>
                                </select>

                                <button class="btn btn-sm btn-danger my-1 self-algin-center" type="button"
                                        @click="addPlayerToTeam(addPlayerToHome, teams.homeTeam.team_id, teams.awayTeam.team_id, 'home')">
                                    Add
                                    Player to {{teams.homeTeam.name}}
                                </button>
                            </div>
                            <div class="col">
                                <select class="form-control" v-model="addPlayerToAway">
                                    <option v-for="(player,index) in allPlayersLeague" v-bind:value="player.id"
                                            :key="index">
                                        {{player.first_name}} {{player.last_name}}
                                    </option>
                                </select>
                                <button class="btn btn-sm btn-danger my-1 self-algin-center" type="button"
                                        @click="addPlayerToTeam(addPlayerToAway, teams.awayTeam.team_id,teams.homeTeam.team_id, 'away' )">
                                    Add
                                    Player to {{teams.awayTeam.name}}
                                </button>

                            </div>
                        </div>
                        <div class="col-12 m-0 p-0 my-2 text-uppercase text-center">

                            <button class="btn btn-warning form-control text-uppercase"
                                    @click="edit_scores = !edit_scores">
                                <span v-show="!edit_scores"> edit score</span>
                                <span v-show="edit_scores"> Finish Edit</span>

                            </button>
                        </div>
                        <div class="col-12 row my-2 text-uppercase text-center" v-show="edit_scores">
                            <div class="col text-center">
                                <label>{{teams.homeTeam.name}}</label>
                                <input v-model="stats.homeScore" type="number" class="form-control">
                            </div>
                            <div class="col">
                                <label>{{teams.awayTeam.name}}</label>

                                <input v-model="stats.awayScore" type="number" class="form-control">
                            </div>

                        </div>
                        <div class="col-12 my-2 text-center border bg-white">
                            <p v-on:click="stats.half = 1" :style="[ stats.half === 1 ? statClicked: '']"
                               class="box-stat-text my-2">1st Half
                            </p>
                        </div>
                        <div class="col-12 my-2 text-center border bg-white">
                            <p v-on:click="stats.half = 2" @click="changeHalf()"
                               :style="[ stats.half === 2 ? statClicked: '']"
                               class="box-stat-text my-2">2nd Half
                            </p>
                        </div>
                        <div class="col-12 my-2 text-center border bg-white" v-show="nav.showEndGame">
                            <a :href="'/game/'+game_id" target="_blank">
                                <p class="box-stat-text my-2"> View GAME </p>
                            </a>
                        </div>
                        <div class="col-12 my-2 text-center border bg-white" v-show="nav.showEndGame">
                            <a :href="'/ref_hub'" target="_blank">
                                <p class="box-stat-text my-2"> Ref Hub </p>
                            </a>
                        </div>
                        <div class="col-12 my-2 text-center border bg-white text-uppercase" v-show="nav.showEndGame">
                            <p v-on:click="endGame()" v-show="!finishGameShow" class="box-stat-text my-2">
                                <span>END GAME</span>
                            </p>
                            <p v-show="finishGameShow" class="box-stat-text my-2">
                                <span>ENDing GAME....</span>

                            </p>
                        </div>

                    </div>

                    <!--            Rules-->
                    <div v-if="nav.showRules" class="row mx-auto h-75 overflow-auto play-input-2020 number-names w-100">
                        <div class="col-12">
                            <b-tabs content-class="mt-3" align="center">
                                <b-tab active title="Penalties ">
                                    <div class="accordion" role="tablist">
                                        <div v-if="item.type === 'penalty'">
                                            <b-card no-body class="mb-1"
                                                    v-for="(item, index) in leaguePenalties" :key="index">
                                                <b-card-header header-tag="header" class="p-1" role="tab">
                                                    <b-button block v-b-toggle="'accordion-'+index" variant="info">
                                                        {{item.title}}
                                                    </b-button>
                                                </b-card-header>
                                                <b-collapse :id="'accordion-'+index" accordion="my-accordion"
                                                            role="tabpanel">
                                                    <b-card-body>
                                                        <b-card-text>{{item.details}}</b-card-text>
                                                    </b-card-body>
                                                </b-collapse>
                                            </b-card>
                                        </div>
                                    </div>
                                </b-tab>

                                <b-tab title="Rules">
                                    <div class="accordion" role="tablist">
                                        <div v-if="item.type === 'rule'">
                                            <b-card no-body class="mb-1"
                                                    v-for="(item, index) in leaguePenalties" :key="index">
                                                <b-card-header header-tag="header" class="p-1" role="tab">
                                                    <b-button block v-b-toggle="'accordion-'+index" variant="info">
                                                        {{item.title}}
                                                    </b-button>
                                                </b-card-header>
                                                <b-collapse :id="'accordion-'+index" accordion="my-accordion"
                                                            role="tabpanel">
                                                    <b-card-body>
                                                        <b-card-text>{{item.details}}</b-card-text>
                                                    </b-card-body>
                                                </b-collapse>
                                            </b-card>
                                        </div>
                                    </div>
                                </b-tab>
                            </b-tabs>

                        </div>
                    </div>

                    <!-- last 3 plays-->
                    <div v-if="nav.last3PlaysShow" class="row mx-auto  qb-run-2020 number-names w-100">

                        <div class="row mx-auto  p-auto col-12 mb-1 mt-2 text-left border bg-white"
                             v-for="(item,index)  in lastPlays" :key="index">
                            <div class="col-10 m-0 p-2">
                                <p class="box-stat-text my-2 pull-left">{{item.sentence}}</p>
                            </div>
                            <div class="col-2 m-auto p-0">
                                <button class="btn btn-danger text-center pull-right" type="button"
                                        v-on:click="deletePlay(item.id)"><i class="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </div>
                    <!-- footer-->
                    <div v-show="nav.showFooter" class="row m-auto bg-row pt-2 stats-footer-2020">
                        <div class="col-2 d-flex justify-content-between align-items-center p-0">
                            <p class="info-2020" @click="showRulesPage()"><i class="fas fa-question-circle fa-2x"></i>
                            </p>
                        </div>
                        <div class="col-2 d-flex justify-content-between align-items-center p-0">
                            <p class="info-2020" @click="back()"><i class="fas fa-arrow-alt-circle-left fa-2x"></i></p>
                        </div>
                        <div class="col-4 text-center d-flex justify-content-between align-items-center p-2">
                            <img class="w-100" src="assets/img/rac-logo.jpg" alt="RAC Logo">
                        </div>
                        <div class="col-2 d-flex justify-content-between align-items-center p-0">
                            <p class="info-2020" @click="finishGame()">
                                <i class="fas fa-check fa-2x"></i>
                            </p>
                        </div>
                        <div class="col-2 d-flex justify-content-between align-items-center p-0">
                            <p class="info-2020" @click="showLast3Plays()">
                                <i class="fas fa-history fa-2x"></i>
                            </p>
                        </div>
                    </div>

                    <div v-show="test_data">
                        <div class="row m-0 p-0" v-for="(item, key) in stats" :key="key">
                            <div class="col-6">
                                <div> {{key}}:</div>
                            </div>
                            <div class="col-6">
                                <div> {{item}}</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

    </ion-page>
</template>

<script>
    import {IonPage} from '@ionic/vue';

    export default {

        name: 'StatApp',
        props: {
            game_id: String
        },
        components: {IonPage},

        data() {
            return {
                test_data: false,
                edit_scores: false,
                finishGameShow: false,
                add_players: false,
                not_listed: {
                    user_id: 4,
                    first_name: 'Not Listed',
                    last_name: 'Not Listed',
                    number: 0,
                },
                qb: [],
                wr: [],
                d: [],
                clock: {
                    play_clock: 25,
                    halfTimeLength: 1320,
                    newCount: 25,
                    playClockMin: 1319,
                    game_clock: 1320,
                    timeLeft: 0,
                    playClockTime: '',
                    gameClockTime: '',
                    resumeGameClockTime: '',
                    resumePlayClockTime: '',
                    resume: '',
                    timeOutBox: false,
                    secondHalfBox: false,
                },
                home_qb: [],
                away_qb: [],
                home_players: [],
                home_sub_players: [],
                away_players: [],
                away_sub_players: [],

                allPlayersLeague: [],
                addPlayerToHome: [],
                addPlayerToAway: [],
                teams: {
                    homeTeam: {team_name: 'Home Team'},
                    awayTeam: {team_name: 'Away Team'}
                },
                o_team: [],
                d_team: [],
                o_players: [],
                d_players: [],
                selected_player_type: 'qb',
                updatingStat: '',
                final_buttons: {
                    td: 'TOUCHDOWN',
                    first_down: 'FIRST DOWN',
                    safety: 'SAFETY',
                    sack: 'SACK',
                },
                redzoneActive: false,
                midfieldActive: false,
                league: [],
                leaguePenalties: [],
                league_options: {
                    kr: 0,
                    pr: 0,
                    laterals: 1,
                    run: 1,
                    pass_drop: 1,
                    pass_pd: 1,
                    sack: 1,
                    xps: 2,
                    last_down: 3,
                    midfield: 0,
                    midfield_run: 0,
                    redzone: 0,
                    redzone_run: 0,
                    redzone_laterals: 0,
                    redzone_last_down: 0,
                },
                nav: {
                    showOPlayers: false,
                    showDPlayers: false,
                    showYards: false,
                    showFinal: false,
                    showIncomp: false,
                    showClock: false,
                    showMain: false,
                    player_select: false,
                    showEndHalf: false,
                    showEnd: false,
                    showEndGame: false,
                    showFooter: false,
                    showStart: true,
                    showPitchYards: false,
                    showRules: false,
                },
                yard_range: [
                    5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60
                ],
                yard_range_pitch: [
                    5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60
                ],
                submitButton: true,
                lastPlays: '',
                last_play_added: [],
                stats: {
                    'down': 1,
                    'o_team_id': '',
                    'd_team_id': '',
                    'game_clock': 10,
                    'game_id': this.$props.game_id,
                    'half': 1,
                    'qb_id': '',
                    'wr_id': 4,
                    'd_id': 4,
                    'score': 0,
                    'homeScore': 0,
                    'awayScore': 0,
                    'play_clock': 10,
                    'drive': 0,
                    'yards': 0,
                    'pass_drop': 0,
                    'pass_pd': 0,
                    'pitch_id': 0,
                    'pitch_int': 0,
                    'pitch_yards': 0,
                    'comp': 0,
                    'int': 0,
                    'sack': 0,
                    'incomp': 0,
                    'run': 0,
                    'punt_td': 0,
                    'td': 0,
                    'xp': 0,
                    'kr': 0,
                    'pr': 0,
                    'safety': 0,
                    'first_down': 0,
                    'xp_1': 0,
                    'xp_2': 0
                }
            }
        },
        created() {

            this.axios.get('/getSetupForStatsApp/' + this.$props.game_id).then(response => {
                let {data} = response;
                // console.log(data);
                this.teams = data.teams;
                this.homeTeamColor = data.teams.homeTeam.team_color;
                this.awayTeamColor = data.teams.awayTeam.team_color;
                // console.log(data.home_players);
                this.home_players = data.home_players;
                this.home_sub_players = data.home_sub_players;

                this.away_players = data.away_players;
                this.away_sub_players = data.away_sub_players;

                this.allPlayersLeague = data.allPlayersLeague;
                this.league_options = data.league_options
                this.league = data.league
                this.leaguePenalties = data.leaguePenalties

            });
            this.getLastThreePlays();
        },
        methods: {
            addOrMinusScore(value, opp, home) {
                if (home) {
                    if (this.o_team.team_id === this.teams.homeTeam.team_id) {
                        this.stats.homeScore = this.stats.homeScore + (value * opp);
                    } else {
                        this.stats.awayScore = this.stats.awayScore + (value * opp);
                    }
                } else {
                    if (this.o_team.team_id === this.teams.homeTeam.team_id) {
                        this.stats.awayScore = this.stats.awayScore + (value * opp);
                    } else {
                        this.stats.homeScore = this.stats.homeScore + (value * opp);
                    }
                }

            },

            clearFinalStatsScore(value) {
                if (this.stats.int || this.stats.pitch_int || this.stats.kr || this.stats.pr) {

                    if (this.stats.int && this.stats.pitch_int) {
                        this.addOrMinusScore(value, -1, true)
                    } else {
                        // if (this.o_team.team_id === this.teams.homeTeam.team_id) {
                        //     this.stats.awayScore = this.stats.awayScore - value;
                        // } else {
                        //     this.stats.homeScore = this.stats.homeScore - value;
                        // }
                        this.addOrMinusScore(value, -1, false)

                    }
                    // if (this.o_team.team_id === this.teams.homeTeam.team_id) {
                    //     this.stats.awayScore = this.stats.awayScore - value;
                    // } else {
                    //     this.stats.homeScore = this.stats.homeScore - value;
                    // }
                } else {
                    // if (this.o_team.team_id === this.teams.homeTeam.team_id) {
                    //     this.stats.homeScore = this.stats.homeScore - value;
                    // } else {
                    //     this.stats.awayScore = this.stats.awayScore - value;
                    // }
                    this.addOrMinusScore(value, -1, true)


                }
            },
            addFinalStatsScore(value) {
                if (this.stats.int || this.stats.pitch_int || this.stats.kr || this.stats.pr) {

                    if (this.stats.int && this.stats.pitch_int) {
                        // if (this.o_team.team_id === this.teams.homeTeam.team_id) {
                        //     this.stats.homeScore = value + this.stats.homeScore;
                        // } else {
                        //     this.stats.awayScore = value + this.stats.awayScore;
                        // }
                        this.addOrMinusScore(value, 1, true)

                    } else {
                        // if (this.o_team.team_id === this.teams.homeTeam.team_id) {
                        //     this.stats.awayScore = value + this.stats.awayScore;
                        // } else {
                        //     this.stats.homeScore = value + this.stats.homeScore;
                        // }
                        this.addOrMinusScore(value, 1, false)

                    }
                } else {
                    // if (this.o_team.team_id === this.teams.homeTeam.team_id) {
                    //     this.stats.homeScore = value + this.stats.homeScore;
                    // } else {
                    //     this.stats.awayScore = value + this.stats.awayScore;
                    // }
                    this.addOrMinusScore(value, 1, true)
                }
            },
            clearFinalStats() {
                let i;
                this.clearFinalStatsScore(this.stats.score)
                let stats = Object.keys(this.final_buttons);
                for (i = 0; i < stats.length; i++) {
                    this.stats[stats[i]] = 0;
                }
            },
            clearStats() {
                this.stats.score = 0;
                this.stats.yards = 0;
                this.stats.pass_drop = 0;
                this.stats.pass_pd = 0;
                this.stats.pitch_id = 0;
                this.stats.pitch_int = 0;
                this.stats.pitch_yards = 0;
                this.stats.comp = 0;
                this.stats.int = 0;
                this.stats.sack = 0;
                this.stats.incomp = 0;
                this.stats.run = 0;
                this.stats.punt_td = 0;
                this.stats.td = 0;
                this.stats.xp = 0;
                this.stats.safety = 0;
                this.stats.kr = 0;
                this.stats.pr = 0;

                this.stats.first_down = 0;
                this.stats.xp_1 = 0;
                this.stats.xp_2 = 0;
            },
            /**
             * =================================
             *
             * Send Play Over Via Post
             *
             * =================================
             */
            addPlay() {

                if (this.last_play_added) {
                    if (this.last_play_added.o_team_id !== this.stats.o_team_id) {
                        this.stats.drive = this.last_play_added.drive + 1;
                        this.stats.down = 1;
                    }
                }
                this.axios.post('/addPlay', this.stats).then(response => {
                    let data = response.data;
                    // this.stats.homeScore = data.play.homeScore;
                    // this.stats.awayScore = data.play.awayScore;
                    // if (this.stats.int === 1) {
                    //     this.turnover()
                    // }
                    this.stats.down = this.changeDown();

                    this.clearStats();
                    this.clear_page()
                    this.nav.showMain = true;
                    this.nav.showClock = true;
                    this.nav.showFooter = true;
                    this.updatingStat = false;
                    this.resetPlayers();
                    this.submitButton = true;
                    this.getLastThreePlays();
                    this.lastPlayMessage(data);
                }).catch(error => {
                    console.log(error)
                    this.message('Something went wrong, try again', 'ERROR')
                    this.clearStats();
                    this.clear_page();
                    this.resetPlayers();
                    this.submitButton = true;
                    this.nav.showMain = true;
                    this.nav.showClock = true;
                    this.nav.showFooter = true;
                    this.updatingStat = false;

                })
            },
            /**
             * =================================
             *
             * Messages
             *
             * =================================
             */
            lastPlayMessage(data) {
                let sentence = '';
                let play = data.play;
                let td = '';
                let first_down = '';
                let xp = '';
                let safety = '';
                let drop = '';
                let pd = '';
                if (play.td === 1) {
                    td = 'for a TD '
                }
                if (play.first_down === 1) {
                    first_down = 'for a First '
                }
                if (play.xp > 0) {
                    td = 'for a ' + play.xp + ' XP'
                }
                if (play.safety === 1) {
                    safety = 'for a safety'
                }
                if (play.pass_drop === 1) {
                    drop = 'dropped by ' + data.wr
                }
                if (play.pass_pd === 1) {
                    pd = 'pass deflected by  ' + data.d
                }
                if (play.comp === 1) {
                    sentence = data.qb + ' Completed Pass to ' + data.wr + ' for ' + play.yards + ' yards  ' + td + xp + first_down;
                }
                if (play.int === 1) {
                    sentence = data.qb + ' Intercepted by ' + data.d + ' for ' + play.yards + ' yards ' + td + xp + first_down;
                }
                if (play.sack === 1) {
                    sentence = data.qb + ' Sacked by ' + data.d + " " + safety;
                }
                if (play.kr === 1) {
                    sentence = ' Kickoff return by ' + data.wr + ' for ' + play.yards + ' yards  ' + td + xp + first_down;
                }
                if (play.pr === 1) {
                    sentence = ' Punt return by ' + data.wr + ' for ' + play.yards + ' yards  ' + td + xp + first_down;
                }
                if (play.incomp === 1) {
                    sentence = data.qb + ' threw an Incomplete Pass  ' + pd + drop;
                }
                this.message(sentence, 'Play Added');
            },
            message(message, title) {
                // console.log('we made  it  here ');
                this.$toastr.success(message, title, {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": false,
                    "positionClass": "toast-bottom-center",
                    "preventDuplicates": false,
                    "onclick": null,
                    // "showDuration": "2000",
                    // "hideDuration": "1000",
                    "timeOut": "2000",
                    // "extendedTimeOut": "100",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                });
            },
            /**
             * =================================
             *
             * SET and Select Players
             *
             * =================================
             */
            setOTeam(o_team, d_team) {
                this.o_team = o_team;
                this.d_team = d_team;
                this.stats.o_team_id = o_team.team_id
                this.stats.d_team_id = d_team.team_id

                // console.log(o_team);
                this.setOPlayers();
            },
            setOPlayers() {
                if (this.o_team.team_id === this.teams.homeTeam.team_id) {


                    this.o_players = this.home_players.concat(this.home_sub_players);

                    this.o_players.sort(function (a, b) {
                        return a.number - b.number;
                    });

                    this.d_players = this.away_players.concat(this.away_sub_players);
                    this.d_players.sort(function (a, b) {
                        return a.number - b.number;
                    });
                    this.qb = this.home_qb
                } else {
                    this.o_players = this.away_players.concat(this.away_sub_players);
                    this.o_players.sort(function (a, b) {
                        return a.number - b.number;
                    });
                    this.d_players = this.home_players.concat(this.home_sub_players);
                    this.d_players.sort(function (a, b) {
                        return a.number - b.number;
                    });
                    this.qb = this.away_qb
                }
                this.resetPlayers();
            },
            selectPosition(position) {
                if (position === 'd' || position === 'pitch_d') {
                    this.nav.showOPlayers = false;
                    this.nav.showDPlayers = true;
                }
                if (position === 'wr' || position === 'qb' || position === 'pitch_wr') {
                    this.nav.showOPlayers = true;
                    this.nav.showDPlayers = false;
                }
                if (position === 'qb_top') {
                    this.nav.showOPlayers = true;
                    this.nav.showDPlayers = false;
                    this.nav.showMain = false;
                    this.updatingStat = 'qb_top';
                }
                this.selected_player_type = position;
            },
            setPlayer(user) {
                if (this.selected_player_type === 'qb' || this.selected_player_type === 'qb_top') {
                    this.qb = user;
                    if (this.teams.homeTeam.team_id === this.o_team.team_id) {
                        this.home_qb = user
                    } else {
                        this.away_qb = user
                    }
                    this.stats.qb_id = user.user_id;
                }
                if (this.selected_player_type === 'wr') {
                    this.wr = user;
                    this.stats.wr_id = user.user_id;
                }
                if (this.selected_player_type === 'd') {
                    this.d = user;
                    this.stats.d_id = user.user_id;
                }
                if (this.selected_player_type === 'pitch_d') {
                    this.d = user;
                    this.stats.pitch_id = user.user_id;
                }
                if (this.selected_player_type === 'pitch_wr') {
                    this.d = user;
                    this.stats.pitch_id = user.user_id;
                }
                this.nav.showOPlayers = false;
                this.nav.showDPlayers = false;
                this.checkStats();
            },
            resetPlayers() {
                if (this.teams.homeTeam.team_id === this.o_team.team_id) {
                    this.stats.qb_id = this.home_qb.user_id
                } else {
                    this.stats.qb_id = this.away_qb.user_id
                }
                this.wr = '';
                this.stats.wr_id = 4;
                this.d = '';
                this.stats.d_id = 4;
            },
            addPlayerToTeam(playerId, teamId, otherTeamId) {
                let data = {
                    'playerId': playerId,
                    'teamId': teamId,
                    'otherTeamId': otherTeamId
                };
                // console.log(data)
                this.axios.post('/addPlayerToTeamPickUp', data).then(response => {
                    let {data} = response;

                    if (data.status === 'success') {
                        this.$toastr.success(data.message);
                        let data2 = {
                            home_id: this.teams.homeTeam.team_id,
                            away_id: this.teams.awayTeam.team_id,

                        };
                        this.axios.post('/getHomeAwayPlayers', data2).then(response => {
                            let data3 = response.data;
                            // console.log(data3);
                            this.home_players = data3.home_players;
                            this.away_players = data3.away_players;
                        });
                        this.addPlayerToHome = null;
                        this.addPlayerToAway = null;
                    } else {
                        this.$toastr.error(data.message);
                        this.addPlayerToAway = null;
                        this.addPlayerToHome = null;
                    }

                })

            },
            /**
             * =================================
             *
             * down and possession
             *
             * =================================
             */
            changeDown() {

                if (this.stats.int === 1 || this.stats.pitch_int === 1 || this.stats.pr === 1 || this.stats.down === this.league_options.last_down || this.stats.down === 0 || this.stats.xp_1 === 1 || this.stats.xp_2 === 1) {
                    if (this.stats.td === 1 && this.stats.comp === 1 && this.stats.pitch_int !== 1) {
                        return 0;
                    }
                    if (this.stats.td === 1 && this.stats.run === 1 && this.stats.pitch_int !== 1) {
                        return 0;
                    }
                    if (this.stats.first_down === 1) {
                        return 1;
                    }
                    // console.log(this.stats.pitch_int);
                    // console.log('turnover');

                    this.turnover();
                    if (this.stats.td === 1) {
                        return 0;
                    }
                    return 1
                } else {
                    if (this.stats.td === 1) {
                        return 0;
                    }
                    if (this.stats.first_down === 1 || this.stats.kr === 1 || this.stats.safety === 1) {
                        return 1;
                    }
                    return this.stats.down + 1;
                }
            },
            turnover() {
                let o_team = this.d_team;
                let d_team = this.o_team;
                this.o_team = o_team;
                this.d_team = d_team;
                this.stats.o_team_id = o_team.team_id;
                this.stats.d_team_id = d_team.team_id;
                this.stats.drive = this.stats.drive + 1;
                this.setOPlayers();
            },
            changeHalf() {
                this.stats.down = 1;
                this.stats.drive = this.last_play_added.drive + 1;
            },
            midfieldOptionsSet() {
                if (this.midfieldActive) {
                    this.league_options.run = this.league_options.midfield_run;
                } else {
                    let data = {
                        league_id: this.league_options.league_id
                    };
                    this.axios.post('/getLeaguesOptions', data).then(response => {
                        // this.html =  response.data.rules;
                        // console.log(response.data);
                        this.league_options = response.data;
                    });
                }
            },
            redzoneOptionsSet() {

                if (this.redzoneActive) {
                    this.league_options.last_down = this.league_options.redzone_last_down;
                    this.league_options.run = this.league_options.redzone_run;
                    this.league_options.laterals = this.league_options.redzone_laterals;
                } else {
                    let data = {
                        league_id: this.league_options.league_id
                    };
                    this.axios.post('/getLeaguesOptions', data).then(response => {
                        // this.html =  response.data.rules;
                        // console.log(response.data);
                        this.league_options = response.data;
                    });
                }

            },
            /**
             * =================================
             *
             * Clocks and Timers
             *
             * =================================
             */
            startGame() {
                // let currentDate = new Date();
                // let now = this.$moment(currentDate).format('YYYY-MM-DD HH:mm:ss');
                // var now = currentDate;
                // console.log(now);
                // let data = {
                //     'start': now,
                //     'game_id': this.$props.game_id
                // };
                // axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$store.state.token;
                // axios.post('/api/startGame', data);
                // this.createStatArea();
                this.nav.showMain = 1;
                this.nav.showStart = false;
                this.clock.game_clock = this.convertSeconds(this.clock.game_clock);
                this.nav.showFooter = 1;
                this.nav.showClock = true;
                this.incrementCounter();
            },
            endGame() {
                this.finishGameShow = true;
                this.axios.get('/endGameByGameId/' + this.$props.game_id).then(response => {
                    let {data} = response;
                    this.$toastr.success(data.message);
                    this.finishGameShow = false;
                })
            },
            addZero: function (time) {
                if (time < 10) {
                    return '0' + time;
                } else {
                    return time;
                }
            },
            incrementCounter: function () {
                this.clock.playClockTime = setInterval(this.startTimer, 1000);
                this.clock.gameClockTime = setInterval(this.startMinTimer, 1000);
                setInterval(this.startTimerSec, 1000);
            },
            convertSeconds: function (s) {
                var min = Math.floor(s / 60);
                var sec = s % 60;
                return min + ':' + this.addZero(sec);
            },
            reset: function () {
                this.clock.play_clock = 25;
            },
            resumeCounter: function () {
                this.clock.resumePlayClockTime = setInterval(this.startTimer, 1000);
                this.clock.resumeGameClockTime = setInterval(this.startMinTimer, 1000);
            },
            timeout: function () {
                clearInterval(this.clock.playClockTime);
                clearInterval(this.clock.gameClockTime);
                clearInterval(this.clock.resumePlayClockTime);
                clearInterval(this.clock.resumeGameClockTime);
                this.clock.timeOutBox = confirm('inTimout');
                if (this.clock.timeOutBox) {
                    this.resumeCounter();
                }
                this.clock.play_clock = 25;
            },
            startTimerSec: function () {
                if (this.clock.timeLeft >= 0) {
                    this.clock.timeLeft++;
                }
            },
            startTimer: function () {
                if (this.clock.play_clock > 0) {
                    this.clock.play_clock--;
                }
            },
            startMinTimer: function () {
                if (this.clock.timeLeft >= 1320) {
                    this.startSecondHalf()
                } else {
                    this.clock.game_clock = this.convertSeconds(this.clock.playClockMin - this.clock.timeLeft);
                }
            },
            startSecondHalf: function () {
                // this.secondHalfBox = confirm('Half Time');
                // if (this.secondHalfBox) {
                this.clock.playClockMin = 1320;
                this.clock.game_clock = 1320;
                this.clock.timeLeft = 0;
                this.clock.play_clock = 25;
                // }
            },
            /**
             * ======================================
             *
             * Stats Section
             *
             * ======================================
             */
            yardsCalc(yards) {
                if (this.stats.pitch_id) {
                    this.stats.pitch_yards = yards;
                } else {
                    this.stats.yards = yards;
                }
            },
            checkStats() {
                if (this.updatingStat === 'comp' || this.updatingStat === 'int' || this.updatingStat === 'kr' || this.updatingStat === 'pr') {
                    this.nav.showYards = true;
                }
                if (this.updatingStat === 'pass_pd' || this.updatingStat === 'pass_drop') {
                    this.nav.incomp = true;
                    this.nav.showFinal = true;
                }
                if (this.updatingStat === 'sack') {
                    this.nav.showFinal = true;
                }
                if (this.updatingStat === 'pitch_outcome' || this.updatingStat === 'pitch_outcome') {
                    this.nav.showYards = true;
                    this.nav.showFinal = false;
                }
                if (this.updatingStat === 'qb_top') {
                    this.nav.showMain = true;
                    this.nav.showOPlayers = false;
                }
                this.updatingStat = false;
            },
            statClick(type) {
                this.clear_page();
                this.nav.showClock = true;
                this.nav.showFooter = true;
                if (type === 'comp') {
                    this.selected_player_type = 'wr';
                    this.updatingStat = 'comp';
                    this.selectPosition('wr');
                    this.stats.comp = 1;
                    if (this.stats.down === 0) {
                        this.final_buttons = {
                            xp_1: 'extra point 1',
                            xp_2: 'extra point 2',
                            pitch: 'lateral'
                        }
                    } else {
                        this.final_buttons = {
                            td: 'TOUCHDOWN',
                            first_down: 'FIRST DOWN',
                            pitch: 'lateral'
                        }
                    }
                }
                if (type === 'run') {
                    this.selected_player_type = 'wr';
                    this.updatingStat = 'comp';
                    this.selectPosition('wr');
                    this.stats.run = 1;
                    if (this.stats.down === 0) {
                        this.final_buttons = {
                            xp_1: 'extra point 1',
                            xp_2: 'extra point 2',
                            pitch: 'lateral'
                        }
                    } else {
                        this.final_buttons = {
                            td: 'TOUCHDOWN',
                            first_down: 'FIRST DOWN',
                            pitch: 'lateral'
                        }
                    }

                }
                const Vue = window.vue;

                if (type === 'incomp') {
                    this.stats.incomp = 1;
                    this.nav.showFinal = true;
                    this.final_buttons = {};
                    if (this.league_options.pass_drop) {
                        Vue.set(this.final_buttons, 'pass_drop', 'drop')

                    }
                    if (this.league_options.pass_pd) {
                        Vue.set(this.final_buttons, 'pass_pd', 'pass deflection')
                    }

                }
                if (type === 'kr') {
                    this.selected_player_type = 'd';
                    this.updatingStat = 'kr';
                    this.selectPosition('wr');
                    this.stats.kr = 1;
                    this.final_buttons = {
                        td: 'TOUCHDOWN',
                        pitch: 'lateral'
                    }
                }
                if (type === 'pr') {
                    this.selected_player_type = 'd';
                    this.updatingStat = 'pr';
                    this.selectPosition('d');
                    this.stats.pr = 1;
                    this.final_buttons = {
                        td: 'TOUCHDOWN',
                        pitch: 'lateral'
                    }
                }

                if (type === 'int') {
                    this.selected_player_type = 'd';
                    this.updatingStat = 'int';
                    this.selectPosition('d');
                    this.stats.int = 1;
                    if (this.stats.down === 0) {
                        this.final_buttons = {
                            xp_1: 'extra point 1',
                            xp_2: 'extra point 2',
                            pitch: 'lateral'
                        }
                    } else {
                        this.final_buttons = {
                            td: 'TOUCHDOWN',
                            pitch: 'lateral'
                        }
                    }
                }
                if (type === 'sack') {
                    this.selected_player_type = 'd'
                    this.updatingStat = 'sack'
                    this.selectPosition('d');
                    this.stats.sack = 1;
                    this.final_buttons = {
                        safety: 'safety',
                    }
                }
                if (type === 'pass_pd') {
                    if (this.stats.pass_pd === 1) {
                        this.stats.pass_pd = 0;
                        this.nav.showFinal = true;
                    } else {
                        this.selected_player_type = 'd';
                        this.updatingStat = 'pass_pd';
                        this.selectPosition('d');
                        this.stats.pass_pd = 1;
                    }
                }
                if (type === 'pass_drop') {
                    if (this.stats.pass_drop === 1) {
                        this.stats.pass_drop = 0;
                        this.nav.showFinal = true;
                    } else {
                        this.selected_player_type = 'wr';
                        this.updatingStat = 'pass_drop';
                        this.selectPosition('wr');
                        this.stats.pass_drop = 1;
                    }
                }
                if (type === 'pitch') {
                    this.updatingStat = 'pitch';
                    this.final_buttons = {
                        pitch_int: 'pitch int',
                        pitch_success: 'pitch success',
                    };
                    this.nav.showPitchYards = true;
                    this.nav.showFinal = true;
                }
                if (type === 'pitch_int') {
                    this.stats.pitch_int = 1;
                    if (this.stats.int === 0) {
                        this.selected_player_type = 'd';
                        this.updatingStat = 'pitch_outcome';
                        this.selectPosition('pitch_d');
                    } else {
                        this.selected_player_type = 'wr';
                        this.updatingStat = 'pitch_outcome';
                        this.selectPosition('pitch_wr');
                    }
                    if (this.stats.down === 0) {
                        this.final_buttons = {
                            xp_1: 'extra point 1',
                            xp_2: 'extra point 2',
                        }
                    } else {
                        this.final_buttons = {
                            td: 'TOUCHDOWN',
                        }
                    }
                    this.nav.showFinal = false;
                }
                if (type === 'pitch_success') {
                    if (this.stats.int === 1) {
                        this.selected_player_type = 'd';
                        this.updatingStat = 'pitch_outcome';
                        this.selectPosition('pitch_d');
                    } else {
                        this.selected_player_type = 'wr';
                        this.updatingStat = 'pitch_outcome';
                        this.selectPosition('pitch_wr');
                    }
                    this.final_buttons = {
                        td: 'TOUCHDOWN',
                        first_down: 'FIRST DOWN',
                    };
                    this.nav.showPitchYards = true;
                    this.nav.showFinal = false;
                }
                if (type === 'td') {
                    this.clearFinalStats('td')
                    // this.clearFinalStatsScore(6)
                    this.addFinalStatsScore(6)

                    this.stats.td = 1;
                    this.stats.score = 6;
                    this.nav.showFinal = true;
                }
                if (type === 'first_down') {
                    this.clearFinalStats('first_down')
                    this.stats.first_down = 1;
                    this.nav.showFinal = true;
                    this.stats.score = 0;
                }
                if (type === 'safety') {
                    this.clearFinalStats('safety')
                    this.stats.safety = 1;
                    this.nav.showFinal = true;
                }
                if (type === 'xp_1') {
                    this.clearFinalStats('xp_1')

                    this.addFinalStatsScore(1)
                    this.stats.xp = 1;
                    this.stats.xp_1 = 1;
                    this.stats.score = 1;
                    this.nav.showFinal = true;
                }
                if (type === 'xp_2') {
                    this.clearFinalStats('xp_2')
                    this.addFinalStatsScore(2)

                    this.stats.xp = 2;
                    this.stats.xp_2 = 1;
                    this.stats.score = 2;
                    this.nav.showFinal = true;
                }
            },
            nextFromYards() {
                this.nav.showYards = false;
                this.nav.showFinal = true;
            },
            /**
             * =================================
             *
             * Nav Section
             *
             * =================================
             */
            clear_page() {
                this.nav = {
                    showOPlayers: false,
                    showDPlayers: false,
                    showYards: false,
                    showFinal: false,
                    showIncomp: false,
                    showClock: false,
                    showMain: false,
                    player_select: false,
                    showEndHalf: false,
                    showEnd: false,
                    showEndGame: false,
                    showRules: false,
                    showFooter: false,
                    showStart: false,
                }
            },
            back() {
                this.clearFinalStatsScore(this.stats.score);
                this.clearStats();
                this.clear_page();
                this.wr = {};
                this.d = {};
                this.stats.wr_id = 4;
                this.stats.d_id = 4;
                // this.state_cur = this.state_back;
                this.nav.showMain = true;
                this.nav.showFooter = true;
                this.nav.showClock = true;
            },
            showLast3Plays() {
                this.clear_page();
                this.nav.last3PlaysShow = true;
                this.nav.showFooter = true;
                this.nav.showClock = true;
            },
            showRulesPage() {
                this.clear_page();
                this.nav.showRules = true;
                this.nav.showFooter = true;
                this.nav.showClock = true;
            },
            /**
             * =================================
             *
             * Game  Management
             *
             * =================================
             */
            deletePlay(id) {
                // const data = {
                //     'id': id
                // };
                this.axios.get('/deletePlay/' + id).then(() => {
                    // let {data} = response;
                    this.getLastThreePlays('deleted');


                    if (this.last_play_added === undefined) {
                        this.stats.down = 1;
                    } else {
                        this.stats.down = this.last_play_added.down;
                    }
                    // console.log(this.lastPlays)
                    // console.log(this.last_play_added)


                    if (this.last_play_added.o_team_id !== this.stats.o_team_id) {
                        this.turnover();
                    }
                    // console.log(this.lastPlays);
                });
            },
            getLastThreePlays() {
                this.axios.get('/getLastThreePlays/' + this.$props.game_id).then(response => {
                    let {data} = response;
                    console.log(data);
                    this.lastPlays = data.last_3_plays;
                    this.last_play_added = data.last_play.play;

                    if (data.last_play === false) {
                        this.stats.homeScore = 0;
                        this.stats.awayScore = 0;
                    } else {
                        this.stats.homeScore = data.last_play.homeScore;
                        // this.down = this.lastPlays[this.lastPlays.length - 1].down;


                        this.stats.awayScore = data.last_play.awayScore;
                        if (data.last_play.play.int == 1 || data.last_play.play.down == this.league_options.last_down || data.last_play.play.down == 0 || data.last_play.play.o_team_id !== this.stats.o_team_id) {
                            // if(data.last_play.play.first != 1 ){
                            //     this.stats.drive = data.last_play.drive + 1;
                            // }
                            if (data.last_play.play.o_team_id !== this.stats.o_team_id) {
                                this.stats.drive = this.last_play_added.drive + 1;
                            }
                        } else {
                            this.stats.drive = data.last_play.drive;
                        }

                    }

                    // console.log(this.lastPlays);
                })
            },
            finishGame() {
                this.clear_page();
                this.nav.showFooter = true;
                this.nav.showClock = true;
                this.nav.showEnd = 1;
                // if (2 === 2) {
                this.nav.showEndGame = 1;
                // } else {
                //     this.nav.showEndHalf = 1;
                // }
            },
        },
        computed: {
            redzoneStyle() {
                if (this.redzoneActive) {
                    return 'background-color: red ;'

                } else {
                    return 'background-color:none ;'
                }

            },
            midfieldStyle() {
                if (this.midfieldActive) {
                    return 'background-color: green;'

                } else {
                    return 'background-color:none ;'
                }

            },
            downPlacement() {
                if (this.stats.down >= this.league_options.last_down + 1) {
                    // this.stats.down = 0;
                    return 'Xp'
                }
                if (this.stats.down === 1) {
                    return '1st'
                }
                if (this.stats.down === 2) {
                    return '2nd'
                }
                if (this.stats.down === 3) {
                    return '3rd'
                }
                if (this.stats.down === 4) {
                    return '4th'
                }
                if (this.stats.down === 0) {
                    return 'XP'
                }
                return ' ';
            },
            numberColor() {
                if (this.stats.o_team_id === this.teams.awayTeam.team_id) {
                    return {
                        'color': this.teams.awayTeam.color_1,
                        '-webkit-text-stroke-width': '1px',
                        '-webkit-text-stroke-color': 'black',
                    }
                }
                return {
                    'color': this.teams.homeTeam.color_1,
                    '-webkit-text-stroke-width': '1px',
                    '-webkit-text-stroke-color': 'black',
                }
            },
            numberColor2() {
                if (this.stats.o_team_id === this.teams.awayTeam.team_id) {
                    return {
                        'color': this.teams.homeTeam.color_1,
                        '-webkit-text-stroke-width': '1px',
                        '-webkit-text-stroke-color': 'black',

                    }
                }
                return {
                    'color': this.teams.awayTeam.color_1,
                    '-webkit-text-stroke-width': '1px',
                    '-webkit-text-stroke-color': 'black',
                }
            },
            statClicked() {
                // let border = '1px solid ';
                if (this.o_team.team_id === this.teams.awayTeam.team_id) {
                    return {
                        'background-color': this.teams.awayTeam.color_1 + ' !important',
                    }
                }
                return {
                    'background-color': this.teams.homeTeam.color_1 + ' !important',
                }
            },

        }
    }
</script>

<style scoped>
    .stats-container-2020 {
        height: 100%;
        position: absolute;
    }

    .stats-header-2020 {
        /*height: 10%;*/
        top: -20px;
    }
</style>
