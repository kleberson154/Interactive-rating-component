const button = document.getElementById('submit')
let input = document.querySelectorAll('input[name="rating"]')
const container = document.querySelector('.container')
const thankYouContainer = document.querySelector('.thanks')

function getSelectedValue() {
  for (let i = 0; i < input.length; i++) {
    if (input[i].checked) {
      return input[i].value
    }
  }
  return null
}

button.addEventListener('click', () => {
  const selectedValue = getSelectedValue()
  if (selectedValue) {
    container.style.display = 'none'
    thankYouContainer.style.display = 'flex'
    thankYouContainer.querySelector('.rating-span').textContent = selectedValue
  } else {
    alert('Please select a rating before submitting.')
  }
})
