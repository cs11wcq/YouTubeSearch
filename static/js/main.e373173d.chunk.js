(this.webpackJsonpyoutube=this.webpackJsonpyoutube||[]).push([[0],{187:function(e,t,a){e.exports=a(409)},408:function(e,t,a){},409:function(e,t,a){"use strict";a.r(t);a(188),a(197);var n=a(3),i=a.n(n),r=a(185),c=a.n(r),s=a(114),l=a.n(s),o=a(50),u=a(51),m=a(53),d=a(52),v=a(54),p=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={term:""},a.onInputChange=function(e){a.setState({term:e.target.value})},a.handleFormSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.term)},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"search-bar ui segment"},i.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"ui form"},i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Video Search"),i.a.createElement("input",{type:"text",value:this.state.term,onChange:this.onInputChange}))))}}]),t}(i.a.Component),h=a(186),b=a.n(h).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",maxResults:5,key:"AIzaSyDAiQwyzkIY2ul1fQ1rgnvS93iD-GnuaRk"}}),f=(a(408),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},i.a.createElement("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title)))}),E=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return i.a.createElement(f,{onVideoSelect:a,video:e,key:e.id.videoId})}));return i.a.createElement("div",{className:"ui relaxed divided list"},n)},y=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.video;if(!e)return i.a.createElement("div",null,"Loading...");var t="https://www.youtube.com/embed/".concat(e.id.videoId);return console.log(t),i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{src:t,title:"videoplayer"})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("h4",{className:"ui header"},e.snippet.title),i.a.createElement("p",null,e.snippet.description)))}}]),t}(i.a.Component),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={videos:[],selectedVideo:null},a.onTermSubmit=function(e){var t,n;return l.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,l.a.awrap(b.get("/search",{params:{q:e}}));case 2:t=i.sent,n=t.data.items,a.setState({videos:n,selectedVideo:0===n.length?null:n[0]});case 5:case"end":return i.stop()}}))},a.onVideoSelect=function(e){a.setState({selectedVideo:e})},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.onTermSubmit("Buildings")}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement(p,{onSubmit:this.onTermSubmit}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(y,{video:this.state.selectedVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(E,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})))))}}]),t}(i.a.Component);c.a.render(i.a.createElement(S,null),document.querySelector("#root"))}},[[187,1,2]]]);
//# sourceMappingURL=main.e373173d.chunk.js.map