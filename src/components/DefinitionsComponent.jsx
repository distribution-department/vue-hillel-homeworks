import {defineComponent} from 'vue';

export default defineComponent({
    name: 'DefinitionsComponent',
    props: {
        definitions: {
            dt: {
                type: String,
                required: true,
                default: 'Prop -dt- doesn`t exist!'
            },
            dd: {
                type: String,
                required: true,
                default: 'Prop -dd- doesn`t exist!'
            },
            id: {
                type: Number,
                required: true,
                default: 'Prop -id- doesn`t exist!'
            },
        }
    },
    render() {
        return (
            <div>
                <h1>Definitions:</h1>
                {this.definitions.map((prop) => {
                        return <div key={prop.id} class="text-start m-3">
                            <dt>{prop.dt}</dt>
                            <dd class="mx-2">{prop.dd}</dd>
                            <hr/>
                        </div>
                    }
                )}
            </div>
        )
    }
});