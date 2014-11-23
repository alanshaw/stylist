Create a new CSS file and write some CSS to style a HTML page as follows:

Change **all** elements with the class "important" to use a "bold" font. Important things are chunky.

Pick out the element with the ID "title" and make it BIG, say, `48px`, and PURPLE! Yeah...purple.

* * *

Classes can be applied to more than one element in HTML. They look like this:

```html
<div class="article">
  <h1>Title 1</h1>
  <p>Content 1</p>
</div>
<div class="article">
  <h1>Title 2</h1>
  <p>Content 2</p>
</div>
```

You specify a class selector in CSS using a dot `.`. A CSS rule to target all articles in the preceding example might look something like this:

```css
.article {
  background-color: orange;
}
```

IDs are unique and can only be applied to a single HTML element. They look like this:

```html
<div id="main">
  <a href="http://google.com/">Google</a>
</div>
```

You specify an ID selector in CSS using an octothorpe `#`. A CSS rule to target the element with the ID "main" in the preceding example might look something like this:

```css
#main {
  padding: 10px;
}
```

Use the CSS property reference to pick the right properties to style the document:
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

* * *

Verify your solution is correct by running: `stylist verify solution.css`
