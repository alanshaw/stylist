Assuming the `<html>` element has a font size of `16px`, style `<h1>` elements so that their font size is `48px`. There's sometimes `<span>` elements in the `<h1>` elements, style them to be `24px`.

Oh, btw, you **MUST** use the `em` unit.

Do the same thing for `<h2>` elements. Use `rem` units to style the text inside the `<span>` elements to be `32px`. Inside the `<span>`s there's `<em>` elements. Wow, confusing. Make the text inside the `<em>` elements `16px` by using `%` units!

Good luck stylist!

* * *

Up until now you've probably been using `px` as your unit of measurement. Pixels are an **absolute unit of measurement**, they may be used any time you want to define something to be a particular size, rather than being proportional to something else, like the size of the browser window or the font size.

`em`, `rem` and `%` are all **relative units of measurement**. Both `em` and `%` are relative to the `font-size` of the containing element (when used in a `font-size` property). `rem`s are relative to the `font-size` of the **root** element - `<html>`.

See the extensive [docs on CSS length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) for more information.

* * *

Verify your solution is correct by running: `stylist verify solution.css`
