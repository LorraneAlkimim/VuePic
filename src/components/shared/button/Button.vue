<template>
    <button 
        @click="buttonAction()"
        class="button"
        :class="addButtonStyle"
        :type="type"
    >
        {{ label }}
    </button>
</template>

<script>
export default {
    props: {
        type: {
            required: true,
            type: String
        },
        label: {
            required: true,
            type: String
        },
        confirmation: Boolean,
        buttonStyle: String
    },

    methods: {
        buttonAction() {
            if(this.confirmation) {
                if(confirm('Confirma operação?')) {
                    this.$emit('activeButton');
                }
                return;
            }
            this.$emit('activeButton');
        }
    },

    computed: {
        addButtonStyle() {
            if(this.buttonStyle == 'default' || !this.buttonStyle) return 'btn-default';

            if(this.buttonStyle == 'warning') return 'btn-warning';
        }
    }
}
</script>

<style lang="scss">
.button {
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2em;
    cursor: pointer;
}
.btn-warning {
    background-color: firebrick;
    color: #fff;
}
.btn-default {
    background-color: darkcyan;
    color: #fff;
}
</style>