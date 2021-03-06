export default `import React from 'react';
import { CardForm } from 'react-core-form';

export default () => {
  return (
    <CardForm
      title="基础表单"
      column={2}
      initialValues={{
        input: '这是默认值',
        password: 'qazwsx',
        inputNumber: '50',
        textArea: '浙江省杭州市',
        select: 1,
        radioGroup: 1,
        checkGroup: [2],
        selectMore: [1, 2],
        switch: true,
        slider: 60,
        rate: 3,
        treeSelect: '0-0-1',
        cascader: ['zhejiang', 'hangzhou'],
        datePicker: '2021-05-18',
        startDate: '2021-06-18',
        endDate: '2021-06-18',
        timePicker: '12:08:23',
        startTime: '12:08:23',
        endTime: '23:08:23',
        upload: [
          {
            uid: '1',
            name: 'icon.svg',
            url: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
          },
        ],
      }}
      onSubmit={async (values) => {
        alert(JSON.stringify(values));
      }}
      schema={[
        {
          type: 'Input',
          name: 'input',
          label: '输入框',
          required: () => true,
        },
        {
          type: 'Password',
          name: 'password',
          label: '密码输入框',
          props: {
            visibilityToggle: false,
          },
        },
        {
          type: 'InputNumber',
          name: 'inputNumber',
          label: '数字输入框',
          props: {
            min: 1,
            max: 999,
          },
        },
        {
          type: 'Select',
          name: 'select',
          label: '下拉选',
          props: {
            options: [
              {
                label: '选项1',
                value: 1,
              },
              {
                label: '选项2',
                value: 2,
              },
            ],
          },
        },
        {
          type: 'RadioGroup',
          name: 'radioGroup',
          label: '单选按钮组',
          props: {
            options: [
              {
                label: '选项1',
                value: 1,
              },
              {
                label: '选项2',
                value: 2,
              },
            ],
          },
        },
        {
          type: 'CheckGroup',
          name: 'checkGroup',
          label: '复选框',
          props: {
            options: [
              {
                label: '选项1',
                value: 1,
              },
              {
                label: '选项2',
                value: 2,
              },
            ],
          },
        },
        {
          type: 'Switch',
          name: 'switch',
          label: '开关切换',
          valuePropName: 'checked',
          props: {
            checkedChildren: '开启',
            unCheckedChildren: '关闭',
          },
        },
        {
          type: 'Rate',
          name: 'rate',
          label: '评分组件',
        },
        {
          type: 'Slider',
          name: 'slider',
          label: '滑块组件',
          props: {},
        },
        {
          type: 'Select',
          name: 'selectMore',
          label: '下拉多选',
          props: {
            mode: 'multiple',
            options: [
              {
                label: '选项1',
                value: 1,
              },
              {
                label: '选项2',
                value: 2,
              },
              {
                label: '选项2',
                value: 3,
              },
            ],
          },
        },
        {
          type: 'TreeSelect',
          name: 'treeSelect',
          label: '树形选择器',
          props: {
            treeData: [
              {
                title: 'Node1',
                value: '0-0',
                children: [
                  {
                    title: 'Child Node1',
                    value: '0-0-1',
                  },
                  {
                    title: 'Child Node2',
                    value: '0-0-2',
                  },
                ],
              },
              {
                title: 'Node2',
                value: '0-1',
              },
            ],
          },
        },
        {
          type: 'Cascader',
          name: 'cascader',
          label: '级联选择器',
          props: {
            options: [
              {
                value: 'zhejiang',
                label: '浙江省',
                children: [
                  {
                    value: 'hangzhou',
                    label: '杭州市',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'DatePicker',
          name: 'datePicker',
          label: '选择日期',
        },
        {
          type: 'RangePicker',
          name: 'rangePicker',
          label: '区间选取',
          nameAlise: ['startDate', 'endDate'],
        },
        {
          type: 'TimePicker',
          name: 'timePicker',
          label: '时间选择',
        },
        {
          type: 'TimeRange',
          name: 'timeRange',
          label: '时间区间',
          nameAlise: ['startTime', 'endTime'],
          props: {
            splitLabel: ' 至 ',
          },
        },
        {
          type: 'TextArea',
          name: 'textArea',
          label: '多文本',
        },
        {
          type: 'UploadImage',
          name: 'upload',
          label: '上传图片',
          props: {
            name: 'file',
            text: '点击上传',
            maxCount: 1,
            limitSize: 2,
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
              authorization: 'authorization-text',
            },
          },
        },
      ]}
    />
  );
};`;
