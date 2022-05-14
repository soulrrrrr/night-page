<template>
  <div>
    <div class="container">
      <p class="mx-4" align="left">題目：{{ Text }}</p>
    </div>

    <div class="row mt-5 mx-4 middle">
      <button
        type="button"
        class="btn btn-info mx-1 mb-3"
        v-on:click="change_ans('A')"
      >
        A : {{ OptionA }}
      </button>
      <button
        type="button"
        class="btn btn-info mx-1 mb-3"
        v-on:click="change_ans('B')"
      >
        B : {{ OptionB }}
      </button>
    </div>
    <div class="row middle mb-3 mx-4">
      <button
        type="button"
        class="btn btn-info mx-1 mb-3"
        v-on:click="change_ans('C')"
      >
        C : {{ OptionC }}
      </button>
      <button
        type="button"
        class="btn btn-info mx-1 mb-3"
        v-on:click="change_ans('D')"
      >
        D : {{ OptionD }}
      </button>
      <button type="button" class="btn btn-primary" v-on:click="submit">
        確認答案
      </button>

      <h4 class="mt-3"><br />你目前這題的答案為 {{ question.answer_now }}</h4>
    </div>
    <button
      type="button"
      class="btn btn-outline-dark mt-3"
      v-on:click="back_to_choose"
    >
      回到上一頁
    </button>
  </div>
</template>

<script>
import questions from '@/assets/questions.json'
export default {
  name: 'Question',
  data() {
    return {
      student: {
        student_id: '',
        student_nickname: ''
      },
      question: {
        thisnumber: '',
        Text: '',
        OptionA: '',
        OptionB: '',
        OptionC: '',
        OptionD: '',
        answer_now: ''
      }
    }
  },

  beforeCreate() {
    var qq = JSON.parse(this.$route.query.number) - 1
    this.Text = questions[qq]['Text']
    this.OptionA = questions[qq]['Options']['A']
    this.OptionB = questions[qq]['Options']['B']
    this.OptionC = questions[qq]['Options']['C']
    this.OptionD = questions[qq]['Options']['D']

    this.student_nickname = JSON.parse(localStorage.getItem('user'))['nickname']
    this.student_id = JSON.parse(localStorage.getItem('user'))['id']
  },
  beforeMount() {
    var qq = JSON.parse(this.$route.query.number) - 1
    this.answer_now = JSON.parse(localStorage.getItem('answers'))[qq]
  },
  methods: {
    submit: function () {
      var vv = JSON.parse(this.$route.query.number)
      this.$set(
        this.question,
        'answer_now',
        JSON.parse(localStorage.getItem('answers'))[vv - 1]
      )
    },
    change_ans: function (ans) {
      var qq = JSON.parse(this.$route.query.number)
      var answer_all = JSON.parse(localStorage.getItem('answers'))
      answer_all[qq - 1] = ans
      localStorage.setItem('answers', JSON.stringify(answer_all))
    },
    back_to_choose: function () {
      const one_user = {
        id: this.student_id,
        nickname: this.student_nickname
      }
      localStorage.setItem('user', JSON.stringify(one_user))

      this.$router.push({
        path: `/choose`,
        query: {
          student_nickname: JSON.stringify(this.student_nickname),
          student_id: JSON.stringify(this.student_id)
        }
      })
    }
  }
}
</script>



<style scoped lang="scss">
.mx {
  margin-left: 40px;
  margin-right: 40px;
}
.custom {
  width: 120px;
  height: 60px;
}
.middle {
  justify-content: center;
}
</style>