var twitterFetcher=function(){function v(e){return e.replace(/<b[^>]*>(.*?)<\/b>/gi,function(c,e){return e}).replace(/class=".*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function m(e,c){for(var g=[],f=RegExp("(^| )"+c+"( |$)"),a=e.getElementsByTagName("*"),d=0,b=a.length;d<b;d++)f.test(a[d].className)&&g.push(a[d]);return g}var w="",j=20,q=!0,h=[],r=!1,n=!0,p=!0,s=null,t=!0,x=!0,u=null;return{fetch:function(e,c,g,f,a,d,b,k,l){void 0===g&&(g=20);void 0===f&&(q=!0);void 0===a&&(a=!0);void 0===
d&&(d=!0);void 0===b&&(b="default");void 0===k&&(k=!0);void 0===l&&(l=null);r?h.push({id:e,domId:c,maxTweets:g,enableLinks:f,showUser:a,showTime:d,dateFunction:b,showRt:k,customCallback:l}):(r=!0,w=c,j=g,q=f,p=a,n=d,x=k,s=b,u=l,c=document.createElement("script"),c.type="text/javascript",c.src="//cdn.syndication.twimg.com/widgets/timelines/"+e+"?&lang=en&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random(),document.getElementsByTagName("head")[0].appendChild(c))},callback:function(e){var c=
document.createElement("div");c.innerHTML=e.body;"undefined"===typeof c.getElementsByClassName&&(t=!1);e=[];var g=[],f=[],a=[],d=0;if(t)for(c=c.getElementsByClassName("tweet");d<c.length;){0<c[d].getElementsByClassName("retweet-credit").length?a.push(!0):a.push(!1);if(!a[d]||a[d]&&x)e.push(c[d].getElementsByClassName("e-entry-title")[0]),g.push(c[d].getElementsByClassName("p-author")[0]),f.push(c[d].getElementsByClassName("dt-updated")[0]);d++}else for(c=m(c,"tweet");d<c.length;)e.push(m(c[d],"e-entry-title")[0]),
g.push(m(c[d],"p-author")[0]),f.push(m(c[d],"dt-updated")[0]),0<m(c[d],"retweet-credit").length?a.push(!0):a.push(!1),d++;e.length>j&&(e.splice(j,e.length-j),g.splice(j,g.length-j),f.splice(j,f.length-j),a.splice(j,a.length-j));c=[];d=e.length;for(a=0;a<d;){if("string"!==typeof s){var b=new Date(f[a].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),b=s(b);f[a].setAttribute("aria-label",b);if(e[a].innerText)if(t)f[a].innerText=b;else{var k=document.createElement("p"),l=document.createTextNode(b);
k.appendChild(l);k.setAttribute("aria-label",b);f[a]=k}else f[a].textContent=b}q?(b="",p&&(b+='<div class="user">'+v(g[a].innerHTML)+"</div>"),b+='<p class="tweet">'+v(e[a].innerHTML)+"</p>",n&&(b+='<p class="timePosted">'+f[a].getAttribute("aria-label")+"</p>")):e[a].innerText?(b="",p&&(b+='<p class="user">'+g[a].innerText+"</p>"),b+='<p class="tweet">'+e[a].innerText+"</p>",n&&(b+='<p class="timePosted">'+f[a].innerText+"</p>")):(b="",p&&(b+='<p class="user">'+g[a].textContent+"</p>"),b+='<p class="tweet">'+
e[a].textContent+"</p>",n&&(b+='<p class="timePosted">'+f[a].textContent+"</p>"));c.push(b);a++}if(null==u){e=c.length;g=0;f=document.getElementById(w);for(d="<ul class='tweet-twitter'>";g<e;)d+="<li>"+c[g]+"</li>",g++;f.innerHTML=d+"</ul>"}else u(c);r=!1;0<h.length&&(twitterFetcher.fetch(h[0].id,h[0].domId,h[0].maxTweets,h[0].enableLinks,h[0].showUser,h[0].showTime,h[0].dateFunction,h[0].showRt,h[0].customCallback),h.splice(0,1))}}}();


// for render getoomi tweets
twitterFetcher.fetch('514138372558684160', 'twitter-widget1', 20, true);

// for render getgetoomi tweets
twitterFetcher.fetch('514138818992025600', 'twitter-widget2', 20, true);

//514138818992025600
// for getoomi favorites tweets
// twitterFetcher.fetch('453867954812112896', 'twitter-widget3', 20, true);

function dateFormatter(date) {
  return date.toTimeString();
}


// ##### Advanced example 2 #####
// Similar as previous, except this time we pass a custom function to render the
// tweets ourself! Useful if you need to know exactly when data has returned or
// if you need full control over the output.

function handleTweets(tweets){ 
    var x = tweets.length;
    var n = 0;
    var element = document.getElementById('example4');
    var html = '<ul>';
    while(n < x) {
      html += '<li>' + tweets[n] + '</li>';
      n++;
    }
    html += '</ul>';
    element.innerHTML = html;
}