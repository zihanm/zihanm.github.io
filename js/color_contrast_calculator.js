// Get the input element and listen for changes
const input = document.querySelector('input[type="file"]');
input.addEventListener('change', function() {
	// Load the selected image file
	const file = input.files[0];
	const reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function() {
		// create a preview
		const img = new Image();
		img.onload = function() {
		
			canvas.width = img.width;
			canvas.height = img.height;

			const ctx = canvas.getContext('2d');
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
			ctx.drawImage(img, 0, 0);
		}
		
		img.src = reader.result
		// Wait for the image to load
		var color_input_listener = []
		img.addEventListener('load', function() {
			console.log('analyzing')
			// 重置结果
			document.querySelector('#result').innerHTML = ''
			
			const colorThief = new ColorThief();
			// default is 10 colors
			var colors = colorThief.getPalette(img,2);
			console.log('all colors: ', colors)
			var combos = makeCombination(colors)
			for(let comboIndex in combos){
				var color1 = combos[comboIndex][0];
				var color2 = combos[comboIndex][1];
				// Calculate the lightness of each color
				var l1 = getLightness(color1)
				var l2 = getLightness(color2)
				// Calculate the color contrast
				var contrast = (Math.max((l1 + 0.05), (l2 + 0.05))) / (Math.min((l1 + 0.05), (l2 + 0.05)));
				// Display the results
				var color1Hex = rgbToHex(color1);
				var color2Hex = rgbToHex(color2);
				var contrastRatio = contrast.toFixed(2);
				// 前端渲染
				var colorHexs = [color1Hex, color2Hex]
				var colorRgbs = [combos[comboIndex][0], combos[comboIndex][1]]
				// console.log(colorHexs)
				// console.log(colorRgbs)
				let i = 0
				while(i < colorHexs.length){
					let line = '<div class = "colorLine">'
					let st = '<div class="color_palette" style="background-color:'
					st += colorHexs[i]
					st += '"></div>'
					line += st
					
					
					line += '颜色'
					line += (i+1).toString()
					line += ':&nbsp&nbsp'
					// line += colorHexs[i]
					// line += ', RGB('
					line += 'RGB('
					line += colorRgbs[i][0]
					line += ','
					line += colorRgbs[i][1]
					line += ','
					line += colorRgbs[i][2]
					line += ')'
					
					let color_input = "<input type='color' class='color_input' id='color_input_"
					color_input += comboIndex
					color_input += '_'
					color_input += i
					color_input += "' value='"
					color_input += colorHexs[i]
					color_input += "' />"
					line += color_input
					
					line += '</div>'
					
					document.querySelector('#result').innerHTML += line
					
					i += 1
				}
				
				document.querySelector('#result').innerHTML += '<p>对比度: ' + contrastRatio + '</p>'
			}
		});
	};
});

// Helper function to convert RGB to hex
function rgbToHex(rgb) {
	return '#' + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
}

function rgbAdj(c){
	var cRatio = c / 255
	if(cRatio <= 0.03928){
		return cRatio / 12.92
	}else{
		return Math.pow((cRatio+0.055)/1.055, 2.4)
	}
}

function getLightness(color_rgb){
	return 0.2126 * rgbAdj(color_rgb[0]) + 0.7152 * rgbAdj(color_rgb[1]) + 0.0722 * rgbAdj(color_rgb[2])
}

function makeCombination(colors){
	const combinations = [];
	
	for (let i = 0; i < colors.length; i++) {
		for (let j = i + 1; j < colors.length; j++) {
			const combination = [colors[i], colors[j]];
	
			// Add the combination to the list if it doesn't already exist
			if (!combinations.some(c => c.toString() === combination.toString())) {
			combinations.push(combination);
			}
		}

	}
	console.log('unique combinations: ', combinations);
	return combinations
}

