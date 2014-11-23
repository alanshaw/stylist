Write some CSS that changes the `background-color` of the HTML `<body>` element to "SteelBlue".

* * *

Create a CSS file `solution.css` - this is where you'll put your CSS code.

CSS looks like this:

```css
[selector] {
    [property]: [value];
    [property]: [value];
}
/* Second CSS rule */
[selector] {
    [property]: [value];
}
/* ...More rules... */
```

[selector] tells the browser what element(s) the styles in the following block of curly braces (`{` and `}`) should apply to. There are many types of selectors, and you can find more information here:
https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors

[property] is the name of the CSS property you want to manipulate. There are hundreds of properties you can change, for example, `color`, `font-size`, `margin` etc. For a full list, check out this resource:
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

[value] is the value you want to give the property. For example you might want to change the text colour to red `color: red;`.

Note: everything between `/*` and `*/` is a comment and is ignored.

For this exercise, the selector we need to use is `body`, the property we want to change is `background-color` and the value we want to give it is `SteelBlue`.

* * *

Verify your solution is correct by running: `stylist verify solution.css`
