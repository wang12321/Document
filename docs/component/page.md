---
title: 组合页面
---

<script setup>
import { reactive,ref,computed } from 'vue';

 const state1 = reactive({
    itemData: [ 
        {
            name: 'Props',
            data: [{
                    parameter: 'getPageDataApi',
                    describe: '表格数据接口API',
                    type: 'Function',
                    default: '',
                    mandatory: false
                },{
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
                    parameter: 'searchFormConfig',
                    describe: '表格搜索条件配置',
                    type: 'Object',
                    default: 'false',
                    mandatory: false
                },{
                    parameter: 'searchFormOptions',
                    describe: '表格搜索条件列表',
                    type: 'Array',
                    default: '[]',
                    mandatory: false
                },{
                    parameter: 'tableConfig',
                    describe: '表格配置',
                    type: 'Object',
                    default: '{}',
                    mandatory: false
                },{
                    parameter: 'tableTopRightBtnList',
                    describe: '表格右侧按钮集',
                    type: 'Array',
                    default: '[]',
                    mandatory: false
                },{
                    parameter: 'tableTopLeftBtnList',
                    describe: '表格左侧按钮集',
                    type: 'Array',
                    default: '[]',
                    mandatory: false
                },
            ],

        },{
          name: 'tableConfig',
          data: [
                {
                    parameter: 'options',
                    describe: '表格配置',
                    type: 'Object',
                    default: '{}',
                    mandatory: false
                },{
                    parameter: 'showSummary',
                    describe: '是否需要表格合计',
                    type: 'Boolean',
                    default: 'false',
                    mandatory: false
                },{
                    parameter: 'summaryMethod',
                    describe: '表格合计函数',
                    type: 'Function',
                    default: '',
                    mandatory: false
                },{
                    parameter: 'isPagination',
                    describe: '是否需要分页',
                    type: 'Boolean',
                    default: 'true',
                    mandatory: false
                },{
                    parameter: 'isTableTop',
                    describe: '是否需要表格头部按钮',
                    type: 'Boolean',
                    default: 'true',
                    mandatory: false
                },{
                    parameter: 'isSerialNumber',
                    describe: '是否需要表格序号',
                    type: 'Boolean',
                    default: 'true',
                    mandatory: false
                }
        ]},{
          name: 'searchFormConfig',
          data: [
            {
                    parameter: 'labelWidth',
                    describe: '表单label宽度',
                    type: 'String',
                    default: '100px',
                    mandatory: false
                },{
              parameter: 'isAdvanced',
              describe: '为true时显示展开收起',
              type: 'Boolean',
              default: 'false',
              mandatory: false
            },{
              parameter: 'isShow',
              describe: '为true时显示查询条件',
              type: 'Boolean',
              default: 'true',
              mandatory: false
            },{
                    parameter: 'rules',
                    describe: '校验',
                    type: 'Array',
                    default: '[]',
                    mandatory: false
                },
                {
                    parameter: 'widthDefault',
                    describe: '表单项宽度',
                    type: 'String',
                    default: '200px',
                    mandatory: false
                },
            {
              parameter: 'submitBtn',
              describe: '确定按钮',
              type: 'Object',
              default: '',
              mandatory: false
            },
            {
              parameter: 'resetBtn',
              describe: '重置按钮',
              type: 'Object',
              default: '',
              mandatory: false
            },
        ]},{
          name: 'searchFormOptions',
          data: [
            {
              parameter: 'title',
              describe: '表单项label',
              type: 'String',
              default: '-',
              mandatory: true
            },
            {
              parameter: 'titleShow',
              describe: '表单项label是否显示，为true时显示',
              type: 'String',
              default: 'false',
              mandatory: true
            },
            {
              parameter: 'key',
              describe: '表单项model',
              type: 'String',
              default: '-',
              mandatory: true
            },
            {
              parameter: 'placeholder',
              describe: '表单项placeholder',
              type: 'String',
              default: '-',
              mandatory: false
            },
            {
              parameter: 'type',
              describe: '必传, 表单项type',
              type: 'String',
              default:
                  "['input','select','month', 'year', 'cascader','date', 'daterange', 'datetimerange', 'dateH', 'time', 'datetime', 'radio','checkbox', 'inputNumber', 'datePicker', 'slot']",
              mandatory: true
            },
            {
              parameter: 'options',
              describe: 'type为select,radio时有效',
              type: 'object',
              default: '-',
              mandatory: false
            },
            {
              parameter: 'label',
              describe: 'type为select,radio时有效，option label',
              type: 'String',
              default: '-',
              mandatory: false
            },
            {
              parameter: 'value',
              describe: 'type为select,radio时有效，option value',
              type: 'String',
              default: '-',
              mandatory: false
            },
            {
              parameter: 'width',
              describe: '设置input宽度',
              type: 'String',
              default: '-',
              mandatory: false
            },
            {
              parameter: 'isAdvanced',
              describe: '当mode为normal时有效，为true时显示在展开收起',
              type: 'Boolean',
              default: 'false',
              mandatory: false
            },
            {
              parameter: 'hidden',
              describe: '是否显示当前表单项',
              type: 'Boolean',
              default: 'false',
              mandatory: false
            },
            {
              parameter: 'change',
              describe: '@change回调事件 附件可以在这个方法中处理绑定',
              type: 'Function',
              default: '-',
              mandatory: false
            },
            {
              parameter: 'activeText',
              describe: 'type为switch时有效',
              type: 'String',
              default: '-',
              mandatory: false
            },
            {
              parameter: 'inactiveText',
              describe: 'type为switch时有效',
              type: 'String',
              default: '-',
              mandatory: false
            },
            {
              parameter: 'min',
              describe: 'type为inputNumber时有效',
              type: 'String',
              default: '-',
              mandatory: false
            },
            {
              parameter: 'max',
              describe: 'type为inputNumber时有效',
              type: 'String',
              default: '-',
              mandatory: false
            },
            {
              parameter: 'border',
              describe: 'checkbox 有效',
              type: 'Boolean',
              default: '-',
              mandatory: false
            },
            {
              parameter: 'disabled',
              describe: 'disabled 默认关闭',
              type: 'Boolean',
              default: 'false',
              mandatory: false
            }
          ]
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
                    parameter: 'onUpTableData',
                    describe: '表格数据回调',
                    type: 'Function',
                    default: '',
                    mandatory: false
                },{
                    parameter: 'onSubmit',
                    describe: '表格条件查询回调',
                    type: 'Function',
                    default: '',
                    mandatory: false
                },{
                    parameter: 'onReset',
                    describe: '表格条件重置回调',
                    type: 'Function',
                    default: '',
                    mandatory: false
                },{
                    parameter: 'onReloadData',
                    describe: '表格分页回调',
                    type: 'Function',
                    default: '',
                    mandatory: false
                },{
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
        },{
            name: 'Slot',
            data: [{
                    parameter: 'tableTopLeft',
                    describe: '表格左侧插槽',
                    type: 'slot',
                    default: '',
                    mandatory: false
                },{
                    parameter: 'tableTopRight',
                    describe: '表格右侧插槽',
                    type: 'slot',
                    default: '',
                    mandatory: false
                }
            ]
        }
    ]
});
const activeName= ref('first');
const compositePageRef= ref();
const state = reactive({
  pageData:{
    total:0,
    pageNum:1,
    pageSize:10
  },
  searchFormData:{
    value:''
  },
  searchFormConfig:{
  },
  tableTopBtnList:[
      {
        label: '新增',
        show: false,
        icon:'Edit',
        btnType: 'primary',
        method: (index, row) => {
          console.log(index, row);
          alert('新增')
        }
      }
      ],
  tableData:[{tzmc:false}],
  operates:{
    align: 'left',
    width: '100px',
    fixed:'right',
    label: '操作',
    isButton: false,
    list: [
      {
        label: '查看',
        show: true,
        icon:'Edit',
        btnType: 'primary',
        plain: true,
        method: (index, row) => {
          console.log(index, row);
          alert('查看')
        }
      }
    ]
  }
});
function change() {
  console.log('触发事件')
}

function onAction() {
  console.log('触发事件')
}

const tableColumn = computed(()=> {
  return [
    {
      label: '名称',
      prop: 'tzmc',
      align: 'left',
      tip:'扩展提示'
    },
    {
      label: '更新时间',
      prop: 'xgsj'
    }
  ]
});
const searchFormOptions = computed(()=>{
  return [
    { title: '昵称', key: 'name', type: 'input', clearable: true, isAdvanced: true },
    {
      titleShow: true,
      clearable: true,
      title: '是否',
      key: 'yes',
      type: 'select',
      options: [
        { value: '1', label: '是' },
        { value: '2', label: '否' }
      ],
      label: 'label',
      value: 'value',
      change: change
    },
    { titleShow: true, clearable: true, title: '年份', key: 'year', type: 'year' },
    { titleShow: true, clearable: true, title: '日期', key: 'date', type: 'date' },
    { titleShow: true, clearable: true, title: '时间', key: 'time', type: 'time' },
    {
      titleShow: true,
      clearable: true,
      title: '性别',
      key: 'sex',
      type: 'radio',
      options: [
        { value: '1', label: '男' },
        { value: '2', label: '女' }
      ],
      label: 'label',
      value: 'value'
    },
    {
      border: true,
      titleShow: true,
      clearable: true,
      title: '地区',
      key: 'region',
      type: 'checkbox',
      options: [
        { value: '1', label: '中国' },
        { value: '2', label: '德国' }
      ],
      label: 'label',
      value: 'value'
    },
    {
      titleShow: true,
      clearable: true,
      title: '数量',
      key: 'number',
      type: 'inputNumber',
      min: 0,
      max: 100
    },
    {
      titleShow: true,
      clearable: true,
      title: '开关',
      key: 'switch',
      type: 'switch',
      inactiveText: '未选中',
      activeText: '选中'
    }
  ]
});
const handleClick = ()=>{

};
const onReloadData = (value)=>{
  console.log('onReloadData1',value);
  state.pageData.total = 200
}
</script>

# 组合页面文档

<CompositePage
ref="compositePageRef"
:searchFormOptions="searchFormOptions"
:searchFormData="state.searchFormData"
:searchFormConfig="state.searchFormConfig"
:tableTopRightBtnList="state.tableTopBtnList"
:tableTopLeftBtnList="state.tableTopBtnList"
:tableColumn="tableColumn"
:operates="state.operates"
:tableData="state.tableData"
:pageData="state.pageData"
@onReloadData="onReloadData">
    <template #tableTopLeft>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="User" name="first"></el-tab-pane>
        <el-tab-pane label="Config" name="second"></el-tab-pane>
        <el-tab-pane label="Role" name="third"></el-tab-pane>
      </el-tabs>
    </template>
    <template #tableTopRight>
      <el-button size="small" loading type="primary" style="margin-right: 9px"  @click="onAction">
        扩展1
      </el-button>
    </template>
    <template #cs="{ row }" >
      <el-table-column :label="row.label">
        <template #default>
          <span>0</span>
        </template>
      </el-table-column>
    </template>
    <template #tableExpand>
      <el-table-column type="expand">
        <template #default="props">
          <div>
            <el-table :data="props.row.family">
              <el-table-column label="Name" prop="name" />
              <el-table-column label="State" prop="state" />
            </el-table>
          </div>
        </template>
      </el-table-column>
    </template>
  </CompositePage>


::: details 展开代码
```vue { foldable }

<CompositePage
ref="compositePageRef"
:searchFormOptions="searchFormOptions"
:searchFormData="state.searchFormData"
:searchFormConfig="state.searchFormConfig"
:tableTopRightBtnList="state.tableTopBtnList"
:tableTopLeftBtnList="state.tableTopBtnList"
:tableColumn="tableColumn"
:operates="state.operates"
:tableData="state.tableData"
:pageData="state.pageData"
@onReloadData="onReloadData">
    <template #tableTopLeft>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="User" name="first"></el-tab-pane>
        <el-tab-pane label="Config" name="second"></el-tab-pane>
        <el-tab-pane label="Role" name="third"></el-tab-pane>
      </el-tabs>
    </template>
    <template #tableTopRight>
      <el-button size="small" loading type="primary" style="margin-right: 9px"  @click="onAction">
        扩展1
      </el-button>
    </template>
    <template #cs="{ row }" >
      <el-table-column :label="row.label">
        <template #default>
          <span>0</span>
        </template>
      </el-table-column>
    </template>
    <template #tableExpand>
      <el-table-column type="expand">
        <template #default="props">
          <div>
            <el-table :data="props.row.family">
              <el-table-column label="Name" prop="name" />
              <el-table-column label="State" prop="state" />
            </el-table>
          </div>
        </template>
      </el-table-column>
    </template>
  </CompositePage>

<script setup>
  const activeName= ref('first');
const compositePageRef= ref();
const state = reactive({
  pageData:{
    total:0,
    pageNum:1,
    pageSize:10
  },
  searchFormData:{
    value:''
  },
  searchFormConfig:{
  },
  tableTopBtnList:[
      {
        label: '新增',
        show: false,
        icon:'Edit',
        btnType: 'primary',
        method: (index, row) => {
          console.log(index, row);
          alert('新增')
        }
      }
      ],
  tableData:[{tzmc:false}],
  operates:{
    align: 'left',
    width: '100px',
    fixed:'right',
    label: '操作',
    isButton: false,
    list: [
      {
        label: '查看',
        show: true,
        icon:'Edit',
        btnType: 'primary',
        plain: true,
        method: (index, row) => {
          console.log(index, row);
          alert('查看')
        }
      }
    ]
  }
});
function change() {
  console.log('触发事件')
}

function onAction() {
  console.log('触发事件')
}

const tableColumn = computed(()=> {
  return [
    {
      label: '名称',
      prop: 'tzmc',
      align: 'left',
      tip:'扩展提示'
    },
    {
      label: '更新时间',
      prop: 'xgsj'
    }
  ]
});
const searchFormOptions = computed(()=>{
  return [
    { title: '昵称', key: 'name', type: 'input', clearable: true, isAdvanced: true },
    {
      titleShow: true,
      clearable: true,
      title: '是否',
      key: 'yes',
      type: 'select',
      options: [
        { value: '1', label: '是' },
        { value: '2', label: '否' }
      ],
      label: 'label',
      value: 'value',
      change: change
    },
    { titleShow: true, clearable: true, title: '年份', key: 'year', type: 'year' },
    { titleShow: true, clearable: true, title: '日期', key: 'date', type: 'date' },
    { titleShow: true, clearable: true, title: '时间', key: 'time', type: 'time' },
    {
      titleShow: true,
      clearable: true,
      title: '性别',
      key: 'sex',
      type: 'radio',
      options: [
        { value: '1', label: '男' },
        { value: '2', label: '女' }
      ],
      label: 'label',
      value: 'value'
    },
    {
      border: true,
      titleShow: true,
      clearable: true,
      title: '地区',
      key: 'region',
      type: 'checkbox',
      options: [
        { value: '1', label: '中国' },
        { value: '2', label: '德国' }
      ],
      label: 'label',
      value: 'value'
    },
    {
      titleShow: true,
      clearable: true,
      title: '数量',
      key: 'number',
      type: 'inputNumber',
      min: 0,
      max: 100
    },
    {
      titleShow: true,
      clearable: true,
      title: '开关',
      key: 'switch',
      type: 'switch',
      inactiveText: '未选中',
      activeText: '选中'
    }
  ]
});
const handleClick = ()=>{

};
const onReloadData = (value)=>{
  console.log('onReloadData1',value);
  state.pageData.total = 200
}
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
