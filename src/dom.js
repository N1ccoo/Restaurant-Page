const createHtmlElement = (param) => {
	const elem = document.createElement(param.type);
    elem.textContent = param.text;
  
    if (typeof param.css === 'object') {
        for (let i = 0; i < param.css.length; i++) {
        elem.classList.add(param.css[i])
        }
    }
  
    if (typeof param.attr === 'object') {
        for (const [key,value] of Object.entries(param.attr)) {
        elem.setAttribute(key,value);
        }
    }
  
    return elem
}


export default createHtmlElement;