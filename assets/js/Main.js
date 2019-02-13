import {marked} from './Marked.js';

(async function() {

    // Read url for requested post
    const post = !!window.location.hash ? window.location.hash.slice(3) : location.pathname.split('/').slice(-1)[0];

    // Try to load post's markdown, or index if none requested
    let response = await fetch(`./posts/${post || 'index'}.md`, {method: 'GET'});

    // If not found, fallback to loading index
    if (!response.ok) response = await fetch(`./posts/index.md`, {method: 'GET'});

    // Get text from response
    const text = await response.text();

    // Replace this page's content with the converted markdown to html
    document.body.innerHTML = marked(text);
})();