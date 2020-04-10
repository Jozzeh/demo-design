# demo-design (React components)
A component library for demo purposes  
It has prop-types for type checking, minified stuff and lots more.

Want to use this fantastic react component library? (It has a button and a panel!)  
1. Create a .npmrc file next to you package.json  
2. Add 'registry=https://npm.pkg.github.com/jozzeh' to the file and save  
3. Run command-line command: 'npm install @jozzeh/demo-design'


## Usage in app  
```javascript
import React from "react";
import "./App.css";

import { Button, Panel } from "@jozzeh/demo-design";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Demo Project</h1>
        <Panel>
          <Button />
        </Panel>
      </header>
    </div>
  );
}

export default App;
```
