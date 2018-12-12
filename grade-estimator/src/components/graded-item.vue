<template>
    <div class="graded-item field is-horizontal">

        <div class="field-label">
            <label class="label">{{item.name}}</label>
        </div>
        <div class="field-body">
            <div class="field has-addons is-narrow">
                <div class="control">
                    <div class="select " v-bind:class="selectClass">

                        <select v-model="selected">
                            <option disabled value="">Please select one</option>
                            <option v-for="o in item.options" v-bind:value="o.calcValue"
                                    v-on:select="handleSelection(o.calcValue)"
                                    v-bind:key="o.displayValue"
                            >{{ o.displayValue }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="control">
                    <a class="button is-static">{{item.pctOfTotal * 100}}%</a>
                </div>

                <!--{{item.score}}  {{item.contribToTotal}}-->
            </div>
            <div class="help">{{item.contribToTotal}}</div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'graded-item',

    props: ['item'],
    data: function () {
        return {
            selected: ''
        }
    },

    watch: {
        selected: function (newVal, oldVal) {
            this.item.score = newVal
        }
    },

    computed: {
        selectClass: function () {
            if (this.selected === '') return 'is-primary'
        }
    },

    methods: {
        handleSelection: function (v) {
            this.item.score = v
        // let gvalue = v * this.pctOfTotal;
        // this.$emit('selection', gvalue);
        }
    }
}
</script>

<style scoped>
    @media screen and (min-width: 769px), print {
        .my-custom-class .field-label {
            flex-grow: 2; /* overwrites previous value of 1 */
        }
    }

    .graded-item {
        width: 100%
    }
</style>
