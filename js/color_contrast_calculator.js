// Get the input element and listen for changes
const input = document.querySelector('input[type="file"]');
input.addEventListener('change', function() {
  // Load the selected image file
  const file = input.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function() {
    const img = new Image();
	img.onload = function() {
		
		canvas.width = img.width;
		canvas.height = img.height;

		const ctx = canvas.getContext('2d');
		ctx.drawImage(img, 0, 0);
		
	  }
    img.src = reader.result;
    // Wait for the image to load
    img.addEventListener('load', function() {
		console.log('analyzing')
		// Extract the two most prominent colors
		const colorThief = new ColorThief();
		const colors = colorThief.getPalette(img, 2);
		const color1 = colors[0];
		const color2 = colors[1];
		// Calculate the lightness of each color
		const l1 = getLightness(color1)
		const l2 = getLightness(color2)
		// Calculate the color contrast
		const contrast = (l1 + 0.05) / (l2 + 0.05);
		// Display the results
		const color1Hex = rgbToHex(color1);
		const color2Hex = rgbToHex(color2);
		const contrastRatio = contrast.toFixed(2);
		// 前端渲染
		
		const result = `主要颜色 1: ${color1Hex}, RGB(${color1})<br>主要颜色 2: ${color2Hex}, RGB(${color2})<br>对比度: ${contrastRatio}`;
		document.querySelector('#result').innerHTML = result;
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