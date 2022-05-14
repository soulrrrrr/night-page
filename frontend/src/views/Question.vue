<template>
  <div>
    <div class="container">
      <p class="mx-4" align="left">題目：{{ Text }}</p>
    </div>

    <div class="row mt-5 mx-4 middle">
      <button type="button" class="btn btn-info mx-1 mb-3">
        A : {{ OptionA }}
      </button>
      <button type="button" class="btn btn-info mx-1 mb-3">
        B : {{ OptionB }}
      </button>
    </div>
    <div class="row middle mb-3 mx-4">
      <button type="button" class="btn btn-info mx-1 mb-3">
        C : {{ OptionC }}
      </button>
      <button type="button" class="btn btn-info mx-1 mb-3">
        D : {{ OptionD }}
      </button>
      <button type="button" class="btn btn-primary" v-on:click="submit">
        送出答案
      </button>
    </div>
  </div>
</template>

<script>
import questions from '@/assets/questions.json'
export default {
  name: 'Question',
  data() {
    return {
      question: {
        thisnumber: '',
        Text: '',
        OptionA: '',
        OptionB: '',
        OptionC: '',
        OptionD: ''
      }
    }
  },
  beforeCreate() {
    var qq = JSON.parse(this.$route.query.number)
    this.Text = questions[qq - 1]['Text']
    this.OptionA = questions[qq - 1]['Options']['A']
    this.OptionB = questions[qq - 1]['Options']['B']
    this.OptionC = questions[qq - 1]['Options']['C']
    this.OptionD = questions[qq - 1]['Options']['D']
  },
  methods: {
    show: function () {
      console.log(this.uid)
      console.log(this.amount)
    },
    submit: function () {
      console.log('s')
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