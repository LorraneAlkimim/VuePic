<template>
    <div class="panel">
        <transition name="fading-panel">
            <div class="panel-content" v-show="show">
                <slot></slot>
            </div>
        </transition>
        <h2 class="panel-title" @click="show = !show">{{ title }}</h2>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            show: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .panel {
        display: flex;
        flex-direction: column;
        border: solid 10px #FFF;
        border-radius: 2px;
        box-shadow: 0px 0px 10px rgba(128, 128, 128, 0.6);
        width: 250px;
        height: 100%;
        vertical-align: top;
        text-align: center;

        .fading-panel-enter, .fading-panel-leave-active {
            opacity: 0;
        }

        .fading-panel-enter-active, .fading-panel-leave-active {
            transition: opacity 0.4s;
        }

        .panel-title {
            background-color:#FFF;
            margin: 0;
            text-transform: uppercase;
            font-family: 'Indie Flower', cursive;
            font-size: 1.2rem;
            color: #474a51;
            text-transform: capitalize;
            cursor: pointer;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
