const formatElements = document.querySelectorAll('.indivColorFormat');
let selectedFormat = 'RGB';

formatElements.forEach(element => {
  element.addEventListener('click', () => {
    formatElements.forEach(el => el.classList.remove('red-text'));
    element.classList.add('red-text');
  });
  element.addEventListener('click', () => {
    // Get the text of the selected option
    selectedFormat = element.textContent;
    console.log(selectedFormat)

    try {
        const colorText1_1 = document.getElementById('c_upload_1');
        colorText1_1.textContent = colorConverter(selectedFormat, colorText1_1.textContent);
    } catch (error) {
        console.log('error', error);
    }

    try {
        const colorText1_2 = document.getElementById('c_upload_2');
        colorText1_2.textContent = colorConverter(selectedFormat, colorText1_2.textContent);
    } catch (error) {
        console.log('error', error);
    }


    const colorText2_1 = document.getElementById('c1_txt');
    colorText2_1.textContent = colorConverter(selectedFormat, colorText2_1.textContent);

    const colorText2_2 = document.getElementById('c2_txt');
    colorText2_2.textContent = colorConverter(selectedFormat, colorText2_2.textContent);

  });
});

// 以下是颜色的转换
function hexToRgb_format(hex) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0,2), 16);
    const g = parseInt(hex.substring(2,4), 16);
    const b = parseInt(hex.substring(4,6), 16);
    return `RGB(${r}, ${g}, ${b})`;
}

function rgbToHex_format(rgb) {
    const r = parseInt(rgb.substring(4, rgb.indexOf(',')));
    const g = parseInt(rgb.substring(rgb.indexOf(',')+2, rgb.lastIndexOf(',')));
    const b = parseInt(rgb.substring(rgb.lastIndexOf(',')+2, rgb.length-1));

    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');

    return `#${hexR}${hexG}${hexB}`;

}
 
function hexToCmyk(hex) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0,2), 16) / 255;
    const g = parseInt(hex.substring(2,4), 16) / 255;
    const b = parseInt(hex.substring(4,6), 16) / 255;
    
	const k = Math.min(1 - r, 1 - g, 1 - b);
    const c = (1 - r - k) / (1 - k);
    const m = (1 - g - k) / (1 - k);
    const y = (1 - b - k) / (1 - k);
    return `CMYK(${Math.round(c * 100)}, ${Math.round(m * 100)}, ${Math.round(y * 100)}, ${Math.round(k * 100)})`;
}

function cmykToHex(cmyk) {
    const c = parseInt(cmyk.substring(5, cmyk.indexOf(',')));
    const m = parseInt(cmyk.substring(cmyk.indexOf(',')+2, cmyk.lastIndexOf(',')));
    const y = parseInt(cmyk.substring(cmyk.lastIndexOf(',')+2, cmyk.lastIndexOf(')')));
    const k = parseInt(cmyk.substring(cmyk.lastIndexOf(' ')+1, cmyk.lastIndexOf(')')));
    
    const r = Math.round(255 * (1 - c/100) * (1 - k/100));
    const g = Math.round(255 * (1 - m/100) * (1 - k/100));
    const b = Math.round(255 * (1 - y/100) * (1 - k/100));
    
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

// Function to convert HEX color to LAB color format
function hexToLab(hex) {
  // Convert HEX to RGB
  const r = parseInt(hex.substring(0,2), 16) / 255;
  const g = parseInt(hex.substring(2,4), 16) / 255;
  const b = parseInt(hex.substring(4,6), 16) / 255;

  // Convert RGB to XYZ
  let x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
  let y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
  let z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

  // Convert XYZ to LAB
  x /= 0.95047;
  y /= 1.00000;
  z /= 1.08883;

  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

  const L = (116 * y) - 16;
  const A = 500 * (x - y);
  const B = 200 * (y - z);

  return `LAB(${Math.round(L)}, ${Math.round(A)}, ${Math.round(B)})`;
}
 
// Function to convert LAB color to HEX color format
function labToHex(lab) {
  // Convert LAB to XYZ
  let y = (lab[0] + 16) / 116;
  let x = lab[1] / 500 + y;
  let z = y - lab[2] / 200;

  x = 0.95047 * (x * x * x > 0.008856 ? x * x * x : (x - 16 / 116) / 7.787);
  y = 1.00000 * (y * y * y > 0.008856 ? y * y * y : (y - 16 / 116) / 7.787);
  z = 1.08883 * (z * z * z > 0.008856 ? z * z * z : (z - 16 / 116) / 7.787);

  // Convert XYZ to RGB
  let r = x * 3.2406 + y * -1.5372 + z * -0.4986;
  let g = x * -0.9689 + y * 1.8758 + z * 0.0415;
  let b = x * 0.0557 + y * -0.2040 + z * 1.0570;

  r = r > 0.0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : r * 12.92;
  g = g > 0.0031308 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : g * 12.92;
  b = b > 0.0031308 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : b * 12.92;

  // Convert RGB to HEX
  const hex = `#${Math.round(r * 255).toString(16)}${Math.round(g * 255).toString(16)}${Math.round(b * 255).toString(16)}`;
  return hex.toUpperCase();
}

// Function to convert HEX color to NCS color format
function hexToNcs(hex) {
  // Convert HEX to RGB
  const r = parseInt(hex.substring(0,2), 16) / 255;
  const g = parseInt(hex.substring(2,4), 16) / 255;
  const b = parseInt(hex.substring(4,6), 16) / 255;

  // Calculate the NCS S value
  const s = Math.round((Math.max(r, g, b) - Math.min(r, g, b)) * 100);

  // Calculate the NCS H value
  let h;
  if (r === g && g === b) {
    h = 0;
  } else if (r >= g && r >= b) {
    h = ((g - b) / (Math.max(r, g, b) - Math.min(r, g, b))) * 60;
  } else if (g >= r && g >= b) {
    h = (2 + (b - r) / (Math.max(r, g, b) - Math.min(r, g, b))) * 60;
  } else {
    h = (4 + (r - g) / (Math.max(r, g, b) - Math.min(r, g, b))) * 60;
  }

  // Calculate the NCS V value
  const v = Math.round(Math.max(r, g, b) * 100);

  // Determine the NCS hue and chroma values based on the NCS V value
  let hue, chroma;
  if (v < 10) {
    hue = 'R';
    chroma = 0;
  } else if (v < 20) {
    hue = 'YR';
    chroma = Math.round((s / 100) * 4);
  } else if (v < 30) {
    hue = 'Y';
    chroma = Math.round((s / 100) * 8);
  } else if (v < 40) {
    hue = 'GY';
    chroma = Math.round((s / 100) * 12);
  } else if (v < 50) {
    hue = 'G';
    chroma = Math.round((s / 100) * 16);
  } else if (v < 60) {
    hue = 'BG';
    chroma = Math.round((s / 100) * 20);
  } else if (v < 70) {
    hue = 'B';
    chroma = Math.round((s / 100) * 24);
  } else if (v < 80) {
    hue = 'PB';
    chroma = Math.round((s / 100) * 28);
  } else if (v < 90) {
    hue = 'P';
    chroma = Math.round((s / 100) * 32);
  } else {
    hue = 'RP';
    chroma = Math.round((s / 100) * 36);
  }

  // Return the NCS color value
  return `NCS ${hue} ${chroma}-${Math.round(h)}B`;
}

// Function to convert NCS color to HEX color format
function ncsToHex(ncs) {
  // Extract the hue, chroma, and hue angle values from the NCS color value
  const hue = ncs.substring(4, ncs.indexOf(' '));
  const chroma = parseInt(ncs.substring(ncs.indexOf(' ') + 1, ncs.indexOf('-')));
  const hueAngle = parseInt(ncs.substring(ncs.indexOf('-') + 1, ncs.indexOf('B')));

  // Calculate the NCS V value based on the hue and chroma values
  let v;
  if (hue === 'R') {
    v = chroma / 4;
  } else if (hue === 'YR') {
    v = (chroma / 4) + 10;
  } else if (hue === 'Y') {
    v = (chroma / 8) + 20;
  } else if (hue === 'GY') {
    v = (chroma / 12) + 30;
  } else if (hue === 'G') {
    v = (chroma / 16) + 40;
  } else if (hue === 'BG') {
    v = (chroma / 20) + 50;
  } else if (hue === 'B') {
    v = (chroma / 24) + 60;
  } else if (hue === 'PB') {
    v = (chroma / 28) + 70;
  } else if (hue === 'P') {
    v = (chroma / 32) + 80;
  } else {
    v = (chroma / 36) + 90;
  }

  // Calculate the RGB values based on the NCS V value and hue angle
  const r = v * (1 - (Math.abs((hueAngle / 60) % 2 - 1)));
  const g = v * (1 - (Math.abs(((hueAngle / 60) + 2) % 4 - 2)));
  const b = v * (1 - (Math.abs(((hueAngle / 60) + 4) % 4 - 2)));

  // Convert the RGB values to HEX format
  const hex = `#${Math.round(r * 255).toString(16)}${Math.round(g * 255).toString(16)}${Math.round(b * 255).toString(16)}`;
  return hex.toUpperCase();
}

 
function colorConverter(selectedFormat, colorValue) {
  let hexColor;
  if (colorValue.startsWith('#')) {
    hexColor = colorValue;
  } else if (colorValue.startsWith('RGB')) {
    hexColor = rgbToHex_format(colorValue);
  } else if (colorValue.startsWith('CMYK')) {
    hexColor = cmykToHex(colorValue);
  } else if (colorValue.startsWith('LAB')) {
    hexColor = labToHex(colorValue);
  } else if (colorValue.startsWith('NCS')) {
    hexColor = ncsToHex(colorValue);
  } else {
    console.log('Invalid format selected');
    return;
  }

  console.log(hexColor)

  let finalColor;
  if (selectedFormat === 'HEX') {
    finalColor = hexColor;
  } else if (selectedFormat === 'RGB') {
    finalColor = hexToRgb_format(hexColor);
  } else if (selectedFormat === 'CMYK') {
    finalColor = hexToCmyk(hexColor);
  } else if (selectedFormat === 'LAB') {
    finalColor = hexToLab(hexColor);
  } else if (selectedFormat === 'NCS') {
    finalColor = colorValue;
  } else {
    console.log('Invalid format selected');
    return;
  }

  return finalColor;
}



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
			document.querySelector('#contrastNum').innerHTML = ''
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
					
					line += '<div class="color_input_sep"></div>'
					// line += colorHexs[i]
					// line += ', RGB('
					line += '<div id="c_upload_'
					line += i+1
					line += '">'
					line += 'RGB('
					line += colorRgbs[i][0]
					line += ', '
					line += colorRgbs[i][1]
					line += ', '
					line += colorRgbs[i][2]
					line += ')'
					line += '</div>'
					// let color_input = "<input type='color' class='color_input' id='color_input_"
					// color_input += comboIndex
					// color_input += '_'
					// color_input += i
					// color_input += "' value='"
					// color_input += colorHexs[i]
					// color_input += "' />"
					// line += color_input
					
					line += '</div>'
					
					document.querySelector('#result').innerHTML += line
					
					i += 1
				}
				document.querySelector('#contrastNum').innerHTML = contrastRatio
				document.querySelector("#checkPoint1").innerHTML = checkPass(contrastRatio)

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



// 输入两个颜色，计算对比度并呈现
function hexToRgb(hex) {
    var m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
    return [parseInt(m[1], 16), parseInt(m[2], 16) , parseInt(m[3], 16)]
}

function numeric_calc(){
	console.log('calc')
	var c1 = document.getElementById('c1').value
	var c2 = document.getElementById('c2').value
	console.log(c1)
	var l1 = getLightness(hexToRgb(c1))
	console.log(l1)
	var l2 = getLightness(hexToRgb(c2))
	console.log(l1)
	// Calculate the color contrast
	var contrast = (Math.max((l1 + 0.05), (l2 + 0.05))) / (Math.min((l1 + 0.05), (l2 + 0.05)));
	
	var contrastRatio = contrast.toFixed(2);
	document.querySelector('#contrastNum_icon').innerHTML = contrastRatio
	document.querySelector("#checkPoint2").innerHTML = checkPass(contrastRatio)
	
	return
}
 
// listen to the change of input with id 'c1', if there is a value change, show the RGB value of 'c1' input in the <div id='c1_txt'>
document.getElementById('c1').addEventListener('input', function(){
    var c1 = document.getElementById('c1').value
    var c1_rgb = hexToRgb(c1)
    // document.getElementById('c1_txt').innerHTML = 'RGB(' + c1_rgb[0] + ', ' + c1_rgb[1] + ', ' + c1_rgb[2] + ')'
	document.getElementById('c1_txt').innerHTML = colorConverter(selectedFormat, c1)
	numeric_calc()

	// change the background-color attribute in the class 'imgContainer' into the color of input color here
	document.querySelector('.imgContainer').style.backgroundColor = document.getElementById('c1').value;

	
	
})

document.getElementById('c2').addEventListener('input', function(){
    var c2 = document.getElementById('c2').value
    var c2_rgb = hexToRgb(c2)
    document.getElementById('c2_txt').innerHTML = colorConverter(selectedFormat, c2)

    // document.getElementById('c2_txt').innerHTML = 'RGB(' + c2_rgb[0] + ', ' + c2_rgb[1] + ', ' + c2_rgb[2] + ')'
	// colorConverter(selectedFormat, colorValue)
	numeric_calc()

    document.querySelector('.imgContainer_img').style.filter = 'drop-shadow(0 -21.875rem ' + c2 + ')'
	
})


 
function checkPass(num) {
  if (num < 3) {
    return '：未通过';
  }else if(num >= 3 && num < 4.5){
    return '：通过';
  } else if(num >= 4.5 && num < 7){
    return '：通过, AA';
  } else {
    return '：通过, AAA';
  }
}

