const formatElements = document.querySelectorAll('.indivColorFormat');
let selectedFormat = 'HEX';

formatElements.forEach(element => {
  element.addEventListener('click', () => {
    formatElements.forEach(el => el.classList.remove('red-text'));
    element.classList.add('red-text');
  });
  element.addEventListener('click', () => {
    // Get the text of the selected option
    selectedFormat = element.textContent;
    console.log(selectedFormat)

    const colorText1_1 = document.getElementById('c1_1_txt');
    colorText1_1.textContent = colorConverter(selectedFormat, colorText1_1.textContent);

    const colorText1_2 = document.getElementById('c1_2_txt');
    colorText1_2.textContent = colorConverter(selectedFormat, colorText1_2.textContent);

    const colorText2_1 = document.getElementById('c2_1_txt');
    colorText2_1.textContent = colorConverter(selectedFormat, colorText2_1.textContent);

    const colorText2_2 = document.getElementById('c2_2_txt');
    colorText2_2.textContent = colorConverter(selectedFormat, colorText2_2.textContent);

    const colorText3_1 = document.getElementById('c3_1_txt');
    colorText3_1.textContent = colorConverter(selectedFormat, colorText3_1.textContent);
    
    const colorText3_2 = document.getElementById('c3_2_txt');
    colorText3_2.textContent = colorConverter(selectedFormat, colorText3_2.textContent);
  });
});


const twoColorInput = document.getElementById('twoColorImg');
twoColorInput.addEventListener('change', function() {
    console.log('new two color image')
	// Load the selected image file
	const file = twoColorInput.files[0];
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
		img.src = reader.result;
	};
});

 
// 颜色输入

const colorInput1_1 = document.getElementById('c1_1');
const colorInput1_2 = document.getElementById('c1_2');

colorInput1_1.addEventListener('input', function() {
  const colorValue = colorInput1_1.value;
  const colorText = document.getElementById('c1_1_txt');
	colorText.textContent = colorConverter(selectedFormat, colorValue);
 
  const illus = document.getElementById('illus_1');
  const circle = illus.querySelector('.colorIllus_circle');
  // const num = illus.querySelector('.colorIllus_num');
  // const img = illus.querySelector('.colorIllus_img');
  circle.style.backgroundColor = colorValue;
  // num.style.color = 'black';
  // img.style.filter = 'none';



  if (colorInput1_2.value) {
    const contrastRatio = calculateContrastRatio(colorValue, colorInput1_2.value);
    
    const contrastRatioDiv = document.getElementById('c1_con');
    contrastRatioDiv.textContent = `${contrastRatio}`;
  }
});

colorInput1_2.addEventListener('input', function() {
  const colorValue = colorInput1_2.value;
  const colorText = document.getElementById('c1_2_txt');
	colorText.textContent = colorConverter(selectedFormat, colorValue);
 
  const illus = document.getElementById('illus_1');
  const circle = illus.querySelector('.colorIllus_circle');
  circle.style.backgroundColor = colorValue;

  if (colorInput1_1.value) {
    const contrastRatio = calculateContrastRatio(colorInput1_1.value, colorValue);
   
    const contrastRatioDiv = document.getElementById('c1_con');
    contrastRatioDiv.textContent = `${contrastRatio}`;
  }
});

function calculateContrastRatio(color1, color2) {
  // Convert colors to RGB
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  // Calculate luminance values
  const lum1 = calculateLuminance(rgb1);
  const lum2 = calculateLuminance(rgb2);

  // Calculate contrast ratio
  const ratio = (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);

  return ratio.toFixed(2);
}

function calculateLuminance(rgb) {
  const r = parseInt(rgb.substring(4, rgb.indexOf(','))) / 255;
  const g = parseInt(rgb.substring(rgb.indexOf(',')+2, rgb.lastIndexOf(','))) / 255;
  const b = parseInt(rgb.substring(rgb.lastIndexOf(',')+2, rgb.length-1)) / 255;

  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  return lum;
}




const colorInput2_1 = document.getElementById('c2_1');
const colorInput2_2 = document.getElementById('c2_2');

colorInput2_1.addEventListener('input', function() {
  const colorValue = colorInput2_1.value;
  const colorText = document.getElementById('c2_1_txt');
	colorText.textContent = colorConverter(selectedFormat, colorValue);
 
  const illus = document.getElementById('illus_2');
  const circle = illus.querySelector('.colorIllus_circle');
  circle.style.backgroundColor = colorValue;


  if (colorInput2_2.value) {
    const contrastRatio = calculateContrastRatio(colorValue, colorInput2_2.value);
    
    const contrastRatioDiv = document.getElementById('c2_con');
    contrastRatioDiv.textContent = `${contrastRatio}`;
  }
	
});

colorInput2_2.addEventListener('input', function() {
  const colorValue = colorInput2_2.value;
  const colorText = document.getElementById('c2_2_txt');
	colorText.textContent = colorConverter(selectedFormat, colorValue);
 
  const illus = document.getElementById('illus_2');
  const circle = illus.querySelector('.colorIllus_circle');
  circle.style.backgroundColor = colorValue;

  if (colorInput2_1.value) {
    const contrastRatio = calculateContrastRatio(colorValue, colorInput2_1.value);
    
    const contrastRatioDiv = document.getElementById('c2_con');
    contrastRatioDiv.textContent = `${contrastRatio}`;
  }
});


const colorInput3_1 = document.getElementById('c3_1');
colorInput3_1.addEventListener('input', function() {
  const colorValue = colorInput1_1.value;
  const colorText = document.getElementById('c3_1_txt');
	colorText.textContent = colorConverter(selectedFormat, colorValue);
 
  const illus = document.getElementById('illus_3');
  const circle = illus.querySelector('.colorIllus_circle');
  circle.style.backgroundColor = colorValue;

  if (colorInput3_2.value) {
    const contrastRatio = calculateContrastRatio(colorValue, colorInput3_2.value);
    
    const contrastRatioDiv = document.getElementById('c3_con');
    contrastRatioDiv.textContent = `${contrastRatio}`;
  }
	
});

const colorInput3_2 = document.getElementById('c3_2');
colorInput3_2.addEventListener('input', function() {
  const colorValue = colorInput3_2.value;
  const colorText = document.getElementById('c3_2_txt');
	colorText.textContent = colorConverter(selectedFormat, colorValue);
 
  const illus = document.getElementById('illus_3');
  const circle = illus.querySelector('.colorIllus_circle');
  circle.style.backgroundColor = colorValue;

  if (colorInput3_1.value) {
    const contrastRatio = calculateContrastRatio(colorValue, colorInput3_1.value);
    
    const contrastRatioDiv = document.getElementById('c3_con');
    contrastRatioDiv.textContent = `${contrastRatio}`;
  }
});




// 以下是颜色的转换

function hexToRgb(hex) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0,2), 16);
    const g = parseInt(hex.substring(2,4), 16);
    const b = parseInt(hex.substring(4,6), 16);
    return `RGB(${r}, ${g}, ${b})`;
}

function rgbToHex(rgb) {
    const r = parseInt(rgb.substring(4, rgb.indexOf(',')));
    const g = parseInt(rgb.substring(rgb.indexOf(',')+2, rgb.lastIndexOf(',')));
    const b = parseInt(rgb.substring(rgb.lastIndexOf(',')+2, rgb.length-1));
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
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
    hexColor = rgbToHex(colorValue);
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
    finalColor = hexToRgb(hexColor);
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

function calcContrast(color1, color2){
  var l1 = getLightness(color1)
	var l2 = getLightness(color2)
  // Calculate the color contrast
	var contrast = (Math.max((l1 + 0.05), (l2 + 0.05))) / (Math.min((l1 + 0.05), (l2 + 0.05)));
  // Display the results
  return contrast.toFixed(2);
}

 
function extractRGB(rgbString){
  const rgb = rgbString.substring(rgbString.indexOf('(') + 1, rgbString.indexOf(')')).split(',').map(Number);
  return rgb;
}

 
// 下面是切换不同的标识显示
const circle1 = document.querySelector('#circle_1');
const circle2 = document.querySelector('#circle_2');
const circle3 = document.querySelector('#circle_3');


const blackDiv = document.querySelector('.pictureFormatter_indiv_insideBlack');
const canjirenImg = document.querySelector('.pictureFormatter_indiv_inside[src="../img/canjiren.png"]');
const jinghaoImg = document.querySelector('.pictureFormatter_indiv_inside[src="../img/jinghao.png"]');

blackDiv.addEventListener('click', () => {
  circle1.classList.remove('state2', 'state3');
  circle1.classList.add('colorIllus_circle');
});

canjirenImg.addEventListener('click', () => {
  circle1.classList.remove('colorIllus_circle', 'state3');
  circle1.classList.add('state2');
});

jinghaoImg.addEventListener('click', () => {
  circle1.classList.remove('colorIllus_circle', 'state2');
  circle1.classList.add('state3');
});

