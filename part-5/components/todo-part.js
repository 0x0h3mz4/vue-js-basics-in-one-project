import assignment from "./assignment.js";
export default {
    components: { assignment },
    template: `
    <div class="row m-4" v-show="assignments.length">
            
                <h2>{{title}} <span>({{assignments.length}})</span></h2>
                

                <button @click="currenTag = tag" v-for="tag in tags"  class="m-1" :class="{'btn btn-primary' : tag==currenTag}"> {{tag}}</button>
                <ul>
                    <assignment  v-for="item in filteredassignments" :key="item.id" :item="item" ></assignment>
                </ul>

    </div>`,
    data() {
        return {
            currenTag: ''
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
        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))]
        }
    }

}