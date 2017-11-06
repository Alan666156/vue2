<template>
  <div>
    <myHeader></myHeader>
    <div class="article_list">
      <ul>
        <!--循环输出集合数据-->
        <li v-for="i in list">
          <!--time标签渲染时间数据-->
          <time v-text="i.create_at"></time>
          <!--VueRouter2 “声明式导航”的写法,会转换为标签,to==href-->
          <router-link :to="'/content/' + i.id">
            {{ i.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <myFooter></myFooter>
  </div>
</template>
<script>
  import myHeader from '../components/Header.vue'
  import myFooter from '../components/Footer.vue'
  export default {
    components: { myHeader, myFooter },
    data () {
      return {
        list: []
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        //调用接口
        this.$api.get('topics', null, r => {
          //将接口返回数据赋值list
          this.list = r.data
        })
      }
    }
  }
</script>
