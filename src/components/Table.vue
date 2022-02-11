<template>
    <div class="main" v-if="dataList">

        <v-card
            class="mx-auto"
            style="margin: 30px auto;"
            max-width="400"
            tile
        >
            <input type="number" v-model="elementsMax"  @input="setCurrentData" placeholder="Введите показываемое количество элементов">
            <input type="number" v-model="totalVisible" @input="setCurrentData" placeholder="Введите показываемое количество ссылок">

            <v-list-item v-for="item in dataList" :key="item.number">
                <v-list-item-content>
                    <v-list-item-title>number: {{ item.number }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-card>

        <div class="text-center">
            <v-pagination
                v-model="currentPage"
                :length="getDataTableLength"
                :total-visible="totalVisible"
                @input="handlePageChange"
            ></v-pagination>
        </div>

    </div>
</template>

<script>
import {createJSONcolletions} from "@/data/data_collection";


export default {
    name: 'Table',
    components: {},

    data() {
        return {
            dataTable: null,
            dataList: null,
            currentPage: 1,
            elementsMax: 10,
            totalVisible: 7,
        }
    },

    created() {
        this.init();
    },

    computed: {
        getDataTableLength() {
            let result = (this.dataTable.length / this.elementsMax).toFixed()
            return Number(result);
        }
    },

    methods: {
        setCurrentData() {
            const start = this.currentPage === 1 ? 0 : (this.elementsMax * this.currentPage) - this.elementsMax;
            const finish = this.elementsMax * this.currentPage;
            this.dataList = this.dataTable.slice(start, finish);
        },

        handlePageChange(value) {
            this.currentPage = value;
            this.$router.push(`?page=${this.currentPage}`);
            this.setCurrentData();
        },

        prepareStartPage() {
            let page = this.$router.history.current.query.page;
            if (page) this.currentPage = Number(page);
        },

        init() {
            this.dataTable = createJSONcolletions();
            this.prepareStartPage();
            this.setCurrentData();
        }
    }


}
</script>

<style>

</style>
