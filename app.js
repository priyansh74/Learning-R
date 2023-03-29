/*
const heading = React.createElement(
    "h1",
    {id:"heading", xtz:"asda"},
    "Hello worldd from React"
);

*/

const parent = React.createElement("div",{id:"parent"}, 
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"did it"),React.createElement("h2",{},"did it again") ]
 )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
