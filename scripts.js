
// Turn off results-block visibility
document.getElementById('output').style.visibility = 'hidden';

let weightInput = 0;
let weightUnit = 'lb';

document.getElementById('allInput').addEventListener('input', function(e) {
  // Turn on results-block visibility
  document.getElementById('output').style.visibility = 'visible';
  
  // Turn on display for each unit type block
  document.getElementById('card-kg').style.display = 'block';
  document.getElementById('card-oz').style.display = 'block';
  document.getElementById('card-gr').style.display = 'block';
  document.getElementById('card-lb').style.display = 'block';
  e.target.name === 'weightInput' ? weightInput = e.target.value : weightUnit = e.target.value;
  
  if (weightUnit === 'gr') {
    // Calculate weight for grams
    document.getElementById('lbsOutput').innerHTML = (weightInput / 453.592).toFixed(2);
    document.getElementById('kgOutput').innerHTML = (weightInput / 1000).toFixed(2);
    document.getElementById('ozOutput').innerHTML = (weightInput / 28.35).toFixed(2);

    // Remove parent unit type card 
    document.getElementById('card-gr').style.display = 'none';
    
  } else if (weightUnit === 'kg') {
    // Calculate weight for kgs
    document.getElementById('gramsOutput').innerHTML = (weightInput * 1000).toFixed(2);
    document.getElementById('lbsOutput').innerHTML = (weightInput * 2.2046).toFixed(2);
    document.getElementById('ozOutput').innerHTML = (weightInput * 35.274).toFixed(2);

    // Remove parent unit type card 
    document.getElementById('card-kg').style.display = 'none';
    
  } else if (weightUnit === 'oz') {
    // Calculate weight for ounces
    document.getElementById('gramsOutput').innerHTML = (weightInput * 28.3495).toFixed(2);
    document.getElementById('lbsOutput').innerHTML = (weightInput / 16).toFixed(2);
    document.getElementById('kgOutput').innerHTML = (weightInput / 35.274).toFixed(2);

    // Remove parent unit type card    
    document.getElementById('card-oz').style.display = 'none';
    
  } else {
    // Calculate weight for lbs
    document.getElementById('gramsOutput').innerHTML = (weightInput / 0.0022046).toFixed(2);
    document.getElementById('kgOutput').innerHTML = (weightInput / 2.2046).toFixed(2);
    document.getElementById('ozOutput').innerHTML = (weightInput * 16).toFixed(2);

    // Remove parent unit type card    
    document.getElementById('card-lb').style.display = 'none';
  } 
});