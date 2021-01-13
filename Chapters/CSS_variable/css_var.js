var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var textColor = rootStyles.getPropertyValue('--fontColor');
console.log(textColor) // - red
