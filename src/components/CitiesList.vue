<template>
    <ul>
        <li v-for="item in citiesList" :class="{active : item.isActive}" class="top" @click="chooseCity(item)" :key="item">{{item}}</li>
    </ul>
</template>

<script>
export default {
    props: {
        city: String,
    },
    data() {
        return {
            citiesList: []
        }
    },
    methods: {
        chooseCity(item) {
            this.$emit("choose", item);
        }
    },
    watch:{
        city() {
            if(this.citiesList.indexOf(this.city) !== -1) {
                return;
            }
            return this.citiesList.unshift(this.city);
        }
    }
}
</script>