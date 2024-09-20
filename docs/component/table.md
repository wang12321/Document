---
title: 表格
---

<script setup>
import { reactive } from 'vue';

 const state1 = reactive({
    itemData: [ 
        {
            name: 'Props',
            data: [{
                    parameter: 'tableData',
                    describe: '表格数据对象',
                    type: 'Array',
                    default: '[]',
                    mandatory: false
                },{
                    parameter: 'tableColumn',
                    describe: '表格列数据对象',
                    type: 'Array',
                    default: '[]',
                    mandatory: false
                },
                {
                    parameter: 'pageData',
                    describe: '分页组建的配置项数据',
                    type: 'Object',
                    default: '{}',
                    mandatory: false
                },{
                    parameter: 'options',
                    describe: '表格配置',
                    type: 'Object',
                    default: '{}',
                    mandatory: false
                },{
                    parameter: 'operates',
                    describe: '表格按钮配置',
                    type: 'Object',
                    default: '{}',
                    mandatory: false
                },{
                    parameter: 'showSummary',
                    describe: '是否需要表格合计',
                    type: 'Boolean',
                    default: 'false',
                    mandatory: false
                }
            ],

        },{
            name: 'tableColumn',
            data: [{
                    parameter: 'label',
                    describe: '列名称',
                    type: 'String',
                    default: '',
                    mandatory: true
                },{
                    parameter: 'prop',
                    describe: '列字段',
                    type: 'String',
                    default: '',
                    mandatory: true
                },{
                    parameter: 'align',
                    describe: '对齐方式',
                    type: 'String',
                    default: 'left',
                    mandatory: false
                },{
                    parameter: 'showOverflowTooltip',
                    describe: '内容过长Tip显示',
                    type: 'Boolean',
                    default: 'false',
                    mandatory: false
                },{
                    parameter: 'isHidden',
                    describe: '隐藏当前列',
                    type: 'Boolean',
                    default: 'false',
                    mandatory: false
                },{
                    parameter: 'slot',
                    describe: '列插槽',
                    type: 'String',
                    default: '',
                    mandatory: false
                },{
                    parameter: 'formatter',
                    describe: '自定义内容',
                    type: 'Function',
                    default: '',
                    mandatory: false
                },{
                    parameter: 'render',
                    describe: '自定义内容,支持jsx语法',
                    type: 'Function',
                    default: '',
                    mandatory: false
                },{
                    parameter: 'tip',
                    describe: '表头列扩展提示',
                    type: 'String',
                    default: '',
                    mandatory: false
                },{
                    parameter: 'showTip',
                    describe: '表头列扩展自定义内容，支持jsx语法',
                    type: 'Function',
                    default: '',
                    mandatory: false
                },
            ]
        },{
            name: 'PageData',
            data: [{
                    parameter: 'total',
                    describe: '总数目',
                    type: 'Number',
                    default: '0',
                    mandatory: false
                },{
                    parameter: 'pageNum',
                    describe: '页数',
                    type: 'Number',
                    default: '1',
                    mandatory: false
                },{
                    parameter: 'pageSize',
                    describe: '每页数',
                    type: 'Number',
                    default: '10',
                    mandatory: false
                },
            ]
        },{
            name: 'options',
            data: [{
                    parameter: 'border',
                    describe: '是否带有纵向边框',
                    type: 'Boolean',
                    default: 'false',
                    mandatory: false
                },{
                    parameter: 'stripe',
                    describe: '是否为斑马纹 table',
                    type: 'Boolean',
                    default: 'false',
                    mandatory: false
                },{
                    parameter: 'fit',
                    describe: '列的宽度是否自撑开',
                    type: 'Boolean',
                    default: 'true',
                    mandatory: false
                },{
                    parameter: 'showHeader',
                    describe: '是否显示表头',
                    type: 'Boolean',
                    default: 'true',
                    mandatory: false
                },{
                    parameter: 'highlightCurrentRow',
                    describe: '是否要高亮当前行',
                    type: 'Boolean',
                    default: 'true',
                    mandatory: false
                },{
                    parameter: 'mutiSelect',
                    describe: '是否多项选择',
                    type: 'Boolean',
                    default: 'false',
                    mandatory: false
                },{
                    parameter: 'loading',
                    describe: '是否正在加载',
                    type: 'Boolean',
                    default: 'false',
                    mandatory: false
                },{
                    parameter: 'defaultValue',
                    describe: '默认值',
                    type: 'Boolean',
                    default: '',
                    mandatory: false
                },
            ]
        },{
            name: 'operates',
            data: [{
                    parameter: 'list',
                    describe: '按钮组',
                    type: 'Array',
                    default: '[]',
                    mandatory: true
                },{
                    parameter: 'width',
                    describe: '列宽',
                    type: 'String',
                    default: '',
                    mandatory: true
                },{
                    parameter: 'fixed',
                    describe: '是否固定',
                    type: 'Boolean',
                    default: 'false',
                    mandatory: true
                },{
                    parameter: 'isButton',
                    describe: '是否文本时按钮格式',
                    type: 'Boolean',
                    default: 'false',
                    mandatory: true
                },{
                    parameter: 'align',
                    describe: '对齐方式',
                    type: 'string',
                    default: 'left',
                    mandatory: true
                },{
                    parameter: 'label',
                    describe: '列文本',
                    type: 'string',
                    default: '',
                    mandatory: true
                },
            ]
        },{
            name: 'list',
            data: [{
                    parameter: 'label',
                    describe: '按钮文本',
                    type: 'String',
                    default: '',
                    mandatory: true
                },{
                    parameter: 'type',
                    describe: '是否删除类型的 [normal, delete] ',
                    type: 'String',
                    default: 'normal',
                    mandatory: true
                },{
                    parameter: 'btnType ',
                    describe: '类型 [primary| success| warning| danger| info|text]',
                    type: 'String',
                    default: '',
                    mandatory: true
                },{
                    parameter: 'show',
                    describe: '是否显示',
                    type: 'Boolean',
                    default: 'false',
                    mandatory: true
                },{
                    parameter: 'icon',
                    describe: '按钮图标',
                    type: 'string',
                    default: '',
                    mandatory: false
                },{
                    parameter: 'plain',
                    describe: '是否普通按钮',
                    type: 'Boolean',
                    default: 'false',
                    mandatory: false
                },{
                    parameter: 'disabled',
                    describe: '是否禁用',
                    type: 'Boolean',
                    default: 'false',
                    mandatory: false
                },{
                    parameter: 'filter',
                    describe: '回调函数，可判断数据权限',
                    type: 'Function',
                    default: '',
                    mandatory: false
                },{
                    parameter: 'method',
                    describe: '回调函数,处理按钮事件',
                    type: 'Function',
                    default: '',
                    mandatory: false
                },
            ]
        },{
            name: 'Event',
            data: [{
                    parameter: 'summaryMethod',
                    describe: '表格合计函数',
                    type: 'Function',
                    default: '',
                    mandatory: false
                },{
                    parameter: 'onSortChange',
                    describe: '表格排序回调',
                    type: 'Function',
                    default: '',
                    mandatory: false
                },{
                    parameter: 'handleSelectionChange',
                    describe: '表格多选回调',
                    type: 'Function',
                    default: '',
                    mandatory: false
                }
            ]
        }
    ]
});
  const state = reactive({
    loading: false,
    visible: false,
    formData: {
    },
    tableData: [{tzmc:123},{tzmc:2}],
    options: {
      loading: false,
      border: false,
      mutiSelect:false,
    },
    tableColumn: [
      {
        label: '测试',
        prop: 'tzmc',
      },
      {
        label: '创建时间',
        prop: 'lrsj',
        formatter:(row)=>{
          return `<span style="color: dodgerblue;">${row.xgsj || '--'}</span>`
        },
      }, {
        label: '更新时间',
        prop: 'xgsj'
      }
    ],
    operates: {
      align: 'left',
      width: '280px',
      fixed:'right',
      label: '操作',
      isButton: true,
      list: [
        {
          label: '查看',
          show: true,
          icon:'Edit',
          btnType: 'primary',
          plain: true,
          method: (index, row,index1) => {
            console.log(index1);
            alert('查看')
          }
        },
        {
          label: '编辑',
          show: true,
          btnType: 'danger',
          plain: true,
          method: (index, row) => {
            console.log(index, row);
            alert('编辑')
          }
        },
        {
          label: '是否删除当前数据?',
          show: true,
          type: 'delete',
          btnType: 'danger',
          plain: true,
          method: (index, row) => {
            console.log(index, row);
            alert('删除')
          }
        },
      ]
    }
})
</script>

# 表格文档

<TableComponent
    :tableData="state.tableData"
    :tableColumn="state.tableColumn"
    :options="state.options"
    :operates="state.operates" />


::: details 展开代码
```vue { foldable }

<TableComponent
:tableData="state.tableData"
:tableColumn="state.tableColumn"
:options="state.options"
:operates="state.operates" />

<script setup>
  const state = reactive({
    loading: false,
    visible: false,
    formData: {
    },
    tableData: [{tzmc:123},{tzmc:2}],
    options: {
      loading: false,
      border: false,
      mutiSelect:false,
    },
    tableColumn: [
      {
        label: '测试',
        prop: 'tzmc',
      },
      {
        label: '创建时间',
        prop: 'lrsj',
        formatter:(row)=>{
          return `<span style="color: dodgerblue;">${row.xgsj || '--'}</span>`
        },
      }, {
        label: '更新时间',
        prop: 'xgsj'
      }
    ],
    operates: {
      align: 'left',
      width: '280px',
      fixed:'right',
      label: '操作',
      isButton: true,
      list: [
        {
          label: '查看',
          show: true,
          icon:'Edit',
          btnType: 'primary',
          plain: true,
          method: (index, row,index1) => {
            console.log(index1);
            alert('查看')
          }
        },
        {
          label: '编辑',
          show: true,
          btnType: 'danger',
          plain: true,
          method: (index, row) => {
            console.log(index, row);
            alert('编辑')
          }
        },
        {
          label: '是否删除当前数据?',
          show: true,
          type: 'delete',
          btnType: 'danger',
          plain: true,
          method: (index, row) => {
            console.log(index, row);
            alert('删除')
          }
        },
      ]
    }
})
</script>
```
:::


## 属性
<div v-for="item in state1.itemData">
<div style="font-weight: bold">{{item.name || ''}}</div>
    <table>
      <tr>
        <th style="width: 100px">属性名</th>
        <th style="width: 400px">说明</th>
        <th style="width: 40px">类型</th>
        <th style="width: 40px">必填</th>
        <th style="width: 88px">默认值</th>
      </tr>
      <tr v-for="row in item.data">
        <td>{{row.parameter}}</td>
        <td>{{row.describe}}</td>
        <td>{{row.type}}</td>
        <td>{{row.mandatory}}</td>
        <td>{{row.default}}</td>
      </tr>
    </table>
</div>
