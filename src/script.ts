import className from './style.css';
{
    const observers = new WeakMap<Element, MutationObserver>();
    const observe = (
        element: Element,
        callback: MutationCallback,
        init: MutationObserverInit,
    ) => {
        const observer = new MutationObserver(callback);
        observer.observe(element, init);
        observers.set(element, observer);
    };
    const observeTwitterWidgetElement = (widgetElement: Element) => observe(
        widgetElement,
        () => widgetElement.removeAttribute('style'),
        {
            attributeFilter: ['style'],
            attributes: true,
        },
    );
    const observeTweetListElement = (tweetListElement: Element) => {
        for (const widgetElement of tweetListElement.querySelectorAll('twitter-widget')) {
            observeTwitterWidgetElement(widgetElement);
        }
        observe(
            tweetListElement,
            (mutations) => {
                for (const mutation of mutations) {
                    for (const node of mutation.addedNodes as Iterable<Element>) {
                        if (node.tagName.toLowerCase() === 'twitter-widget') {
                            observeTwitterWidgetElement(node);
                        }
                    }
                }
            },
            {childList: true},
        );
    };
    let setupRetryCount = 0;
    const setup = () => {
        const tweetListElement = document.querySelector(`.${className.TweetList}`);
        if (tweetListElement) {
            observeTweetListElement(tweetListElement);
        } else if (setupRetryCount++ < 10) {
            setTimeout(setup, 100);
        }
    };
    setup();
}
