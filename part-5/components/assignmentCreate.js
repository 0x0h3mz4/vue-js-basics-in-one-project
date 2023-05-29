export default {
    template: `
    <form @submit.prevent="add"> 
        <input v-model="newAssignment" placeholder="New assignment" >
        <button type="submit">Add</button>
    </form>`,
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            this.$emit('add', this.newAssignment)
            // this.list.push({ name: this.newAssignment, complete: false, id: this.list.length + 1 });
            this.newAssignment = '';
        }
    },
    props: {
        list: Array
    }
}