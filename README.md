
# ChatGPT Saver (C)2023 by SZ @ X3EM
# Saves Chats from ChatGPT+, ChatDOC, BingGPT & FireFly to your local TEXT file
# No Warranties provided whatsoever 

Create a Bookmark "ChatGPT Saver", clik Edit and pase following code into URL section: 


```js
javascript:(function(){var a,b;var c=["openai.com","chatdoc.com","firefly.adobe.com","bing.com"];var d=["yellow","yellow","yellow","yellow","red"];let e="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);padding:20px;margin-top:20px;margin-bottom:20px;border-radius:10px;background-color:###;z-index:9999;font-size:larger;";var f=e.slice().replace("###","red");var g=e.slice().replace("###","yellow");function h(i,j,k){var l=document.createElement("div");l.innerText=i;l.style.backgroundColor=k;switch(k){case'yellow':l.style.cssText=g;break;case'red':l.style.cssText=f;break;}document.body.appendChild(l);setTimeout(function(){l.remove()},j)}function m(n,o,p){if(o.trim()===""){h("Saving Failed. No text extracted",1e4,'red')}else{var q="Thanks for using ChatGPT Saver. (C)2023 by SZ\nhttps://github.com/BillionShields/ChatGPT-Saver\n\n";var r=q+o;var s=new Blob([r],{type:"text/plain"});var t=document.createElement("a");var u=new Date().toLocaleString().replace(/:/g,"-").replace(/\//g,"-");t.download="ChatGPT_"+n+"_"+u+".txt";t.href=URL.createObjectURL(s);t.click();h(q,3e3,'yellow')}}function v(){a=document.querySelector('.bg-gray-800 .flex-1').textContent.substring(0,30);b=Array.from(document.querySelectorAll(".text-base")).map(function(w){var x=w.cloneNode(true);var y=x.querySelector(".flex-grow.flex-shrink-0");if(y){y.remove()}return x.textContent}).join("\n\n");m(a,b,d[0])}function z(){a=document.getElementsByClassName("file-list-item active")[0].getElementsByClassName("file-item-name-content")[0].textContent;b=Array.from(document.getElementsByClassName("message")).map(function(A){return A.textContent}).join("\n\n");m(a,b,d[1])}function B(){var C=new Date().toLocaleString();a="Firefly Generative AI chat "+C;var D=document.querySelector("div[role='form']");b=window.location.href+"\n\n"+D.querySelector("textarea").value+"\n\n";var E=D.querySelectorAll("textarea");if(E.length>1){E[1].remove()}b+=D.innerText.trim()+"\n\n";var F=document.getElementsByTagName("img");var G=new Set();for(var H=0;H<F.length;H++){var I=F[H].src;if(I.startsWith("blob:")&&!G.has(I)){G.add(I)}}b+=Array.from(G).join("\n");m(a,b,d[2])}function J(){a="BingGPT";const K=['text-message-content','ac-container'];let b='';const L=K.map(N=>O(document,N));const M=Math.max(L[0].length,L[1].length);for(let P=0;P<M;P++){if(L[0][P]){b+='Q: '+L[0][P].textContent+'\n'}if(L[1][P]){b+='A: '+L[1][P].textContent+'\n'}}m(a,b,d[3])}function O(Q,R){const S=[];Q.querySelectorAll('*').forEach(T=>{if(T.shadowRoot){S.push(...O(T.shadowRoot,R))}if(T.classList.contains(R)||T.matches(R)){S.push(T)}});return S}for(var U=0;U<c.length;U++){if(window.location.href.includes(c[U])){switch(U){case 0:v();break;case 1:z();break;case 2:B();break;case 3:J();break;}}else{}}})();

```



# Update 04/07/2023 BingGPT is now operational!
Finally figured out how to grab text from shaddow DOM! 

# Emergency update 04/07/2023 with Adobe FireFly 
- ChatGPT OpenAi decided to change the HTML structure, so this new update accommodates those changes.

- Also added Adobe FireFly save as well
![Firefly Support](FireFLySupport.png)

# Update 04/01/2023 - Now supports ChatDOC.com
Just updated the bookmarklet - should now work on ChatDOC.com chats

This morning, I asked ChatGPT to save itself! 
You may be surprised by what happened next! 

This is the code it wrote: Introducing ChatGPT Saver! Lol. 😊 


Download & Drag file to the bookmarks bar! 
Click on it when you need your chat saved as local text file i.e.  [Sample "ChatGPT_2023-3-27_8-48-37.txt" ](ChatGPT_2023-3-27_8-48-37.txt)
![ChatGPT Saver Screenshot](ChatGPTSaverScr.png)



Enjoy!
