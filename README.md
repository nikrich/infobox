# Tile based image box with hover descriptions

Tile box with hover description

## Getting Started

Download the [development css][min] and the [development js][max].

[min]: https://github.com/nikrich/infobox/blob/master/src/portfoliobox.css
[max]: https://github.com/nikrich/infobox/blob/master/src/portfoliobox.js

In your web page:

```html
<link rel="stylesheet" type="text/css" media="screen" href="css/jquery.portfoliobox.css">
```
```html
<div id="portfoliobox">
	<div class="row">
		<div id="tile1" class="tile tile-dark anim anim1">
			<div class="tile-logo">
				<img src="images/Github.png" />
			</div>
			<div class="tile-body">
				<h3>Github</h3>
				<img src="images/minus.png" class="tile-exit"/>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>                        
			</div>
		</div>
		etc...
	</div>
</div>
```
```html
<script src="js/jquery.js"></script>
<script src="js/portfoliobox.min.js"></script>
<script>
jQuery(function($) {
  $("portfoliobox").portfoliobox();
});
</script>
```

## Documentation
_(Coming soon)_

## Demo
<a href="http://nikrich.github.io/infobox">Click here</a> for a live demo!

## Release History
_(Nothing yet)_
