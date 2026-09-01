import{j as r}from"./jsx-runtime-u17CrQMm.js";function o({task:{id:s,title:n,state:c},onArchiveTask:d,onPinTask:m}){return r.jsx("div",{className:"list-item",children:r.jsx("label",{htmlFor:`title-${s}`,"aria-label":n,children:r.jsx("input",{type:"text",value:n,readOnly:!0,name:"title",id:`title-${s}`})})})}o.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
    id: string;\r
    title: string;\r
    state: 'TASK_ARCHIVED' | 'TASK_INBOX' | 'TASK_PINNED';\r
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"state",value:{name:"union",raw:"'TASK_ARCHIVED' | 'TASK_INBOX' | 'TASK_PINNED'",elements:[{name:"literal",value:"'TASK_ARCHIVED'"},{name:"literal",value:"'TASK_INBOX'"},{name:"literal",value:"'TASK_PINNED'"}],required:!0}}]}},description:""},onArchiveTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onPinTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const{fn:i}=__STORYBOOK_MODULE_TEST__,u={onArchiveTask:i(),onPinTask:i()},p={component:o,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{...u}},e={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},t={args:{task:{...e.args.task,state:"TASK_PINNED"}}},a={args:{task:{...e.args.task,state:"TASK_ARCHIVED"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...a.parameters?.docs?.source}}};const T=["ActionsData","Default","Pinned","Archived"];export{u as ActionsData,a as Archived,e as Default,t as Pinned,T as __namedExportsOrder,p as default};
