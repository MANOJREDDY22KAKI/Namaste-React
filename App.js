{
  /* <div id="parent">
    <div id = "child">
        <h1>Hello from Namaste React</h1>
    </div>
</div> */
}

const heading = React.createElement("div", { id: "parent" }, 
  React.createElement("div", { id: "child" }, 
    React.createElement("h1", {}, "Hello from Namaste React"),
  ),
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);

//console.log(root)

root.render(heading);
