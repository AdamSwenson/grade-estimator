<template>
    <h3 class="subtitle">Estimated course grade: <span class="strong">{{estimatedGrade}}</span></h3>
</template>

<script>
import Grade from '../models/Grade'

export default {
    name: 'estimated-grade',
    props: ['courseTotal'],
    computed: {
        estimatedGrade: function () {
            let me = this
            let r = _.find(Grade.defaults, function (o) {
                return me.courseTotal >= o.minScore
            })
            return !_.isUndefined(r) ? r.displayValue : '---'
            _.forEach(Grade.defaults, function (grade) {
                if (me.courseTotal >= grade.minScore) {
                    return grade.displayValue
                    me.estimatedGrade = grade.displayValue
                    return true
                }
            })
        }
    }
}

</script>

<style scoped>

</style>
