<template>
  <d2-container :filename="filename">
    <template slot="header">{{$t('pub.pageHeader.demo')}}</template>
    Hello World
    <d2-base-table :tableData="data" :index="false" :select="true" :tableHeader="tableHeader" @test="nnn" :loading="loading" :loadingOptions="loadingOptions"
    :options="options" :pagination="pagination">
        <div slot="name" slot-scope="{scope}">
          <el-tag type="success">{{ scope.row.name }}</el-tag>
        </div>
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <el-button size="small" icon="el-icon-edit" @click="alert(scope.row, scope.$index)">增加</el-button>
          <el-button size="small" type="danger" icon="el-icon-delete" @click="alert(scope.row, scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </d2-base-table>
  </d2-container>

</template>

<script>
import EventEmitter from './eventEmitter'
import { getGroups, createGroup, deleteGroup, updateGroup  } from '@/api/sys.group' 
export default {
  name: 'page1',
  data () {
    return {
      filename: __filename,
      data: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2018-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2017-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      tableHeader: [{
        type: 'index'
      }, {
        type: 'select'
      }, {
        label: '时间',
        width: '200',
        prop: 'date',
        fixed: true,
        sortable: true,
        filters: [{ text: '2016-05-02', value: '2016-05-02' }, { text: '2018-05-04', value: '2018-05-04' }, { text: '2017-05-01', value: '2017-05-01' }, { text: '2016-05-03', value: '2016-05-03' }],
        filterMethod (value, row) {
          return row.date === value
        }
      }, {
        label: '名称',
        width: '200',
        prop: 'name',
        hidden: true,
        slot: 'name'
      }, {
        label: '地址',
        type: 'operate',
        width: '200',
        prop: 'address',
        operates: [
          { name: '详情', emitKey: 'view' }
        ]
      }],
      loading: true,
      loadingOptions: {
        text: '拼命加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.8)'
      },
      options: {
        stripe: true,
        border: true,
        rowClassName ({ row, rowIndex }) {
          if (rowIndex === 1) {
            return 'warning-row'
          } else if (rowIndex === 3) {
            return 'success-row'
          }
          return ''
        },
        highlightCurrentRow: true,
        defaultSort: {
          prop: 'date',
          order: 'descending'
        }
      },
      pagination: {
        currentPage: 4,
        pageSizes: [100, 200, 300, 400],
        pageSize: 100,
        total: 400,
        layout: 'total, sizes, prev, pager, next, jumper',
        handleSizeChange (val) {
          console.log(`每页 ${val} 条`)
        },
        handleCurrentChange (val) {
          console.log(`当前页: ${val}`)
        }
      }
    }
  },
  methods: {
    /**
     * @param row
     * @param index
     */
    alert (row, index) {
      this.$message.success(row.name)
    },
    nnn (msg) {
      let params = {
        offset: 0,
        limit: 10
      }
      getGroups(params).then(res => {
        // this.data = res.data
        console.log(res)
      })
    }
  },
  mounted () {
    this.nnn()
    let test = new EventEmitter()
    test.once('wuwuwu', () => {
      console.log('1111')
    })
    test.once('wuwuwu', () => {
      console.log('222222')
    })
    console.dir(test)
    setTimeout(() => {
      this.loading = false
    }, 2000)
  }
}
</script>
<style lang="scss" scoped>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
