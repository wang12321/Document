---
title: 分页
---

<script setup>
import { reactive } from 'vue';

 const state1 = reactive({
    itemData: [ 
        {
            name: 'Props',
            data: [
                {
                    parameter: 'pageData',
                    describe: '分页数据',
                    type: 'Object',
                    default: '{}',
                    mandatory: false
                },
                {
                    parameter: 'paginationAlign',
                    describe: '显示分页的对齐方式',
                    type: 'String',
                    default: 'left',
                    mandatory: false
                },
                {
                    parameter: 'pageSizes',
                    describe: '显示分页数据多少条的选项',
                    type: 'Array',
                    default: '[10, 20, 30, 40]',
                    mandatory: false
                },
                {
                    parameter: 'size',
                    describe: '显示分页大小',
                    type: 'String',
                    default: 'default',
                    mandatory: false
                },
                {
                    parameter: 'layout',
                    describe: '显示分页样式',
                    type: 'String',
                    default: 'total, prev, pager, next, jumper',
                    mandatory: false
                },
                {
                    parameter: 'nextText',
                    describe: '显示下一页文本',
                    type: 'String',
                    default: '',
                    mandatory: false
                },
                {
                    parameter: 'nextIcon',
                    describe: '显示下一页图标',
                    type: 'String',
                    default: 'ArrowRight',
                    mandatory: false
                },
                {
                    parameter: 'prevText',
                    describe: '显示上一页文本',
                    type: 'String',
                    default: '',
                    mandatory: false
                },
                {
                    parameter: 'prevIcon',
                    describe: '显示上一页图标',
                    type: 'String',
                    default: 'ArrowLeft',
                    mandatory: false
                },
                {
                    parameter: 'background',
                    describe: '分页带背景',
                    type: 'Boolean',
                    default: 'false',
                    mandatory: false
                }
            ],

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
            name: 'Event',
            data: [{
                    parameter: 'onReloadData',
                    describe: '分页页数变化，回调函数',
                    type: 'Function',
                    default: '',
                    mandatory: false
                }
            ]
        }
    ]
});
  let pageData = reactive(
    {
      total:120,
      pageSize:10,
      pageNum:2
    }
);
let onReloadData = () => {
}
</script>

# 分页文档

<pagination
    :pageData="pageData"
    :background=true
    @onReloadData="onReloadData">
</pagination>


::: details 展开代码
```vue { foldable }

<pagination
    :pageData="pageData"
    :background=true
    @onReloadData="onReloadData">
</pagination>

<script setup>
  let pageData = reactive(
    {
      total:120,
      pageSize:10,
      pageNum:2
    }
);
let onReloadData = () => {
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
