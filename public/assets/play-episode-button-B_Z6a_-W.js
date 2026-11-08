import{i as y,n as s,r as d,a as u,x as c,t as h}from"./state-D2OBA2eR.js";var b=Object.defineProperty,v=Object.getOwnPropertyDescriptor,a=(e,t,i,l)=>{for(var r=l>1?void 0:l?v(t,i):t,n=e.length-1,p;n>=0;n--)(p=e[n])&&(r=(l?p(t,i,r):p(r))||r);return l&&r&&b(t,i,r),r};let o=class extends u{constructor(){super(...arguments),this.id="0",this.src="",this.mediaType="",this._playbackSpeed=1,this._events=[{name:"canplay",onEvent:e=>{e.target?.play()}},{name:"play",onEvent:()=>{this.isPlaying=!0}},{name:"pause",onEvent:()=>{this.isPlaying=!1}},{name:"ratechange",onEvent:e=>{this._playbackSpeed=e.target?.playbackRate}}]}async connectedCallback(){super.connectedCallback(),await this._elementReady("div[id=castopod-audio-player]"),await this._elementReady("div[id=castopod-audio-player] audio"),this._castopodAudioPlayer=document.body.querySelector("div[id=castopod-audio-player]"),this._audio=this._castopodAudioPlayer.querySelector("audio")}_elementReady(e){return new Promise(t=>{const i=document.querySelector(e);i&&t(i),new MutationObserver((l,r)=>{Array.from(document.querySelectorAll(e)).forEach(n=>{t(n),r.disconnect()})}).observe(document.documentElement,{childList:!0,subtree:!0})})}play(){const e=this._castopodAudioPlayer.dataset.episode,t=e===this.id;if(e==="-1"&&this._showPlayer(),t)this._audio.play();else{const i=document.querySelector(`play-episode-button[id="${e}"]`);i&&this._flushLastPlayButton(i),this._loadEpisode()}}pause(){this._audio.pause()}_showPlayer(){this._castopodAudioPlayer.style.display="",document.body.classList.add("pb-[105px]","sm:pb-[52px]")}_flushLastPlayButton(e){e.isPlaying=!1;for(const t of e._events)e._audio.removeEventListener(t.name,t.onEvent,!1);this._playbackSpeed=e._playbackSpeed}_loadEpisode(){this._castopodAudioPlayer.dataset.episode=this.id,this._audio.src=this.src,this._audio.load(),this._audio.playbackRate=this._playbackSpeed;for(const l of this._events)this._audio.addEventListener(l.name,l.onEvent,!1);const e=this._castopodAudioPlayer.querySelector("img");e&&(e.src=this.imageSrc,e.alt=this.title);const t=this._castopodAudioPlayer.querySelector('p[id="castopod-player-title"]');t&&(t.title=this.title,t.innerHTML=this.title);const i=this._castopodAudioPlayer.querySelector('p[id="castopod-player-podcast"]');i&&(i.title=this.podcast,i.innerHTML=this.podcast)}render(){return c`<button
      class="${this.isPlaying?"playing":""}"
      @click="${this.isPlaying?this.pause:this.play}"
      title="${this.isPlaying?this.playingLabel:this.playLabel}"
    >
      ${this.isPlaying?c`<svg
            class="animate-spin"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M13 9.17A3 3 0 1 0 15 12V2.458c4.057 1.274 7 5.064 7 9.542 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c.337 0 .671.017 1 .05v7.12z"
              />
            </g>
          </svg>`:c`<svg
            viewBox="0 0 24 24"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M7.752 5.439l10.508 6.13a.5.5 0 0 1 0 .863l-10.508 6.13A.5.5 0 0 1 7 18.128V5.871a.5.5 0 0 1 .752-.432z"
            />
          </svg>`}
    </button>`}};o.styles=y`
    button {
      background-color: hsl(var(--color-accent-base));
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      padding: 0.5rem 0.5rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      border: 2px solid transparent;
      border-radius: 9999px;

      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }

    button:hover {
      background-color: hsl(var(--color-accent-hover));
    }

    button:focus {
      outline: none;
      box-shadow:
        0 0 0 2px hsl(var(--color-background-base)),
        0 0 0 4px hsl(var(--color-accent-base));
    }

    button.playing {
      background-color: hsl(var(--color-background-base));
      border: 2px solid hsl(var(--color-accent-base));
    }

    button.playing:hover {
      background-color: hsl(var(--color-background-elevated));
    }

    button.playing svg {
      color: hsl(var(--color-accent-base));
    }

    svg {
      font-size: 1.5rem;
      color: hsl(var(--color-accent-contrast));
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    .animate-spin {
      animation: spin 3s linear infinite;
    }
  `;a([s()],o.prototype,"id",2);a([s()],o.prototype,"src",2);a([s()],o.prototype,"mediaType",2);a([s()],o.prototype,"title",2);a([s()],o.prototype,"podcast",2);a([s()],o.prototype,"imageSrc",2);a([s()],o.prototype,"playLabel",2);a([s()],o.prototype,"playingLabel",2);a([s({attribute:!1})],o.prototype,"_castopodAudioPlayer",2);a([s({attribute:!1})],o.prototype,"_audio",2);a([d()],o.prototype,"isPlaying",2);a([d()],o.prototype,"_playbackSpeed",2);a([d()],o.prototype,"_events",2);o=a([h("play-episode-button")],o);
