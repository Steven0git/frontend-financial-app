import{r as l,j as e,a as x,b as h}from"./index-BrtTCi1v.js";import{F as f,I as t,B as y,A as g}from"./Alert-F7M4_pJY.js";import{M as j}from"./MainLayout-DVQhCOoA.js";const w=()=>{const[a,o]=l.useState(null),[r,n]=l.useState(!1),m=async i=>{i.preventDefault();const c=new FormData(i.target),d="55d1100248df4fc0b700d03add1cc66f1eddb3bb",p=await x("csrftoken");try{n(!0);const s=await h.post("/create_user/",c,{headers:{"X-CSRFToken":p,Authorization:`Token ${d}`,"Content-Type":"multipart/form-data","WWW-Authenticate":"Token"}}),u=await JSON.parse(s.data);o({type:"success",title:`${s.status} - ${s.statusText}`,message:u.message||"Hmm no feedback! from server"}),document.querySelector("button[type='submit']").classList.add("hidden"),setTimeout(()=>{location.href="/login"},5e3)}catch(s){console.error("Error submitting form:",s.response),o({type:"error",title:`${s.response.status} - ${s.response.statusText}`,message:s.response.data||"Server didn't send message back!"})}finally{setTimeout(()=>n(!1),1500)}};return e.jsx(j,{children:e.jsxs(f,{title:"Create a Account",children:[e.jsxs("form",{className:"space-y-4",onSubmit:m,method:"post",id:"form",children:[e.jsx("hr",{className:"opacity-40"}),e.jsxs("div",{className:"flex flex-col flex-wrap space-y-2",children:[e.jsx(t,{type:"email",id:"email",name:"Your Email",placeholder:"Input your email...",icon:"email",maxlength:"25"}),e.jsx(t,{type:"password",id:"password",name:"Password",placeholder:"Your Password...",icon:"passkey",maxlength:"35"})]}),e.jsxs("div",{className:"mt-3 grid grid-cols-2 gap-x-2 px-2",children:[e.jsx(t,{type:"text",id:"first_name",name:"First Name",placeholder:"First Name...",icon:"person",maxlength:"25"}),e.jsx(t,{type:"text",id:"last_name",name:"Last Name",placeholder:"Last Name...",icon:"person",maxlength:"25"})]}),e.jsx("div",{className:"flex justify-center justify-items-center overflow-x-hidden p-0",children:e.jsx(y,{name:"Register",icon:"add",type:"submit",className:"w-full max-w-full"})}),e.jsx("hr",{className:"my-2 opacity-40"}),e.jsxs("span",{className:"roboto-mono flex justify-end opacity-80 transition-all hover:opacity-100",children:["Already have an account?",e.jsx("a",{href:"/login",className:"link link-info ml-2 text-blue-300 underline opacity-100 hover:text-blue-600 hover:underline",children:"Login"})]})]}),e.jsxs("div",{className:"px-2 py-4",children:[r&&e.jsxs("div",{id:"loading-submit",className:"mb-4 mt-2 flex items-center border-t-2 border-blue-300",role:"alert",children:[e.jsx("span",{className:"material-symbols-outlined h-4 w-4 flex-shrink-0",children:"pending"}),e.jsx("div",{className:"roboto-mono ms-3 text-sm font-medium",children:"Sending the data to server...."})]}),!r&&a&&e.jsx(g,{...a})]})]})})};export{w as default};
