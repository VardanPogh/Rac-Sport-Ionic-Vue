<template>
    <ion-tabs>
        <ion-tab-bar slot="bottom">
            <ion-tab-button tab="profile" href="/dashboard/profile">
                <ion-icon :icon="person"/>
                <ion-label>Profile</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="chat" href="/dashboard/chat">
                <ion-icon :icon="chatbubblesOutline"/>
                <ion-label>Chat</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="tab3" href="/dashboard/ref">
                <ion-icon :icon="statsChartOutline"/>
                <ion-label>Ref Hub</ion-label>
            </ion-tab-button>
        </ion-tab-bar>
    </ion-tabs>
</template>

<script>
    import {IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon} from '@ionic/vue';
    import {person, chatbubblesOutline, statsChartOutline} from 'ionicons/icons';

    export default {
        name: 'Tabs',
        components: {IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon},
        setup() {
            return {
                person,
                chatbubblesOutline,
                statsChartOutline,
            }
        }
    }
</script>

<style scoped>
    ion-tab-bar {
        --background: #18265A;
    }

    ion-icon {
        color: white;
    }
    .tab-selected{
        color: red;
    }
    .tab-selected ion-icon{
        color: red;
    }
</style>