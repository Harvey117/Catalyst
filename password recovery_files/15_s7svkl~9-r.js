;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="d1da8076-0700-55d7-16d5-f73ba4bfb7eb")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,980533,e=>{"use strict";e.s(["getPathSegment",0,function(e,t){return e.split("/")[t]},"getPathnameWithoutQuery",0,function(e,t){return null==e?t:e.split(/[?#]/)[0]??t}])},567558,e=>{"use strict";var t=e.i(478902),r=e.i(26898),o=e.i(389959),i=e.i(837710),a=e.i(710483),n=e.i(196621),s=e.i(967052);let l=({projectRef:e,subject:o,error:a})=>(0,t.jsx)(i.Button,{asChild:!0,type:"default",className:"w-min",children:(0,t.jsx)(n.SupportLink,{queryParams:{category:r.SupportCategories.DASHBOARD_BUG,projectRef:e,subject:o,error:a?.message},children:"Contact support"})}),d=({projectRef:e,subject:r,description:i="Try refreshing your browser, but if the issue persists for more than a few minutes, please reach out to us via support.",error:n,className:d,showIcon:c=!0,layout:u="responsive",showInstructions:p=!0,showErrorPrefix:m=!0,children:g,additionalActions:f})=>{let x=(0,s.useTrack)(),h=(0,o.useRef)(!1),b=n?.message?.includes("503")?"503 Service Temporarily Unavailable":n?.message;return(0,o.useEffect)(()=>{!h.current&&(h.current=!0,.1>Math.random()&&x("dashboard_error_created",{source:"admonition"}))},[x]),(0,t.jsx)(a.Admonition,{type:"warning",layout:f?"vertical":u,showIcon:c,title:r,description:(0,t.jsxs)(t.Fragment,{children:[n?.message&&(0,t.jsxs)("p",{children:[m&&"Error: ",b]}),p&&(0,t.jsx)("p",{children:i}),g]}),actions:f?(0,t.jsxs)(t.Fragment,{children:[f,(0,t.jsx)(l,{projectRef:e,subject:r,error:n})]}):(0,t.jsx)(l,{projectRef:e,subject:r,error:n}),className:d})};e.s(["AlertError",0,d,"default",0,d])},938933,305551,e=>{"use strict";var t=e.i(389959);let r={bg:{brand:{primary:"bg-purple-600",secondary:"bg-purple-200"}},text:{brand:"text-purple-600",body:"text-foreground-light",title:"text-foreground"},border:{brand:"border-brand-600",primary:"border-default",secondary:"border-secondary",alternative:"border-alternative"},placeholder:"placeholder-foreground-muted",focus:`
    outline-none
    focus:ring-current focus:ring-2
  `,"focus-visible":`
    outline-none
    transition-all
    outline-0
    focus-visible:outline-4
    focus-visible:outline-offset-1
  `,size:{text:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"},padding:{tiny:"px-2.5 py-1",small:"px-3 py-2",medium:"px-4 py-2",large:"px-4 py-2",xlarge:"px-6 py-3"}},overlay:{base:"absolute inset-0 bg-background opacity-50",container:"fixed inset-0 transition-opacity"}},o={tiny:`${r.size.text.tiny} ${r.size.padding.tiny}`,small:`${r.size.text.small} ${r.size.padding.small}`,medium:`${r.size.text.medium} ${r.size.padding.medium}`,large:`${r.size.text.large} ${r.size.padding.large}`,xlarge:`${r.size.text.xlarge} ${r.size.padding.xlarge}`},i={accordion:{variants:{default:{base:`
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
      `},block:"w-full flex items-center justify-center",size:{...o},scrollable:"overflow-auto whitespace-nowrap no-scrollbar mask-fadeout-right",wrappable:"flex-wrap",content:"focus:outline-none transition-height"},input:{base:`
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
       `},container:"relative",with_icon:{tiny:"pl-7",small:"pl-8",medium:"pl-8",large:"pl-10",xlarge:"pl-11"},size:{...o},disabled:"opacity-50",actions_container:"absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center",textarea_actions_container:"absolute inset-y-1.5 right-0 pl-3 pr-1 flex space-x-1 items-start",textarea_actions_container_items:"flex items-center"},sidepanel:{base:`
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
    `,size:{...o},disabled:"opacity-50",actions_container:"absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center",chevron_container:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",chevron:"h-5 w-5 text-foreground-muted",option:`
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
    `}};e.s(["default",0,i],305551);let a=(0,t.createContext)({theme:i});e.s(["default",0,function(e){let{theme:{[e]:r}}=(0,t.useContext)(a);return r||(r=i.accordion),r=JSON.parse(r=JSON.stringify(r).replace(/\\n/g,"").replace(/\s\s+/g," "))}],938933)},867637,704598,e=>{"use strict";let t=(0,e.i(388019).default)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);e.s(["default",0,t],704598),e.s(["AlertCircle",0,t],867637)},725137,e=>{"use strict";var t=e.i(478902),r=e.i(162361),o=e.i(709520),i=e.i(975924),a=e.i(389959),n=e.i(843778);let s=r.Dialog.Root,l=r.Dialog.Trigger,d=r.Dialog.Close;(0,o.cva)("fixed inset-0 z-50 flex",{variants:{side:{top:"items-start",bottom:"items-end",left:"justify-start",right:"justify-end"}},defaultVariants:{side:"right"}});let c=({side:e,children:o,...i})=>(0,t.jsx)(r.Dialog.Portal,{...i,children:o});c.displayName=r.Dialog.Portal.displayName;let u=a.forwardRef(({className:e,children:o,...i},a)=>(0,t.jsx)(r.Dialog.Overlay,{className:(0,n.cn)("fixed inset-0 z-50 bg-alternative/90 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",e),...i,ref:a}));u.displayName=r.Dialog.Overlay.displayName;let p=(0,n.cn)(["fixed z-50 scale-100 gap-4 bg-studio opacity-100 shadow-lg","data-[state=open]:animate-in data-[state=open]:duration-300 data-[state=closed]:animate-out data-[state=closed]:duration-300"]),m=(0,o.cva)(p,{variants:{side:{top:"data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top w-full border-b inset-x-0 top-0",bottom:"data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom w-full border-t inset-x-0 bottom-0",left:"data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left h-full border-r inset-y-0 left-0",right:"data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right h-full border-l inset-y-0 right-0"},size:{content:"",default:"",sm:"",lg:"",xl:"",xxl:"",full:""}},compoundVariants:[{side:["top","bottom"],size:"content",class:"max-h-screen"},{side:["top","bottom"],size:"default",class:"h-1/3"},{side:["top","bottom"],size:"sm",class:"h-1/4"},{side:["top","bottom"],size:"lg",class:"h-1/2"},{side:["top","bottom"],size:"xl",class:"h-5/6"},{side:["top","bottom"],size:"full",class:"h-screen"},{side:["right","left"],size:"content",class:"max-w-screen"},{side:["right","left"],size:"default",class:"lg:w-1/3"},{side:["right","left"],size:"sm",class:"lg:w-1/4"},{side:["right","left"],size:"lg",class:"lg:w-1/2"},{side:["right","left"],size:"xl",class:"lg:w-4/6"},{side:["right","left"],size:"xxl",class:"w-5/6"},{side:["right","left"],size:"full",class:"w-screen"}],defaultVariants:{side:"right",size:"default"}}),g=a.forwardRef(({side:e,size:o,className:a,children:s,showClose:l=!0,hasOverlay:d=!0,...p},g)=>(0,t.jsxs)(c,{side:e,children:[d&&(0,t.jsx)(u,{}),(0,t.jsxs)(r.Dialog.Content,{ref:g,className:(0,n.cn)(m({side:e,size:o}),a),...p,children:[s,l?(0,t.jsxs)(r.Dialog.Close,{className:(0,n.cn)("absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",'before:content-[""] before:block before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:outline-red-500 before:outline-2 before:min-w-6 before:min-h-6 before:z-50 before:-translate-x-1/2 before:-translate-y-1/2'),children:[(0,t.jsx)(i.X,{className:"h-4 w-4"}),(0,t.jsx)("span",{className:"sr-only",children:"Close"})]}):null]})]}));g.displayName=r.Dialog.Content.displayName;let f=({className:e,...r})=>(0,t.jsx)("div",{className:(0,n.cn)("px-5 py-4 text-center sm:text-left border-b bg-dash-sidebar",e),...r});f.displayName="SheetHeader";let x=({className:e,...r})=>(0,t.jsx)("div",{className:(0,n.cn)("px-5 py-4",e),...r});x.displayName="SheetSection";let h=({className:e,...r})=>(0,t.jsx)("div",{className:(0,n.cn)("px-5 py-3 border-t w-full","flex flex-col-reverse sm:flex-row sm:justify-end gap-2",e),...r});h.displayName="SheetFooter";let b=a.forwardRef(({className:e,...o},i)=>(0,t.jsx)(r.Dialog.Title,{ref:i,className:(0,n.cn)("text-lg text-foreground",e),...o}));b.displayName=r.Dialog.Title.displayName;let y=a.forwardRef(({className:e,...o},i)=>(0,t.jsx)(r.Dialog.Description,{ref:i,className:(0,n.cn)("text-sm text-foreground-light",e),...o}));y.displayName=r.Dialog.Description.displayName,e.s(["Sheet",0,s,"SheetClose",0,d,"SheetContent",0,g,"SheetDescription",0,y,"SheetFooter",0,h,"SheetHeader",0,f,"SheetSection",0,x,"SheetTitle",0,b,"SheetTrigger",0,l])},197649,e=>{"use strict";function t(){for(var e,t,r=0,o="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=function e(t){var r,o,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t)if(Array.isArray(t)){var a=t.length;for(r=0;r<a;r++)t[r]&&(o=e(t[r]))&&(i&&(i+=" "),i+=o)}else for(o in t)t[o]&&(i&&(i+=" "),i+=o);return i}(e))&&(o&&(o+=" "),o+=t);return o}e.s(["clsx",0,t,"default",0,t])},202003,e=>{"use strict";e.s(["buildStudioPageTitle",0,e=>{let t=[e.entity,e.section,e.surface,e.project,e.org,e.brand],r=[];return t.forEach(e=>{let t=(e=>{if(void 0===e)return;let t=e.trim().replace(/\s+/g," ");if(0!==t.length)return t.length<=60?t:`${t.slice(0,59).trimEnd()}…`})(e);if(!t)return;let o=r[r.length-1];(void 0===o||o.toLowerCase()!==t.toLowerCase())&&r.push(t)}),r.join(" | ")}])},746301,e=>{"use strict";var t=e.i(478902),r=e.i(816467),o=e.i(389959),i=e.i(843778),a=e.i(375761),n=e.i(231665),s=e.i(938933);let l=(0,o.forwardRef)(({copy:e,showCopyOnHover:l=!1,icon:d,reveal:c=!1,actions:u,onCopy:p,iconContainerClassName:m,containerClassName:g,size:f="small",...x},h)=>{let[b,y]=(0,o.useState)("Copy"),[_,v]=(0,o.useState)(!0),w=(0,s.default)("input"),C=[];return f&&C.push(w.size[f]),(0,t.jsxs)(n.InputGroup,{className:g,children:[(0,t.jsx)(n.InputGroupInput,{ref:h,onFocus:e=>e.target.select(),...x,size:f,onCopy:p,type:c&&_?"password":x.type,disabled:x.disabled,className:(0,i.cn)(...C,x.className),"data-1p-ignore":!0,"data-lpignore":"true","data-form-type":"other","data-bwignore":!0}),d&&(0,t.jsx)(n.InputGroupAddon,{align:"inline-start",children:d}),e||u?(0,t.jsxs)(n.InputGroupAddon,{align:"inline-end",className:"pr-1 has-[>button]:mr-0 has-[>kbd]:mr-0",children:[e&&!(c&&_)?(0,t.jsx)(n.InputGroupButton,{size:"tiny",type:"default",className:(0,i.cn)(l&&"opacity-0 group-hover:opacity-100 transition"),icon:(0,t.jsx)(r.Copy,{size:16,className:"text-foreground-muted"}),onClick:()=>{var e;return e=x.value,void(0,a.copyToClipboard)(e,()=>{y("Copied"),setTimeout(function(){y("Copy")},3e3),p?.()})},children:b}):null,c&&_?(0,t.jsx)(n.InputGroupButton,{size:"tiny",type:"default",onClick:function(){v(!1)},children:"Reveal"}):null,u&&u]}):null]})});e.s(["Input",0,l])},471998,698381,e=>{"use strict";let t=(0,e.i(388019).default)("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);e.s(["default",0,t],698381),e.s(["MoreVertical",0,t],471998)},71049,e=>{"use strict";var t,r=e.i(478902),o=e.i(389959),i=e.i(174617),a=e.i(274664),n=e.i(826524),s=e.i(678001),l=e.i(940051),d=e.i(839518),c=e.i(889251),u=e.i(546595),p=e.i(735343),m="HoverCard",[g,f]=(0,a.createContextScope)(m,[l.createPopperScope]),x=(0,l.createPopperScope)(),[h,b]=g(m),y=e=>{let{__scopeHoverCard:t,children:i,open:a,defaultOpen:s,onOpenChange:d,openDelay:c=700,closeDelay:u=300}=e,p=x(t),g=o.useRef(0),f=o.useRef(0),b=o.useRef(!1),y=o.useRef(!1),[_,v]=(0,n.useControllableState)({prop:a,defaultProp:s??!1,onChange:d,caller:m}),w=o.useCallback(()=>{clearTimeout(f.current),g.current=window.setTimeout(()=>v(!0),c)},[c,v]),C=o.useCallback(()=>{clearTimeout(g.current),b.current||y.current||(f.current=window.setTimeout(()=>v(!1),u))},[u,v]),S=o.useCallback(()=>v(!1),[v]);return o.useEffect(()=>()=>{clearTimeout(g.current),clearTimeout(f.current)},[]),(0,r.jsx)(h,{scope:t,open:_,onOpenChange:v,onOpen:w,onClose:C,onDismiss:S,hasSelectionRef:b,isPointerDownOnContentRef:y,children:(0,r.jsx)(l.Root,{...p,children:i})})};y.displayName=m;var _="HoverCardTrigger",v=o.forwardRef((e,t)=>{let{__scopeHoverCard:o,...a}=e,n=b(_,o),s=x(o);return(0,r.jsx)(l.Anchor,{asChild:!0,...s,children:(0,r.jsx)(u.Primitive.a,{"data-state":n.open?"open":"closed",...a,ref:t,onPointerEnter:(0,i.composeEventHandlers)(e.onPointerEnter,I(n.onOpen)),onPointerLeave:(0,i.composeEventHandlers)(e.onPointerLeave,I(n.onClose)),onFocus:(0,i.composeEventHandlers)(e.onFocus,n.onOpen),onBlur:(0,i.composeEventHandlers)(e.onBlur,n.onClose),onTouchStart:(0,i.composeEventHandlers)(e.onTouchStart,e=>e.preventDefault())})})});v.displayName=_;var w="HoverCardPortal",[C,S]=g(w,{forceMount:void 0}),P=e=>{let{__scopeHoverCard:t,forceMount:o,children:i,container:a}=e,n=b(w,t);return(0,r.jsx)(C,{scope:t,forceMount:o,children:(0,r.jsx)(c.Presence,{present:o||n.open,children:(0,r.jsx)(d.Portal,{asChild:!0,container:a,children:i})})})};P.displayName=w;var j="HoverCardContent",z=o.forwardRef((e,t)=>{let o=S(j,e.__scopeHoverCard),{forceMount:a=o.forceMount,...n}=e,s=b(j,e.__scopeHoverCard);return(0,r.jsx)(c.Presence,{present:a||s.open,children:(0,r.jsx)(N,{"data-state":s.open?"open":"closed",...n,onPointerEnter:(0,i.composeEventHandlers)(e.onPointerEnter,I(s.onOpen)),onPointerLeave:(0,i.composeEventHandlers)(e.onPointerLeave,I(s.onClose)),ref:t})})});z.displayName=j;var N=o.forwardRef((e,a)=>{let{__scopeHoverCard:n,onEscapeKeyDown:d,onPointerDownOutside:c,onFocusOutside:u,onInteractOutside:m,...g}=e,f=b(j,n),h=x(n),y=o.useRef(null),_=(0,s.useComposedRefs)(a,y),[v,w]=o.useState(!1);return o.useEffect(()=>{if(v){let e=document.body;return t=e.style.userSelect||e.style.webkitUserSelect,e.style.userSelect="none",e.style.webkitUserSelect="none",()=>{e.style.userSelect=t,e.style.webkitUserSelect=t}}},[v]),o.useEffect(()=>{if(y.current){let e=()=>{w(!1),f.isPointerDownOnContentRef.current=!1,setTimeout(()=>{document.getSelection()?.toString()!==""&&(f.hasSelectionRef.current=!0)})};return document.addEventListener("pointerup",e),()=>{document.removeEventListener("pointerup",e),f.hasSelectionRef.current=!1,f.isPointerDownOnContentRef.current=!1}}},[f.isPointerDownOnContentRef,f.hasSelectionRef]),o.useEffect(()=>{y.current&&(function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;r.nextNode();)t.push(r.currentNode);return t})(y.current).forEach(e=>e.setAttribute("tabindex","-1"))}),(0,r.jsx)(p.DismissableLayer,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:m,onEscapeKeyDown:d,onPointerDownOutside:c,onFocusOutside:(0,i.composeEventHandlers)(u,e=>{e.preventDefault()}),onDismiss:f.onDismiss,children:(0,r.jsx)(l.Content,{...h,...g,onPointerDown:(0,i.composeEventHandlers)(g.onPointerDown,e=>{e.currentTarget.contains(e.target)&&w(!0),f.hasSelectionRef.current=!1,f.isPointerDownOnContentRef.current=!0}),ref:_,style:{...g.style,userSelect:v?"text":void 0,WebkitUserSelect:v?"text":void 0,"--radix-hover-card-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-hover-card-content-available-width":"var(--radix-popper-available-width)","--radix-hover-card-content-available-height":"var(--radix-popper-available-height)","--radix-hover-card-trigger-width":"var(--radix-popper-anchor-width)","--radix-hover-card-trigger-height":"var(--radix-popper-anchor-height)"}})})}),k=o.forwardRef((e,t)=>{let{__scopeHoverCard:o,...i}=e,a=x(o);return(0,r.jsx)(l.Arrow,{...a,...i,ref:t})});function I(e){return t=>"touch"===t.pointerType?void 0:e()}k.displayName="HoverCardArrow",e.s(["Arrow",0,k,"Content",0,z,"HoverCard",0,y,"HoverCardArrow",0,k,"HoverCardContent",0,z,"HoverCardPortal",0,P,"HoverCardTrigger",0,v,"Portal",0,P,"Root",0,y,"Trigger",0,v,"createHoverCardScope",0,f],73929);var T=e.i(73929),T=T,A=e.i(843778);let E=T.Root,O=T.Trigger,D=o.forwardRef(({className:e,align:t="center",animate:o="zoom-in",sideOffset:i=4,...a},n)=>(0,r.jsx)(T.Portal,{children:(0,r.jsx)(T.Content,{ref:n,align:t,sideOffset:i,className:(0,A.cn)("z-50 w-64 rounded-md border bg-overlay p-4 text-popover-foreground shadow-md outline-none","zoom-in"===o?"animate-in zoom-in-[99%]":"animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",e),...a})}));D.displayName=T.Content.displayName,e.s(["HoverCard",0,E,"HoverCardContent",0,D,"HoverCardTrigger",0,O],71049)},871895,965371,e=>{"use strict";var t=e.i(478902),r=e.i(843778);e.s(["ComputeBadge",0,function({infraComputeSize:e,className:o,icon:i,...a}){let n=e?.toLocaleLowerCase()==="micro"||e?.toLocaleLowerCase()==="nano",s=!!e;return(0,t.jsxs)("div",{className:(0,r.cn)("inline-flex items-center justify-center rounded text-center font-mono uppercase","whitespace-nowrap font-medium tracking-[0.06em] text-[11px] leading-[1.1] px-[5.5px] py-[3px]","transition-all",s?n?"bg-surface-75/50 group-data-[state=open]:bg-surface-75/75 text-foreground-light border border-strong":"bg-brand/10 group-data-[state=open]:bg-brand/20 text-brand-600 border border-brand-500":"bg-surface-75 group-data-[state=open]:bg-surface-75/20 text-foreground-light border border-strong","group-data-[state=open]:ring-2",n?"group-data-[state=open]:ring-foreground-muted/20":"group-data-[state=open]:ring-brand/20",o),...a,children:[e,i&&(0,t.jsx)("span",{className:"flex items-center",children:i})]})}],871895),e.i(10429);var o=e.i(837508);e.s(["getCloudProviderArchitecture",0,function(e){switch(e){case o.PROVIDERS.AWS.id:return"ARM";case o.PROVIDERS.FLY.id:return"x86 64-bit";default:return""}}],965371)},585915,e=>{"use strict";let t=(0,e.i(388019).default)("Loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]);e.s(["Loader",0,t],585915)},1606,136764,e=>{"use strict";let t=(0,e.i(388019).default)("CirclePause",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]);e.s(["default",0,t],136764),e.s(["PauseCircle",0,t],1606)},148210,e=>{"use strict";var t=e.i(242882),r=e.i(224649),o=e.i(234745);async function i({organizationId:e},t){if(!e)throw Error("organizationId is required");let{data:r,error:a}=await (0,o.get)("/platform/integrations/github/connections",{params:{query:{organization_id:e}},signal:t});return a&&(0,o.handleError)(a),r.connections}e.s(["useGitHubConnectionsQuery",0,({organizationId:e},{enabled:o=!0,...a}={})=>(0,t.useQuery)({queryKey:r.integrationKeys.githubConnectionsList(e),queryFn:({signal:t})=>i({organizationId:e},t),enabled:o&&void 0!==e,staleTime:18e5,...a})])},598952,210942,e=>{"use strict";var t=e.i(10429);let r={is_readonly_mode_enabled:{bannerContent:{warning:{title:"Your project is currently in read-only mode and is no longer accepting write requests",description:"You will need to manually override read-only mode and reduce the disk size to below 95%"},critical:{title:"Your project is currently in read-only mode and is no longer accepting write requests",description:"You will need to manually override read-only mode and reduce the disk size to below 95%"}},cardContent:{warning:{title:"Project is in read-only mode",description:"Database is no longer accepting write requests."},critical:{title:"Project is in read-only mode",description:"Database is no longer accepting write requests."}},docsUrl:`${t.DOCS_URL}/guides/platform/database-size#disabling-read-only-mode`,buttonText:"Manage disk",metric:"read_only"},disk_io_exhaustion:{bannerContent:{warning:{title:"Your project is about to deplete its Disk IO Budget, and may become unresponsive once fully exhausted",description:"Upgrade your compute or use the AI Assistant to identify and optimize disk-intensive queries."},critical:{title:"Your project has depleted its Disk IO Budget, and may become unresponsive",description:"Upgrade your compute or use the AI Assistant to identify and optimize disk-intensive queries."}},cardContent:{warning:{title:"Project is depleting its Disk IO Budget",description:"It may become unresponsive if fully exhausted"},critical:{title:"Project has depleted its Disk IO Budget",description:"It may become unresponsive"}},docsUrl:`${t.DOCS_URL}/guides/troubleshooting/exhaust-disk-io`,buttonText:"Upgrade compute",aiPrompt:"My database is running out of Disk IO budget. Can you query pg_stat_statements to find the top queries by shared blocks read and written, identify which are causing the most disk I/O, and suggest specific optimizations to reduce disk usage?",metric:"disk_io"},disk_space_exhaustion:{bannerContent:{warning:{title:"Your project is about to exhaust its available disk space, and may become unresponsive once fully exhausted",description:"You can opt to increase your disk size up to 200GB on the Database Settings page."},critical:{title:"Your project has exhausted its available disk space, and may become unresponsive",description:"You can opt to increase your disk size up to 200GB on the Database Settings page."}},cardContent:{warning:{title:"Project is exhausting its available disk space",description:"It may become unresponsive if fully exhausted"},critical:{title:"Project has exhausted its available disk space",description:"It may become unresponsive"}},docsUrl:`${t.DOCS_URL}/guides/platform/database-size#disk-management`,buttonText:void 0,metric:"disk_space"},cpu_exhaustion:{bannerContent:{warning:{title:"Your project is currently facing high CPU usage, and its performance is affected",description:"Upgrade your compute or use the AI Assistant to identify and optimize CPU-intensive queries."},critical:{title:"Your project's CPU usage is at 100% and its performance is affected",description:"Upgrade your compute or use the AI Assistant to identify and optimize CPU-intensive queries."}},cardContent:{warning:{title:"Project has high CPU usage",description:"Performance is affected"},critical:{title:"Project CPU usage is at 100%",description:"Performance is affected"}},docsUrl:`${t.DOCS_URL}/guides/troubleshooting/high-cpu-usage`,buttonText:"Upgrade compute",aiPrompt:"My database is experiencing high CPU usage. Can you query pg_stat_statements to find the top queries by total execution time and mean execution time, identify which are most CPU-intensive, and suggest specific optimizations such as missing indexes or query rewrites to reduce CPU load?",metric:"cpu"},memory_and_swap_exhaustion:{bannerContent:{warning:{title:"Your project is currently facing high memory usage, and its performance is affected",description:"Upgrade your compute or use the AI Assistant to identify and optimize memory-intensive queries."},critical:{title:"Your project's memory usage is at 100%, and its performance is affected",description:"Upgrade your compute or use the AI Assistant to identify and optimize memory-intensive queries."}},cardContent:{warning:{title:"Project has high memory usage",description:"Performance is affected"},critical:{title:"Project memory usage is at 100%",description:"Performance is affected"}},docsUrl:`${t.DOCS_URL}/guides/troubleshooting/exhaust-ram`,buttonText:"Upgrade compute",aiPrompt:"My database is experiencing high memory and swap usage. Can you query pg_stat_statements to find the top queries by shared buffer hits and rows returned, identify which queries are putting the most pressure on memory, and suggest optimizations to reduce memory consumption?",metric:"ram"},auth_rate_limit_exhaustion:{bannerContent:{warning:{title:"Your project has exceeded email rate limits in the past 24 hours and may not reliably send auth related emails to users",description:"Set up a custom SMTP and adjust rate limits where necessary to ensure that emails are sent out reliably."},critical:{title:void 0,description:void 0}},cardContent:{warning:{title:"Your project has exceeded email rate limits",description:"You will need to set up a custom SMTP provider and adjust rate limits where necessary"},critical:{title:void 0,description:void 0}},docsUrl:`${t.DOCS_URL}/guides/platform/going-into-prod#auth-rate-limits`,buttonText:"Enable custom SMTP",metric:"auth_email_rate_limit"},multiple_resource_warnings:{bannerContent:{warning:{title:"Your project is currently exhausting multiple resources, and its performance is affected",description:"Upgrade your compute or use the AI Assistant to identify and optimize the most expensive queries."},critical:{title:"Your project has exhausted multiple resources, and its performance is affected",description:"Upgrade your compute or use the AI Assistant to identify and optimize the most expensive queries."}},cardContent:{warning:{title:"Project is exhausting multiple resources",description:"Performance is affected."},critical:{title:"Project has exhausted multiple resources",description:"Performance is affected."}},docsUrl:void 0,buttonText:"Check usage",aiPrompt:"My database is exhausting multiple resources (CPU, memory, and/or disk IO). Can you query pg_stat_statements to identify the most expensive queries overall, and suggest which optimizations would have the biggest impact on reducing resource consumption?",metric:null}};e.s(["RESOURCE_WARNING_MESSAGES",0,r],598952),e.s(["getWarningContent",0,(e,t,o)=>{if("is_readonly_mode_enabled"===t)return r.is_readonly_mode_enabled.cardContent.warning;let i=e[t];if("string"==typeof i)return r[t]?.[o]?.[i]}],210942)},961753,819591,e=>{"use strict";e.i(427138);var t,r=e.i(812532),o=((t={}).GP3="gp3",t.IO2="io2",t);let i={gp3:{storage:.125,iops:.024,throughput:.095},io2:{storage:.195,iops:.119}},a={gp3:{minStorage:1,maxStorage:16384,minIops:3e3,maxIops:16e3,minThroughput:125,maxThroughput:1e3,includedIops:3e3,includedThroughput:125},io2:{minStorage:4,maxStorage:61440,minIops:1500,maxIops:256e3,includedIops:0,includedThroughput:0}},n={free:{includedDiskGB:{gp3:1,io2:0}},pro:{includedDiskGB:{gp3:8,io2:0}},team:{includedDiskGB:{gp3:8,io2:0}},enterprise:{includedDiskGB:{gp3:8,io2:0}},platform:{includedDiskGB:{gp3:8,io2:0}}};e.s(["AUTOSCALING_THRESHOLD",0,.9,"DISK_AUTOSCALE_CONFIG_DEFAULTS",0,{growthPercent:50,minIncrementSize:4,maxSizeGb:6e4},"DISK_LIMITS",0,a,"DISK_PRICING",0,i,"DISK_TYPE_OPTIONS",0,[{type:"gp3",name:"General Purpose SSD",description:"Balance between price and performance"},{type:"io2",name:"High Performance SSD",description:"High performance for mission critical applications"}],"DiskType",()=>o,"PLAN_DETAILS",0,n,"RESTRICTED_COMPUTE_FOR_IOPS_ON_GP3",0,["ci_nano","ci_micro","ci_small","ci_medium"],"RESTRICTED_COMPUTE_FOR_THROUGHPUT_ON_GP3",0,["ci_nano","ci_micro","ci_small","ci_medium"]],819591),e.i(10429);var s=e.i(837508);let l=e=>"object"==typeof e&&null!==e&&(!("supported_cloud_providers"in e)||!!Array.isArray(e.supported_cloud_providers))&&("cpu_cores"in e||"memory_gb"in e||"cpu_dedicated"in e||"baseline_disk_io_mbs"in e||"max_disk_io_mbs"in e||"connections_direct"in e||"connections_pooler"in e||"backup_duration_days"in e||"supported_cloud_providers"in e),d={pico:"ci_nano",nano:"ci_nano",micro:"ci_micro",small:"ci_small",medium:"ci_medium",large:"ci_large",xlarge:"ci_xlarge","2xlarge":"ci_2xlarge","4xlarge":"ci_4xlarge","8xlarge":"ci_8xlarge","12xlarge":"ci_12xlarge","16xlarge":"ci_16xlarge","24xlarge":"ci_24xlarge","24xlarge_optimized_memory":"ci_24xlarge_optimized_memory","24xlarge_optimized_cpu":"ci_24xlarge_optimized_cpu","24xlarge_high_memory":"ci_24xlarge_high_memory","48xlarge":"ci_48xlarge","48xlarge_optimized_memory":"ci_48xlarge_optimized_memory","48xlarge_optimized_cpu":"ci_48xlarge_optimized_cpu","48xlarge_high_memory":"ci_48xlarge_high_memory"},c={ci_nano:"Nano",ci_micro:"Micro",ci_small:"Small",ci_medium:"Medium",ci_large:"Large",ci_xlarge:"XL",ci_2xlarge:"2XL",ci_4xlarge:"4XL",ci_8xlarge:"8XL",ci_12xlarge:"12XL",ci_16xlarge:"16XL",ci_24xlarge:"24XL",ci_24xlarge_optimized_memory:"24XL - Optimized Memory",ci_24xlarge_optimized_cpu:"24XL - Optimized CPU",ci_24xlarge_high_memory:"24XL - High Memory",ci_48xlarge:"48XL",ci_48xlarge_optimized_memory:"48XL - Optimized Memory",ci_48xlarge_optimized_cpu:"48XL - Optimized CPU",ci_48xlarge_high_memory:"48XL - High Memory"};e.s(["calculateComputeSizePrice",0,({availableOptions:e,oldComputeSize:t,newComputeSize:r,plan:o})=>{let i=t;"free"!==o&&"ci_nano"===t&&(i="ci_micro");let a=e?.find(e=>e.identifier===i)?.price??0,n=e?.find(e=>e.identifier===r)?.price??0;return{oldPrice:(720*a).toFixed(2),newPrice:(720*n).toFixed(2)}},"calculateComputeSizeRequiredForIops",0,e=>{let t=Object.entries(r.COMPUTE_MAX_IOPS).map(e=>{let[t,o]=e,i=r.computeInstanceAddonVariantIdSchema.safeParse(t);if(i.success)return{size:i.data,maxIops:Number(o)}}).filter(e=>void 0!==e).sort((e,t)=>e.maxIops-t.maxIops);for(let{size:r,maxIops:o}of t)if(e<=o)return r;let o=t[t.length-1]?.size;if(o)return o},"calculateDiskSizePrice",0,({planId:e,oldSize:t,oldStorageType:r,newSize:o,newStorageType:a,numReplicas:s=0})=>{let l=i[r]?.storage??0,d=i[a]?.storage??0,{includedDiskGB:c}=n?.[e],u=Math.max(t-c[r],0)*l,p=Math.max(o-c[a],0)*d;return{oldPrice:(u+1.25*t*l*s).toFixed(2),newPrice:(p+1.25*o*d*s).toFixed(2)}},"calculateDiskSizeRequiredForIopsWithGp3",0,e=>Math.max(1,Math.ceil(e/500)),"calculateDiskSizeRequiredForIopsWithIo2",0,e=>Math.max(4,Math.ceil(e/1e3)),"calculateIOPSPrice",0,({oldStorageType:e,oldProvisionedIOPS:t,newStorageType:r,newProvisionedIOPS:n,numReplicas:s=0})=>{if(r===o.GP3){let l=Math.max(0,t-a[o.GP3].includedIops),d=Math.max(0,n-a[o.GP3].includedIops),c=l*(i[e]?.iops??0),u=d*(i[r]?.iops??0);return{oldPrice:(c*(1+s)).toFixed(2),newPrice:(u*(1+s)).toFixed(2)}}{let o="gp3"===e?(t-a[e].includedIops)*i[e].iops:t*(i[e]?.iops??0),l=n*(i[r]?.iops??0);return{oldPrice:(o*(1+s)).toFixed(2),newPrice:(l*(1+s)).toFixed(2)}}},"calculateIopsRequiredForThroughput",0,e=>Math.max(125,Math.ceil(e/.256)),"calculateMaxIopsAllowedForDiskSizeWithGp3",0,e=>Math.min(3e3*e,16e3),"calculateMaxIopsAllowedForDiskSizeWithio2",0,e=>Math.min(500*e,256e3),"calculateMaxIopsForComputeSize",0,e=>{let t=r.computeInstanceAddonVariantIdSchema.safeParse(e);return t.success?r.COMPUTE_MAX_IOPS[t.data]??0:0},"calculateMaxThroughput",0,e=>Math.min(.256*e,1e3),"calculateThroughputPrice",0,({storageType:e,newThroughput:t,oldThroughput:r,numReplicas:n=0})=>{if(e===o.GP3&&t){let e=Math.max(0,r-a[o.GP3].includedThroughput),s=Math.max(0,t-a[o.GP3].includedThroughput),l=e*i[o.GP3].throughput,d=s*i[o.GP3].throughput;return{oldPrice:(l*(1+n)).toFixed(2),newPrice:(d*(1+n)).toFixed(2)}}return{oldPrice:"0.00",newPrice:"0.00"}},"formatNumber",0,e=>e.toLocaleString("en-US"),"getAvailableComputeOptions",0,function(e,t){let o=e.find(e=>"compute_instance"===e.type),i=o?.variants.flatMap(e=>{let o=r.computeInstanceAddonVariantIdSchema.safeParse(e.identifier);return!o.success||t&&l(e.meta)&&!(!e.meta.supported_cloud_providers||e.meta.supported_cloud_providers.includes(t))?[]:[{...e,identifier:o.data,meta:l(e.meta)?e.meta:void 0}]})??[];return(o?.variants??[]).some(e=>"ci_micro"===e.identifier)||i.unshift({identifier:"ci_micro",name:"Micro",price_description:"$0.01344/hour (~$10/month)",price:.01344,price_interval:"hourly",price_type:"usage",meta:{cpu_cores:s.INSTANCE_MICRO_SPECS.cpu_cores,cpu_dedicated:s.INSTANCE_MICRO_SPECS.cpu_dedicated,memory_gb:s.INSTANCE_MICRO_SPECS.memory_gb,baseline_disk_io_mbs:s.INSTANCE_MICRO_SPECS.baseline_disk_io_mbs,max_disk_io_mbs:s.INSTANCE_MICRO_SPECS.max_disk_io_mbs,connections_direct:s.INSTANCE_MICRO_SPECS.connections_direct,connections_pooler:s.INSTANCE_MICRO_SPECS.connections_pooler}}),i.unshift({identifier:"ci_nano",name:"Nano",price_description:"$0/hour (~$0/month)",price:0,price_interval:"hourly",price_type:"usage",meta:{cpu_cores:s.INSTANCE_NANO_SPECS.cpu_cores,cpu_dedicated:s.INSTANCE_NANO_SPECS.cpu_dedicated,memory_gb:s.INSTANCE_NANO_SPECS.memory_gb,baseline_disk_io_mbs:s.INSTANCE_NANO_SPECS.baseline_disk_io_mbs,max_disk_io_mbs:s.INSTANCE_NANO_SPECS.max_disk_io_mbs,connections_direct:s.INSTANCE_NANO_SPECS.connections_direct,connections_pooler:s.INSTANCE_NANO_SPECS.connections_pooler}}),i},"mapAddOnVariantIdToComputeSize",0,(e="ci_nano")=>{let t=r.computeInstanceAddonVariantIdSchema.safeParse(e);return t.success?c[t.data]:c.ci_nano},"mapComputeSizeNameToAddonVariantId",0,e=>{let t=e&&Object.prototype.hasOwnProperty.call(d,e)?e:void 0;return d[t??"nano"]}],961753)},297306,e=>{"use strict";var t=e.i(478902),r=e.i(46492),o=e.i(389959),i=e.i(837710),a=e.i(843778),n=e.i(71049),s=e.i(479095),l=e.i(871895),d=e.i(108151),c=e.i(961753),u=e.i(540203),p=e.i(144676),m=e.i(965371),g=e.i(967052);let f=()=>(0,t.jsxs)("svg",{width:10,height:10,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("polyline",{points:"17 18 12 13 7 18",className:"animate-chevron-up",style:{animationDelay:"0s"}}),(0,t.jsx)("polyline",{points:"17 11 12 6 7 11",className:"animate-chevron-up",style:{animationDelay:"0.3s"}})]}),x=({label:e,stat:r})=>(0,t.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,t.jsx)("span",{className:"text-sm text-foreground-light w-16",children:e}),(0,t.jsx)("span",{className:"text-sm",children:r})]});e.s(["ChevronsUpAnimated",0,f,"ComputeBadgeWrapper",0,({slug:e,projectRef:h,cloudProvider:b,computeSize:y,resourceWarnings:_,badgeClassName:v})=>{let[w,C]=(0,o.useState)(!1),S=(0,m.getCloudProviderArchitecture)(b),{data:P,isPending:j}=(0,p.useProjectAddonsQuery)({projectRef:h},{enabled:w}),z=(0,c.getAvailableComputeOptions)(P?.available_addons??[],b),N=z.find(e=>e.identifier===`ci_${y}`)?.meta,k=z[z.length-1]?.identifier,I=y===k?.replace("ci_",""),{data:T,isPending:A}=(0,u.useOrgSubscriptionQuery)({orgSlug:e},{enabled:w}),E=T?.plan.id!=="free"&&"nano"===y,O=!!_?.cpu_exhaustion||!!_?.memory_and_swap_exhaustion||!!_?.disk_space_exhaustion||!!_?.disk_io_exhaustion,D=E&&O,R=(0,g.useTrack)();return y?(0,t.jsxs)(n.HoverCard,{onOpenChange:()=>C(!w),openDelay:280,children:[(0,t.jsx)(n.HoverCardTrigger,{asChild:!0,className:"group",onClick:e=>e.stopPropagation(),children:(0,t.jsx)("div",{className:(0,a.cn)("flex items-center",D&&"animate-badge-pulse"),children:(0,t.jsxs)("div",{className:(0,a.cn)("flex",D&&"relative inline-flex overflow-hidden rounded"),children:[(0,t.jsx)(l.ComputeBadge,{infraComputeSize:y,icon:D&&(0,t.jsx)(f,{}),className:(0,a.cn)(D&&"text-brand-600 border-brand-500 bg-brand/10 gap-1",v)}),D&&(0,t.jsx)("span",{className:"animate-badge-shimmer pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-brand/20 to-transparent blur-md"})]})})}),(0,t.jsxs)(n.HoverCardContent,{side:"bottom",align:"start",className:"p-0 overflow-hidden w-96",onClick:e=>e.stopPropagation(),children:[(0,t.jsx)("div",{className:"p-2 px-5 text-xs text-foreground-lighter",children:"Compute size"}),(0,t.jsx)(s.Separator,{}),(0,t.jsxs)("div",{className:"p-3 px-5 flex flex-row gap-4",children:[(0,t.jsx)("div",{children:(0,t.jsx)(l.ComputeBadge,{infraComputeSize:y})}),(0,t.jsx)("div",{className:"flex flex-col gap-4",children:j||A?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,t.jsx)(d.ShimmeringLoader,{className:"h-[20px] py-0 w-32"}),(0,t.jsx)(d.ShimmeringLoader,{className:"h-[20px] py-0 w-32"})]})}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"flex flex-col gap-1",children:"nano"===y?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{label:"CPU",stat:"Shared"}),(0,t.jsx)(x,{label:"Memory",stat:"Up to 0.5 GB"})]}):void 0!==N?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{label:"CPU",stat:`${N.cpu_cores??"?"}-core ${S} ${N.cpu_dedicated?"(Dedicated)":"(Shared)"}`}),(0,t.jsx)(x,{label:"Memory",stat:`${N.memory_gb??"-"} GB`})]}):null})})})]}),(!I||E)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Separator,{}),(0,t.jsxs)("div",{className:"p-3 px-5 text-sm flex flex-col gap-2 bg-studio",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-0",children:[(0,t.jsx)("p",{className:"text-foreground",children:E?"Free upgrade to Micro available":"Unlock more compute"}),(0,t.jsx)("p",{className:"text-foreground-light",children:E?"Paid plans include a free upgrade to Micro compute.":"Scale your project up to 64 cores and 256 GB RAM."})]}),(0,t.jsx)("div",{children:(0,t.jsx)(i.Button,{asChild:!0,type:"default",htmlType:"button",role:"button",onClick:()=>{R("compute_badge_upgrade_clicked",{computeSize:y??"unknown",planId:T?.plan.id??"unknown",upgradeType:E?"free_micro_upgrade":"compute_upgrade"})},children:(0,t.jsx)(r.default,{href:`/project/${h}/settings/compute-and-disk`,children:"Upgrade compute"})})})]})]})]})]}):null}])},589314,e=>{"use strict";var t=e.i(242882);e.i(128328);var r=e.i(86086),o=e.i(557282),i=e.i(234745);async function a(e,t){let{data:r,error:o}=await (0,i.get)("/platform/projects-resource-warnings",{params:{query:{ref:e?.ref,slug:e?.slug}},signal:t});return o&&(0,i.handleError)(o),r}e.s(["useResourceWarningsQuery",0,(e,{enabled:i=!0,...n}={})=>(0,t.useQuery)({queryKey:o.usageKeys.resourceWarnings(e.slug,e.ref),queryFn:({signal:t})=>a(e,t),enabled:r.IS_PLATFORM&&i&&(void 0!==e.ref||void 0!==e.slug),staleTime:36e5,...n})])}]);

//# debugId=d1da8076-0700-55d7-16d5-f73ba4bfb7eb
//# sourceMappingURL=0g5h-69564.6a.js.map