<template>
<div class="dashboard">
    <h1 class="title grey--text">Dashboard</h1>

    <v-container class="my-16">

        <v-layout row justify-start class="mb-8 mx-2">
            <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="mx-1" small depressed color="grey lighten-4" @click="sortBy('title')" v-bind="attrs" v-on="on">
                        <v-icon small left>mdi-folder-account</v-icon>
                        <span class="caption text-lowercase">By project name</span>
                    </v-btn>
                </template>
                <span>Sort by project name</span>
            </v-tooltip>
            <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn small depressed color="grey lighten-4" @click="sortBy('person')" v-bind="attrs" v-on="on">
                        <v-icon small left>mdi-account</v-icon>
                        <span class="caption text-lowercase">By Person</span>
                    </v-btn>
                </template>
                <span>Sort by project author</span>
            </v-tooltip>
        </v-layout>

        <v-card :class="`mb-3 project ${project.status}`" v-for="project in projects" :key="project.title">
            <v-layout row wrap class="pa-7">
                <v-flex xs12 md6>
                    <div class="caption grey--text">Project title</div>
                    <div>{{ project.title }}</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Person</div>
                    <div>{{ project.person }}</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Due by</div>
                    <div>{{ project.due }}</div>
                </v-flex>
                <v-flex xs2 sm4 md2>
                    <div class="right">
                        <v-chip small :class="`white--text my-2 caption chip ${project.status}`">{{ project.status }}</v-chip>
                    </div>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
        </v-card>

    </v-container>

</div>
</template>

<script>
export default {
    name: 'MyDashboard',
    data() {
        return {
            projects: [{
                    title: 'Design a new website',
                    person: 'The Net Ninja',
                    due: '1st Jan 2019',
                    status: 'ongoing',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
                },
                {
                    title: 'Code up the homepage',
                    person: 'Chun Li',
                    due: '10th Jan 2019',
                    status: 'overdue',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
                },
                {
                    title: 'Design video thumbnails',
                    person: 'Ryu',
                    due: '20th Dec 2018',
                    status: 'complete',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
                },
                {
                    title: 'Create a community forum',
                    person: 'Gouken',
                    due: '20th Oct 2018',
                    status: 'overdue',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
                },
            ]
        }
    },
    methods: {
        sortBy(prop) {
            this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
        }
    }
}
</script>

<style>
.project.complete {
    border-left: 4px solid #3cd1c2;
}

.project.ongoing {
    border-left: 4px solid #ffaa2c;
}

.project.overdue {
    border-left: 4px solid #f83e70;
}

.chip.complete {
    background: #3cd1c2 !important;
    text-transform: uppercase;
}

.chip.ongoing {
    background: #ffaa2c !important;
    text-transform: uppercase;
}

.chip.overdue {
    background: #f83e70 !important;
    text-transform: uppercase;
}
</style>
