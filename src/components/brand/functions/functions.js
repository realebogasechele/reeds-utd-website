export const openNewTab = (e) => {
    var url = e.target.id;
    window.open(url, '_blank');
}