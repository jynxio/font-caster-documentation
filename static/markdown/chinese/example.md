## 快速开始

本节阐述如何一次性的针对多个 html 文件来进行字体子集化，步骤如下：

### Step 1

正式开始之前，我们先假设工作区的目录结构如下：

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

- `page` 是一个包含多个 html 文件的文件夹。
- `font.ttf` 是原始的字体文件。
- `subset.js` 是执行字体子集化的脚本，它的任务是一次性的针对 `page` 内的所有 html 文件来进行字体子集化。

### Step 2

然后，在 `subset.js` 中导入 `font-caster` ：

```js
const fc = require( "font-caster" );
```

### Step 3

然后，提前创建一个用来保存所有 html 文本的内容的变量：

```js
let characters = "";
```

### Step 4

然后，读取所有的 html 文本（step 1），并提取出所有标签的内容（step 2），最后将所有内容累加到的 `characters` 变量中（step 3）：

```js
const read_response = await fc.read( "./page" );  // step 1

for ( file of read_response.files ) {
    
    const content = fc.parseHtml( file.content ); // step 2
    
    characters += content;                        // step 3
    
}
```

### Step 5

最后，生成子集化的字体文件：

```js
const subset_response = await fc.subset( characters, "./font.ttf", "./subset-font.ttf" );
```

### Step 6

现在，我们的工作区的目录结构如下：

```
  |- page
  |- font.tff
+ |- subset-font.ttf
  |- subset.js
```

