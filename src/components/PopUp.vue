<template>
<v-dialog transition="dialog-top-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
        <v-btn color="success" v-bind="attrs" v-on="on">Add new Project</v-btn>
    </template>
    <template v-slot:default="dialog">
        <v-card>
            <v-toolbar color="primary" dark>Add a new Project
                <v-spacer></v-spacer>
                <v-btn small fab depressed class="primary" @click="dialog.value = false">
                    <v-icon small>mdi-window-close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card-text>
                <template>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field prepend-icon="mdi-folder" v-model="title" :counter="30" :rules="titleRules" label="Title" required></v-text-field>

                        <v-textarea prepend-icon="mdi-account-edit" v-model="information" :counter="1500" :rules="informationRules" label="Information" required></v-textarea>

                        <v-text-field prepend-icon="mdi-email" v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

                        <v-menu v-model="menu" :close-on-content-click="false" max-width="290">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field prepend-icon="mdi-calendar" :value="computedDateFormattedDatefns" clearable label="Formatted with datefns" readonly v-bind="attrs" v-on="on" @click:clear="date = null"></v-text-field>
                            </template>
                            <v-date-picker v-model="date" @change="menu = false"></v-date-picker>
                        </v-menu>

                        <v-select prepend-icon="mdi-check" v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item" required></v-select>

                        <div class="ml-4"><strong>checkboxes check</strong></div>
                        <v-row sm="4" md="4" class="ml-4">
                            <v-checkbox v-model="checkbox" label="Agree " color="success" value="agree" class="mr-5"></v-checkbox>
                            <v-checkbox v-model="checkbox" label="strong agree" color="info" value="strongagree" :rules="[v => !!v || 'You must agree to continue!']"></v-checkbox>
                        </v-row>

                        <div class="ml-4 mt-3"><strong>favorite option</strong></div>
                        <v-radio-group v-model="option" row mandatory class="ml-4">

                            <v-radio label="Option 1" value="radio-1"></v-radio>
                            <v-radio label="Option 2" value="radio-2"></v-radio>
                        </v-radio-group>

                        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
                            Validate
                        </v-btn>

                        <v-btn color="error" class="mr-4" @click="reset">
                            Reset Form
                        </v-btn>

                        <v-btn color="warning" @click="resetValidation">
                            Reset Validation
                        </v-btn>
                    </v-form>
                </template>
            </v-card-text>
            <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
            </v-card-actions>
        </v-card>
    </template>
</v-dialog>
</template>

<script>
import {
    format,
    parseISO
} from 'date-fns'
export default {
    name: 'PopUp',
    data: () => ({
        valid: true,
        title: '',
        titleRules: [
            v => !!v || 'Title is required',
            v => (v && v.length <= 30) || 'Title must be less than 30 characters',
        ],
        information: '',
        informationRules: [
            v => !!v || 'Information is required',
            v => (v && v.length <= 1500 && v.length >= 20) || 'Information must be greater than 20 and less then 1500 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ],
        checkbox: [],
        date: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
        menu: false,
        option: null,
    }),

    methods: {
        validate() {
            this.$refs.form.validate()
            console.log('mslik');
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
    },

    computed: {
        computedDateFormattedDatefns() {
            return this.date ? format(parseISO(this.date), 'do MMMM yyyy, EEEE') : ''
        },
    },
}
</script>
