Write some CSS that changes the `background-color` of the HTML `<body>` element to "SteelBlue".

* * *

CSS is a language used to change the look and feel of a web page. HTML web pages are made up of a bunch of "tags". The `<body>` tag is the tag that contains the main content of a web page. In this exercise we're going to change the `background-color` of the `<body>` tag, which will turn the whole page blue!

Create a CSS file `solution.css` - this is where you'll put your CSS code.

CSS looks like this:

```css
<selector> {
    <property>: <value>;
    <property>: <value>;
}

/* Second CSS rule */

<selector> {
    <property>: <value>;
}

/* ...More rules... */
```

**<selector>** tells the browser what element(s) the styles in the following block of curly braces (`{` and `}`) should apply to. There are many types of selectors, and you can find more information on the [Getting Started docs](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors)

**<property>** is the name of the CSS property you want to manipulate. There are hundreds of properties you can change, for example, `color`, `font-size`, `margin` etc. For a full list, check out the [CSS property reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

**<value>** is the value you want to give the property. For example you might want to change the text colour to red `color: red;`.

Note: everything between `/*` and `*/` is a comment and is ignored.

For this exercise, the selector we need to use is `body`, the property we want to change is `background-color` and the value we want to give it is `SteelBlue`.

* * *

Render the page to JPG by running: `stylist run solution.css`
Verify your solution is correct by running: `stylist verify solution.css`
