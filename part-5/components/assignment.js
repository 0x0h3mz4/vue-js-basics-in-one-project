export default {
    template: `
    <li>
    <label>
        {{item.name}}
        <input type="checkbox" v-model="item.complete">
    </label>
    </li>`,
    props: {
        item: Object
    }
}