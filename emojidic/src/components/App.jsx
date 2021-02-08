import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia"

console.log(emojipedia)
// step 1 : Create Entry component
// step 2 : Create props to replace hardcorded data
// step 3 : Import the emojipedia const from the emojipedia.js file
// step 4 : Map through the emojipedia array and render Entry component using map() function
function createEntry(emojiTerm){
return <Entry 
key = {emojiTerm.id}
emoji = {emojiTerm.emoji}
name = {emojiTerm.name}
description = {emojiTerm.meaning}
/>
  }
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
     {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
