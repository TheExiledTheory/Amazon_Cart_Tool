
window.onload()

// Used for tracking timeout 
let operationTimer = Date.now();

// Run the function every 10 seconds
let intervalID = setInterval(runner, 10000);

// Main function operation 
async function runner () {

	let booler = false; 
	let elements = null;

	try {
		// Grab all the elements with the "Add to list" selector 
		elements = document.querySelectorAll('.a-color-link[value="Add to list"]');
	} catch (e) { 
		console.log(e);
		booler = false; 
	}

	// Make sure they are present 
	if (elements) {
	
		// Loop through the elements
		for (var i = 0; i < elements.length; i++) {
		
			//console.log(`Current element: ${elements[i]}`);
			if (elements[i]) {
			
				// Click 'add to later' 
				elements[i].click();
				console.log("Clicked element!");
				
				// Wait 3 seconds 
				await new Promise(resolve => setTimeout(resolve, 3000))
			}
			
			// Get all the available lists
			//let lists = document.getElementsByClassName("a-text-center a-fixed-left-grid-col a-col-left");
			let lists = null; 

			try {
				//lists = document.querySelector('.a-popover-wrapper');
				//lists = document.querySelectorAll('.a-dropdown-item');
				lists = document.getElementsByClassName("a-text-center a-fixed-left-grid-col a-col-left");
			} catch (e) {
				console.log(e);
				booler = false; 
			}

			// Make sure lists are open 
			if (lists) {
			
				// Click on 2nd list 
				lists[1].click();
				console.log("Added to list!");
				
				// Wait 3 seconds 
				await new Promise(resolve => setTimeout(resolve, 3000))
			}

			// Get the saved cart view form 
			let saved = null;

			try {
				saved = document.querySelector('#savedCartViewForm')
			} catch (e) {
				console.log(e);
				booler = false; 
			}
			
			if (saved) {
				// Click the delete button 
				var delete_button = saved.querySelector('.a-color-link[value="Delete"]');
				delete_button.click();
				console.log("Deleted from list!");
				
				// Wait 3 seconds 
				await new Promise(resolve => setTimeout(resolve, 3000))
				booler = true; 
			}
		}

    } else {
		booler = false; 
	}

	if (booler) {
		// Scroll down on page and load more items
		window.scrollBy(0, 3000);
		operationTimer = Date.now(); 

	} 
	// Check and make sure work is happening
	else if (Date.now() - operationTimer > 15000) {
		console.log("Nothing happening... exiting.")
		clearInterval(intervalID);
	}
}

