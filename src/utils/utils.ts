export function extractContent(s:string) {
    var span = document.createElement('span');
    span.innerHTML = s;
    return span.textContent || span.innerText;
};
