import { useEffect } from "react";

export const Comments = (): JSX.Element => {
    useEffect(() => {
        const scriptElem = document.createElement('script');
        const anchor = document.getElementById("inject-comments-for-uterances");
        scriptElem.src = 'https://utteranc.es/client.js';
        scriptElem.async = true;
        scriptElem.crossOrigin = 'anonymous';
        scriptElem.setAttribute(
            'repo',
            'leandrorocha/ignite-challenge-05'
        );
        scriptElem.setAttribute('issue-term', 'pathname');
        scriptElem.setAttribute('label', 'blog-comment');
        scriptElem.setAttribute('theme', 'github-dark');
        anchor.appendChild(scriptElem)
    }, [])

    return (
        <section id="inject-comments-for-uterances" />
    );
}
