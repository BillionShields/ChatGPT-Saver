
# ChatGPT Saver (C)2023 by SZ @ X3EM
# Saves Chats from ChatGPT+, ChatDOC, BingGPT & FireFly to your local TEXT file
# No Warranties provided whatsoever 

Drag to your Browser's Bookmarks bar to install

[ChatGPT Save](javascript:%28function%28%29{var%20a,b;var%20c=%5B&quot;openai.com&quot;,&quot;chatdoc.com&quot;,&quot;firefly.adobe.com&quot;,&quot;bing.com&quot;%5D;var%20d=%5B&quot;yellow&quot;,&quot;yellow&quot;,&quot;yellow&quot;,&quot;yellow&quot;,&quot;red&quot;%5D;let%20e=&quot;position:fixed;top:50%;left:50%;transform:translate%28-50%,-50%%29;padding:20px;margin-top:20px;margin-bottom:20px;border-radius:10px;background-color:###;z-index:9999;font-size:larger;%22;var%20f=e.slice%28%29.replace%28%22###%22,%22red%22%29;var%20g=e.slice%28%29.replace%28%22###%22,%22yellow%22%29;function%20h%28i,j,k%29{var%20l=document.createElement%28%22div%22%29;l.innerText=i;l.style.backgroundColor=k;switch%28k%29{case'yellow':l.style.cssText=g;break;case'red':l.style.cssText=f;break;}document.body.appendChild%28l%29;setTimeout%28function%28%29{l.remove%28%29},j%29}function%20m%28n,o,p%29{if%28o.trim%28%29===%22%22%29{h%28%22Saving%20Failed.%20No%20text%20extracted%22,1e4,'red'%29}else{var%20q=%22Thanks%20for%20using%20ChatGPT%20Saver.%20%28C%292023%20by%20SZ\nhttps://github.com/BillionShields/ChatGPT-Saver%28\n\n%22;var%20r=q+o;var%20s=new%20Blob%28%5Br%5D,{type:%22text/plain%22}%29;var%20t=document.createElement%28%22a%22%29;var%20u=new%20Date%28%29.toLocaleString%28%29.replace%28/:/g,%22-%22%29.replace%28/\//g,%22-%22%29;t.download=%22ChatGPT_%22+n+%22_%22+u+%22.txt%22;t.href=URL.createObjectURL%28s%29;t.click%28%29;h%28q,3e3,'yellow'%29}}function%20v%28%29{a=document.querySelector%28'.bg-gray-800%20.flex-1'%29.textContent.substring%280,30%29;b=Array.from%28document.querySelectorAll%28%22.text-base%22%29%29.map%28function%28w%29{var%20x=w.cloneNode%28true%29;var%20y=x.querySelector%28%22.flex-grow.flex-shrink-0%22%29;if%28y%29{y.remove%28%29}return%20x.textContent}%29.join%28%22\n\n%22%29;m%28a,b,d%5B0%5D%29}function%20z%28%29{a=document.getElementsByClassName%28%22file-list-item%20active%22%29%5B0%5D.getElementsByClassName%28%22file-item-name-content%22%29%5B0%5D.textContent;b=Array.from%28document.getElementsByClassName%28%22message%22%29%29.map%28function%28A%29{return%20A.textContent}%29.join%28%22\n\n%22%29;m%28a,b,d%5B1%5D%29}function%20B%28%29{var%20C=new%20Date%28%29.toLocaleString%28%29;a=%22Firefly%20Generative%20AI%20chat%20%22+C;var%20D=document.querySelector%28%22div%5Brole='form'%5D%22%29;b=window.location.href+%22\n\n%22+D.querySelector%28%22textarea%22%29.value+%22\n\n%22;var%20E=D.querySelectorAll%28%22textarea%22%29;if%28E.length%3E1%29{E%5B1%5D.remove%28%29}b+=D.innerText.trim%28%29+%22\n\n%22;var%20F=document.getElementsByTagName%28%22img%22%29;var%20G=new%20Set%28%29;for%28var%20H=0;H%3CF.length;H++%29{var%20I=F%5BH%5D.src;if%28I.startsWith%28%22blob:%22%29&&!G.has%28I%29%29{G.add%28I%29}}b+=Array.from%28G%29.join%28%22\n%22%29;m%28a,b,d%5B2%5D%29}function%20J%28%29{a=%22BingGPT%22;const%20K=%5B'text-message-content','ac-container'%5D;let%20b='';const%20L=K.map%28N=%3EO%28document,N%29%29;const%20M=Math.max%28L%5B0%5D.length,L%5B1%5D.length%29;for%28let%20P=0;P%3CM;P++%29{if%28L%5B0%5D%5BP%5D%29{b+='Q:%20'+L%5B0%5D%5BP%5D.textContent+'\n'}if%28L%5B1%5D%5BP%5D%29{b+='A:%20'+L%5B1%5D%5BP%5D.textContent+'\n'}}m%28a,b,d%5B3%5D%29}function%20O%28Q,R%29{const%20S=%5B%5D;Q.querySelectorAll%28'*'%29.forEach%28T=%3E{if%28T.shadowRoot%29{S.push%28...O%28T.shadowRoot,R%29%29}if%28T.classList.contains%28R%29||T.matches%28R%29%29{S.push%28T%29}}%29;return%20S}for%28var%20U=0;U%3Cc.length;U++%29{if%28window.location.href.includes%28c%5BU%5D%29%29{switch%28U%29{case%200:v%28%29;break;case%201:z%28%29;break;case%202:B%28%29;break;case%203:J%28%29;break;}}else{}}}%29%28%29;)
 


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
