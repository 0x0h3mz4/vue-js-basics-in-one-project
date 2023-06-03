
import todopart from "./todo-part.js";
import assignmentCreate from "./assignmentCreate.js";
export default {
    components: { todopart, assignmentCreate },
    template: `
    <todopart :assignments="notCompletedAssignment" title="To-do"></todopart>

    <todopart :assignments="completedAssignment" title="Completed"></todopart>
 
    <assignmentCreate @add="add"></assignmentCreate>
    `
    ,
    data() {
        return {
            list: []
        }
    }
    ,
    computed: {
        completedAssignment() {
            return this.list.filter(a => a.complete);
        },
        notCompletedAssignment() {
            return this.list.filter(a => !a.complete);
        }
    },
    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(list => {
                this.list = list;
            });
    },
    methods: {
        add(data) {
            this.list.push({ name: data, complete: false, id: this.list.length + 1 });
            this.newAssignment = '';
        }
    },
}