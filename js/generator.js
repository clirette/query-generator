// Inputs
const fullNameInput = document.getElementById('full-name-input');
const chosenNameInput = document.getElementById('chosen-name-input');

// Template
const fullNameTemplate = document.getElementById('full-name-template');
const chosenNameTemplates = [...document.querySelectorAll('.chosen-name-template')];

function updateTemplate() {
  fullNameTemplate.innerText = fullNameInput.value;
  chosenNameTemplates.forEach(template => template.innerText = chosenNameInput.value);
}

fullNameInput.addEventListener('change', updateTemplate);
chosenNameInput.addEventListener('change', updateTemplate);