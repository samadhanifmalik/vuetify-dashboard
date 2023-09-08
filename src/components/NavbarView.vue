<template>
<nav>
    <v-toolbar class="grey lighten-4">
        <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-black">Malik</span>
            <span>Samad</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn depressed v-bind="attrs" v-on="on" color="grey lighten-4">
                    <v-icon>mdi-arrow-down</v-icon>
                    <span>Menu</span>
                </v-btn>
            </template>

            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-title>
                        {{link.text}}
                    </v-list-item-title>
                    <v-divider></v-divider>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-btn depressed color="grey lighten-4">
            <span>Sign Out</span>
            <v-icon right>mdi-logout-variant</v-icon>
        </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" width="300" class="primary">

        <v-list-item>
            <v-list-item-avatar>
                <v-btn small fab depressed class="primary" @click="drawer = !drawer">
                    <v-icon small>mdi-window-close</v-icon>
                </v-btn>
            </v-list-item-avatar>
        </v-list-item>
        <v-layout column align-center>
            <v-flex align-center>
                <v-avatar size="120">
                    <img src="/avatar-2.png">
                </v-avatar>
                <p class="white--text title mt-1" align-center>
                    Abdul Samad
                </p>
            </v-flex>
            <v-flex class="mt-3 mb-6">
                <PopUp />
            </v-flex>
        </v-layout>
        <v-divider></v-divider>

        <v-list dense nav>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-item-icon>
                    <v-icon class="white--text">{{ link.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>

    </v-navigation-drawer>

</nav>
</template>

<script>
import PopUp from './PopUp.vue';
export default {
    name: 'NavbarView',
    data() {
        return {
            drawer: false,
            links: [{
                    icon: 'mdi-view-dashboard',
                    text: 'Dashboard',
                    route: '/'
                },
                {
                    icon: 'mdi-folder-plus',
                    text: 'My Projects',
                    route: '/projects'
                },
                {
                    icon: 'mdi-account-multiple',
                    text: 'Team',
                    route: '/team'
                },
                {
                    icon: 'mdi-table-large',
                    text: 'Datatable',
                    route: '/datatable'
                },
                {
                    icon: 'mdi-palette',
                    text: 'Typography',
                    route: '/typo'
                },
                {
                    icon: 'mdi-account-edit',
                    text: 'Input',
                    route: '/input'
                },
            ]
        }
    },
    components: {
        PopUp,
    }
}
</script>
