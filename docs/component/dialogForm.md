---
title: 弹窗表单
---

<script setup>
import { ref, reactive,computed } from 'vue';
const state = reactive({
    loading: false,
	visible: false,
	rules: {
    user: [
      { required: true, message: '请输入姓名', trigger: 'blur' },
    ],
  },
	formData: {
		number: 50,
		sex: '男',
		region: ['中国'],
		value: 'ff',
		nameS: '',
	},
    itemData:[
        {
            name: 'Props',
            data: [
                {
                    parameter: 'formData',
                    describe: '表单数据存储对象',
                    type: 'Object',
                    default: '{}',
                    mandatory: false
                },
                {
                    parameter: 'formList',
                    describe: '表单项，具体配置参数看formList',
                    type: 'Array',
                    default: '[]',
                    mandatory: true
                },
                {
                    parameter: 'rules',
                    describe: '校验',
                    type: 'Array',
                    default: '[]',
                    mandatory: false
                },
                {
                    parameter: 'labelWidth',
                    describe: '表单label宽度',
                    type: 'String',
                    default: '100px',
                    mandatory: false
                },{
              parameter: 'isFooterBtn',
              describe: '是否有底部按钮',
              type: 'Boolean',
              default: 'true',
              mandatory: false
            },
            {
              parameter: 'submitText',
              describe: '确定按钮名称',
              type: 'String',
              default: '确 定',
              mandatory: false
            },
            {
              parameter: 'closeText',
              describe: '关闭按钮名称',
              type: 'String',
              default: '取 消',
              mandatory: false
            },
            {
              parameter: 'span',
              describe: '几列，24为已列',
              type: 'Number',
              default: '24',
              mandatory: false
            },
            {
              parameter: 'loading',
              describe: '按钮请求状态',
              type: 'Boolean',
              default: 'false',
              mandatory: false
            },{
              parameter: 'size',
              describe: '表单项大小',
              type: 'String',
              default: 'default',
              mandatory: false
            },
            ]   
        },
        {
          name: 'FormList',
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
              describe: '表单项model，对应formData的key',
              type: 'String',
              default: '-',
              mandatory: true
            },
            {
              parameter: 'placeholder',
              describe: '表单项placeholder',
              type: 'String',
              default: '请填写{{title}}',
              mandatory: false
            },
            {
              parameter: 'type',
              describe: "表单项type 如：'input','select','month','year', 'cascader','date', 'daterange','datetimerange','dateH', 'time','datetime','radio', 'checkbox','inputNumber','datePicker', 'slot'",
              type: 'String',
              default:"-",
              mandatory: true
            },
            {
              parameter: 'options',
              describe: 'type为select,radio有效',
              type: 'Array',
              default: '[]',
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
              default: '100%',
              mandatory: false
            },
            {
              parameter: 'clearable',
              describe: '是否开启清除，默认开启',
              type: 'Boolean',
              default: 'false',
              mandatory: false
            },
            {
              parameter: 'change',
              describe: '@change回调事件',
              type: 'Function',
              default: '',
              mandatory: false
            },
            {
              parameter: 'isHideForm',
              describe: '是否显示当前表单项',
              type: 'Boolean',
              default: 'false',
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
              describe: 'type为switch时有效,未选中文字',
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
              describe: 'checkbox 有效，显示边框',
              type: 'Boolean',
              default: 'false',
              mandatory: false
            },
            {
              parameter: 'disabled',
              describe: 'disabled 默认关闭',
              type: 'Boolean',
              default: 'false',
              mandatory: false
            },
            {
              parameter: 'limit',
              describe: 'type为uploadImg时有效，图片数量限制',
              type: 'String',
              default: '',
              mandatory: false
            },
            {
              parameter: 'multiple',
              describe: 'type为select时有效，多选',
              type: 'Boolean',
              default: 'false',
              mandatory: false
            },
            {
              parameter: 'filterable',
              describe: 'type为select时有效，过滤筛选',
              type: 'Boolean',
              default: 'false',
              mandatory: false
            }
          ]
        },
        {
          name: 'Events',
          data: [
            {
              parameter: 'onCancel',
              describe: '取消按钮',
              type: 'Function',
              default: '-',
              mandatory: false
            },
            {
              parameter: 'onSubmit',
              describe: '提交按钮',
              type: 'Function',
              default: '-',
              mandatory: false
            }
          ]
        },
        {
          name: 'Slot',
          data: [
            {
              parameter: 'slot',
              describe: '表单插槽，在FormList定义type,支持语法jsx',
              type: 'String',
              default: '-',
              mandatory: false
            },
            {
              parameter: 'slotFormItem',
              describe: '表单插槽,自定义内容',
              type: 'String',
              default: '-',
              mandatory: false
            }
          ]
        }
    ]
});
const formList = computed(() => {
	return [
		{ title: '用户', key: 'user', type: 'input', clearable: true, disabled: true },
    { clearable: true, title: '数量', key: 'number', type: 'number', min: 0, max: 100 },
    {
			clearable: true,
			title: '是否',
			key: 'yes',
			type: 'selectID',
      filterable:true,
      remote:true,
      remoteMethod:(res)=>{
        console.log(1111,res)
      },
			options: [
				{ value: '1', label: '是' },
				{ value: '2', label: '否' },
			],
			label: 'label',
			value: 'value',
		},
		{ clearable: true, title: '年份', key: 'year', type: 'year' },
		{ clearable: true, title: '日期', key: 'date', type: 'date',disabled:true },
		{ clearable: true, title: '时间', key: 'time', type: 'time', disabled: true },
		{ title: '名称',clearable:true, key: 'slotFormItem', type: 'slotFormItem' },
		{
			clearable: true,
			title: '性别',
			key: 'sex',
			isHideForm: false,
			type: 'radioNO',
      options: [
				{ value: '1', label: '男' },
				{ value: '2', label: '女' },
			],
			label: 'label',
			value: 'value',
		},
		{
			clearable: true,
			title: '地区',
			key: 'region',
			isHideForm: true,
			type: 'checkbox',
			options: [
				{ value: '1', label: '中国' },
				{ value: '2', label: '德国' },
			],
			label: 'label',
			value: 'value',
		},
		{ clearable: true, title: '数量', key: 'number', type: 'inputNumber', min: 0, max: 100 },
		{ clearable: true, title: '开关', key: 'switch', type: 'switch', inactiveText: '未选中', activeText: '选中' },
		{
			limit: 2,
			clearable: true,
			title: '图片',
			key: 'uploadImg',
			type: 'uploadImg',
			change: (file, files) => {
				console.log(file, files)
			},
		},
	]
});
const editSome = () => {
	state.visible = true
}
</script>

# 弹窗表单文档

<el-button @click="editSome" type="primary" style="margin: 20px">新增一列</el-button>
<el-dialog v-model="state.visible" title="对话框标题" width="50%">
    <dialog-form
        :label-width="'100px'"
        :form-list="formList"
        :form-data="state.formData"
        :rules="state.rules"
        :loading="state.loading"
        @onSubmit="onSubmit"
        @onCancel="onCancel">
        <template v-slot:slotFormItem>
            <el-input clearable v-model="state.formData.names" placeholder="asd"></el-input>
        </template>
    </dialog-form>
</el-dialog>

::: details 展开代码
```vue { foldable }
<el-button @click="editSome" type="primary" style="margin: 20px">新增一列</el-button>
<el-dialog v-model="state.visible" title="对话框标题" width="50%">
    <dialog-form
        :label-width="'100px'"
        :form-list="formList"
        :form-data="state.formData"
        :rules="state.rules"
        :loading="state.loading"
        @onSubmit="onSubmit"
        @onCancel="onCancel">
        <template v-slot:slotFormItem>
            <el-input clearable v-model="state.formData.names" placeholder="asd"></el-input>
        </template>
    </dialog-form>
</el-dialog>

<script lang="ts" setup name="index">
const state = reactive({
    loading: false,
	visible: false,
	rules: {
    user: [
      { required: true, message: '请输入姓名', trigger: 'blur' },
    ],
  },
	formData: {
		number: 50,
		sex: '男',
		region: ['中国'],
		value: 'ff',
		nameS: '',
	}
});
const formList = computed(() => {
	return [
		{ title: '用户', key: 'user', type: 'input', clearable: true, disabled: true },
    { clearable: true, title: '数量', key: 'number', type: 'number', min: 0, max: 100 },
    {
			clearable: true,
			title: '是否',
			key: 'yes',
			type: 'selectID',
      filterable:true,
      remote:true,
      remoteMethod:(res)=>{
        console.log(1111,res)
      },
			options: [
				{ value: '1', label: '是' },
				{ value: '2', label: '否' },
			],
			label: 'label',
			value: 'value',
		},
		{ clearable: true, title: '年份', key: 'year', type: 'year' },
		{ clearable: true, title: '日期', key: 'date', type: 'date',disabled:true },
		{ clearable: true, title: '时间', key: 'time', type: 'time', disabled: true },
		{ title: '名称',clearable:true, key: 'slotFormItem', type: 'slotFormItem' },
		{
			clearable: true,
			title: '性别',
			key: 'sex',
			isHideForm: false,
			type: 'radioNO',
      options: [
				{ value: '1', label: '男' },
				{ value: '2', label: '女' },
			],
			label: 'label',
			value: 'value',
		},
		{
			clearable: true,
			title: '地区',
			key: 'region',
			isHideForm: true,
			type: 'checkbox',
			options: [
				{ value: '1', label: '中国' },
				{ value: '2', label: '德国' },
			],
			label: 'label',
			value: 'value',
		},
		{ clearable: true, title: '数量', key: 'number', type: 'inputNumber', min: 0, max: 100 },
		{ clearable: true, title: '开关', key: 'switch', type: 'switch', inactiveText: '未选中', activeText: '选中' },
		{
			limit: 2,
			clearable: true,
			title: '图片',
			key: 'uploadImg',
			type: 'uploadImg',
			change: (file, files) => {
				console.log(file, files)
			},
		},
	]
});
const editSome = () => {
	state.visible = true
}
</script>
```
:::

## 属性
<div v-for="item in state.itemData">
<div style="font-weight: bold">{{item.name}}</div>
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

