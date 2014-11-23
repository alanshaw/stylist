Write some CSS to make navigation links BIG (32px), **bold** and green. All other links in the document should be red and italic.

* * *

Links in HTML are `<a>` elements. In the document you're styling, navigation links are in a `<nav>` element e.g.

```html
<nav>
  <a href="http://google.com">Google</a>
  <a href="http://facebook.com">Facebook</a>
  <a href="http://twitter.com">Twitter</a>
</nav>

<h1>Welcome</h1>
<p>Some introduction content with a red, italic <a href="http://tableflip.io/">link to something else</a></p>
```

Selecting elements within elements (descendants) is as easy as separating your selectors with a space. For example, in the following HTML, we'd be able to style the `<li>` with the text "nested deeply" using the selector `li li { /* styles */ }` without our styles applying to the containing `<li>`.

```html
<ul>
  <li>
    <ul>
      <li>nested deeply</li>
    </ul>
  </li>
</ul>
```

You can find more information in the [descendant selectors docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_selectors)

* * *

Verify your solution is correct by running: `stylist verify solution.css`
