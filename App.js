let heading = React.createElement(
  "div",
  { id: "child" },
  [React.createElement("h1", {}, "I am created by React"),
  React.createElement("h2", {}, "I am 2 created by React")
]
);
let root = ReactDOM.createRoot(document.getElementById("parent"));
root.render(heading);
