const heading = React.createElement("h1",{id: "heading",xyz:"abc"},"Namaste React!")
const heading2 = React.createElement("h2",{},"Namaste React Again!")
const child = React.createElement("div",{id: "child"},[heading, heading2])
const parent = React.createElement("div",{id: "parent"},[child])
console.log(parent)
const root = ReactDOM.createRoot(document.body)
root.render(parent)

//React.createElement("h1", {id: "heading", xyz: "abc"}, "Namaste React!") is the essintial code to create a React element.
//  It takes three arguments: the type of element (in this case, "h1"), 
// an object containing any attributes or properties for the element (in this case, {id: "heading", xyz: "abc"}),
//  and the content or children of the element (in this case, "Namaste React!").

// React is injected on for the root element and not entire page which makes it flexible to use other libraries
//  like jQuery for other parts of the page.

// React.render() is used to render a React element into the DOM. It takes two arguments:
//  the React element to be rendered and the DOM node where the element should be rendered.
//  In this case, we are rendering the "parent" React element into the "root" DOM node,
//  which is created using ReactDOM.createRoot(document.body).