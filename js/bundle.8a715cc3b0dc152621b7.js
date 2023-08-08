(()=>{"use strict";var t=function(){var t=document.querySelectorAll(".share");t&&t.forEach((function(t){t.addEventListener("click",(function(t){var o,e,n;t.preventDefault();var i=t.target;if(i){var s=i.closest(".share");s&&function(t,o,e){if(void 0===t&&(t=window.location.href),void 0===o&&(o=window.baseTitle),void 0===e&&(e=window.baseDescription),navigator.share)navigator.share({title:o,url:t}).catch((function(t){return console.warn(t)}));else{var n=encodeURIComponent(e+" "+t);a("<a class='button facebook' href='https://www.facebook.com/sharer/sharer.php?u=".concat(t,"' title='Share on Facebook'><i class='fas fa-share-alt'></i>&nbsp;&nbsp;Facebook</a>")+"<a class='button twitter' href='https://twitter.com/intent/tweet?text=".concat(n,"' title='Share on Twitter'><i class='fas fa-share-alt'></i>&nbsp;&nbsp;Twitter</a>")+"<a class='button email' href='mailto:?subject=Check+out+".concat(o,"!&body=").concat(n,"' title='Share on Email'><i class='fas fa-share-alt'></i>&nbsp;&nbsp;Email</a>")+"<a class='button copy' href='#' title='Copy' data-url='".concat(t,"'><i class='fas fa-copy'></i>&nbsp;&nbsp;Copy</button>"),"notification-share")}}(null!==(o=s.dataset.url)&&void 0!==o?o:window.baseUrl,null!==(e=s.dataset.title)&&void 0!==e?e:window.baseTitle,null!==(n=s.dataset.text)&&void 0!==n?n:window.baseDescription)}}))}));var o=document.querySelectorAll(".copy");o&&o.forEach((function(t){t.addEventListener("click",(function(t){var o;t.preventDefault();var e=t.target;if(e){var n,i=e.closest(".copy");i&&(void 0===(n=null!==(o=i.dataset.url)&&void 0!==o?o:window.baseUrl)&&(n=window.location.href),n&&(navigator.clipboard?navigator.clipboard.writeText(n).then((function(){a("<span class='bold'>Success! <span role='img' title='Party' class='icon icon-partyface'>🥳</span></span> URL copied to clipboard: <span class='url'>".concat(n,"</span>"))})).catch((function(){a("<span class='bold'>Copy URL:</span> <span class='url'>".concat(n,"</span>"))})):a("<span class='bold'>Copy URL:</span> <span class='url'>".concat(n,"</span>"))))}}))}))},a=function(a,e,n){var i;void 0===e&&(e=""),void 0===n&&(n=""),e&&(i=e,document.cookie.split(";").find((function(t){return t===i})))||new Promise((function(t,i){var s=document.querySelector(".notification"),c=document.querySelector(".notification p"),r=document.querySelector(".notification .close");s||i(".notification element not found"),o(),c&&(c.innerHTML="paypal-confirmation"===a?"Transaction approved! Thank you so much! <span role='img' title='Heart' class='icon icon-heart'>♥</span>":"cookie"===a?"Cookies and other tracking technologies are used on this website to improve your browsing experience, analyze website traffic, and show personalized content and targeted ads. By browsing this website, you consent to the use of cookies and other tracking technologies.":a),n?(s.dataset.class=n,s.classList.add("notification ".concat(n))):s.classList.add("notification"),e&&(s.dataset.cookie=e),r&&r.addEventListener("click",(function(){o()})),s.setAttribute("aria-hidden","false"),s.style.display="block",t(!0)})).then((function(a){a&&t()})).catch((function(t){console.error(t)}))},o=function(){var t=document.querySelector(".notification");t&&(t.style.display="none",t.setAttribute("aria-hidden","true"),t.dataset.class&&(t.classList.remove(t.dataset.class),t.dataset.class=""),t.dataset.cookie&&(function(t,a){void 0===a&&(a=!0);var o=new Date;o.setTime(o.getTime()+31536e6),document.cookie=t+"="+a+"; expires="+o.toUTCString()+"; path=/"}(t.dataset.cookie,!0),t.dataset.cookie=""))};window.addEventListener("load",(function(){if(a("cookie","notification-cookie"),window.location.search){var o=window.location.search.substring(1);if(o){var e=o.split("=");null!=e&&void 0!==e[0]&&null!==e[0]&&"notification"===e[0]&&void 0!==e[1]&&null!==e[1]&&a(e[1])}}t()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxFQU1oQ3JFLEdBQ0QsRyIsInNvdXJjZXMiOlsid2VicGFjazovLyoqKlVSTCoqKi8uL2pzL2Nvb2tpZXMudHMiLCJ3ZWJwYWNrOi8vKioqVVJMKioqLy4vanMvdXJscy50cyIsIndlYnBhY2s6Ly8qKipVUkwqKiovLi9qcy9ub3RpZmljYXRpb25zLnRzIiwid2VicGFjazovLyoqKlVSTCoqKi8uL2pzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU2V0IGNvb2tpZS5cbiAqIEBwYXJhbSBuYW1lIFxuICogQHBhcmFtIHZhbHVlIFxuICovXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZ3xib29sZWFuID0gdHJ1ZSk6IHZvaWQgPT4ge1xuXHRjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcblx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcblx0ZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9JyArIHZhbHVlICsgJzsgZXhwaXJlcz0nICsgZGF0ZS50b1VUQ1N0cmluZygpICsgJzsgcGF0aD0vJztcbn1cblxuLyoqXG4gKiBHZXQgY29va2llIGJ5IG5hbWUuXG4gKiBAcGFyYW0gbmFtZSBcbiAqIEByZXR1cm5zIENvb2tpZSBuYW1lLlxuICovXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gKG5hbWU6IHN0cmluZyk6IHN0cmluZ3x1bmRlZmluZWQgPT4ge1xuXHRyZXR1cm4gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7JykuZmluZChjb29raWUgPT4gY29va2llID09PSBuYW1lKTtcbn0iLCJpbXBvcnQgeyBzaG93Tm90aWZpY2F0aW9uIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG5cdGludGVyZmFjZSBXaW5kb3cge1xuXHRcdGJhc2VVcmw6IHN0cmluZztcblx0XHRiYXNlVGl0bGU6IHN0cmluZztcblx0XHRiYXNlRGVzY3JpcHRpb246IHN0cmluZztcblx0fVxufVxuXG4vKipcbiAqIENvcGllcyBwcm92aWRlZCBVUkwgdG8gY2xpcGJvYXJkIGlmIG5hdmlnYXRvci5jbGlwYm9hcmQgaXMgYXZhaWxhYmxlLCBvdGhlcndpc2UgZGlzcGxheXMgYSBub3RpZmljYXRpb24gd2l0aCB0aGUgVVJMLlxuICogQHBhcmFtIHVybCBcbiAqIEByZXR1cm5zIHZvaWRcbiAqL1xuZXhwb3J0IGNvbnN0IGNvcHlVcmwgPSAodXJsOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZik6IHZvaWQgPT4ge1xuXHRpZiAoIXVybCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XG5cdFx0bmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodXJsKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRzaG93Tm90aWZpY2F0aW9uKGA8c3BhbiBjbGFzcz0nYm9sZCc+U3VjY2VzcyEgPHNwYW4gcm9sZT0naW1nJyB0aXRsZT0nUGFydHknIGNsYXNzPSdpY29uIGljb24tcGFydHlmYWNlJz7wn6WzPC9zcGFuPjwvc3Bhbj4gVVJMIGNvcGllZCB0byBjbGlwYm9hcmQ6IDxzcGFuIGNsYXNzPSd1cmwnPiR7dXJsfTwvc3Bhbj5gKTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHRzaG93Tm90aWZpY2F0aW9uKGA8c3BhbiBjbGFzcz0nYm9sZCc+Q29weSBVUkw6PC9zcGFuPiA8c3BhbiBjbGFzcz0ndXJsJz4ke3VybH08L3NwYW4+YCk7XG5cdFx0XHR9KTtcblxuXHR9IGVsc2Uge1xuXHRcdHNob3dOb3RpZmljYXRpb24oYDxzcGFuIGNsYXNzPSdib2xkJz5Db3B5IFVSTDo8L3NwYW4+IDxzcGFuIGNsYXNzPSd1cmwnPiR7dXJsfTwvc3Bhbj5gKTtcblx0fVxuXG5cdC8vIEB0b2RvOiBTZW5kIGNvcHkgZXZlbnQgdG8gR0EuXG5cdC8vIGd0YWcoJ2V2ZW50JywgJ3NlbGVjdF9jb250ZW50Jywge1xuXHQvLyBcdGl0ZW1faWQ6IHVybCxcblx0Ly8gfSk7XG59XG5cbi8qKlxuICogRGlzcGxheXMgdGhlIG5hdGl2ZSBzaGFyaW5nIG1lY2hhbmlzbSBmb3IgdGhlIGRldmljZSBpZiBuYXZpZ2F0b3Iuc2hhcmUgaXMgYXZhaWxhYmxlLCBvdGhlcndpc2UgZGlzcGxheXMgYSBub3RpZmljYXRpb24gd2l0aCB0aGUgc2hhcmUgZGF0YS5cbiAqIEBwYXJhbSB1cmwgXG4gKiBAcGFyYW0gdGl0bGUgXG4gKiBAcGFyYW0gdGV4dCBcbiAqIEByZXR1cm5zIFxuICovXG5leHBvcnQgY29uc3Qgc2hhcmVVcmwgPSAodXJsOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZiwgdGl0bGU6IHN0cmluZyA9IHdpbmRvdy5iYXNlVGl0bGUsIHRleHQ6IHN0cmluZyA9IHdpbmRvdy5iYXNlRGVzY3JpcHRpb24pOiB2b2lkID0+IHtcblx0aWYgKG5hdmlnYXRvci5zaGFyZSkge1xuXHRcdG5hdmlnYXRvci5zaGFyZSh7IHRpdGxlLCB1cmwgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgdGV4dEVuY29kZWQgPSBlbmNvZGVVUklDb21wb25lbnQodGV4dCArICcgJyArIHVybCk7XG5cdFx0c2hvd05vdGlmaWNhdGlvbihcblx0XHRcdGA8YSBjbGFzcz0nYnV0dG9uIGZhY2Vib29rJyBocmVmPSdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT0ke3VybH0nIHRpdGxlPSdTaGFyZSBvbiBGYWNlYm9vayc+PGkgY2xhc3M9J2ZhcyBmYS1zaGFyZS1hbHQnPjwvaT4mbmJzcDsmbmJzcDtGYWNlYm9vazwvYT5gICtcblx0XHRcdGA8YSBjbGFzcz0nYnV0dG9uIHR3aXR0ZXInIGhyZWY9J2h0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9JHt0ZXh0RW5jb2RlZH0nIHRpdGxlPSdTaGFyZSBvbiBUd2l0dGVyJz48aSBjbGFzcz0nZmFzIGZhLXNoYXJlLWFsdCc+PC9pPiZuYnNwOyZuYnNwO1R3aXR0ZXI8L2E+YCArXG5cdFx0XHRgPGEgY2xhc3M9J2J1dHRvbiBlbWFpbCcgaHJlZj0nbWFpbHRvOj9zdWJqZWN0PUNoZWNrK291dCske3RpdGxlfSEmYm9keT0ke3RleHRFbmNvZGVkfScgdGl0bGU9J1NoYXJlIG9uIEVtYWlsJz48aSBjbGFzcz0nZmFzIGZhLXNoYXJlLWFsdCc+PC9pPiZuYnNwOyZuYnNwO0VtYWlsPC9hPmAgK1xuXHRcdFx0YDxhIGNsYXNzPSdidXR0b24gY29weScgaHJlZj0nIycgdGl0bGU9J0NvcHknIGRhdGEtdXJsPScke3VybH0nPjxpIGNsYXNzPSdmYXMgZmEtY29weSc+PC9pPiZuYnNwOyZuYnNwO0NvcHk8L2J1dHRvbj5gLFxuXHRcdFx0J25vdGlmaWNhdGlvbi1zaGFyZSdcblx0XHQpO1xuXHR9XG5cblx0Ly8gQHRvZG86IFNlbmQgc2hhcmUgZXZlbnQgdG8gR0EuXG5cdC8vIGd0YWcoJ2V2ZW50JywgJ3NoYXJlJywge1xuXHQvLyBcdGNvbnRlbnRfaWQ6IHVybCxcblx0Ly8gfSk7XG59XG5cbi8qKlxuICogQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gc2hhcmUgYW5kIGNvcHkgbGlua3MuXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRMaW5rRXZlbnRMaXN0ZW5lcnMgPSAoKTogdm9pZCA9PiB7XG5cblx0Y29uc3Qgc2hhcmVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGFyZScpO1xuXG5cdGlmIChzaGFyZUxpbmtzKSB7XG5cdFx0c2hhcmVMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XG5cdFx0XHRcdGNvbnN0IHRhcmdldEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xuXHRcblx0XHRcdFx0aWYgKCF0YXJnZXRFbGVtZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRsZXQgZWxlbWVudCA9IDxIVE1MRWxlbWVudD50YXJnZXRFbGVtZW50LmNsb3Nlc3QoJy5zaGFyZScpO1xuXHRcblx0XHRcdFx0aWYgKCFlbGVtZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRzaGFyZVVybChcblx0XHRcdFx0XHRlbGVtZW50LmRhdGFzZXQudXJsID8/IHdpbmRvdy5iYXNlVXJsLFxuXHRcdFx0XHRcdGVsZW1lbnQuZGF0YXNldC50aXRsZSA/PyB3aW5kb3cuYmFzZVRpdGxlLFxuXHRcdFx0XHRcdGVsZW1lbnQuZGF0YXNldC50ZXh0ID8/IHdpbmRvdy5iYXNlRGVzY3JpcHRpb25cblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgY29weUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcHknKTtcblxuXHRpZiAoY29weUxpbmtzKSB7XG5cdFx0Y29weUxpbmtzLmZvckVhY2gobGluayA9PiB7XG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcblx0XHRcdFx0Y29uc3QgdGFyZ2V0RWxlbWVudCA9IDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQ7XG5cdFxuXHRcdFx0XHRpZiAoIXRhcmdldEVsZW1lbnQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdGxldCBlbGVtZW50ID0gPEhUTUxFbGVtZW50PnRhcmdldEVsZW1lbnQuY2xvc2VzdCgnLmNvcHknKTtcblx0XG5cdFx0XHRcdGlmICghZWxlbWVudCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0Y29weVVybChlbGVtZW50LmRhdGFzZXQudXJsID8/IHdpbmRvdy5iYXNlVXJsKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBzZXRDb29raWUsIGdldENvb2tpZSB9IGZyb20gXCIuL2Nvb2tpZXNcIjtcbmltcG9ydCB7IHNldExpbmtFdmVudExpc3RlbmVycyB9IGZyb20gXCIuL3VybHNcIjtcblxuLy8gZGVjbGFyZSBnbG9iYWwge1xuLy8gXHRpbnRlcmZhY2UgV2luZG93IHtcbi8vIFx0XHRiYXNlVXJsOiBzdHJpbmc7XG4vLyBcdFx0YmFzZVRpdGxlOiBzdHJpbmc7XG4vLyBcdFx0YmFzZURlc2NyaXB0aW9uOiBzdHJpbmc7XG4vLyBcdH1cbi8vIH1cblxuLyoqXG4gKiBTaG93IG5vdGlmaWNhdGlvbi5cbiAqIEBwYXJhbSB0ZXh0IFxuICogQHBhcmFtIGNvb2tpZU5hbWUgXG4gKiBAcGFyYW0gY2xhc3NOYW1lIFxuICovXG5leHBvcnQgY29uc3Qgc2hvd05vdGlmaWNhdGlvbiA9ICh0ZXh0OiBzdHJpbmcsIGNvb2tpZU5hbWU6IHN0cmluZyA9ICcnLCBjbGFzc05hbWU6IHN0cmluZyA9ICcnKTogdm9pZCA9PiB7XG5cblx0Ly8gRG9uJ3QgZGlzcGxheSBub3RpZmljYXRpb24gaWYgY29va2llIGlzIHNldC5cblx0aWYgKGNvb2tpZU5hbWUgJiYgZ2V0Q29va2llKGNvb2tpZU5hbWUpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG5cdFx0Y29uc3Qgbm90aWZpY2F0aW9uQ29udGFpbmVyID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb24nKTtcblx0XHRjb25zdCBub3RpZmljYXRpb25UZXh0Q29udGFpbmVyID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb24gcCcpO1xuXHRcdGNvbnN0IG5vdGlmaWNhdGlvbkNsb3NlQ29udGFpbmVyID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb24gLmNsb3NlJyk7XG5cblx0XHRpZiAoIW5vdGlmaWNhdGlvbkNvbnRhaW5lcikge1xuXHRcdFx0cmVqZWN0KCcubm90aWZpY2F0aW9uIGVsZW1lbnQgbm90IGZvdW5kJyk7XG5cdFx0fVxuXG5cdFx0Ly8gQ2xvc2UgYW55IG9wZW4gbm90aWZpY2F0aW9ucy5cblx0XHRjbG9zZU5vdGlmaWNhdGlvbigpO1xuXG5cdFx0Ly8gU2V0IG5vdGlmaWNhdGlvbiB0ZXh0LlxuXHRcdGlmIChub3RpZmljYXRpb25UZXh0Q29udGFpbmVyKSB7XG5cdFx0XHRpZiAodGV4dCA9PT0gJ3BheXBhbC1jb25maXJtYXRpb24nKSB7XG5cdFx0XHRcdG5vdGlmaWNhdGlvblRleHRDb250YWluZXIuaW5uZXJIVE1MID0gYFRyYW5zYWN0aW9uIGFwcHJvdmVkISBUaGFuayB5b3Ugc28gbXVjaCEgPHNwYW4gcm9sZT0naW1nJyB0aXRsZT0nSGVhcnQnIGNsYXNzPSdpY29uIGljb24taGVhcnQnPuKZpTwvc3Bhbj5gO1xuXHRcdFx0fSBlbHNlIGlmICh0ZXh0ID09PSAnY29va2llJykge1xuXHRcdFx0XHRub3RpZmljYXRpb25UZXh0Q29udGFpbmVyLmlubmVySFRNTCA9IGBDb29raWVzIGFuZCBvdGhlciB0cmFja2luZyB0ZWNobm9sb2dpZXMgYXJlIHVzZWQgb24gdGhpcyB3ZWJzaXRlIHRvIGltcHJvdmUgeW91ciBicm93c2luZyBleHBlcmllbmNlLCBhbmFseXplIHdlYnNpdGUgdHJhZmZpYywgYW5kIHNob3cgcGVyc29uYWxpemVkIGNvbnRlbnQgYW5kIHRhcmdldGVkIGFkcy4gQnkgYnJvd3NpbmcgdGhpcyB3ZWJzaXRlLCB5b3UgY29uc2VudCB0byB0aGUgdXNlIG9mIGNvb2tpZXMgYW5kIG90aGVyIHRyYWNraW5nIHRlY2hub2xvZ2llcy5gO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bm90aWZpY2F0aW9uVGV4dENvbnRhaW5lci5pbm5lckhUTUwgPSB0ZXh0O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFNldCBub3RpZmljYXRpb24gY2xhc3MuXG5cdFx0aWYgKGNsYXNzTmFtZSkge1xuXHRcdFx0bm90aWZpY2F0aW9uQ29udGFpbmVyLmRhdGFzZXQuY2xhc3MgPSBjbGFzc05hbWU7XG5cdFx0XHRub3RpZmljYXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChgbm90aWZpY2F0aW9uICR7Y2xhc3NOYW1lfWApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub3RpZmljYXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChgbm90aWZpY2F0aW9uYCk7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IGNvb2tpZSAocHJldmVudHMgbm90aWZpY2F0aW9uIGZyb20gZGlzcGxheWluZyBhZ2FpbikuXG5cdFx0aWYgKGNvb2tpZU5hbWUpIHtcblx0XHRcdG5vdGlmaWNhdGlvbkNvbnRhaW5lci5kYXRhc2V0LmNvb2tpZSA9IGNvb2tpZU5hbWU7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IGNsb3NlIGZ1bmN0aW9uYWxpdHkuXG5cdFx0aWYgKG5vdGlmaWNhdGlvbkNsb3NlQ29udGFpbmVyKSB7XG5cdFx0XHRub3RpZmljYXRpb25DbG9zZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0Y2xvc2VOb3RpZmljYXRpb24oKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIERpc3BsYXkgbm90aWZpY2F0aW9uLlxuXHRcdG5vdGlmaWNhdGlvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cdFx0bm90aWZpY2F0aW9uQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG5cdFx0Ly8gUmVzb2x2ZSBwcm9taXNlLlxuXHRcdHJlc29sdmUodHJ1ZSk7XG5cdH0pXG5cdC50aGVuKHJlc3VsdCA9PiB7XG5cdFx0aWYgKHJlc3VsdCkge1xuXHRcdFx0Ly8gU2V0IGV2ZW50IGxpc3RlbmVycyBmb3IgYW55IGV2ZW50IGxpbmtzIGluIG5vdGlmaWNhdGlvbi5cblx0XHRcdHNldExpbmtFdmVudExpc3RlbmVycygpO1xuXHRcdH1cblx0fSlcblx0LmNhdGNoKGVycm9yID0+IHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fSk7XG59XG5cbi8qKlxuICogQ2xvc2Ugbm90aWZpY2F0aW9uLlxuICogQHJldHVybnMgdm9pZFxuICovXG5leHBvcnQgY29uc3QgY2xvc2VOb3RpZmljYXRpb24gPSAoKTogdm9pZCA9PiB7XG5cblx0Y29uc3Qgbm90aWZpY2F0aW9uQ29udGFpbmVyID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb24nKTtcblxuXHRpZiAoIW5vdGlmaWNhdGlvbkNvbnRhaW5lcikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG5vdGlmaWNhdGlvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRub3RpZmljYXRpb25Db250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cdFxuXHQvLyBJZiBub3RpZmljYXRpb24gaGFzIGNsYXNzIGRhdGEgYXR0cmlidXRlIHNldCwgcmVtb3ZlIGNsYXNzIGFmdGVyIGNsb3NpbmcuXG5cdGlmIChub3RpZmljYXRpb25Db250YWluZXIuZGF0YXNldC5jbGFzcykge1xuXHRcdG5vdGlmaWNhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKG5vdGlmaWNhdGlvbkNvbnRhaW5lci5kYXRhc2V0LmNsYXNzKTtcblx0XHRub3RpZmljYXRpb25Db250YWluZXIuZGF0YXNldC5jbGFzcyA9ICcnO1xuXHR9XG5cdFxuXHQvLyBJZiBub3RpZmljYXRpb24gaGFzIGNvb2tpZSBkYXRhIGF0dHJpYnV0ZSBzZXQsIHNldCBjb29raWUgYWZ0ZXIgY2xvc2luZy5cblx0aWYgKG5vdGlmaWNhdGlvbkNvbnRhaW5lci5kYXRhc2V0LmNvb2tpZSkge1xuXHRcdHNldENvb2tpZShub3RpZmljYXRpb25Db250YWluZXIuZGF0YXNldC5jb29raWUsIHRydWUpO1xuXHRcdG5vdGlmaWNhdGlvbkNvbnRhaW5lci5kYXRhc2V0LmNvb2tpZSA9ICcnO1xuXHR9XG59XG5cbi8qKlxuICogQHRvZG9cbiAqIEBwYXJhbSBjb29raWVOYW1lIFxuICogQHBhcmFtIG5vdGlmaWNhdGlvblRleHRDb250YWluZXIgXG4gKiBAcGFyYW0gY3VzdG9tSWNvbiBcbiAqL1xuZXhwb3J0IGNvbnN0IHNob3dQcm9tbyA9IChjb29raWVOYW1lOiBzdHJpbmcsIG5vdGlmaWNhdGlvblRleHRDb250YWluZXI6IHN0cmluZyA9ICcnLCBjdXN0b21JY29uOiBzdHJpbmcgPSAnJyk6IHZvaWQgPT4ge1xuXG5cdGlmICghY29va2llTmFtZSkge1xuXHRcdGlmICh3aW5kb3cud2luZG93LmJhc2VUaXRsZSkge1xuXHRcdFx0Y29va2llTmFtZSA9IGBjb29raWUtJHt3aW5kb3cuYmFzZVRpdGxlLnRvTG93ZXJDYXNlKCl9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29va2llTmFtZSA9IGBjb29raWUtZGVmYXVsdGA7XG5cdFx0fVxuXHR9XG5cblx0aWYgKGN1c3RvbUljb24pIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYgLmN1c3RvbScpO1xuXG5cdFx0XHRpZiAoIWVsZW1lbnQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdHNldENvb2tpZShjb29raWVOYW1lLCB0cnVlKTtcblx0XHRcdH0pO1xuXHRcdH0sIDIwMDAwKTtcblx0fVxuXG5cdGlmIChub3RpZmljYXRpb25UZXh0Q29udGFpbmVyKSB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRzaG93Tm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvblRleHRDb250YWluZXIsIGNvb2tpZU5hbWUpO1xuXHRcdH0sIDYwMDAwKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbiB9IGZyb20gXCIuL25vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCB7IHNldExpbmtFdmVudExpc3RlbmVycyB9IGZyb20gXCIuL3VybHNcIjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG5cblx0Ly8gRGlzcGxheSBjb29raWUgbm90aWZpY2F0aW9uXG5cdHNob3dOb3RpZmljYXRpb24oJ2Nvb2tpZScsICdub3RpZmljYXRpb24tY29va2llJyk7XG5cblx0Ly8gSWYgVVJMIHBhcmFtZXRlcnMgYXJlIHBhc3NlZCBpbiwgY2hlY2sgZm9yIG5vdGlmaWNhdGlvblxuXHRpZiAod2luZG93LmxvY2F0aW9uLnNlYXJjaCkge1xuXHRcdGNvbnN0IHBhcmFtID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7XG5cdFx0aWYgKHBhcmFtKSB7XG5cdFx0XHRjb25zdCBwYXJhbVBhcnRzID0gcGFyYW0uc3BsaXQoJz0nKTtcblxuXHRcdFx0Ly8gSWYgP25vdGlmaWNhdGlvbj10ZXh0IGlzIHNldCBpbiBVUkwsIG9wZW4gbm90aWZpY2F0aW9uXG5cdFx0XHRpZiAoXG5cdFx0XHRcdFx0KHR5cGVvZiBwYXJhbVBhcnRzICE9PSAndW5kZWZpbmVkJykgJiYgXG5cdFx0XHRcdFx0KHBhcmFtUGFydHMgIT09IG51bGwpICYmIFxuXHRcdFx0XHRcdCh0eXBlb2YgcGFyYW1QYXJ0c1swXSAhPT0gJ3VuZGVmaW5lZCcpICYmIFxuXHRcdFx0XHRcdChwYXJhbVBhcnRzWzBdICE9PSBudWxsKSAmJlxuXHRcdFx0XHRcdChwYXJhbVBhcnRzWzBdID09PSAnbm90aWZpY2F0aW9uJykgJiZcblx0XHRcdFx0XHQodHlwZW9mIHBhcmFtUGFydHNbMV0gIT09ICd1bmRlZmluZWQnKSAmJiBcblx0XHRcdFx0XHQocGFyYW1QYXJ0c1sxXSAhPT0gbnVsbClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Ly8gVE8gRE86IGFkZCBmdW5jdGlvbmFsaXR5IHRvIHNob3cgY29va2llIG5vdGlmaWNhdGlvbiBhZnRlciBub3RpZmljYXRpb24gcGFzc2VkIGluIHZpYSBVUkxcblx0XHRcdFx0XHRzaG93Tm90aWZpY2F0aW9uKHBhcmFtUGFydHNbMV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFNldCBldmVudCBsaXN0ZW5lcnMgZm9yIGFsbCBldmVudCBsaW5rcy5cblx0c2V0TGlua0V2ZW50TGlzdGVuZXJzKCk7XG59KTsiXSwibmFtZXMiOlsic2V0TGlua0V2ZW50TGlzdGVuZXJzIiwic2hhcmVMaW5rcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaW5rIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXRFbGVtZW50IiwidGFyZ2V0IiwiZWxlbWVudCIsImNsb3Nlc3QiLCJ1cmwiLCJ0aXRsZSIsInRleHQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJiYXNlVGl0bGUiLCJiYXNlRGVzY3JpcHRpb24iLCJuYXZpZ2F0b3IiLCJzaGFyZSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiIsInRleHRFbmNvZGVkIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2hvd05vdGlmaWNhdGlvbiIsInNoYXJlVXJsIiwiZGF0YXNldCIsImJhc2VVcmwiLCJjb3B5TGlua3MiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0aGVuIiwiY29va2llTmFtZSIsImNsYXNzTmFtZSIsIm5hbWUiLCJjb29raWUiLCJzcGxpdCIsImZpbmQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm5vdGlmaWNhdGlvbkNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJub3RpZmljYXRpb25UZXh0Q29udGFpbmVyIiwibm90aWZpY2F0aW9uQ2xvc2VDb250YWluZXIiLCJjbG9zZU5vdGlmaWNhdGlvbiIsImlubmVySFRNTCIsImNsYXNzIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJkaXNwbGF5IiwicmVzdWx0IiwicmVtb3ZlIiwidmFsdWUiLCJkYXRlIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwidG9VVENTdHJpbmciLCJzZWFyY2giLCJwYXJhbSIsInN1YnN0cmluZyIsInBhcmFtUGFydHMiXSwic291cmNlUm9vdCI6IiJ9