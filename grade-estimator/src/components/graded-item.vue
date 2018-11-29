<template>
    <div class="graded-item field is-horizontal">

        <div class="field-label is-normal">
            <label class="label">{{item.name}}</label>
        </div>

        <div class="field-body">
            <div class="field is-narrow">
                <div class="select " v-bind:class="selectClass">

                    <select v-model="selected">
                        <option disabled value="">Please select one</option>
                        <option v-for="o in item.options" v-bind:value="o.calcValue"
                                v-on:select="handleSelection(o.calcValue)">{{ o.displayValue }}
                        </option>
                    </select>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "graded-item",

        props: ['item'],
        data: function () {
            return {
                selected: ''
            }
        },

        watch: {
            selected: function (newVal, oldVal) {
                this.item.score = newVal;
            }
        },

        computed: {
            selectClass: function () {
                if (this.selected === '') return 'is-primary'
            }
        },

        methods: {
            handleSelection: function (v) {
                this.item.score = v;
                // let gvalue = v * this.pctOfTotal;
                // this.$emit('selection', gvalue);

            }
        }
    }
</script>

<style scoped>

</style>
