# eslint-plugin-nested-if

### Install

```shell
 $ npm i eslint-plugin-nested-if --save-dev
```

### Integrate

```
  "rules": {
    "nested-if/nested-if-statements": ["warn", <number>]
  },
  "plugins": ["nested-if"]
```

## What is checks?

With provided option of depth level 3 or greater than 3 (example) it will result into warning or error depending upon the config.

```javascript
if(true) {
  if(true) {
    if (true) {
      console.log('hello');
    }
  }
}
```

## What it will ignore?
```javascript
if(true) {
  if(true) {
    var a = function () {
      if (true){
        // It's not inside same nested block statement of if.
      }
    }
  }
}
```

## Why it checks?

- Sometime times unintentionally we do a key check of object, for case like -

  ```javascript
  const testObject = {1: {2: {3: {4: {5:5}}}}}
  ```

  With the new ecma version we now can completely avoid this type of case by using optional chaining.

- Why we need more then 2 level of nesting?

