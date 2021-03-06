// Page Sections query-form template info
const queryFormDiv = document.querySelector('.query-form');
const templateDiv = document.querySelector('.template');
const infoDiv = document.querySelector('.info');
const form = document.querySelector('.form');

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
const titleInput = document.getElementById('title-input');
const wordCountInput = document.getElementById('word-count-input');
const genreInput = document.getElementById('genre-input');
const settingInput = document.getElementById('setting-input');
const categoryInput = document.getElementById('category-input');
const compTitle1Input = document.getElementById('comp-title-1-input');
const compTitle2Input = document.getElementById('comp-title-2-input');
const sequelInput = document.getElementById('sequel-input');
const authorNameInput = document.getElementById('author-name-input');
const penNameInput = document.getElementById('pen-name-input');
const qualifications1Input = document.getElementById('qualifications-1-input');
const qualifications2Input = document.getElementById('qualifications-2-input');
const personalDetails1Input = document.getElementById('personal-details-1-input');
const personalDetails2Input = document.getElementById('personal-details-2-input');
const agentNameInput = document.getElementById('agent-name-input');
const honorificInput = document.getElementById('honorific-input');
const agentPersonalizationInput = document.getElementById('agent-personalization-input');

const submitButton = document.getElementById('submit-button');

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
const titleTemplates = [...document.querySelectorAll('.title-template')];
const wordCountTemplate = document.getElementById('word-count-template');
const genreTemplate = document.getElementById('genre-template');
const settingTemplate = document.getElementById('setting-template');
const categoryTemplate = document.getElementById('category-template');
const compTitle1Template = document.getElementById('comp-title-1-template');
const compTitle2Template = document.getElementById('comp-title-2-template');
const sequelTemplate = document.getElementById('sequel-template');
const authorNameTemplate = document.getElementById('author-name-template');
const penNameTemplate = document.getElementById('pen-name-template');
const qualifications1Template = document.getElementById('qualifications-1-template');
const qualifications2Template = document.getElementById('qualifications-2-template');
const personalDetails1Template = document.getElementById('personal-details-1-template');
const personalDetails2Template = document.getElementById('personal-details-2-template');
const agentNameTemplate = document.getElementById('agent-name-template');
const honorificTemplate = document.getElementById('honorific-template');
const agentPersonalizationTemplate = document.getElementById('agent-personalization-template');

function updateTemplate(e) {
  e.preventDefault();

  window.scrollTo(0,0);

  queryFormDiv.style.display = 'none';
  templateDiv.style.display = 'block';
  infoDiv.style.display = 'block';

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
  titleTemplates.forEach(template => template.innerText = titleInput.value);
  wordCountTemplate.innerText = wordCountInput.value;
  genreTemplate.innerText = genreInput.value;
  settingTemplate.innerText = settingInput.value;
  categoryTemplate.innerText = categoryInput.value;
  compTitle1Template.innerText = compTitle1Input.value;
  compTitle2Template.innerText = compTitle2Input.value;
  sequelTemplate.innerText = sequelInput.value;
  authorNameTemplate.innerText = authorNameInput.value;
  penNameTemplate.innerText = penNameInput.value;
  qualifications1Template.innerText = qualifications1Input.value;
  qualifications2Template.innerText = qualifications2Input.value;
  personalDetails1Template.innerText = personalDetails1Input.value;
  personalDetails2Template.innerText = personalDetails2Input.value;
  agentNameTemplate.innerText = agentNameInput.value;
  honorificTemplate.innerText = honorificInput.value;
  agentPersonalizationTemplate.innerText = agentPersonalizationInput.value;
}

submitButton.addEventListener('click', updateTemplate);
form.addEventListener('keypress', e => {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
})