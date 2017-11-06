<template>
  <div>
    <!--引入editor-->
    <script id="editor" type="text/plain"></script>
  </div>
</template>

<script>
  export default {
    name: 'ue',
    data () {
      return {
        editor: null
      }
    },
    props: {
      value: '',
      config: {}
    },
    mounted () {
      const _this = this
//      初始化编辑器
      this.editor = window.UE.getEditor('editor', this.config)
      this.editor.addListener('ready', function () {
        _this.editor.setContent(_this.value)
      })
    },
    methods: {
//      获取输入的内容信息
      getUEContent () {
        return this.editor.getContent()
      }
    },
    destroyed () {
//      销毁编辑器
      this.editor.destroy()
    }
  }
</script>
