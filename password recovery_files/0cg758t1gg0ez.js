;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="95b079c2-604e-930b-b16f-5c70462b093e")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,980533,e=>{"use strict";e.s(["getPathSegment",0,function(e,t){return e.split("/")[t]},"getPathnameWithoutQuery",0,function(e,t){return null==e?t:e.split(/[?#]/)[0]??t}])},202003,e=>{"use strict";e.s(["buildStudioPageTitle",0,e=>{let t=[e.entity,e.section,e.surface,e.project,e.org,e.brand],r=[];return t.forEach(e=>{let t=(e=>{if(void 0===e)return;let t=e.trim().replace(/\s+/g," ");if(0!==t.length)return t.length<=60?t:`${t.slice(0,59).trimEnd()}…`})(e);if(!t)return;let a=r[r.length-1];(void 0===a||a.toLowerCase()!==t.toLowerCase())&&r.push(t)}),r.join(" | ")}])},348481,e=>{"use strict";var t=e.i(478902),r=e.i(709520),a=e.i(389959),o=e.i(282410),n=e.i(843778);let i=(0,r.cva)((0,n.cn)("flex h-10 w-full rounded-md border border-control read-only:border-button bg-foreground/[.026] px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted read-only:text-foreground-light","focus:ring-background-control focus:border-control focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background-control focus-visible:ring-offset-2 focus-visible:ring-offset-foreground-muted disabled:cursor-not-allowed disabled:text-foreground-muted","aria-[] aria-[invalid=true]:bg-destructive-200 aria-[invalid=true]:border-destructive-400 aria-[invalid=true]:focus:border-destructive aria-[invalid=true]:focus-visible:border-destructive"),{variants:{size:{...o.SIZE_VARIANTS}},defaultVariants:{size:o.SIZE_VARIANTS_DEFAULT}}),s=a.forwardRef(({className:e,type:r,size:a="small",...o},s)=>(0,t.jsx)("input",{type:r,ref:s,...o,className:(0,n.cn)(i({size:a}),e)}));s.displayName="Input",e.s(["Input",0,s,"InputVariants",0,i])},737018,e=>{"use strict";var t=e.i(478902),r=e.i(389959),a=e.i(546595),o=r.forwardRef((e,r)=>(0,t.jsx)(a.Primitive.label,{...e,ref:r,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));o.displayName="Label",e.s(["Label",0,o,"Root",0,o],475388);var n=e.i(475388),n=n,i=e.i(709520),s=e.i(843778);let l=(0,i.cva)("text-sm text leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=r.forwardRef(({className:e,...r},a)=>(0,t.jsx)(n.Root,{ref:a,className:(0,s.cn)(l(),e),...r}));d.displayName=n.Root.displayName,e.s(["Label",0,d],737018)},9679,e=>{"use strict";var t=e.i(737018);e.s(["Label_Shadcn_",()=>t.Label])},231665,660908,e=>{"use strict";var t=e.i(478902),r=e.i(709520),a=e.i(843778),o=e.i(837710),n=e.i(348481);let i=e.i(389959).forwardRef(({className:e,...r},o)=>(0,t.jsx)("textarea",{className:(0,a.cn)("flex min-h-[80px] w-full rounded-md border border-control bg-foreground/[.026] px-3 py-2 text-base md:text-sm ring-offset-background placeholder:text-foreground-muted focus:ring-background-control focus:border-control focus-visible:border-control focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-foreground-muted focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:o,...r}));i.displayName="Textarea",e.s(["Textarea",0,i],660908);let s=(0,r.cva)("text-foreground-light flex h-auto cursor-text select-none items-center justify-center gap-2 text-sm group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4",{variants:{align:{"inline-start":"order-first pl-2 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]","inline-end":"order-last pr-2 has-[>button]:mr-[-0.4rem] has-[>kbd]:mr-[-0.35rem]","block-start":"[.border-b]:pb-3 order-first w-full justify-start px-2 pt-2 group-has-[>input]/input-group:pt-2.5","block-end":"[.border-t]:pt-3 order-last w-full justify-start px-2 pb-2 group-has-[>input]/input-group:pb-2.5"}},defaultVariants:{align:"inline-start"}}),l=(0,r.cva)("",{variants:{size:{tiny:"h-6 gap-1 rounded-md px-2 has-[>svg]:px-2 [&>svg:not([class*='size-'])]:size-3.5",small:"h-8 gap-1.5 rounded-md px-2.5 has-[>svg]:px-2.5"}},defaultVariants:{size:"tiny"}});e.s(["InputGroup",0,function({className:e,id:r,"aria-invalid":o,"aria-describedby":n,...i}){return(0,t.jsx)("div",{"data-slot":"input-group",role:"group",className:(0,a.cn)("group/input-group relative items-center outline-none transition-[color,box-shadow]","flex rounded-md border border-control bg-foreground/[.026] text-sm","has-[>textarea]:h-auto","has-[>[data-align=inline-start]]:[&>input]:pl-2","has-[>[data-align=inline-end]]:[&>input]:pr-2","has-[>[data-align=block-end]]:pb-0","has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3","has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3","has-[[data-slot=input-group-control]:focus-visible]:outline-none has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-background-control has-[[data-slot=input-group-control]:focus-visible]:ring-offset-2 has-[[data-slot=input-group-control]:focus-visible]:ring-offset-foreground-muted","has-[[data-slot][aria-invalid=true]]:bg-destructive-200 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive-400 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40","has-[[data-slot][aria-invalid=true]]:has-[[data-slot=input-group-control]:focus-visible]:border-destructive","has-[[data-slot=input-group-control]:disabled]:cursor-not-allowed has-[[data-slot=input-group-control]:disabled]:text-foreground-muted","has-[[data-slot=input-group-control]:read-only]:border-button",e),...i})},"InputGroupAddon",0,function({className:e,align:r="inline-start",...o}){return(0,t.jsx)("div",{role:"group","data-slot":"input-group-addon","data-align":r,className:(0,a.cn)(s({align:r}),e),onClick:e=>{e.target.closest("button")||e.currentTarget.parentElement?.querySelector("input")?.focus()},...o})},"InputGroupButton",0,function({className:e,type:r="text",size:n="tiny",...i}){return(0,t.jsx)(o.Button,{type:r,size:n,className:(0,a.cn)(l({size:n}),e),...i})},"InputGroupInput",0,function({className:e,...r}){return(0,t.jsx)(n.Input,{"data-slot":"input-group-control",className:(0,a.cn)("flex-1 rounded-none border border-transparent -m-px bg-transparent shadow-none","focus:border-transparent focus-visible:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0","read-only:border-transparent","aria-[invalid=true]:border-transparent aria-[invalid=true]:bg-transparent","aria-[invalid=true]:focus:border-transparent aria-[invalid=true]:focus-visible:border-transparent",e),...r})},"InputGroupText",0,function({className:e,...r}){return(0,t.jsx)("span",{className:(0,a.cn)("text-muted-foreground flex items-center gap-2 text-sm [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",e),...r})},"InputGroupTextarea",0,function({className:e,...r}){return(0,t.jsx)(i,{"data-slot":"input-group-control",className:(0,a.cn)("flex-1 resize-none rounded-none border border-transparent bg-transparent py-0 shadow-none","focus:border-transparent focus-visible:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0",e),...r})}],231665)},95053,e=>{"use strict";var t=e.i(478902),r=e.i(709520),a=e.i(389959),o=e.i(843778),n=e.i(20482),i=e.i(9679),s=e.i(282410);let l=(0,r.cva)("relative grid gap-10",{variants:{size:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"},align:{left:"",right:""},responsive:{true:"",false:""},layout:{horizontal:"flex flex-col gap-2 md:grid md:grid-cols-12",vertical:"flex flex-col gap-2",flex:"flex flex-row gap-3","flex-row-reverse":"flex flex-col-reverse gap-2 md:gap-6 md:flex-row-reverse md:justify-between"},flex:{true:"",false:""}},compoundVariants:[{layout:"flex",align:"right",className:"justify-between"},{layout:"flex-row-reverse",align:"right",className:"justify-between"}],defaultVariants:{}}),d=(0,r.cva)("transition-all duration-500 ease-in-out",{variants:{flex:{true:"",false:""},align:{left:"",right:""},layout:{horizontal:"flex flex-col gap-2 col-span-4",vertical:"flex flex-row gap-2 justify-between",flex:"flex flex-col gap-0 min-w-0","flex-row-reverse":"flex flex-col min-w-0 grow"},labelLayout:{horizontal:"",vertical:"","":""}},compoundVariants:[{flex:!0,align:"left",className:"order-2"},{flex:!0,align:"right",className:"order-1"},{layout:["vertical","flex"],labelLayout:void 0,flex:!1,className:"flex flex-row gap-2 justify-between"},{layout:"horizontal",className:"flex flex-col gap-2"}],defaultVariants:{}}),u=(0,r.cva)("transition-all duration-500 ease-in-out",{variants:{flex:{true:"",false:""},align:{left:"order-1",right:"order-2"},layout:{horizontal:"",vertical:"",flex:"","flex-row-reverse":""}},compoundVariants:[{flex:!0,align:"left",className:"order-1"},{flex:!0,align:"right",className:"order-2"},{layout:["vertical","flex"],className:"col-span-12"},{layout:"horizontal",align:"left",className:"col-span-8"},{layout:"horizontal",align:"right",className:"text-right"}],defaultVariants:{}}),c=(0,r.cva)("text-foreground-lighter leading-normal",{variants:{size:{...s.SIZE.text},layout:{vertical:"mt-2",horizontal:"mt-2",flex:"","flex-row-reverse":""}},defaultVariants:{}}),f=(0,r.cva)("text-foreground-muted",{variants:{size:{...s.SIZE.text}},defaultVariants:{}}),g=(0,r.cva)("text-foreground-muted",{variants:{size:{...s.SIZE.text}},defaultVariants:{}}),p=(0,r.cva)("text-foreground-muted",{variants:{size:{...s.SIZE.text}},defaultVariants:{}}),m=(0,r.cva)("",{variants:{flex:{true:"",false:""},align:{left:"",right:""},layout:{horizontal:"",vertical:"",flex:"","flex-row-reverse":""}},compoundVariants:[{flex:!0,align:"left",className:""},{flex:!0,align:"right",className:"order-last"},{layout:"flex-row-reverse",className:"flex flex-col justify-center items-start md:items-end shrink-0 md:w-1/2 xl:w-2/5 md:min-w-100 [&>div]:md:w-full"}]}),b=(0,r.cva)("",{variants:{nonBoxInput:{true:"",false:""},label:{true:"",false:""},layout:{vertical:"",horizontal:"","flex-row-reverse":""}},compoundVariants:[{nonBoxInput:!0,label:!0,layout:"vertical",className:"my-3"},{nonBoxInput:!0,label:!0,layout:"horizontal",className:"my-3 md:mt-0 mb-3"}],defaultVariants:{}}),x=a.default.forwardRef(({align:e="left",className:r,description:a,id:s,label:x,labelOptional:h,layout:v="vertical",style:y,labelLayout:w,size:z="medium",beforeLabel:_,afterLabel:j,nonBoxInput:N=!x,hideMessage:k=!1,isReactForm:S,...I},V)=>{let F="flex"===v||"flex-row-reverse"===v,C=!!(x||_||j),D=S&&!k?(0,t.jsx)(n.FormMessage,{className:(0,o.cn)("mt-2 transition-all duration-300 ease-in-out","flex-row-reverse"===v&&"mt-0"),"data-formlayout-id":"message"}):null,E=a&&S?(0,t.jsx)(n.FormDescription,{className:(0,o.cn)(c({size:z,layout:v})),"data-formlayout-id":"description",id:`${s}-description`,children:a}):a?(0,t.jsx)("p",{className:(0,o.cn)(c({size:z,layout:v}),"text-sm text-foreground-light"),"data-formlayout-id":"description",children:a}):null,T=()=>(0,t.jsxs)(t.Fragment,{children:[_&&(0,t.jsx)("span",{className:(0,o.cn)(f({size:z})),id:s+"-before","data-formlayout-id":"beforeLabel",children:(0,t.jsx)("span",{children:_})}),(0,t.jsx)("span",{children:x}),j&&(0,t.jsx)("span",{className:(0,o.cn)(g({size:z})),id:s+"-after","data-formlayout-id":"afterLabel",children:j})]});return(0,t.jsxs)("div",{ref:V,...I,className:(0,o.cn)(l({size:z,flex:F,align:e,layout:v}),r),children:[F&&(0,t.jsxs)("div",{className:(0,o.cn)(m({flex:F,align:e,layout:v})),children:[I.children,"flex-row-reverse"===v&&D]}),C||h||"horizontal"===v?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:(0,o.cn)(d({align:e,labelLayout:w,flex:F,layout:v})),"data-formlayout-id":"labelContainer",children:[C&&S?(0,t.jsx)(n.FormLabel,{className:"text-foreground flex gap-2 items-center break-words","data-formlayout-id":"formLabel",htmlFor:I.name||s,children:(0,t.jsx)(T,{})}):(0,t.jsx)(i.Label_Shadcn_,{className:"text-foreground flex gap-2 items-center break-words leading-normal","data-formlayout-id":"label",htmlFor:I.name||s,children:(0,t.jsx)(T,{})}),h&&(0,t.jsx)("span",{className:(0,o.cn)(p({size:z})),id:s+"-optional","data-formlayout-id":"labelOptional",children:h}),F&&(0,t.jsxs)(t.Fragment,{children:[E,"flex-row-reverse"!==v&&D]})]})}):null,!F&&(0,t.jsx)("div",{className:(0,o.cn)(u({align:e,layout:v})),style:y,"data-formlayout-id":"dataContainer",children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:(0,o.cn)(b({nonBoxInput:N,label:x,layout:v})),"data-formlayout-id":"nonBoxInputContainer",children:I.children}),D,E]})})]})});e.s(["FormLayout",0,x])},538482,e=>{"use strict";var t=e.i(478902),r=e.i(389959),a=e.i(20482),o=e.i(95053);let n=(0,r.forwardRef)(({...e},r)=>(0,t.jsx)(a.FormItem,{children:(0,t.jsx)(o.FormLayout,{ref:r,isReactForm:!0,...e,children:e.children})}));n.displayName="FormItemLayout",e.s(["FormItemLayout",0,n])},283607,e=>{"use strict";var t=e.i(655744),r=function(e,r,a){if(e&&"reportValidity"in e){var o=(0,t.get)(a,r);e.setCustomValidity(o&&o.message||""),e.reportValidity()}},a=function(e,t){var a=function(a){var o=t.fields[a];o&&o.ref&&"reportValidity"in o.ref?r(o.ref,a,e):o.refs&&o.refs.forEach(function(t){return r(t,a,e)})};for(var o in t.fields)a(o)},o=function(e,r){r.shouldUseNativeValidation&&a(e,r);var o={};for(var s in e){var l=(0,t.get)(r.fields,s),d=Object.assign(e[s]||{},{ref:l&&l.ref});if(i(r.names||Object.keys(e),s)){var u=Object.assign({},n((0,t.get)(o,s)));(0,t.set)(u,"root",d),(0,t.set)(o,s,u)}else(0,t.set)(o,s,d)}return o},n=function(e){return Array.isArray(e)?e.filter(Boolean):[]},i=function(e,t){return e.some(function(e){return e.startsWith(t+".")})},s=function(e,r){for(var a={};e.length;){var o=e[0],n=o.code,i=o.message,s=o.path.join(".");if(!a[s])if("unionErrors"in o){var l=o.unionErrors[0].errors[0];a[s]={message:l.message,type:l.code}}else a[s]={message:i,type:n};if("unionErrors"in o&&o.unionErrors.forEach(function(t){return t.errors.forEach(function(t){return e.push(t)})}),r){var d=a[s].types,u=d&&d[o.code];a[s]=(0,t.appendErrors)(s,r,a,n,u?[].concat(u,o.message):o.message)}e.shift()}return a};e.s(["zodResolver",0,function(e,t,r){return void 0===r&&(r={}),function(n,i,l){try{return Promise.resolve(function(o){try{var i=Promise.resolve(e["sync"===r.mode?"parse":"parseAsync"](n,t)).then(function(e){return l.shouldUseNativeValidation&&a({},l),{errors:{},values:r.raw?n:e}})}catch(e){return o(e)}return i&&i.then?i.then(void 0,o):i}(function(e){if(null!=e.errors)return{values:{},errors:o(s(e.errors,!l.shouldUseNativeValidation&&"all"===l.criteriaMode),l)};throw e}))}catch(e){return Promise.reject(e)}}}],283607)},378277,e=>{"use strict";var t=e.i(348481);e.s(["Input_Shadcn_",()=>t.Input])},938933,305551,e=>{"use strict";var t=e.i(389959);let r={bg:{brand:{primary:"bg-purple-600",secondary:"bg-purple-200"}},text:{brand:"text-purple-600",body:"text-foreground-light",title:"text-foreground"},border:{brand:"border-brand-600",primary:"border-default",secondary:"border-secondary",alternative:"border-alternative"},placeholder:"placeholder-foreground-muted",focus:`
    outline-none
    focus:ring-current focus:ring-2
  `,"focus-visible":`
    outline-none
    transition-all
    outline-0
    focus-visible:outline-4
    focus-visible:outline-offset-1
  `,size:{text:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"},padding:{tiny:"px-2.5 py-1",small:"px-3 py-2",medium:"px-4 py-2",large:"px-4 py-2",xlarge:"px-6 py-3"}},overlay:{base:"absolute inset-0 bg-background opacity-50",container:"fixed inset-0 transition-opacity"}},a={tiny:`${r.size.text.tiny} ${r.size.padding.tiny}`,small:`${r.size.text.small} ${r.size.padding.small}`,medium:`${r.size.text.medium} ${r.size.padding.medium}`,large:`${r.size.text.large} ${r.size.padding.large}`,xlarge:`${r.size.text.xlarge} ${r.size.padding.xlarge}`},o={accordion:{variants:{default:{base:`
          flex flex-col
          space-y-3
        `,container:`
          group
          first:rounded-tl-md first:rounded-tr-md
          last:rounded-bl-md last:rounded-br-md
          overflow-hidden
          will-change-transform
        `,trigger:`
          flex flex-row
          gap-3
          items-center
          w-full
          text-left
          cursor-pointer

          outline-none
          focus-visible:ring-1
          focus-visible:z-10
          ring-foreground-light
        `,content:`
          data-open:animate-slide-down
          data-closed:animate-slide-up
        `,panel:`
          py-3
        `},bordered:{base:`
          flex flex-col
          -space-y-px
        `,container:`
          group
          border
          border-default

          first:rounded-tl-md first:rounded-tr-md
          last:rounded-bl-md last:rounded-br-md
        `,trigger:`
          flex flex-row
          items-center
          px-6 py-4
          w-full
          text-left
          cursor-pointer

          font-medium
          text-base
          bg-transparent

          outline-none
          focus-visible:ring-1
          focus-visible:z-10
          ring-foreground-light

          transition-colors
          hover:bg-background

          overflow-hidden

          group-first:rounded-tl-md group-first:rounded-tr-md
          group-last:rounded-bl-md group-last:rounded-br-md
        `,content:`
          data-open:animate-slide-down
          data-closed:animate-slide-up
        `,panel:`
          px-6 py-3
          border-t border-strong
          bg-background
        `}},justified:"justify-between",chevron:{base:`
        text-foreground-lighter
        rotate-0
        group-state-open:rotate-180
        group-data-[state=open]:rotate-180
        ease-&lsqb;cubic-bezier(0.87,_0,_0.13,_1)&rsqb;
        transition-transform duration-300
        duration-200
      `,align:{left:"order-first",right:"order-last"}},animate:{enter:"transition-max-height ease-in-out duration-700 overflow-hidden",enterFrom:"max-h-0",enterTo:"max-h-screen",leave:"transition-max-height ease-in-out duration-300 overflow-hidden",leaveFrom:"max-h-screen",leaveTo:"max-h-0"}},alert:{base:`
      relative rounded-md border py-4 px-6
      flex space-x-4 items-start
    `,header:"block text-sm font-normal mb-1",description:"text-xs",variant:{danger:{base:"bg-red-200 text-red-1200 border-red-700",icon:"text-red-900",header:"text-red-1200",description:"text-red-1100"},warning:{base:"bg-amber-200 border-amber-700",icon:"text-amber-900",header:"text-amber-1200",description:"text-amber-1100"},info:{base:"bg-alternative border",icon:"text-foreground-lighter",header:"text-foreground",description:"text-foreground-light"},success:{base:"bg-brand-300 border-brand-400",icon:"text-brand",header:"text-brand-600",description:"text-brand-600"},neutral:{base:"bg-surface-100 border-default",icon:"text-foreground-muted",header:"text-foreground",description:"text-foreground-light"}},close:`
      absolute
      right-6 top-4
      p-0 m-0
      text-foreground-muted
      cursor-pointer transition ease-in-out
      bg-transparent border-transparent focus:outline-none
      opacity-50 hover:opacity-100`},card:{base:`
      bg-surface-100

      border
      ${r.border.primary}

      flex flex-col
      rounded-md shadow-lg overflow-hidden relative
    `,hoverable:"transition hover:-translate-y-1 hover:shadow-2xl",head:`px-8 py-6 flex justify-between
    border-b
      ${r.border.primary} `,content:"p-8"},tabs:{base:"w-full justify-between space-y-4",underlined:{list:`
        flex items-center border-b
        ${r.border.secondary}
        `,base:`
        relative
        cursor-pointer
        text-foreground-lighter
        flex
        items-center
        space-x-2
        text-center
        transition
        focus:outline-none
        focus-visible:ring
        focus-visible:ring-foreground-muted
        focus-visible:border-foreground-muted
      `,inactive:`
        hover:text-foreground
      `,active:`
        !text-foreground
        border-b-2 border-foreground
      `},pills:{list:"flex space-x-1",base:`
        relative
        cursor-pointer
        flex
        items-center
        space-x-2
        text-center
        transition
        shadow-sm
        rounded
        border
        focus:outline-none
        focus-visible:ring
        focus-visible:ring-foreground-muted
        focus-visible:border-foreground-muted
        `,inactive:`
        bg-background
        border-strong hover:border-foreground-muted
        text-foreground-muted hover:text-foreground
      `,active:`
        bg-selection
        text-foreground
        border-stronger
      `},"rounded-pills":{list:"flex flex-wrap gap-2",base:`
        relative
        cursor-pointer
        flex
        items-center
        space-x-2
        text-center
        transition
        shadow-sm
        rounded-full
        focus:outline-none
        focus-visible:ring
        focus-visible:ring-foreground-muted
        focus-visible:border-foreground-muted
        `,inactive:`
        bg-surface-200 hover:bg-surface-300
        hover:border-foreground-lighter
        text-foreground-lighter hover:text-foreground
      `,active:`
        bg-foreground
        text-background
        border-foreground
      `},block:"w-full flex items-center justify-center",size:{...a},scrollable:"overflow-auto whitespace-nowrap no-scrollbar mask-fadeout-right",wrappable:"flex-wrap",content:"focus:outline-none transition-height"},input:{base:`
      block
      box-border
      w-full
      rounded-md
      shadow-sm
      transition-all
      text-foreground
      border
      focus-visible:shadow-md
      ${r.focus}
      focus-visible:border-foreground-muted
      focus-visible:ring-background-control
      ${r.placeholder}
      group
    `,variants:{standard:`
        bg-foreground/[.026]
        border border-control
        `,error:`
        bg-destructive-200
        border border-destructive-500
        focus:ring-destructive-400
        placeholder:text-destructive-400
       `},container:"relative",with_icon:{tiny:"pl-7",small:"pl-8",medium:"pl-8",large:"pl-10",xlarge:"pl-11"},size:{...a},disabled:"opacity-50",actions_container:"absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center",textarea_actions_container:"absolute inset-y-1.5 right-0 pl-3 pr-1 flex space-x-1 items-start",textarea_actions_container_items:"flex items-center"},sidepanel:{base:`
      z-50
      bg-dash-sidebar
      flex flex-col
      fixed
      inset-y-0
      h-full lg:h-screen
      border-l
      shadow-xl
    `,header:`
      flex items-center
      space-y-1 py-4 px-4 bg-dash-sidebar sm:px-6
      border-b h-[var(--header-height)]
    `,contents:`
      relative
      flex-1
      overflow-y-auto
    `,content:`
      px-4 sm:px-6
    `,footer:`
      flex justify-end gap-2
      p-4 bg-overlay
      border-t
    `,size:{medium:"w-screen max-w-md h-full",large:"w-screen max-w-2xl h-full",xlarge:"w-screen max-w-3xl h-full",xxlarge:"w-screen max-w-4xl h-full",xxxlarge:"w-screen max-w-5xl h-full",xxxxlarge:"w-screen max-w-6xl h-full"},align:{left:`
        left-0
        data-open:animate-panel-slide-left-out
        data-closed:animate-panel-slide-left-in
      `,right:`
        right-0
        data-open:animate-panel-slide-right-out
        data-closed:animate-panel-slide-right-in
      `},separator:`
      w-full
      h-px
      my-2
      bg-border
    `,overlay:`
      z-50
      fixed
      bg-alternative
      h-full w-full
      left-0
      top-0
      opacity-75
      data-closed:animate-fade-out-overlay-bg
      data-open:animate-fade-in-overlay-bg
    `,trigger:`
      border-none bg-transparent p-0 focus:ring-0
    `},form_layout:{container:"grid gap-2",flex:{left:{base:"flex flex-row gap-6",content:"",labels:"order-2",data_input:"order-1"},right:{base:"flex flex-row gap-6 justify-between",content:"order-last",labels:"",data_input:"text-right"}},responsive:"md:grid md:grid-cols-12",non_responsive:"grid grid-cols-12 gap-2",labels_horizontal_layout:"flex flex-row space-x-2 justify-between col-span-12",labels_vertical_layout:"flex flex-col space-y-2 col-span-4",data_input_horizontal_layout:"col-span-12",non_box_data_input_spacing_vertical:"my-3",non_box_data_input_spacing_horizontal:"my-3 md:mt-0 mb-3",data_input_vertical_layout:"col-span-8",data_input_vertical_layout__align_right:"text-right",label:{base:"block text-foreground-light",size:{...r.size.text}},label_optional:{base:"text-foreground-lighter",size:{...r.size.text}},description:{base:"mt-2 text-foreground-lighter leading-normal",size:{...r.size.text}},label_before:{base:"text-foreground-lighter ",size:{...r.size.text}},label_after:{base:"text-foreground-lighter",size:{...r.size.text}},error:{base:`
        text-red-900
        transition-all
        data-show:mt-2
        data-show:animate-slide-down-normal
        data-hide:animate-slide-up-normal
      `,size:{...r.size.text}},size:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"}},popover:{trigger:`
      flex
      border-none
      rounded
      bg-transparent
      p-0
      outline-none
      outline-offset-1
      transition-all
      focus:outline-4
      focus:outline-border-control
    `,content:`
      z-40
      bg-overlay
      border border-overlay
      rounded
      shadow-lg
      data-open:animate-dropdown-content-show
      data-closed:animate-dropdown-content-hide
      min-w-fit

      origin-popover
      data-open:animate-dropdown-content-show
      data-closed:animate-dropdown-content-hide
    `,size:{tiny:"w-40",small:"w-48",medium:"w-64",large:"w-80",xlarge:"w-96",content:"w-auto"},header:`
      bg-surface-200
      space-y-1 py-1.5 px-3
      border-b border-overlay
    `,footer:`
      bg-surface-200
      py-1.5 px-3
      border-t border-overlay
    `,close:`
      transition
      text-foreground-lighter
    `,separator:`
      w-full
      h-px
      my-2
      bg-border-overlay
    `},menu:{item:{base:`
        cursor-pointer
        flex space-x-3 items-center
        outline-none
        focus-visible:ring-1 ring-foreground-muted focus-visible:z-10
        group
      `,content:{base:"transition truncate text-sm w-full",normal:"text-foreground-light group-hover:text-foreground",active:"text-foreground font-semibold"},icon:{base:"transition truncate text-sm",normal:"text-foreground-lighter group-hover:text-foreground-light",active:"text-foreground"},variants:{text:{base:`
            py-1
          `,normal:`
            font-normal
            border-default
            group-hover:border-foreground-muted`,active:`
            font-semibold
            text-foreground-muted
            z-10
          `},border:{base:`
            px-4 py-1
          `,normal:`
            border-l
            font-normal
            border-default
            group-hover:border-foreground-muted`,active:`
            font-semibold

            text-foreground-muted
            z-10

            border-l
            border-brand
            group-hover:border-brand
          `,rounded:"rounded-md"},pills:{base:"px-3 py-1",normal:`
            font-normal
            border-default
            group-hover:border-foreground-muted`,active:`
            font-semibold
            bg-sidebar-accent
            text-foreground-lighter
            z-10 rounded-md
          `}}},group:{base:`
        flex space-x-3
        mb-2
        font-normal
      `,icon:"text-foreground-lighter",content:"text-sm text-foreground-lighter w-full",variants:{text:"",pills:"px-3",border:""}}},modal:{base:`
      relative
      bg-dash-sidebar
      my-4 max-w-screen
      border border-overlay
      rounded-md
      shadow-xl
      data-open:animate-overlay-show
      data-closed:animate-overlay-hide

    `,header:`
      bg-surface-200
      space-y-1 py-3 px-4 sm:px-5
      border-b border-overlay
      flex items-center justify-between
    `,footer:`
      flex justify-end gap-2
      py-3 px-5
      border-t border-overlay
    `,size:{tiny:"sm:align-middle sm:w-full sm:max-w-xs",small:"sm:align-middle sm:w-full sm:max-w-sm",medium:"sm:align-middle sm:w-full sm:max-w-lg",large:"sm:align-middle sm:w-full md:max-w-xl",xlarge:"sm:align-middle sm:w-full md:max-w-3xl",xxlarge:"sm:align-middle sm:w-full max-w-screen md:max-w-6xl",xxxlarge:"sm:align-middle sm:w-full md:max-w-7xl"},overlay:`
      z-40
      fixed
      bg-alternative
      h-full w-full
      left-0
      top-0
      opacity-75
      data-closed:animate-fade-out-overlay-bg
      data-open:animate-fade-in-overlay-bg
    `,scroll_overlay:`
      z-40
      fixed
      inset-0
      grid
      place-items-center
      overflow-y-auto
      data-open:animate-overlay-show data-closed:animate-overlay-hide
    `,separator:`
      w-full
      h-px
      my-2
      bg-border-overlay
    `,content:"px-5"},listbox:{base:`
      block
      box-border
      w-full
      rounded-md
      shadow-sm
      text-foreground
      border
      focus-visible:shadow-md
      ${r.focus}
      focus-visible:border-foreground-muted
      focus-visible:ring-background-control
      ${r.placeholder}
      indent-px
      transition-all
      bg-none
    `,container:"relative",label:"truncate",variants:{standard:`
        bg-control
        border border-control

        aria-expanded:border-foreground-muted
        aria-expanded:ring-border-muted
        aria-expanded:ring-2
        `,error:`
        bg-destructive-200
        border border-destructive-500
        focus:ring-destructive-400
        placeholder:text-destructive-400
       `},options_container_animate:`
      transition
      data-open:animate-slide-down
      data-open:opacity-1
      data-closed:animate-slide-up
      data-closed:opacity-0
    `,options_container:`
      bg-overlay
      shadow-lg
      border border-solid
      border-overlay max-h-60
      rounded-md py-1 text-base
      sm:text-sm z-10 overflow-hidden overflow-y-scroll

      origin-dropdown
      data-open:animate-dropdown-content-show
      data-closed:animate-dropdown-content-hide
    `,with_icon:"pl-2",addOnBefore:`
      w-full flex flex-row items-center space-x-3
    `,size:{...a},disabled:"opacity-50",actions_container:"absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center",chevron_container:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",chevron:"h-5 w-5 text-foreground-muted",option:`
      w-listbox
      transition cursor-pointer select-none relative py-2 pl-3 pr-9
      text-foreground-light
      text-sm
      hover:bg-border-overlay
      focus:bg-border-overlay
      focus:text-foreground
      border-none
      focus:outline-none
    `,option_active:"text-foreground bg-selection",option_disabled:"cursor-not-allowed opacity-60",option_inner:"flex items-center space-x-3",option_check:"absolute inset-y-0 right-0 flex items-center pr-3 text-brand",option_check_active:"text-brand",option_check_icon:"h-5 w-5"},collapsible:{content:`
      data-open:animate-slide-down-normal
      data-closed:animate-slide-up-normal
    `},inputErrorIcon:{base:`
      flex items-center
      right-3 pr-2 pl-2
      inset-y-0
      pointer-events-none
      text-red-900
    `},inputIconContainer:{base:`
    absolute inset-y-0
    left-0 pl-2 flex
    items-center pointer-events-none
    text-foreground-light
    [&_svg]:stroke-[1.5]
    `,size:{tiny:"[&_svg]:h-[14px] [&_svg]:w-[14px]",small:"[&_svg]:h-[18px] [&_svg]:w-[18px]",medium:"[&_svg]:h-[20px] [&_svg]:w-[20px]",large:"[&_svg]:h-[20px] [&_svg]:w-[20px] pl-3",xlarge:"[&_svg]:h-[24px] [&_svg]:w-[24px] pl-3",xxlarge:"[&_svg]:h-[30px] [&_svg]:w-[30px] pl-3",xxxlarge:"[&_svg]:h-[42px] [&_svg]:w-[42px] pl-3"}},icon:{container:"shrink-0 flex items-center justify-center rounded-full p-3"},loading:{base:"relative",content:{base:"transition-opacity duration-300",active:"opacity-40"},spinner:`
      absolute
      text-foreground-lighter animate-spin
      inset-0
      size-5
      m-auto
    `}};e.s(["default",0,o],305551);let n=(0,t.createContext)({theme:o});e.s(["default",0,function(e){let{theme:{[e]:r}}=(0,t.useContext)(n);return r||(r=o.accordion),r=JSON.parse(r=JSON.stringify(r).replace(/\\n/g,"").replace(/\s\s+/g," "))}],938933)},867637,704598,e=>{"use strict";let t=(0,e.i(388019).default)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);e.s(["default",0,t],704598),e.s(["AlertCircle",0,t],867637)},725137,e=>{"use strict";var t=e.i(478902),r=e.i(162361),a=e.i(709520),o=e.i(975924),n=e.i(389959),i=e.i(843778);let s=r.Dialog.Root,l=r.Dialog.Trigger,d=r.Dialog.Close;(0,a.cva)("fixed inset-0 z-50 flex",{variants:{side:{top:"items-start",bottom:"items-end",left:"justify-start",right:"justify-end"}},defaultVariants:{side:"right"}});let u=({side:e,children:a,...o})=>(0,t.jsx)(r.Dialog.Portal,{...o,children:a});u.displayName=r.Dialog.Portal.displayName;let c=n.forwardRef(({className:e,children:a,...o},n)=>(0,t.jsx)(r.Dialog.Overlay,{className:(0,i.cn)("fixed inset-0 z-50 bg-alternative/90 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",e),...o,ref:n}));c.displayName=r.Dialog.Overlay.displayName;let f=(0,i.cn)(["fixed z-50 scale-100 gap-4 bg-studio opacity-100 shadow-lg","data-[state=open]:animate-in data-[state=open]:duration-300 data-[state=closed]:animate-out data-[state=closed]:duration-300"]),g=(0,a.cva)(f,{variants:{side:{top:"data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top w-full border-b inset-x-0 top-0",bottom:"data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom w-full border-t inset-x-0 bottom-0",left:"data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left h-full border-r inset-y-0 left-0",right:"data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right h-full border-l inset-y-0 right-0"},size:{content:"",default:"",sm:"",lg:"",xl:"",xxl:"",full:""}},compoundVariants:[{side:["top","bottom"],size:"content",class:"max-h-screen"},{side:["top","bottom"],size:"default",class:"h-1/3"},{side:["top","bottom"],size:"sm",class:"h-1/4"},{side:["top","bottom"],size:"lg",class:"h-1/2"},{side:["top","bottom"],size:"xl",class:"h-5/6"},{side:["top","bottom"],size:"full",class:"h-screen"},{side:["right","left"],size:"content",class:"max-w-screen"},{side:["right","left"],size:"default",class:"lg:w-1/3"},{side:["right","left"],size:"sm",class:"lg:w-1/4"},{side:["right","left"],size:"lg",class:"lg:w-1/2"},{side:["right","left"],size:"xl",class:"lg:w-4/6"},{side:["right","left"],size:"xxl",class:"w-5/6"},{side:["right","left"],size:"full",class:"w-screen"}],defaultVariants:{side:"right",size:"default"}}),p=n.forwardRef(({side:e,size:a,className:n,children:s,showClose:l=!0,hasOverlay:d=!0,...f},p)=>(0,t.jsxs)(u,{side:e,children:[d&&(0,t.jsx)(c,{}),(0,t.jsxs)(r.Dialog.Content,{ref:p,className:(0,i.cn)(g({side:e,size:a}),n),...f,children:[s,l?(0,t.jsxs)(r.Dialog.Close,{className:(0,i.cn)("absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",'before:content-[""] before:block before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:outline-red-500 before:outline-2 before:min-w-6 before:min-h-6 before:z-50 before:-translate-x-1/2 before:-translate-y-1/2'),children:[(0,t.jsx)(o.X,{className:"h-4 w-4"}),(0,t.jsx)("span",{className:"sr-only",children:"Close"})]}):null]})]}));p.displayName=r.Dialog.Content.displayName;let m=({className:e,...r})=>(0,t.jsx)("div",{className:(0,i.cn)("px-5 py-4 text-center sm:text-left border-b bg-dash-sidebar",e),...r});m.displayName="SheetHeader";let b=({className:e,...r})=>(0,t.jsx)("div",{className:(0,i.cn)("px-5 py-4",e),...r});b.displayName="SheetSection";let x=({className:e,...r})=>(0,t.jsx)("div",{className:(0,i.cn)("px-5 py-3 border-t w-full","flex flex-col-reverse sm:flex-row sm:justify-end gap-2",e),...r});x.displayName="SheetFooter";let h=n.forwardRef(({className:e,...a},o)=>(0,t.jsx)(r.Dialog.Title,{ref:o,className:(0,i.cn)("text-lg text-foreground",e),...a}));h.displayName=r.Dialog.Title.displayName;let v=n.forwardRef(({className:e,...a},o)=>(0,t.jsx)(r.Dialog.Description,{ref:o,className:(0,i.cn)("text-sm text-foreground-light",e),...a}));v.displayName=r.Dialog.Description.displayName,e.s(["Sheet",0,s,"SheetClose",0,d,"SheetContent",0,p,"SheetDescription",0,v,"SheetFooter",0,x,"SheetHeader",0,m,"SheetSection",0,b,"SheetTitle",0,h,"SheetTrigger",0,l])},197649,e=>{"use strict";function t(){for(var e,t,r=0,a="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=function e(t){var r,a,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t)){var n=t.length;for(r=0;r<n;r++)t[r]&&(a=e(t[r]))&&(o&&(o+=" "),o+=a)}else for(a in t)t[a]&&(o&&(o+=" "),o+=a);return o}(e))&&(a&&(a+=" "),a+=t);return a}e.s(["clsx",0,t,"default",0,t])},235458,e=>{"use strict";var t=e.i(478902),r=e.i(843778),a=e.i(710483),o=e.i(513826),n=e.i(794231);e.s(["UpgradeToPro",0,({icon:e,primaryText:i,secondaryText:s,plan:l="Pro",addon:d,featureProposition:u,buttonText:c,source:f="upgrade",disabled:g=!1,fullWidth:p=!1,layout:m="horizontal",variant:b="primary",className:x,docsUrl:h})=>(0,t.jsx)(a.Admonition,{type:"default",icon:e,layout:m,title:i,description:s,className:(0,r.cn)(p&&"border-0 rounded-none border-b",x),actions:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.UpgradePlanButton,{plan:l,addon:d,source:f,featureProposition:u,disabled:g,variant:b,children:c}),!!h&&(0,t.jsx)(o.DocsButton,{href:h})]})})])},427432,e=>{"use strict";var t=e.i(478902),r=e.i(843778);e.s(["default",0,({active:e,className:a})=>e?(0,t.jsx)("div",{className:(0,r.cn)("logs-shimmering-loader w-full h-0.5",a)}):null])},677436,e=>{"use strict";var t=e.i(38429),r=e.i(356003),a=e.i(355901),o=e.i(522525),n=e.i(234745);async function i({projectRef:e,is_default:t,branchName:r,gitBranch:a,region:o,withData:s,desired_instance_size:l}){let{data:d,error:u}=await (0,n.post)("/v1/projects/{ref}/branches",{params:{path:{ref:e}},body:{is_default:t,branch_name:r,git_branch:a,region:o,with_data:s,desired_instance_size:l}});return u&&(0,n.handleError)(u),d}e.s(["useBranchCreateMutation",0,({onSuccess:e,onError:n,...s}={})=>{let l=(0,r.useQueryClient)();return(0,t.useMutation)({mutationFn:e=>i(e),async onSuccess(t,r,a){let{projectRef:n}=r;await l.invalidateQueries({queryKey:o.branchKeys.list(n)}),await e?.(t,r,a)},async onError(e,t,r){void 0===n?a.toast.error(`Failed to create branch: ${e.message}`):n(e,t,r)},...s})}])},362784,e=>{"use strict";var t=e.i(38429),r=e.i(355901),a=e.i(234745);async function o({repositoryId:e,branchName:t},r){let{data:n,error:i}=await (0,a.get)("/platform/integrations/github/repositories/{repository_id}/branches/{branch_name}",{params:{path:{repository_id:e,branch_name:t}},signal:r});return i&&(0,a.handleError)(i),n}e.s(["useCheckGithubBranchValidity",0,({onSuccess:e,onError:a,...n}={})=>(0,t.useMutation)({mutationFn:e=>o(e),async onSuccess(t,r,a){await e?.(t,r,a)},async onError(e,t,o){void 0===a?r.toast.error(`Failed to check GitHub branch: ${e.message}`):a(e,t,o)},...n})])}]);

//# debugId=95b079c2-604e-930b-b16f-5c70462b093e
//# sourceMappingURL=0n.8tpnta.bli.js.map