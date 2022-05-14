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
            v-for="item in one_to_five"
            v-on:click="choose_to_question_n(item)"
            :key="item"
          >
            {{ item }}
          </button>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-xs-8">
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-for="item in one_to_five"
            v-on:click="choose_to_question_n(item + 5)"
            :key="item"
          >
            {{ item + 5 }}
          </button>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-xs-8">
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-for="item in one_to_five"
            v-on:click="choose_to_question_n(item + 10)"
            :key="item"
          >
            {{ item + 10 }}
          </button>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-xs-8">
          <button
            type="button"
            class="custom btn btn-primary mx-1"
            v-for="item in one_to_five"
            v-on:click="choose_to_question_n(item + 15)"
            :key="item"
          >
            {{ item + 15 }}
          </button>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-primary" v-on:click="finalsubmit()">
      送出
    </button>
    <h4 class="mt-4">
      你尚未作答的題目：
      <div v-for="(question, index) in ans" :key="question">
        <p v-if="question == ''">
          {{ index + 1 }}
        </p>
      </div>
    </h4>
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
      var data = {
        id: JSON.parse(localStorage.getItem('user'))['id'],
        nickname: JSON.parse(localStorage.getItem('user'))['nickname'],
        ans: JSON.parse(localStorage.getItem('answers'))
      }

      axios.post('http://localhost:3000/api/answer', data)
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