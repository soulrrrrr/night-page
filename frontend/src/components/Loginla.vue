<template>
  <form class="formla">
    <h4>
      交大資工之夜 資本主藝<br />
      請輸入暱稱 & 學號 開始遊戲!
    </h4>
    <div class="mb-2 mx-5">
      <label class="form-label"
        ><br />
        學號</label
      >
      <input class="form-control" v-model="student_id" />
    </div>
    <div class="mb-2 mx-5">
      <label class="form-label">暱稱</label>
      <input class="form-control" v-model="student_nickname" />
      <br />
    </div>
    <button type="button" class="btn btn-primary" v-on:click="login_to_choose">
      登入
    </button>
  </form>
</template>

<script>
export default {
  name: 'Loginla',
  data() {
    return {
      student: {
        student_id: '',
        student_nickname: ''
      },
      ans: [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
      ]
    }
  },
  beforeCreate() {
    this.student_nickname = JSON.parse(localStorage.getItem('user'))['nickname']
    this.student_id = JSON.parse(localStorage.getItem('user'))['id']
  },

  methods: {
    login_to_choose: function () {
      const one_user = {
        id: this.student_id,
        nickname: this.student_nickname
      }
      localStorage.setItem('user', JSON.stringify(one_user))
      localStorage.setItem('answers', JSON.stringify(this.ans))

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