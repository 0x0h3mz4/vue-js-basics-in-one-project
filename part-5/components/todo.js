
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
            list: [
                { name: 'Go to the gym', complete: false, id: 1 },
                { name: 'Finish the X project', complete: false, id: 2 },
                { name: 'Read Thus spoke zarathustra', complete: false, id: 3 }
            ]
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
    methods: {
        add(data) {
            this.list.push({ name: data, complete: false, id: this.list.length + 1 });
            this.newAssignment = '';
        }
    },
}