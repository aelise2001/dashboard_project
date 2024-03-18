
const typeFilters = document.querySelectorAll('input[type="checkbox"]'); // Checkbox Filter

const sizeFilter = document.querySelectorAll('input[name="size"]');


const filterButtons = document.querySelectorAll('.btn');


const colorFilter = document.getElementById('color-filter');



const items = document.querySelectorAll('.boxes');

function filterByType() {
   // get checkbox values, put in array
  const selectedTypes = document.querySelectorAll('input[type="checkbox"]:checked');
  const selectedTypeValues = Array.from(selectedTypes).map(checkbox => checkbox.value);

  // loop through each element
  items.forEach(item => {
    // get the type property of the element
    const type = item.dataset.type;

    // if there are no boxes selected or the type of the element is in the array, display block (visible)
    if (selectedTypes.length === 0 || selectedTypeValues.includes(type)) {
      item.style.display = 'block';
    } else {
      // else display none (hidden)
        item.style.display = 'none';
    }
  
  });
}


function filterBySize() {
    // get the radio button values
    const selectedSize = document.querySelector('input[name="size"]:checked').value;

      // loop through each element
      items.forEach(item => {
        // get the size property of the element
        const size = item.dataset.size;
        // if all is selected or if the value of the filter matches the item, display block (visible)
        if (selectedSize === 'all' || size === selectedSize){
          item.style.display = 'block' 
        }
        // else display none (hidden)
        else {
          item.style.display = 'none' 
        }
        
      });  
  }



  function filterByButton(filterValue) {

    // loop through each element
    items.forEach(item => {
      // get the price property of the element
      const price = item.dataset.price;
      // if the element matches the value or all is selected, display block (visible)
        if (price === filterValue || filterValue === 'all') {
          item.style.display = 'block';
        }
        // else display none (visible)
        else {
          item.style.display = 'none';
        }
    });
  }


// filter by color (Dropdown)
function filterByColor() {
    // get the color values
    const selectedColor = colorFilter.value;
    // loop through each element
    items.forEach(item => {
      // get the color property of the element
      const color = item.dataset.color;
      // if all is selected or if the value of the filter matches the item, display block (visible)
      if (selectedColor === 'all' || color === selectedColor) {
          item.style.display = 'block';
      } 
      // else display none (hidden)
      else {
          item.style.display = 'none';
      }
  
    });
  }



  sizeFilter.forEach(radio => radio.addEventListener('change', filterBySize));



typeFilters.forEach(checkbox => checkbox.addEventListener('change', filterByType));



filterButtons.forEach(btn => btn.addEventListener('click', function() {
    // get data price attribute from element
    filterByButton(btn.getAttribute('data-price'));
  }));


  colorFilter.addEventListener('change', filterByColor);