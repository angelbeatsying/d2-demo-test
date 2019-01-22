<template>
  <d2-container :filename="filename">
    <template slot="header">用户组</template>
    Hell World
  </d2-container>
</template>

<script>
export default {
  name: 'page2',
  data () {
    return {
      filename: __filename
    }
  }
}
</script>
