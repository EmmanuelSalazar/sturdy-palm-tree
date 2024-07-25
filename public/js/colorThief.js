import ColorThief from '../../node_modules/colorthief/dist/color-thief.mjs'

const colorThief = new ColorThief();
const img = document.querySelector('.profilePic');
var color = colorThief.getColor(img);
console.log(color[0]);
var css = 'linear-gradient(180deg, rgba('+color[0]+','+color[1]+','+color[2]+',1) 26%, rgba(69,69,70,1) 100%)';
$(document).ready(function() { 
    $('#main').css('background', css);
    $('.particles-js').css('background', css);
/*     $('.profilePic').css('background', 'rgb('+color[0]+','+color[1]+','+color[2]+',1)');
 */

})


