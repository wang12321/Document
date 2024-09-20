---
title: 搜索表单
---

<script setup>
import { reactive } from 'vue';
import {ElInput} from 'element-plus';
const state = reactive({
    modelValue: '',
      formData: {
        number: 50,
        sex: '男',
        region: ['中国']
      },
      isAdvanced: true,
      formOptions: [
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
        },
        {
          title: '名称',
          key: 'aas',
          type: 'slot',
          placeholder: '请输入内容',
          isAdvanced: false,
          render: (h, params) => {
            return h(ElInput, {
              type: 'text',
              placeholder: params.placeholder,
              modelValue: state.modelValue,
              onInput: (value) => {
                state.modelValue = value
              }
            })
          }
        }
      ],
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
                    parameter: 'formOptions',
                    describe: '表单项，具体配置参数看formOptions',
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
              parameter: 'isAdvanced',
              describe: '为true时显示展开收起',
              type: 'Boolean',
              default: 'false',
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
            {
              parameter: 'size',
              describe: '表单项大小',
              type: 'String',
              default: 'default',
              mandatory: false
            },
            ]   
        },
        {
          name: 'formOptions',
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
                  "['input','select','month','year','cascader','date','daterange','datetimerange','dateH',','time','datetime','radio','checkbox','inputNumber','datePicker','slot']",
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
const change = () => {
}
</script>

# 搜索表单文档

<search-form
    :form-options="state.formOptions"
    :form-data="state.formData"
    :isAdvanced="state.isAdvanced"
    :resetBtn="{name:''}"
    @submit="submit"
    @reset="reset">
    <template #button>
        <el-button type="text" >
            扩展
        </el-button>
    </template>
</search-form>

::: details 展开代码
```vue { foldable }
<search-form
    :form-options="state.formOptions"
    :form-data="state.formData"
    :isAdvanced="state.isAdvanced"
    :resetBtn="{name:''}"
    @submit="submit"
    @reset="reset">
    <template #button>
        <el-button type="text" >
            扩展
        </el-button>
    </template>
</search-form>
<script lang="ts" setup name="index">
import {ElInput} from 'element-plus';
const state = reactive({
    modelValue: '',
      formData: {
        number: 50,
        sex: '男',
        region: ['中国']
      },
      isAdvanced: true,
      formOptions: [
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
        },
        {
          title: '名称',
          key: 'aas',
          type: 'slot',
          placeholder: '请输入内容',
          isAdvanced: true,
          render: (h, params) => {
            return h(ElInput, {
              type: 'text',
              placeholder: params.placeholder,
              modelValue: state.modelValue,
              onInput: (value) => {
                state.modelValue = value
              }
            })
          }
        }
      ],
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
                    parameter: 'formOptions',
                    describe: '表单项，具体配置参数看formOptions',
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
              parameter: 'isAdvanced',
              describe: '为true时显示展开收起',
              type: 'Boolean',
              default: 'false',
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
            {
              parameter: 'size',
              describe: '表单项大小',
              type: 'String',
              default: 'default',
              mandatory: false
            },
            ]   
        },
        {
          name: 'FormOptions',
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
                  "['input','select','month','year','cascader','date','daterange','datetimerange','dateH',','time','datetime','radio','checkbox','inputNumber','datePicker','slot']",
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

