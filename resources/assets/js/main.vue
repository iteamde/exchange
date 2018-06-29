<template>
    <test></test>
</template>

<script>
    import {Test} from './components/ExampleComponent.vue';

    export default {
        name: 'App',
        components: {
            Test,
        },
        mounted () {
            console.log('app mounted');
        }
    }
</script>
