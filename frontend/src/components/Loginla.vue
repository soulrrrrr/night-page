<template>
  <form class="formla">
    <h4>
      交大資工之夜 資本主藝<br />
      請輸入學號 開始遊戲!
    </h4>
    <div class="mb-2 mx-5">
      <input class="form-control" id="student_id" />
    </div>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary">登入</button>
  </form>
</template>

<script>
// import liff from '@line/liff';
// import { onMounted } from "vue";

export default {
  name: 'Loginla',
  props: {
    profile: Object
  },
  data() {
    return {
      student_id: {
        type: Number,
        default: 2
      }
    }
  }
}
</script>