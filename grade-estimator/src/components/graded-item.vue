<template>
    <div class="graded-item">
        {{itemName}}

        <select v-on:select="handleSelection">
            <option v-for="o in options" value="o.calcValue">{{ o.gradedValue }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "graded-item",

        props: ['itemName', 'pctOfTotal', 'options'],

        methods:{
            handleSelection : function(v){
                let gvalue = v * this.pctOfTotal;
                this.$emit('selection', gvalue);

            }
        }
    }
</script>

<style scoped>

</style>