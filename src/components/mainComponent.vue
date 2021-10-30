<template>
<div>
    <h1>Hi Azhar </h1>
    <button class="btn btn-primary" @click="openModal">
        Make An Offer
    </button>
    <div class="container modalContainer" v-if="show">
        <Modal v-on:close-modal="closeModal()" />
    </div>
</div>
</template>

<script>
import Modal from './modal.vue'

export default{
    components: {
        Modal,
    },
    data() {
        return {
            show: false
        };
    },
    methods: {
        openModal() {
            this.show = true;
        },
        closeModal() {
            this.show = false;
        }
    }
}
</script>


<style scoped>


</style>