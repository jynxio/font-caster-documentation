## 目录

- `subset`：子集化字体文件。
- `parseHtml`：提取 html 文本的指定的标签的内容。
- `read`：读取文件。
- `write`：写入文件。
- `convert`：将字符串转换为 unicode 数组，或反之。
- `deduplication`：对字符串或 unicode 数组进行去重。

## subset

（异步）根据字符串或 unicode 数组来子集化字体文件，该方法会对输入内容进行去重处理。

### 语法

```js
subset( data, origin_path, subset_path ).then( _ => _ );
```

### 参数

- `data`: `string` 或 `Array<number>`。字符串（如 `"ABC"`）或存储 unicode 编码的数组，比如 `[65, 66, 67]`（基于十进制）。
- `origin_path`: `string`。原始的字体文件的路径，比如 `"./origin.otf"`，也支持 `ttf`、`woff`。
- `subset_path`: `string`。生成的字体文件的路径，比如 `"./sunset.otf"`，生成的字体文件的格式必须与生原始的字体文件的格式一致。

### 返回

该方法返回一个 `Promise` 实例。

`Promise` 代表是否成功子集化，若失败，则返回 `{success: false, error}` 对象。若成功，则返回 `{success: true, information}` 对象，并自动生成子集化的字体文件。

其中 `information` 包含 `successfulCharacters`、`successfulUnicodes`、`failedCharacters`、`failedUnicodes`属性，它们分别代表“成功截取的字符”、“成功截取的字符的unicode”、“未能截取的字符”、“未能截取的字符的 unicode”。

### 示例

```js
subset( "123", "./origin.ttf", "./subset.ttf" ).then( response => {
    
    if ( ! response.success ) {
        
        console.error( response.error );
        
        return;
        
    }
    
    console.log( response.information.successfulCharacters );
    console.log( response.information.successfulUnicodes );
    console.log( response.information.failedCharacters );
    console.log( response.information.failedUnicodes );
    
} );
```

## parseHtml

提取 html 文本的指定的标签的内容。

该方法暂时无法处理转义字符，比如它会把 `>` 当成字符 `&`、`g`、`t`、`;`来处理，该缺陷已列入工作计划。

### 语法

```js
parseHtml( characters, tagnames );
```

### 参数

- `characters`: `string`。html 文本的内容，比如使用 `read` 读取 html 文件所得到的字符串。

- `tagnames`: `undefined` 或 `Array<string>`。（可选）默认值为 `undefined`。当值为 `undefined` 时，该方法会提取所有标签的内容。当值为 `[ "h1", "h2" ]` 时，该方法只会提取所有 `h1`、`h2` 标签的内容，同理类推其他标签。

  > 注意：不能输入自闭合标签，比如 `[ "img" ]`。该方法不区分标签名的大小写。

### 返回

该方法返回一个 `string`，它代表标签的内容。

### 示例

```js
read( "./index.html" ).then( response => {
    
    if ( ! response.success ) {
        
        console.error( response.error );
        
        return;
        
    }
    
    const h1_contents = [];
    
    for ( const file of files ) {
        
        const h1_content = parseHtml( file.content, [ "h1" ] );
        
        h1_contents.push( h1_content );
        
    }
    
} );
```

## read

（异步）读取一个基于 utf-8 编码的文本文件或一个文件夹内的所有的此类文件。

> 对于 MacOS，该方法在处理文件夹时会误读 `.DS_Store`，你可以通过 `name` 和 `type` 属性来辨认和过滤它。

### 语法

```js
read( path, is_unicode ).then( _ => _ );
```

### 参数

- `path`: `string`。文件或文件夹的路径，比如 `"./index.html"或"./pages"`。
- `is_unicode`: `boolean`。（可选）默认值为 `false`。当值为 `false` 时，返回值和文本的内容一模一样。当值为 `true` 时，返回值是基于十进制的 unicode 数组（此时该 API 会认定文本的内容是以逗号分隔的 unicode，比如 `"64,65,66"`，同样它也基于十进制）。

### 返回

该方法返回一个 `Promise` 实例。

`Promise` 代表是否读取成功，若失败，则返回 `{success: false, error}` 对象。若成功，返回 `{success: true, files}` 对象，其中 `files` 是拥有至少一个 `{name, type, path, content}` 对象的数组。

### 示例

```js
read( "./pages" ).then( response => {
    
    if ( ! response.success ) {
        
        console.error( response.error );

        return;

    }
    
    for ( const file of files ) {
        
        console.log( file.name );
        console.log( file.path );
        console.log( file.content );
        
    }
    
} );
```

## write

（异步）将字符串或 unicode 数组存储为文本文件。

### 语法

```js
write( data, path ).then( _ => _ );
```

### 参数

- `data`: `string` 或  `Array<number>`。字符串（如 `"ABC"`）或存储unicode编码的数组（如 `[65, 66, 67]`，基于十进制），若传入的是字符串，则文本将存储字符串，若传入的是 unicode 数组，则文本将存储以逗号分隔的unicode，比如 `65,66,67`（基于十进制）。
- `path`: `string`。文本文件的路径，比如 `"./characters.txt"`。

### 返回

它返回一个 `Promise`。

`Promise` 代表是否写入成功，若成功，则返回 `{success: true}` 对象。若失败，则返回 `{success: false, error}` 对象。

### 示例

如果第一个参数的值是字符串。

```js
write( "AABC", "./characters.txt" ).then( response => {
    
    if ( response.success ) return; // The content of characters.txt is "AABC".
    
    console.error( response.error );
    
} );
```

如果第一个参数的值是 unicode 数组。

```js
write( [ 65, 65, 66, 67 ], "./characters.txt" ).then( response => {
    
    if ( response.success ) return; // The content of characters.txt is "65,65,66,67".
    
    console.error( response.error );
    
} );
```

## convert

将字符串转换为 unicode 数组，或者将 unicode 数组转换为字符串，unicode 数组的格式是：`[65, 66, 67]`。

### 语法

```js
convert( data );
```

### 参数

- `data`: `string` 或 `Array<number>`。字符串（如 `"ABC"`）或存储 unicode 编码的数组，比如 `[65, 66, 67]`（基于十进制）。

### 返回

该方法返回一个 `string` 或 `Array<number>`。

若入参是字符串，则返回 unicode 数组，若入参是 unicode 数组，则返回字符串。

### 示例

```js
convert( "ABC" );          // output: [ 65, 66, 67 ]
convert( [ 65, 66, 67 ] ); // output: "ABC"
```

## deduplication

对字符串或 unicode 数组进行去重。

### 语法

```js
deduplication( data )；
```

### 参数

- `data`: `string` 或 `Array<number>`。字符串（如 `"ABC"`）或存储 unicode 编码的数组，比如 `[65, 66, 67]`（基于十进制）。

### 返回

该方法返回一个 `string` 或 `Array<number>`。

若入参是字符串，则返回去重后的字符串。若入参是 unicode 数组，则返回去重后的 unicode 数组。

### 示例

```js
deduplication( "AABC" );             // output: "ABC"
deduplication( [ 65, 65, 66, 67 ] ); // output: [ 65, 66, 67 ]
```

