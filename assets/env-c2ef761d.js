addEventListener('error', (event) => {
    const errorElement = document.createElement('pre');
    const message = [];
    if (event.error) {
        message.push(event.error.stack || event.error.message);
    } else {
        if (event.message) {
            message.push(event.message);
        }
        if (event.filename) {
            message.push(event.filename);
        }
        if (event.lineno) {
            message.push(':');
            message.push(event.lineno);
        }
        if (event.colno) {
            message.push(':');
            message.push(event.colno);
        }
    }
    errorElement.textContent = message.join('');
    document.body.prepend(errorElement);
});
{
    const themeInput = 'input[name="Theme"]';
    const themeAttribute = 'data-theme';
    const Dark = 'Dark';
    const Light = 'Light';
    /**
     * @param {string} query 
     * @param {(Element) => void} fn 
     * @param {Element} node 
     */
    const forEach = (query, fn, node = document) => {
        const list = node.querySelectorAll(query);
        for (let index = 0; index < list.length; index++) {
            fn(list[index]);
        }
    };
    /**
     * @param {string} theme 
     */
    const setTheme = (theme) => {
        const root = document.documentElement;
        const currentTheme = root.getAttribute(themeAttribute);
        if (currentTheme !== theme) {
            root.setAttribute(themeAttribute, theme);
        }
        localStorage.theme = theme;
        forEach(themeInput, (input) => {
            input.checked = input.value === theme;
        });
    };
    /**
     * @param {MediaQueryList} query 
     */
    const onChangeTheme = (query) => {
        const dark = query.matches;
        forEach(themeInput, (input) => {
            input.checked = input.value === Dark ? dark : !dark;
        });
        setTheme(dark ? Dark : Light);
    };
    const query = matchMedia('(prefers-color-scheme: dark)');
    if (query.addEventListener) {
        query.addEventListener('change', onChangeTheme);
    } else if (query.addListener) {
        query.addListener(onChangeTheme);
    }
    setTheme(localStorage.theme || (query.matches ? Dark : Light));
    /**
     * @param {Event} event 
     */
    const onChangeValue = (event) => setTheme(event.target.value);
    forEach(themeInput, (input) => input.addEventListener('change', onChangeValue));
}
!function(){const e="undefined"!=typeof self,t="undefined"!=typeof document,n=e?self:global;let r;if(t){const e=document.querySelector("base[href]");e&&(r=e.href)}if(!r&&"undefined"!=typeof location){const e=(r=location.href.split("#")[0].split("?")[0]).lastIndexOf("/");-1!==e&&(r=r.slice(0,e+1))}const o=/\\/g;function i(e,t){if(-1!==e.indexOf("\\")&&(e=e.replace(o,"/")),"/"===e[0]&&"/"===e[1])return t.slice(0,t.indexOf(":")+1)+e;if("."===e[0]&&("/"===e[1]||"."===e[1]&&("/"===e[2]||2===e.length&&(e+="/"))||1===e.length&&(e+="/"))||"/"===e[0]){const n=t.slice(0,t.indexOf(":")+1);let r;if(r="/"===t[n.length+1]?"file:"!==n?(r=t.slice(n.length+2)).slice(r.indexOf("/")+1):t.slice(8):t.slice(n.length+("/"===t[n.length])),"/"===e[0])return t.slice(0,t.length-r.length-1)+e;const o=r.slice(0,r.lastIndexOf("/")+1)+e,i=[];let c=-1;for(let e=0;e<o.length;e++)-1!==c?"/"===o[e]&&(i.push(o.slice(c,e+1)),c=-1):"."===o[e]?"."!==o[e+1]||"/"!==o[e+2]&&e+2!==o.length?"/"===o[e+1]||e+1===o.length?e+=1:c=e:(i.pop(),e+=2):c=e;return-1!==c&&i.push(o.slice(c)),t.slice(0,t.length-r.length)+i.join("")}}const c="undefined"!=typeof Symbol,s=c&&Symbol.toStringTag,l=c?Symbol():"@";function u(){this[l]={}}const f=u.prototype;let d;f.prepareImport=function(){},f.import=function(e,t){const n=this;return Promise.resolve(n.prepareImport()).then(function(){return n.resolve(e,t)}).then(function(e){const t=function e(t,n,r){let o=t[l][n];if(o)return o;const i=[],c=Object.create(null);s&&Object.defineProperty(c,s,{value:"Module"});let u=Promise.resolve().then(function(){return t.instantiate(n,r)}).then(function(e){if(!e)throw Error("Module "+n+" did not instantiate");const r=e[1](function(e,t){o.h=!0;let n=!1;if("object"!=typeof e)e in c&&c[e]===t||(c[e]=t,n=!0);else{for(let t in e){let r=e[t];t in c&&c[t]===r||(c[t]=r,n=!0)}e.__esModule&&(c.__esModule=e.__esModule)}if(n)for(let e=0;e<i.length;e++)i[e](c);return t},2===e[1].length?{import:function(e){return t.import(e,n)},meta:t.createContext(n)}:void 0);return o.e=r.execute||function(){},[e[0],r.setters||[]]});const f=u.then(function(r){return Promise.all(r[0].map(function(o,i){const c=r[1][i];return Promise.resolve(t.resolve(o,n)).then(function(r){const o=e(t,r,n);return Promise.resolve(o.I).then(function(){return c&&(o.i.push(c),!o.h&&o.I||c(o.n)),o})})})).then(function(e){o.d=e})});return f.catch(function(e){o.e=null,o.er=e}),o=t[l][n]={id:n,i:i,n:c,I:u,L:f,h:!1,d:void 0,e:void 0,er:void 0,E:void 0,C:void 0}}(n,e);return t.C||function(e,t){return t.C=function e(t,n,r){if(!r[n.id])return r[n.id]=!0,Promise.resolve(n.L).then(function(){return Promise.all(n.d.map(function(n){return e(t,n,r)}))})}(e,t,{}).then(function(){return function e(t,n,r){if(r[n.id])return;if(r[n.id]=!0,!n.e){if(n.er)throw n.er;return n.E?n.E:void 0}let o;return n.d.forEach(function(n){{const i=e(t,n,r);i&&(o=o||[]).push(i)}}),o?Promise.all(o).then(i):i();function i(){try{let e=n.e.call(a);if(e)return e=e.then(function(){n.C=n.n,n.E=null}),n.E=n.E||e;n.C=n.n}catch(e){throw n.er=e,e}finally{n.L=n.I=void 0,n.e=null}}}(e,t,{})}).then(function(){return t.n})}(n,t)})},f.createContext=function(e){return{url:e}},f.register=function(e,t){d=[e,t]},f.getRegister=function(){const e=d;return d=void 0,e};const a=Object.freeze(Object.create(null));n.System=new u;const h=f.register;let p,m;function g(){Array.prototype.forEach.call(document.querySelectorAll("script[type=systemjs-module]"),function(e){var t,n;e.src&&System.import("import:"===e.src.slice(0,7)?e.src.slice(7):i(t=e.src,n=r)||(-1!==t.indexOf(":")?t:i("./"+t,n)))})}f.register=function(e,t){h.call(this,e,t)},f.createScript=function(e){const t=document.createElement("script");return t.charset="utf-8",t.async=!0,t.crossOrigin="anonymous",t.src=e,t},t&&window.addEventListener("error",function(e){p=e.filename,m=e.error}),f.instantiate=function(e,t){const n=this;return new Promise(function(r,o){const i=f.createScript(e);i.addEventListener("error",function(){o(Error("Error loading "+e+(t?" from "+t:"")))}),i.addEventListener("load",function(){document.head.removeChild(i),p===e?o(m):r(n.getRegister())}),document.head.appendChild(i)})},t&&(window.addEventListener("DOMContentLoaded",g),g()),e&&"function"==typeof importScripts&&(f.instantiate=function(e){const t=this;return new Promise(function(n,r){try{importScripts(e)}catch(e){r(e)}n(t.getRegister())})}),f.resolve=function(e,t){const n=i(e,t||r);if(!n){if(-1!==e.indexOf(":"))return Promise.resolve(e);throw Error('Cannot resolve "'+e+(t?'" from '+t:'"'))}return Promise.resolve(n)}}();