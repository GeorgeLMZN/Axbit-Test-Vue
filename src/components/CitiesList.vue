<template>
    <div class="list-wrapper" v-if="citiesList.length > 0">
        <ul>
            <li v-for="(item, idx) in citiesList" class="top list-item" @click="chooseCity(item)" :key="item">
                {{item}}
                <button class="btn-delete" @click.stop="removeItem(idx)">
                    <img src="../assets/img/cross.svg" alt="">
                </button>
            </li>
        </ul>
        <div class="border-line bottom"></div>
    </div>
</template>

<script>
export default {
    props: {
        city: String,
    },
    emits: ['choose'],
    data() {
        return {
            citiesList: []
        }
    },
    methods: {
        saveData(item) {
            localStorage.setItem('cities-list', JSON.stringify(item))
        },
        removeItem(idx) {
            this.citiesList.splice(idx, 1)
            this.$emit("choose", this.citiesList[0]);
        },
        chooseCity(item) {
            this.$emit("choose", item);
        }
    },
    created() {
        this.citiesList = JSON.parse(localStorage.getItem('cities-list')) || [];
    },
    updated() {
        this.saveData(this.citiesList);
    },
    watch:{
        city() {
            if(this.city === undefined) {
                return;
            }
            if(this.citiesList.indexOf(this.city) !== -1) {
                return;
            }
            return this.citiesList.unshift(this.city);
        }
    }
}
</script>

<style scoped>
    .list-wrapper {
        width: 100%;
    }
    .border-line {
        width: 90%;
        height: 1px;
        background: #fff;
        margin-left: 5%;
    }
    .list-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        max-width: 100%;
    }
    .btn-delete {
        background: transparent;
        width: 35px;
        height: 35px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
        opacity: 0.3;
        cursor: pointer;
    }
    .btn-delete:hover {
        opacity: 1;
    }
    .btn-delete img {
        cursor: pointer;
        width: 15px;
        height: 15px;
    }
</style>