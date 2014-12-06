* * *

CSS allows you to specify alternative rules for positioning elements. By **default**, elements appear where you expect them to appear, determined by where they are defined and other content in the document flow - their position is `static`.

Positioning elements relatively using `position: relative;` allows the position of the element to be shifted relative to it's original location using the CSS properties `top`, `right`, `bottom` and `left`.

For example, setting `position: relative;` and `left: 5px;` will move the element `5px` to the right. Setting `left: -5px;` will move the element `5px` to the right.

Positioning an element absolutely using `position: absolute;` will cause it to be positioned relative to the closest relatively positioned element.

* * *

Verify your solution is correct by running: `stylist verify solution.css`