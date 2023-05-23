import assignment from "./assignment.js";
export default {
    components: { assignment },
    template: `
    <div class="row m-4" v-show="assignments.length">
    <h2>{{title}}</h2>
        <ul>
            <assignment  v-for="item in assignments" :key="item.id" :item="item" ></assignment>
        </ul>
    </div>`,
    props: {
        assignments: Array,
        title: String,
    }

}