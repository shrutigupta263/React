 function customRender( reactElement, conatiner){
    /*const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.childern
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('href', reactElement.props.target)
    conatiner.appendChild(domElement)
    */
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.childern
   for (const prop in reactElement.props){
    if(prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop])
   }
   conatiner.appendChild(domElement)
 }
 const reactElement={
    type:'a',
    props: {
        href:'https://google.com',
        target:'_blank'
    },
    childern: 'click me to visit google'
 }
 const mainContainer = document.querySelector('#root')
 customRender(reactElement, mainContainer)