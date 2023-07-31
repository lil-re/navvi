import{m as b,p as T,q as j,s as A,v as C,u as N,x as L,y as R,z as g,T as S,A as V,a as F,B as P,c as x,w as t,i as o,o as _,b as e,f as m,t as u,h as f,e as n,r as q,F as D}from"./entry.464e76d3.js";const E=b({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(a,s){const r=await L[a.name]().then(l=>l.default||l);return()=>V(r,s.attrs,s.slots)}}),Q=b({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(a,s){const r=T("_route"),l=r===j()?A():r,i=C(()=>N(a.name)??l.meta.layout??"default");return()=>{const p=i.value&&i.value in L,c=l.meta.layoutTransition??R;return g(S,p&&c,{default:()=>g(E,p&&{key:i.value,name:i.value,...s.attrs},s.slots).default()}).default()}}}),I={name:"PostsList",props:{loading:!0,posts:{type:Array,default:()=>[]}},setup(a){const{loading:s,posts:r}=P(a);return{loading:s,posts:r}}},O={key:0,class:"text-center py-2"},G={class:"text-left"},H={class:"text-left"},J={class:"text-left"};function K(a,s,r,l,i,p){const c=o("v-col"),v=o("v-icon"),y=o("v-btn"),h=o("v-row"),w=o("v-container"),k=o("v-divider"),$=o("v-progress-circular"),B=o("v-table"),z=o("v-sheet");return _(),x(z,null,{default:t(()=>[e(w,null,{default:t(()=>[e(h,{align:"center",justify:"space-between"},{default:t(()=>[e(c,{class:"text-uppercase font-weight-bold text-subtitle-1"},{default:t(()=>[m(u(a.$t("posts")),1)]),_:1}),e(c,{cols:"auto"},{default:t(()=>[e(h,{dense:""},{default:t(()=>[e(c,{cols:"auto"},{default:t(()=>[e(y,{size:"x-small",color:"primary",variant:"tonal",icon:""},{default:t(()=>[e(v,{size:"large"},{default:t(()=>[m(" mdi-magnify ")]),_:1})]),_:1})]),_:1}),e(c,{cols:"auto"},{default:t(()=>[e(y,{size:"x-small",color:"primary",variant:"tonal",icon:""},{default:t(()=>[e(v,{size:"large"},{default:t(()=>[m(" mdi-plus ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(k),l.loading?(_(),f("div",O,[e($,{"model-value":"20",color:"primary",indeterminate:""})])):(_(),x(B,{key:1},{default:t(()=>[n("thead",null,[n("tr",null,[n("th",G,u(a.$t("id")),1),n("th",H,u(a.$t("title")),1),n("th",J,u(a.$t("author")),1)])]),n("tbody",null,[(_(!0),f(D,null,q(l.posts,d=>(_(),f("tr",{key:d.id},[n("td",null,u(d.id),1),n("td",null,u(d.title),1),n("td",null,u(d.user.name),1)]))),128))])]),_:1}))]),_:1})}const U=F(I,[["render",K]]);export{U as _,Q as a};