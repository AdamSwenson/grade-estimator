<template>
    <div id="app">
        <div class="container">
            <estimated-grade :course-total="courseTotal"></estimated-grade>
            <!--<p>max possible points: {{ maxPossibleScore }}</p>-->
            <div class="box">
                <graded-item v-for="i in items"
                             v-bind:key="i.name"
                             :item="i"
                ></graded-item>
            </div>
        </div>
    </div>
</template>

<script>

    import gradedItem from './components/graded-item';
    import estimatedGrade from './components/estimated-grade';
    import Grade from "./models/Grade";
    import Item from "./models/Item";
    import LetterGradedItem from "./models/LetterGradedItem";
    import PassFailItem from "./models/PassFailItem";
    import NumberEntryItem from "./models/NumberEntryItem";

    export default {
        name: 'App',

        components: {gradedItem, estimatedGrade},

        data: function () {
            return {
                courseDist: [
                    {
                        name: 'Participation and attendance',
                        number: 1,
                        pctOfTotal: 0.10,
                        type: 'letterGraded'
                    },
                    {
                        name: 'Journals',
                        number: 1,
                        type: 'numberEntry',
                        count: 15,
                        pctOfTotal: 0.05
                    },
                    {
                        name: 'Online Assignment',
                        number: 5,
                        type: 'passFail',
                        pctOfTotal: 0.20
                    },
                    {
                        name: 'Exam (highest grade)',
                        number: 1,
                        pctOfTotal: 0.35,
                        type: 'letterGraded'
                    },
                    {
                        name: 'Exam (other one)',
                        number: 1,
                        pctOfTotal: 0.30,
                        type: 'letterGraded'
                    }
                ],

                items: [],

                estimatedGrade: 'taco'

            };
        },

        watch: {
          courseTotal: function(){
                  let me = this;
                  _.forEach(Grade.defaults, function (grade) {

                      if (me.courseTotal >= grade.minScore && me.courseTotal <= grade.maxScore) {
                          me.estimatedGrade = grade.displayValue;
                          return true;
                      }
                  });
              },
        },

        computed: {

            courseTotal: function () {
                let total = 0;

                _.forEach(this.items, function (item) {
                    total += item.contribToTotal;
                })

                return total;
            },

//             estimatedGrade: function () {
// let me = this;
//                 window.console.log('App', 'estimatedGrade', 87, me.courseTotal);
//                  _.forEach(Grade.defaults, function (grade) {
//
//                     if (me.courseTotal >= grade.minScore) {
//                         return grade.displayValue;
//                     }
//                 });
//                 return 'Taco+';
//             },

            maxPossibleScore: function () {
                let total = 0;
                // if (this.items.length === 0) return total;

                _.forEach(this.items, function (item) {
                    total += item.maxPossible;
                })

                return total;

            }
        },


        methods: {

            initializeItems: function () {
                let items = [];

                _.forEach(this.courseDist, function (item) {
                    for (let j = 0; j < item.number; j++) {
                        let name, pct;
                        if (item.number === 1) {
                            name = item.name;
                            pct = item.pctOfTotal;
                        } else {
                            let v = j + 1;
                            name = item.name + ' #' + v;
                            pct = item.pctOfTotal / item.number;
                        }

                        switch (item.type) {
                            case 'passFail':
                                items.push(new PassFailItem(name, pct));
                                break;
                            case 'numberEntry':
                                items.push(new NumberEntryItem(name, pct, item.count));
                                break;
                            case 'letterGraded':
                                items.push(new LetterGradedItem(name, pct));
                                break;
                        }
                    }
                });

                return items;
            }
        },

        mounted: function () {
            this.items = this.initializeItems();
        }
    }
</script>

<style>


    @import "../node_modules/bulma/bulma.sass";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
