<template>
  <div>
    <img alt="Vue logo" src="../assets/night_logo.jpeg" class="mb-3" />
    <h4>
      hi {{ JSON.parse(this.$route.query.student_nickname) }} 點擊題號
      <br />趕快開始答題吧！ <br /><br />
    </h4>

    <el-row v-for="item in one_to_five" :key="item">
      <button
        type="button"
        class="custom btn btn-primary mx-1 mb-3"
        v-on:click="choose_to_question_n(item)"
        v-if="ans[item - 1] == ''"
      >
        {{ item }}
      </button>
      <button
        type="button"
        class="custom btn btn-outline-primary mx-1 mb-3"
        v-on:click="choose_to_question_n(item)"
        v-else
      >
        {{ item }}
      </button>
    </el-row>
    <br />
    <el-row v-for="item in one_to_five" :key="item">
      <button
        type="button"
        class="custom btn btn-primary mx-1 mb-3"
        v-on:click="choose_to_question_n(item + 5)"
        v-if="ans[item + 4] == ''"
      >
        {{ item + 5 }}
      </button>
      <button
        type="button"
        class="custom btn btn-outline-primary mx-1 mb-3"
        v-on:click="choose_to_question_n(item + 5)"
        v-if="ans[item + 4] != ''"
      >
        {{ item + 5 }}
      </button>
    </el-row>
    <br />

    <el-row v-for="item in one_to_five" :key="item">
      <button
        type="button"
        class="custom btn btn-primary mx-1 mb-3"
        v-on:click="choose_to_question_n(item + 10)"
        v-if="ans[item + 9] == ''"
      >
        {{ item + 10 }}
      </button>
      <button
        type="button"
        class="custom btn btn-outline-primary mx-1 mb-3"
        v-on:click="choose_to_question_n(item + 10)"
        v-if="ans[item + 9] != ''"
      >
        {{ item + 10 }}
      </button>
    </el-row>
    <br />
    <el-row v-for="item in one_to_five" :key="item">
      <button
        type="button"
        class="custom btn btn-outline-primary mx-1 mb-3"
        v-on:click="choose_to_question_n(item + 15)"
        v-if="ans[item + 14] != ''"
      >
        {{ item + 15 }}
      </button>
      <button
        type="button"
        class="custom btn btn-primary mx-1 mb-3"
        v-on:click="choose_to_question_n(item + 15)"
        v-if="ans[item + 14] == ''"
      >
        {{ item + 15 }}
      </button>
    </el-row>
    <br />

    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      送出
    </button>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">送出答案！</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            沒有填完也沒關係 答案可以一直被更改～ <br />你目前的答案已經送出！
            想要再改也ok <br />
            請等候主持人宣布最後的結果喔～
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              v-on:click="back_to_login()"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Choose',

  data() {
    return {
      Nickname: '',
      one_to_five: [1, 2, 3, 4, 5],
      ans: JSON.parse(localStorage.getItem('answers'))
    }
  },
  methods: {
    choose_to_question_n: function (number) {
      this.$router.push({
        path: `/question/`,
        query: {
          number: JSON.stringify(number)
        }
      })
    },
    finalsubmit: function () {
      var data = {
        id: JSON.parse(localStorage.getItem('user'))['id'],
        nickname: JSON.parse(localStorage.getItem('user'))['nickname'],
        ans: JSON.parse(localStorage.getItem('answers'))
      }
      axios.post('http://localhost:3000/api/answer', data)
    },
    back_to_login: function () {
      this.$router.push({
        path: `/login/`
      })
    }
  }
}
</script>

<style scoped lang="scss">
img {
  width: 200px;
  height: 210px;
}

.custom {
  width: 55px;
  height: 40px;
}
</style>