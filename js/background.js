try {
    const amp = document.head.querySelector("link[rel~='amphtml'][href]");
    if (amp.href !== document.location.href){
        document.location.replace(amp.href);
    }
} catch (e) {
    try {
        const canonical = document.head.querySelector("link[rel~='canonical'][href]")
        if (canonical.href !== document.location.href){
            document.location.replace(canonical.href);
        }
    } catch (e) {}
}
try {
    document.querySelectorAll("[target='_blank']").forEach(e=>{e.setAttribute("rel","noopener noreferrer nofollow")});
} catch (e) {}