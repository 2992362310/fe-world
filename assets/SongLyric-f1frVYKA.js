import{u as h,p as x}from"./index-ggp1Pec8.js";import{b as g,e as S,l as o,w as L,x as k,o as i,c as l,h as w,F as B,r as b,i as I,t as C,_ as F}from"./index-lD9uo4t3.js";const R={class:"song-lyric-wrap"},T=g({__name:"SongLyric",setup(W){const f=h(),m=S(()=>f.currentTime),r=o([]),u=o(),c=o(-1);L(()=>{fetch("src/assets/audio/难念的经.lrc").then(e=>e.text()).then(e=>{r.value=x(e)})});function v(e){for(let t=0;t<r.value.length;t++)if(e<r.value[t].time)return t-1;return r.value.length-1}k(()=>m.value,e=>{if(typeof e=="number"){const t=v(e);c.value=t,_()}});function _(){const e=document.querySelector(".play-panel-main"),t=u.value,n=t.children[0];if(e&&t&&n){const y=c.value;var s=e.clientHeight,p=n.clientHeight,d=t.clientHeight-s,a=p*y+p/2-s/2;a<0&&(a=0),a>d&&(a=d),t.style.transform=`translateY(-${a}px)`}}return(e,t)=>(i(),l("div",R,[w("ul",{ref_key:"lyricWrapRef",ref:u},[(i(!0),l(B,null,b(r.value,(n,s)=>(i(),l("li",{key:n.time,class:I({active:c.value===s})},C(n.words),3))),128))],512)]))}}),A=F(T,[["__scopeId","data-v-80c3b1f6"]]);export{A as default};