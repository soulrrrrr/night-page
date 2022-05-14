<template>
  <div>
    <img alt="Vue logo" src="../assets/night_logo.jpeg" class="mb-3" />
    <h4>
      hi {{ JSON.parse(this.$route.query.student_nickname) }} 點擊題號
      <br />趕快開始答題吧！ <br /><br />
    </h4>
    <div>
      <div class="row mb-3">
        <div class="col-xs-8">
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-if="if_answer[0] == 0"
            v-on:click="choose_to_question_n(1)"
          >
            1
          </button>
          <button
            type="button"
            class="custom btn btn-outline-primary mx-1"
            v-if="if_answer[0] == 1"
            v-on:click="choose_to_question_n(1)"
          >
            1
          </button>
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-if="if_answer[1] == 0"
            v-on:click="choose_to_question_n(2)"
          >
            2
          </button>
          <button
            type="button"
            class="custom btn btn-outline-primary mx-1"
            v-if="if_answer[1] == 1"
            v-on:click="choose_to_question_n(2)"
          >
            2
          </button>
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-on:click="choose_to_question_n(3)"
          >
            3
          </button>
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-on:click="choose_to_question_n(4)"
          >
            4
          </button>
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-on:click="choose_to_question_n(5)"
          >
            5
          </button>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-xs-8">
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-on:click="choose_to_question_n(6)"
          >
            6
          </button>
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-on:click="choose_to_question_n(7)"
          >
            7
          </button>
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-on:click="choose_to_question_n(8)"
          >
            8
          </button>
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-on:click="choose_to_question_n(9)"
          >
            9
          </button>
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-on:click="choose_to_question_n(10)"
          >
            10
          </button>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-xs-4">
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-on:click="choose_to_question_n(11)"
          >
            11
          </button>
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-on:click="choose_to_question_n(12)"
          >
            12
          </button>
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-on:click="choose_to_question_n(13)"
          >
            13
          </button>
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-on:click="choose_to_question_n(14)"
          >
            14
          </button>
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-on:click="choose_to_question_n(15)"
          >
            15
          </button>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-xs-4">
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-on:click="choose_to_question_n(16)"
          >
            16
          </button>
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-on:click="choose_to_question_n(17)"
          >
            17
          </button>
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-on:click="choose_to_question_n(18)"
          >
            18
          </button>
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-on:click="choose_to_question_n(19)"
          >
            19
          </button>
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-on:click="choose_to_question_n(20)"
          >
            20
          </button>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-primary" v-on:click="finalsubmit()">
      送出
    </button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Choose',

  data() {
    return {
      Nickname: '',
      if_answer: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  },

  methods: {
    choose_to_question_n: function (number) {
      console.log(JSON.parse(localStorage.getItem('user')))
      console.log(JSON.parse(localStorage.getItem('answers')))
      this.$router.push({
        path: `/question/`,
        query: {
          number: JSON.stringify(number)
        }
      })
    },
    finalsubmit: function () {
      axios({
        method: 'POST',
        url: '',
        data: {
          id: JSON.parse(localStorage.getItem('user'))['student_id'],
          nickname: JSON.parse(localStorage.getItem('user'))[
            'student_nickname'
          ],
          ans: JSON.parse(localStorage.getItem('answers'))
        }
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