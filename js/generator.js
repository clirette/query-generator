// Inputs
const fullNameInput = document.getElementById('full-name-input');
const chosenNameInput = document.getElementById('chosen-name-input');
const pronounInput = document.getElementById('pronoun-input');
const ageInput = document.getElementById('age-input');
const definingCharacteristicInput = document.getElementById('defining-characteristic-input');
const hopesAndDreamsInput = document.getElementById('hopes-and-dreams-input');
const incitingIncidentInput = document.getElementById('inciting-incident-input');
const incitedActionInput = document.getElementById('incited-action-input');
const consequenceUntakenActionInput = document.getElementById('consequence-untaken-action-input');
const preventingConsequencesInput = document.getElementById('preventing-consequences-input');
const newDiscoveriesInput = document.getElementById('new-discoveries-input');
const greatChallengeInput = document.getElementById('great-challenge-input');
const challengeOutcome1Input = document.getElementById('challenge-outcome-1-input');
const challengeOutcome2Input = document.getElementById('challenge-outcome-2-input');
const taglineInput = document.getElementById('tagline-input');


// Template
const fullNameTemplate = document.getElementById('full-name-template');
const chosenNameTemplates = [...document.querySelectorAll('.chosen-name-template')];
const pronounTemplates = [...document.querySelectorAll('.pronoun-template')];
const ageTemplate = document.getElementById('age-template');
const definingCharacteristicTemplate = document.getElementById('defining-characteristic-template');
const hopesAndDreamsTemplate = document.getElementById('hopes-and-dreams-template');
const incitingIncidentTemplate = document.getElementById('inciting-incident-template');
const incitedActionTemplate = document.getElementById('incited-action-template');
const consequenceUntakenActionTemplate = document.getElementById('consequence-untaken-action-template');
const preventingConsequencesTemplate = document.getElementById('preventing-consequences-template');
const newDiscoveriesTemplate = document.getElementById('new-discoveries-template');
const greatChallengeTemplate = document.getElementById('great-challenge-template');
const challengeOutcome1Template = document.getElementById('challenge-outcome-1-template');
const challengeOutcome2Template = document.getElementById('challenge-outcome-2-template');
const taglineTemplate = document.getElementById('tagline-template');

function updateTemplate() {
  fullNameTemplate.innerText = fullNameInput.value;
  chosenNameTemplates.forEach(template => template.innerText = chosenNameInput.value);
  pronounTemplates.forEach(template => template.innerText = pronounInput.value);
  ageTemplate.innerText = ageInput.value;
  definingCharacteristicTemplate.innerText = definingCharacteristicInput.value;
  hopesAndDreamsTemplate.innerText = hopesAndDreamsInput.value;
  incitingIncidentTemplate.innerText = incitingIncidentInput.value;
  incitedActionTemplate.innerText = incitedActionInput.value;
  consequenceUntakenActionTemplate.innerText = consequenceUntakenActionInput.value;
  preventingConsequencesTemplate.innerText = preventingConsequencesInput.value;
  newDiscoveriesTemplate.innerText = newDiscoveriesInput.value;
  greatChallengeTemplate.innerText = greatChallengeInput.value;
  challengeOutcome1Template.innerText = challengeOutcome1Input.value;
  challengeOutcome2Template.innerText = challengeOutcome2Input.value;
  taglineTemplate.innerText = taglineInput.value;
  
}

fullNameInput.addEventListener('change', updateTemplate);
chosenNameInput.addEventListener('change', updateTemplate);
pronounInput.addEventListener('change', updateTemplate);
ageInput.addEventListener('change', updateTemplate);
definingCharacteristicInput.addEventListener('change', updateTemplate);
hopesAndDreamsInput.addEventListener('change', updateTemplate);
incitingIncidentInput.addEventListener('change', updateTemplate);
incitedActionInput.addEventListener('change', updateTemplate);
consequenceUntakenActionInput.addEventListener('change', updateTemplate);
preventingConsequencesInput.addEventListener('change', updateTemplate);
newDiscoveriesInput.addEventListener('change', updateTemplate);
greatChallengeInput.addEventListener('change', updateTemplate);
challengeOutcome1Input.addEventListener('change', updateTemplate);
challengeOutcome2Input.addEventListener('change', updateTemplate);
taglineInput.addEventListener('change', updateTemplate);