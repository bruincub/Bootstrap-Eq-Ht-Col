// DY140130
// Responsive equal height columns
// NOTE: Modified to handle multiple rows
// Adapted from http://codepen.io/micahgodbolt/pen/FgqLc

equalHeight = function(element){

	var currentTallest = 0,
		currentRowStart = 0,
		rowDivs = new Array(),
		$el,
		topPosition = 0;
 
	$(element).each(function() {
		$el = $(this);
		$($el).height("auto");
		topPosition = $el.parent().position().top;					// Get parent's top position because Bootstrap columns are set as containers
		
		// If at start of new row, empty array and prepare to check heights of columns
		// Else, check heights of current row's columns
		if (currentRowStart != topPosition) {
			for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
			}
			rowDivs.length = 0; 						// empty the array
			currentRowStart = topPosition;
			currentTallest = $el.height();
			rowDivs.push($el);
		} else {
			rowDivs.push($el);
			currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);			// Check if this column is new tallest or not
		}
	   
	   	// Set all column heights in row to current tallest height
		for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}
	});
}

$(window).load(function() {
	equalHeight(".equalHeight");
});

$(window).resize(function() {
	equalHeight(".equalHeight");
});

$(window).load(function() {
	equalHeight(".equalHeight2");
});

$(window).resize(function() {
	equalHeight(".equalHeight2");
});

// 