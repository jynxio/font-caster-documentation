## Getting Started

This section describes how to subset fonts based on multiple html files, the steps are as follows:

### Step 1

Before we start, let's assume that the directory structure of the workspace is as follows:

```
|- page
  |- chapter-1
    |- section-1.html
    |- section-2.html
    |- ...
    |- section-n.html
  |- chapter-2
    |- section-1.html
    |- section-2.html
    |- ...
    |- section-n.html
|- font.ttf
|- subset.js
```

- `page` is a folder with multiple html files.
- `font.ttf` is the original font file.
- `subset.js` is the subsetting script, its task is to subset fonts based on all html files in `page`.

### Step 2

Then import `font-caster` in `subset.js`:

```js
const fc = require( "font-caster" );
```

### Step 3

Then create a variable ahead of time that will hold the contents of all the html text:

```js
let characters = "";
```

### Step 4

Then read all the html text (step 1), extract the content of all tags (step 2), and finally accumulate all the content into the `characters` variable (step 3):

```js
const read_response = await fc.read( "./page" );  // step 1

for ( file of read_response.files ) {
    
    const content = fc.parseHtml( file.content ); // step 2
    
    characters += content;                        // step 3
    
}
```

### Step 5

Finally, create the subsetting font file:

```js
const subset_response = await fc.subset( characters, "./font.ttf", "./subset-font.ttf" );
```

### Step 6

Our workspace now has the following directory structure:

```
  |- page
  |- font.tff
+ |- subset-font.ttf
  |- subset.js
```

