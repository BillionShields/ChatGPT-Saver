
# ChatGPT Saver (C)2023 by SZ @ X3EM
# Saves Chats from ChatGPT+, ChatDOC, BingGPT & FireFly to your local TEXT file
# No Warranties provided whatsoever 

Drag to your Browser's Bookmarks bar to install

[ChatGPT Saver](javascript:%28function%28%29{var%20a,b;var%20c=["openai.com","chatdoc.com","firefly.adobe.com","bing.com"];var%20d=["yellow","yellow","yellow","yellow","red"];let%20e="position:fixed;top:50%;left:50%;transform:translate%28-50%,-50%%29;padding:20px;margin-top:20px;margin-bottom:20px;border-radius:10px;background-color:###;z-index:9999;font-size:larger;";var%20f=e.slice%28%29.replace%28"###","red"%29;var%20g=e.slice%28%29.replace%28"###","yellow"%29;function%20h%28i,j,k%29{var%20l=document.createElement%28"div"%29;l.innerText=i;l.style.backgroundColor=k;switch%28k%29{case'yellow':l.style.cssText=g;break;case'red':l.style.cssText=f;break;}document.body.appendChild%28l%29;setTimeout%28function%28%29{l.remove%28%29},j%29}function%20m%28n,o,p%29{if%28o.trim%28%29===""%29{h%28"Saving%20Failed.%20No%20text%20extracted",1e4,'red'%29}else{var%20q="Thanks%20for%20using%20ChatGPT%20Saver.%20%28C%292023%20by%20SZ\nhttps://github.com/BillionShields/ChatGPT-Saver\n\n";var%20r=q+o;var%20s=new%20Blob%28[r],{type:"text/plain"}%29;var%20t=document.createElement%28"a"%29;var%20u=new%20Date%28%29.toLocaleString%28%29.replace%28/:/g,"-"%29.replace%28/\//g,"-"%29;t.download="ChatGPT_"+n+"_"+u+".txt";t.href=URL.createObjectURL%28s%29;t.click%28%29;h%28q,3e3,'yellow'%29}}function%20v%28%29{a=document.querySelector%28'.bg-gray-800%20.flex-1'%29.textContent.substring%280,30%29;b=Array.from%28document.querySelectorAll%28".text-base"%29%29.map%28function%28w%29{var%20x=w.cloneNode%28true%29;var%20y=x.querySelector%28".flex-grow.flex-shrink-0"%29;if%28y%29{y.remove%28%29}return%20x.textContent}%29.join%28"\n\n"%29;m%28a,b,d[0]%29}function%20z%28%29{a=document.getElementsByClassName%28"file-list-item%20active"%29[0].getElementsByClassName%28"file-item-name-content"%29[0].textContent;b=Array.from%28document.getElementsByClassName%28"message"%29%29.map%28function%28A%29{return%20A.textContent}%29.join%28"\n\n"%29;m%28a,b,d[1]%29}function%20B%28%29{var%20C=new%20Date%28%29.toLocaleString%28%29;a="Firefly%20Generative%20AI%20chat%20"+C;var%20D=document.querySelector%28"div[role='form']"%29;b=window.location.href+"\n\n"+D.querySelector%28"textarea"%29.value+"\n\n";var%20E=D.querySelectorAll%28"textarea"%29;if%28E.length>1%29{E[1].remove%28%29}b+=D.innerText.trim%28%29+"\n\n";var%20F=document.getElementsByTagName%28"img"%29;var%20G=new%20Set%28%29;for%28var%20H=0;H<F.length;H++%29{var%20I=F[H].src;if%28I.startsWith%28"blob:"%29&&!G.has%28I%29%29{G.add%28I%29}}b+=Array.from%28G%29.join%28"\n"%29;m%28a,b,d[2]%29}function%20J%28%29{a="BingGPT";const%20K=['text-message-content','ac-container'];let%20b='';const%20L=K.map%28N=>O%28document,N%29%29;const%20M=Math.max%28L[0].length,L[1].length%29;for%28let%20P=0;P<M;P++%29{if%28L[0][P]%29{b+='Q:%20'+L[0][P].textContent+'\n'}if%28L[1][P]%29{b+='A:%20'+L[1][P].textContent+'\n'}}m%28a,b,d[3]%29}function%20O%28Q,R%29{const%20S=[];Q.querySelectorAll%28'*'%29.forEach%28T=>{if%28T.shadowRoot%29{S.push%28...O%28T.shadowRoot,R%29%29}if%28T.classList.contains%28R%29||T.matches%28R%29%29{S.push%28T%29}}%29;return%20S}for%28var%20U=0;U<c.length;U++%29{if%28window.location.href.includes%28c[U]%29%29{switch%28U%29{case%200:v%28%29;break;case%201:z%28%29;break;case%202:B%28%29;break;case%203:J%28%29;break;}}else{}}}%29%28%29;)

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
