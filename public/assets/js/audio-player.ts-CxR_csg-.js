import{V as t,a as s,b as o,c as n,d as l,e as i,f as a,g as c,h as r,i as u,j as d,k as v,l as f,m as p,n as y,o as E,p as V,q as b,r as g,s as x,t as h,u as C,v as k,w as S,x as w,y as T,z as M,A as D,B as P,C as z,D as I,E as q}from"../light-vJFQGa6I.js";import{x as A,B}from"../state-D2OBA2eR.js";import"../play-episode-button-B_Z6a_-W.js";const L=A`<div
  id="castopod-audio-player"
  class="fixed bottom-0 left-0 flex flex-col w-full bg-elevated border-t border-subtle sm:flex-row z-50"
  data-episode="-1"
  style="display: none;"
>
  <div class="flex items-center">
    <img src="" alt="" class="h-[52px] w-[52px]" loading="lazy" />
    <div class="flex flex-col px-2">
      <p
        class="text-sm w-48 truncate font-semibold"
        title=""
        id="castopod-player-title"
      ></p>
      <p
        class="text-xs w-48 truncate"
        title=""
        id="castopod-player-podcast"
      ></p>
    </div>
  </div>
  <vm-player
    id="castopod-vm-player"
    theme="light"
    language="en"
    class="flex-1"
    icons="castopod-vm-player-icons"
    style="--vm-player-box-shadow:0; --vm-player-theme: hsl(var(--color-accent-base)); --vm-control-focus-color: hsl(var(--color-accent-contrast)); --vm-menu-item-focus-bg: hsl(var(--color-background-highlight));"
  >
    <vm-audio preload="none" id="testing-audio">
      <source src="" type="" />
    </vm-audio>
    <vm-ui>
      <vm-icon-library name="castopod-vm-player-icons"></vm-icon-library>
      <vm-controls full-width>
        <vm-playback-control></vm-playback-control>
        <vm-volume-control></vm-volume-control>
        <vm-current-time></vm-current-time>
        <vm-scrubber-control></vm-scrubber-control>
        <vm-end-time></vm-end-time>
        <vm-settings-control></vm-settings-control>
        <vm-default-settings></vm-default-settings>
      </vm-controls>
    </vm-ui>
  </vm-player>
</div>`;B(L,document.body);const e=document.querySelector('vm-icon-library[name="castopod-vm-player-icons"]');e&&(e.resolver=m=>`/assets/vm-player-icons/${m}.svg`);customElements.define("vm-player",t);customElements.define("vm-file",s);customElements.define("vm-audio",o);customElements.define("vm-ui",n);customElements.define("vm-default-ui",l);customElements.define("vm-click-to-play",i);customElements.define("vm-captions",a);customElements.define("vm-loading-screen",c);customElements.define("vm-default-controls",r);customElements.define("vm-default-settings",u);customElements.define("vm-controls",d);customElements.define("vm-playback-control",v);customElements.define("vm-volume-control",f);customElements.define("vm-scrubber-control",p);customElements.define("vm-current-time",y);customElements.define("vm-end-time",E);customElements.define("vm-settings-control",V);customElements.define("vm-time-progress",b);customElements.define("vm-control",g);customElements.define("vm-icon",x);customElements.define("vm-icon-library",h);customElements.define("vm-tooltip",C);customElements.define("vm-mute-control",k);customElements.define("vm-slider",S);customElements.define("vm-time",w);customElements.define("vm-menu",T);customElements.define("vm-menu-item",M);customElements.define("vm-submenu",D);customElements.define("vm-menu-radio-group",P);customElements.define("vm-menu-radio",z);customElements.define("vm-settings",I);customElements.define("vm-skeleton",q);
