## Catalogue

- `subset`: Subset font file.
- `parseHtml`: Extract the content of the specified tag of the html text.
- `read`: Read file.
- `write`: Write to file.
- `convert`: Convert string to unicode array, or convert unicode array to string.
- `deduplication`: Deduplicate string or unicode array.

## subset

(asynchronous) Subsets a font file based on string or unicode array, this method will deduplicate the input.

### Syntax

```js
subset( data, origin_path, subset_path ).then( _ => _ );
```

### Parameter

- `data`: `string` or `Array<number>`. A string (like `"ABC"`) or an array storing unicode like `[65, 66, 67]` (decimal based).
- `origin_path`: `string`. The path to the original font file, such as `"./origin.otf"`, also supports `ttf`, `woff`.
- `subset_path`: `string`. The path of the subsetting font file, such as `"./sunset.otf"`, the format of the subsetting font file must be the same as the format of the original font file.

### Return

It return a `Promise`.

`Promise` represents whether the execution was successful or not. If it fails, it returns a `{success: false, error}` object. If successful, a `{success: true, information}` object is returned and a subsetting font file is automatically created.

### Example

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

Extracts the content of the specified tag from the html text.

This method cannot correctly parse escape characters, for example, it will treat `>` as characters `&`, `g`, `t`, `;`, this bug has been included in the work plan.

### Syntax

```js
parseHtml( characters, tagnames );
```

### Parameter

- `characters`: `string`. The content of html text, such as the string obtained by reading an html file with `read`.

- `tagnames`: `undefined` or `Array<string>`. (optional) The default value is `undefined`. if the value is `undefined`, the method will extract the content of all tags. If the value is `[ "h1", "h2" ]`, this method will only extract the contents of all `h1`, `h2` tags, and other tags as well.

  > Note: you cannot enter self-closing tags, such as `[ "img" ]`. The tag name is not case-sensitive.

### Return

It return a `string`, the content of the tags.

### Example

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

(asynchronously) Read a utf-8 encoded text file or all such files in a folder.

> For MacOS, this method will misread `.DS_Store` when dealing with folders, you can find and filter it by the `name` and `type` attributes.

### Syntax

```js
read( path, is_unicode ).then( _ => _ );
```

### Parameter

- `path`: `string`.The path to a file or folder, such as `"./index.html" or "./pages"`.
- `is_unicode`: `boolean`. (optional) The default value is `false`. If the value is `false` , the return value is exactly the same as the text. If the value is `true` , the return value is an array of decimal-based unicode (in this case the API will assume that the content of the text is comma-separated unicode, such as `"64,65,66"`, which is also decimal-based).

### Return

It return a `Promise`.

`Promise` represents whether the execution succeeded or not. If it fails, it returns a `{success: false, error}` object. If successful, it returns a `{success: true, files}` object, where `files` is an array with at least one `{name, type, path, content}` object.

### Example

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

(asynchronously) Write a string or unicode array to a text file.

### Syntax

```js
write( data, path ).then( _ => _ );
```

### Parameter

- `data`: `string` or  `Array<number>`. String (like `"ABC"`) or unicode array (like `[65, 66, 67]`, based on decimal). If the value is a string, write the string to the text file. If the value is a unicode array, write comma-separated unicode, such as `65,66,67` (based on decimal), to the text file.
- `path`: `string`. Path to a text file, such as `"./characters.txt"`.

### Return

It return a `Promise`.

`Promise` represents whether the execution succeeded or not. If successful, it returns a `{success: true}` object. If it fails, it returns a `{success: false, error}` object.

### Example

If the value of the first parameter is a string.

```js
write( "AABC", "./characters.txt" ).then( response => {
    
    if ( response.success ) return; // The content of characters.txt is "AABC".
    
    console.error( response.error );
    
} );
```

If the value of the first parameter is a unicode array.

```js
write( [ 65, 65, 66, 67 ], "./characters.txt" ).then( response => {
    
    if ( response.success ) return; // The content of characters.txt is "65,65,66,67".
    
    console.error( response.error );
    
} );
```

## convert

Convert a string to a unicode array, or convert a unicode array to a string, the format of the unicode array is: `[65, 66, 67]`.

### Syntax

```js
convert( data );
```

### Parameter

- `data`: `string` or `Array<number>`. String (like `"ABC"`) or unicode array like `[65, 66, 67]` (decimal based).

### Return

It return a `string` or `Array<number>`.

If the parameter is a string, it returns a unicode array. If the parameter is a unicode array, it returns a string.

### Example

```js
convert( "ABC" );          // output: [ 65, 66, 67 ]
convert( [ 65, 66, 67 ] ); // output: "ABC"
```

## deduplication

Deduplicate string or unicode array.

### Syntax

```js
deduplication( data )；
```

### Parameter

- `data`: `string` or `Array<number>`. String (like `"ABC"`) or unicode array like `[65, 66, 67]` (decimal based).

### Return

It return a `string` or `Array<number>`.

If parameter is a string, it returns the deduplicated string. If parameter is a unicode array, it returns the deduplicated unicode array.

### Example

```js
deduplication( "AABC" );             // output: "ABC"
deduplication( [ 65, 65, 66, 67 ] ); // output: [ 65, 66, 67 ]
```

