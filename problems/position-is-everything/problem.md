Create a new CSS file and write some CSS to style the sub-menu of a drop down menu so that it appears in the correct position.

The finished menu might look something like this in the browser when the "Clients" menu is shown:

```
+ ---- + ----- + ------- + --------- + ------- +
| Home | About | Clients | Portfolio | Contact |
+ ---- + ----- + --------------- + - + ------- +
               | Bob's Sprockets |
               + --------------- +
               | Dave's Spades   |
               + --------------- +
               | Paul's Pitchers |
               + --------------- +
```

The markup for the menu looks like:

```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li>
      <a href="/clients">Clients</a>
      <ul>
        <li><a href="/bobs-sprockets">Bob's Sprockets</a></li>
        <li><a href="/daves-spades">Dave's Spades</a></li>
        <li><a href="/pauls-pitchers">Paul's Pitchers</a></li>
      </ul>
    </li>
    <li><a href="/portfolio">Portfolio</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

**Styles for displaying the menu items and showing/hiding the sub-menu have been done for you.**

Your task is to **ensure the sub-menu appears in the correct position** by applying CSS **positioning** attributes to HTML elements.

Assume the top level menu is `30px` high.

* * *

CSS allows you to specify alternative rules for positioning elements. By **default**, elements appear where you expect them to appear, determined by where they are defined and other content in the document flow - their position is `static`.

Positioning elements relatively using `position: relative;` allows the position of the element to be shifted relative to it's original location using the CSS properties `top`, `right`, `bottom` and `left`.

For example, setting `position: relative;` and `left: 5px;` will move the element `5px` to the **right**. Setting `left: -5px;` will move the element `5px` to the **left**.

```
           + ------------------ +
           |  position: static  |
           + ------------------ +

           left: 5px
           |----->
                  + ------------------ +
                  | position: relative |
                  + ------------------ + 

  left: -5px
     <-----|
     + ------------------ +
     | position: relative |
     + ------------------ +
```

Positioning an element absolutely using `position: absolute;` will cause it to be positioned relative to the closest **relatively** positioned parent element.

For example, setting `position: absolute;`, `top: 20px;` on an element contained within a relatively positioned element will cause it to appear `20px` **below** the top edge of the closest parent element that is relatively positioned.

Consider the following CSS & HTML snippet:

```html
<style>
  div {
    position: relative;
    width: 50px;
    height: 5px;
  }
  div div {
    position: absolute;
    top: 20px;
  }
</style>
<div>
  <div></div>
</div>
```

In the browser, it'll look something like this:

```
     + --------------------------------- +
     | position: relative    |           |
     + ----------------------|---------- +
                             |
                             \/ top: 20px
     + --------------------------------- +
     | position: absolute                |
     + --------------------------------- +
```

* * *

Render the page to JPG by running: `stylist run solution.css`
Verify your solution is correct by running: `stylist verify solution.css`