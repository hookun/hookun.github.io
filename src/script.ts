import className from './style.css';
{
    const tweetListElement = document.querySelector(`.${className.TweetList}`);
    if (tweetListElement) {
        const removeStyleAttribute: MutationCallback = (mutations) => {
            for (const mutation of mutations) {
                (mutation.target as HTMLElement).removeAttribute('style');
            }
        };
        const observeTwitterWidget = (widgetElement: HTMLElement): MutationObserver => {
            const observer = new MutationObserver(removeStyleAttribute);
            observer.observe(widgetElement, {
                attributeFilter: ['style'],
                attributes: true,
            });
            return observer;
        };
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                for (const addedNode of mutation.addedNodes) {
                    const tagName = (addedNode as HTMLElement).tagName.toLowerCase();
                    switch (tagName) {
                        case 'twitter-widget':
                            observeTwitterWidget(addedNode as HTMLElement);
                            break;
                        default:
                    }
                }
            }
        });
        observer.observe(tweetListElement, {childList: true});
    }
}
