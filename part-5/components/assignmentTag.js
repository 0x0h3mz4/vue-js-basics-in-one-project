export default {
    template: `
    <button @click="$emit('update:modelValue',tag)" v-for="tag in tags"  class="m-1" :class="{'btn btn-primary' : tag==modelValue}"> {{tag}}</button>
    `,
    props: {
        tags: Array,
        modelValue: String
    },
}