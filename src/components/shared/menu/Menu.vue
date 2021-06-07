<template>
    <header>
        <nav>
            <ul>
                <li v-for="(route, index) in routes" :key="index">
                <router-link :to="route.path">
                    {{ route.title }}
                </router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    props: {
        routes: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    width: 100%;
    height: 80px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(128, 128, 128, 0.4);

    nav {
        width: 100%;
        height: 100%;

        ul {
            list-style: none;
            margin: 0;
            padding: 0 55px;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;

            li {
                padding: 0 15px;

                a {
                    text-decoration: none;
                    color: #474a51;
                    font-size: 1.1rem;
                }
                a:hover {
                    color: #000;
                    font-weight: 500;
                }
            }
        }
    }
}
</style>