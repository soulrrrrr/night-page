<template>
  <div>
    <div class="row mb-3">
      <div class="col-xs-8">
        <button type="button" class="custom btn btn-primary mx-1">1</button>
        <button type="button" class="custom btn btn-primary mx-1">2</button>
        <button type="button" class="custom btn btn-primary mx-1">3</button>
        <button type="button" class="custom btn btn-primary mx-1">4</button>
        <button type="button" class="custom btn btn-primary mx-1">5</button>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-xs-8">
        <button type="button" class="custom btn btn-primary mx-1">6</button>
        <button type="button" class="custom btn btn-primary mx-1">7</button>
        <button type="button" class="custom btn btn-primary mx-1">8</button>
        <button type="button" class="custom btn btn-primary mx-1">9</button>
        <button type="button" class="custom btn btn-primary mx-1">10</button>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-xs-4">
        <button type="button" class="custom btn btn-primary mx-1">11</button>
        <button type="button" class="custom btn btn-primary mx-1">12</button>
        <button type="button" class="custom btn btn-primary mx-1">13</button>
        <button type="button" class="custom btn btn-primary mx-1">14</button>
        <button type="button" class="custom btn btn-primary mx-1">15</button>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-xs-4">
        <button type="button" class="custom btn btn-primary mx-1">16</button>
        <button type="button" class="custom btn btn-primary mx-1">17</button>
        <button type="button" class="custom btn btn-primary mx-1">18</button>
        <button type="button" class="custom btn btn-primary mx-1">19</button>
        <button type="button" class="custom btn btn-primary mx-1">20</button>
      </div>
    </div>
  </div>
</template>

<script>
// import liff from '@line/liff';
// import { onMounted } from "vue";

export default {
  name: 'Formla',

  data() {
    return {
      foodName: {
        type: String,
        default: 'GG',
        required: true
      },
      location: {
        type: String,
        required: true,
        default: 'EC020'
      },
      time: {
        required: true,
        type: String
      },
      serves: {
        type: Number,
        default: 2
      },
      comment: {
        type: String,
        required: true
      }
    }
  }
}
</script>
<style>
.custom {
  width: 55px;
  height: 40px;
}
</style>