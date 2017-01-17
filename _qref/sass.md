---
title: Sass
---

Sass - Syntactically awesome style sheets  
=========================================  

Data Types  
----------

+ Numbers: `12`, `1.2`,... with units `%`, `px`, `em`, `mm`,...   
+ Strings: `sans-serif`, `"DejaVu Sans Mono"`  
+ Colors: `blue`, `#00cfff`, `rgba(193, 193, 193, 0.4)`  
+ Booleans: `true`, `false`  
+ Null: `null`  
+ Lists: `0 1px 3px #eef`  
+ Maps: `(key1: value1, key2: value2)`  

**NOTE:**  
1. Selectors and Property names are strings.  

Comments  
--------
Initiators: `//` or `/*`, continue to change of indentation.  

```sass
// comments are
   indentation sensitive
```

Variables  
---------

### Definition  
```sass
$variable-name: value
$bg-color: #cfcfff !default // set if not defined previously
```

### Scope  
```sass
$variable-name: value // global, works even on imported sheets
div.main
  $color: green
  // $color is available only inside this block
```

Nesting  
-------

```sass
nav
  // applies to <nav>
  li
    // applies to all <li> descendants of <nav>
  ul
    // applies to all <ul> descendants of <nav>
```

**Compiled output**  

```css
nav { }
nav li { }
nav ul { }
```

### Nested Properties  

```sass
.muted
  font:
```

Partials  
--------

Files with a leading underscore are not compiled to make `.css` files.  
But they can be imported to other `sass` files with `@import` w/o underscore.  

Import  
------

```sass
@import basic
// imports contents of _basic.sass where used
```

Mixins  
------

Works similar to functions if they existed in CSS.

### Definition

```sass
=border-radius($rad)
  -webkit-border-radius: $rad
  border-radius: $rad
```

### Usage

```sass
div
  +border-radius(10px)
```

**Compiled output**  

```css
div {
  -webkit-border-radius: 10px;
          border-radius: 10px;
}
```

Extend/Inherit  
--------------

```sass
.content
  @extends .container
  // copies everything from .container into .content
  // use a property name again to override
```

Operators  
---------

### Arithmetic
`+`, `-`, `*`, `/`, `%` (modulo)

**CAUTION:**  
1. Units participate in calculations. e.g.: `10px * 10px == 100px * px`.  
2. `/` is the CSS separator if both operands are numbers, and is not part of a larger expression.  

**NOTE:**  
1. Better to include spaces on both sides of `-`.  
2. Arithmetic operations on colors are 'piecewise' for R, G, B, A.

### String  
`+` (concatenation), `#{}` (interpolation)

**NOTE:**

1. `"quoted " + unquoted` makes `"quoted unquoted"`; `unquoted- + "quoted"` makes `unquoted-quoted`.

2. `#{}` interpolation automatically removes quotes.

### Boolean
`and`, `or`, `not`

### Comparison
`<`, `>`, `==`, `!=`, `<=`, `>=`

Referencing Parent Selector
---------------------------
```sass
a
  div &
    // though inside 'a', this means 'div a'.
#main
  &-side
    // means '#main-side'. Must be a prefix.
```

**Compiled output**

```css
div a {}
#main-side {}
```
