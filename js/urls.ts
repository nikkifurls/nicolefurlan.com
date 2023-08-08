import { showNotification } from "./notifications";

declare global {
	interface Window {
		baseUrl: string;
		baseTitle: string;
		baseDescription: string;
	}
}

/**
 * Copies provided URL to clipboard if navigator.clipboard is available, otherwise displays a notification with the URL.
 * @param url 
 * @returns void
 */
export const copyUrl = (url: string = window.location.href): void => {
	if (!url) {
		return;
	}

	if (navigator.clipboard) {
		navigator.clipboard.writeText(url)
			.then(() => {
				showNotification(`<span class='bold'>Success! <span role='img' title='Party' class='icon icon-partyface'>🥳</span></span> URL copied to clipboard: <span class='url'>${url}</span>`);
			})
			.catch(() => {
				showNotification(`<span class='bold'>Copy URL:</span> <span class='url'>${url}</span>`);
			});

	} else {
		showNotification(`<span class='bold'>Copy URL:</span> <span class='url'>${url}</span>`);
	}

	// @todo: Send copy event to GA.
	// gtag('event', 'select_content', {
	// 	item_id: url,
	// });
}

/**
 * Displays the native sharing mechanism for the device if navigator.share is available, otherwise displays a notification with the share data.
 * @param url 
 * @param title 
 * @param text 
 * @returns 
 */
export const shareUrl = (url: string = window.location.href, title: string = window.baseTitle, text: string = window.baseDescription): void => {
	if (navigator.share) {
		navigator.share({ title, url }).catch(error => console.warn(error));
	} else {
		const textEncoded = encodeURIComponent(text + ' ' + url);
		showNotification(
			`<a class='button facebook' href='https://www.facebook.com/sharer/sharer.php?u=${url}' title='Share on Facebook'><i class='fas fa-share-alt'></i>&nbsp;&nbsp;Facebook</a>` +
			`<a class='button twitter' href='https://twitter.com/intent/tweet?text=${textEncoded}' title='Share on Twitter'><i class='fas fa-share-alt'></i>&nbsp;&nbsp;Twitter</a>` +
			`<a class='button email' href='mailto:?subject=Check+out+${title}!&body=${textEncoded}' title='Share on Email'><i class='fas fa-share-alt'></i>&nbsp;&nbsp;Email</a>` +
			`<a class='button copy' href='#' title='Copy' data-url='${url}'><i class='fas fa-copy'></i>&nbsp;&nbsp;Copy</button>`,
			'notification-share'
		);
	}

	// @todo: Send share event to GA.
	// gtag('event', 'share', {
	// 	content_id: url,
	// });
}

/**
 * Adds event listeners to share and copy links.
 */
export const setLinkEventListeners = (): void => {

	const shareLinks = document.querySelectorAll('.share');

	if (shareLinks) {
		shareLinks.forEach(link => {
			link.addEventListener('click', event => {
				event.preventDefault();
	
				const targetElement = <HTMLElement>event.target;
	
				if (!targetElement) {
					return;
				}
	
				let element = <HTMLElement>targetElement.closest('.share');
	
				if (!element) {
					return;
				}
	
				shareUrl(
					element.dataset.url ?? window.baseUrl,
					element.dataset.title ?? window.baseTitle,
					element.dataset.text ?? window.baseDescription
				);
			});
		});
	}

	const copyLinks = document.querySelectorAll('.copy');

	if (copyLinks) {
		copyLinks.forEach(link => {
			link.addEventListener('click', event => {
				event.preventDefault();
	
				const targetElement = <HTMLElement>event.target;
	
				if (!targetElement) {
					return;
				}
	
				let element = <HTMLElement>targetElement.closest('.copy');
	
				if (!element) {
					return;
				}
	
				copyUrl(element.dataset.url ?? window.baseUrl);
			});
		});
	}
}