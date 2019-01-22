<template>
  <div>
    <el-row slot="header" flex="main:justify">
      <span flex-box="1" style="align-self: center;">D2 CRUD</span>
      <el-button icon="el-icon-edit" size="small">新增</el-button>
    </el-row>
    <el-table :data="tableData" style="width: 100%" v-bind="options" v-loading="loading"
    :element-loading-text="loadingOptions.text"
    :element-loading-spinner="loadingOptions.spinner"
    :element-loading-background="loadingOptions.background"
    @current-change="handleCurrentChange"
    @select="handleSelect"
    @select-all="handleSelectAll"
    @selection-change="handleSelectionChange"
    @cell-mouse-enter="handleCellMouseEnter"
    @cell-mouse-leave="handleCellMouseLeave"
    @cell-click="handleCellClick"
    @cell-dblclick="handleCellDblclick"
    @row-click="handleRowClick"
    @row-contextmenu="handleRowContextmenu"
    @row-dblclick="handleRowDblclick"
    @header-click="handleHeaderClick"
    @header-contextmenu="handleHeaderContextmenu">
      <template v-for="(item, index) in tableHeader">
          <slot name="front-slot"></slot>
          <el-table-column v-if="item.type=='index'" :key="index" type="index" width="50">
          </el-table-column>
          <el-table-column v-else-if="item.type=='select'" :key="index" type="selection" width="55">
          </el-table-column>
          <el-table-column v-else :key="index" v-bind="item">
            <template slot-scope="scope">
              <div v-if="!item.hidden">
                 <label v-if="item.type === 'operate'">
                  <a href="javascript:void(0)" class="operate-button" v-for="(operate, index) in item.operates" :key="index" @click="handleClick(operate, scope.row)">
                    {{operate.name}}
                    &nbsp;&nbsp;
                  </a>
                </label>
                <span v-else>
                  {{scope.row[item.prop]}}
                </span>
              </div>
              <div v-else>
                <slot :name="item.slot" :scope="scope"></slot>
              </div>
            </template>
          </el-table-column>
      </template>
      <slot></slot>
    </el-table>
    <div v-if="pagination!=null">
      <el-pagination v-bind="pagination"
        @size-change="pagination.handleSizeChange"
        @current-change="pagination.handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'd2-base-table',
  props: {
    /**
     * @description 表格数据
     */
    tableData: {
      type: Array,
      required: true,
      default: () => []
    },
    /**
     * @description 索引列
     */
    index: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * @description 多选列
     */
    select: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * @description 表头数据
     */
    tableHeader: {
      type: Array,
      required: true,
      default: () => []
    },
    /**
     * @description 加载
     */
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * @description 加载样式
     */
    loadingOptions: {
      type: Object,
      default: () => {
        return {
          text: '',
          spinner: '',
          background: ''
        }
      },
      required: false
    },
    /**
     * @description 属性
     */
    options: {
      type: Object,
      default: () => {},
      required: false
    },
    /**
     * @description 分页
     */
    pagination: {
      type: Object,
      default: null,
      required: false
    }
  },
  methods: {
    handleClick () {
      console.log(this.$slots)
      this.$emit('test', '11111')
    },
    /**
     * @description 行选中状态
     */
    handleCurrentChange (currentRow, oldCurrentRow) {
      this.$emit('current-change', currentRow, oldCurrentRow)
    },
    /**
     * @description 勾选数据时触发的事件
     */
    handleSelect (selection, row) {
      this.$emit('select', selection, row)
    },
    /**
     * @description 勾选全选时触发的事件
     */
    handleSelectAll (selection) {
      this.$emit('select-all', selection)
    },
    /**
     * @description 复选框选择项发生变化时触发的事件
     */
    handleSelectionChange (selection) {
      this.$emit('selection-change', selection)
    },
    /**
     * @description 单元格 hover 进入时触发的事件
     */
    handleCellMouseEnter (row, column, cell, event) {
      this.$emit('cell-mouse-enter', row, column, cell, event)
    },
    /**
     * @description 单元格 hover 退出时触发的事件
     */
    handleCellMouseLeave (row, column, cell, event) {
      this.$emit('cell-mouse-leave', row, column, cell, event)
    },
    /**
     * @description 单元格点击时触发的事件
     */
    handleCellClick (row, column, cell, event) {
      this.$emit('cell-click', row, column, cell, event)
    },
    /**
     * @description 单元格双击时触发的事件
     */
    handleCellDblclick (row, column, cell, event) {
      this.$emit('cell-dblclick', row, column, cell, event)
    },
    /**
     * @description 行点击时触发的事件
     */
    handleRowClick (row, event, column) {
      this.$emit('row-click', row, event, column)
    },
    /**
     * @description 行右键点击时触发的事件
     */
    handleRowContextmenu (row, event) {
      this.$emit('row-contextmenu', row, event)
    },
    /**
     * @description 行双击时触发的事件
     */
    handleRowDblclick (row, event) {
      this.$emit('row-dblclick', row, event)
    },
    /**
     * @description 表头点击时触发的事件
     */
    handleHeaderClick (column, event) {
      this.$emit('header-click', column, event)
    },
    /**
     * @description 表头右键点击时触发的事件
     */
    handleHeaderContextmenu (column, event) {
      this.$emit('header-contextmenu', column, event)
    }
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
