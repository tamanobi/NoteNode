function openMenu() {
    document.getElementById('menu').setAttribute('style', 'display:block;');
}
function closeMenu() {
    document.getElementById('menu').setAttribute('style', 'display:none;');
}
function link() {
    console.log('link');
}
function initMenu() {
    closeMenu();
}
document.addEventListener('DOMContentLoaded', function(e) {
    initMenu();
});
function toggleMenu(range) {
    if (range.toString().length > 0) {
        openMenu();
    } else {
        closeMenu();
    }
}
document.addEventListener('mouseup', function(ev) {
    var selection = getSelection();
    if (selection.rangeCount > 0) {
        var range = selection.getRangeAt(0);
        toggleMenu(range);
        // range.deleteContents();
        // selection.removeAllRanges();
    }
}, false);
function showText() {
    console.log(window.getSelection().toString());
}
