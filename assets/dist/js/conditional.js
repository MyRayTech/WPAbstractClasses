import{j as o}from"./jquery.js";function l(){const n=o(".condition");if(0<n.length)for(const[e,t]of Object.entries(n.toArray())){const i=JSON.parse(o(t).data("conditions").replaceAll(/\\/g,""));for(const[d,a]of Object.entries(i)){const h="#"+d,c=o(h).children("input")[0];for(let[s,r]of Object.entries(a))f(s,c,r,o(t)),o(c).on("input",()=>{f(s,c,r,o(t))})}}}function f(n,e,t,i){n==="value"?t!==o(e).val()?i.hide():i.show():n==="checked"?e.checked!==!0?i.hide():i.show():t!==o(e).attr(n)?i.hide():i.show()}o(function(){l()});
