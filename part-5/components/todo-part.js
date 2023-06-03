import assignment from "./assignment.js";
import assignmentTag from "./assignmentTag.js";
export default {
    components: { assignment, assignmentTag },
    template: `
    <div class="row m-4" v-show="assignments.length">
            
                <h2>{{title}} <span>({{assignments.length}})</span></h2>
                

                <assignmentTag :tags="Alltags" v-model="currenTag" @change="currenTag = $event"></assignmentTag>
                <ul>
                    <assignment  v-for="item in filteredassignments" :key="item.id" :item="item" ></assignment>
                </ul>

    </div>`,
    data() {
        return {
            currenTag: 'all'
        }
    },
    props: {
        assignments: Array,
        title: String,
    },
    computed: {
        filteredassignments() {
            if (this.currenTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag == this.currenTag);
        },
        Alltags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))]
        }
    }

}