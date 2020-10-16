try {
    const amp = document.head.querySelector("link[rel~='amphtml'][href]") || document.head.querySelector("link[rel~='canonical'][href]");
    if (amp.href !== document.location.href) {
        document.location.replace(amp.href);
    }
} catch (e) {}

try {
    document.querySelectorAll("[target='_blank']").forEach(e => {
        e.setAttribute("rel","noopener noreferrer nofollow")
    });
} catch (e) {}