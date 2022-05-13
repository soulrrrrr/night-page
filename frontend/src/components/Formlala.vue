<template>
  <form class="formla">
    <h4>
      hi {{ User }} 以下是表單 <br />
      填寫完按下送出即可~
    </h4>
    <div class="mb-2 mx-5">
      <label class="form-label">食物名稱</label>
      <input class="form-control" />
    </div>

    <div class="mb-3 mx-5">
      <label for="location" class="form-label">你的所在位置</label>
      <input type="location" class="form-control" id="location" />
    </div>
    <label for="time" class="form-label">你會待到幾點呢?</label>

    <div class="mb-3 mx-5 col">
      <input type="time" class="form-control" id="time" />
    </div>
    <div class="mb-3 mx-5 col">
      <select class="form-select">
        <option selected>一個人最多可以拿走幾份</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
    <div id="timeHelp" class="form-text mb-5 my-(-1)">
      (可以點擊小時鐘,直接選取時間喔!)
    </div>

    <div class="mb-3 mx-5">
      <label for="image" class="form-label">要附上食物的照片嗎?</label>
      <input type="image" class="form-control" id="image" />
    </div>

    <div class="mb-3 mx-5">
      <label class="form-label">備註</label>
      <input class="form-control" />
    </div>

    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      送出
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">嗨嗨嗨</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              繼續填寫
            </button>
            <button type="button" class="btn btn-primary">確認送出</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
// import liff from '@line/liff';
// import { onMounted } from "vue";

export default {
  name: 'Formla',
  props: {
    User: String,
    profile: Object
  },
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