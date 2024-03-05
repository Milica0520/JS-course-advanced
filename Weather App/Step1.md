# Step 1

## Handling navigation click

The goal of this step is to load appropriate page each time we click on navigation. (Ex. if we click on `Hourly` navigation link, page Hourly shows in DOM).

You may notice `nav` element in index.html which renders navigation in header. Each navigation item is `li` with class `nav-item`. 
Below, you may notice div with ID `pages` which contains page div for each navigation link. Each of pages has class `page`.

Implement next behavior:
When user clicks on navigation item, show proper page.
Ex. user clicks on `Statistics` just show statistics page.


## Handling search input behavior

The goal of this step is to attach click listener on the `Search` button, and get entered city name from the input.