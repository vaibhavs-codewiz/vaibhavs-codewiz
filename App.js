const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world, welcome to react"
);
const Root = ReactDOM.createRoot(document.querySelector("#root"));
//Root.render(heading);

//nested structure
const parent = React.createElement(
  "div",
  { className: "parent" },
  React.createElement(
    "div",
    { className: "child" },
    React.createElement("h2", { id: "heading" }, "i'm heading 2")
  )
);
//Root.render(parent);

//having sibling

const sibling = React.createElement("div", {}, [
  React.createElement("h2", { id: "heading" }, "i am sibling"),
  React.createElement("h2", { id: "heading" }, "i am also sibling"),
]);
//Root.render(sibling);

const body = React.createElement(
  "h2",
  { id: "i_am_h2", style: {backgroundColor: "red"}},
  "i am boss"
);
Root.render(body);
