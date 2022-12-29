const consentPopup = document.getElementById('consent-popup');
const consentIcon = document.getElementById('consent-icon');
const menuButton_personalization = document.getElementById(
  'consent-popup__menu__personalization'
);
const menuButton_settings = document.getElementById(
  'consent-popup__menu__settings'
);
const content_personalization = document.getElementById(
  'consent-popup__personalization'
);
const content_settings = document.getElementById('consent-popup__settings');
const unpersonalizedLayout = document.getElementById('unpersonalized');
const personalizedLayout = document.getElementById('personalized');

const toggleSwitches = document.getElementById('toggle-switches');
const preferencesToggle = document.getElementById('preferences');
const recommendationsToggle = document.getElementById('recommendations');
const statisticsToggle = document.getElementById('statistics');

const acceptButton = document.getElementById('accept');
const settingsButton = document.getElementById('settings');
const rejectButton = document.getElementById('reject');

acceptButton.addEventListener('click', () => {
  closePopup();

  if (
    !preferencesToggle.checked &&
    !recommendationsToggle.checked &&
    !statisticsToggle.checked
  ) {
    addColor();
    addRecommendations();
    statisticsToggle.checked = true;
  }

  if (statisticsToggle.checked) {
    const settingsOn = statisticsToggle.checked;
    if (settingsOn) {
      console.log(' ͡° ͜ʖ ͡°');
    }
  }
});

rejectButton.addEventListener('click', () => {
  closePopup();
  removeColor();
  removeRecommendations();
  statisticsToggle.checked = false;
});

consentIcon.addEventListener('click', () => {
  openPersonalization();
  openPopup();
});

menuButton_personalization.addEventListener('click', () => {
  openPersonalization();
});

menuButton_settings.addEventListener('click', () => {
  openSettings();
});

settingsButton.addEventListener('click', () => {
  openSettings();
});

preferencesToggle.addEventListener('click', (e) => {
  const preferencesOn = e.target.checked;
  if (preferencesOn) {
    addColor();
  } else {
    removeColor();
  }
});

recommendationsToggle.addEventListener('click', (e) => {
  const recommendationsOn = e.target.checked;
  if (recommendationsOn) {
    addRecommendations();
  } else {
    removeRecommendations();
  }
});

toggleSwitches.addEventListener('click', () => {
  updateAcceptMessage();
});

const updateAcceptMessage = () => {
  if (
    !preferencesToggle.checked &&
    !recommendationsToggle.checked &&
    !statisticsToggle.checked
  ) {
    acceptButton.innerHTML = 'Accept All';
  } else if (
    preferencesToggle.checked &&
    recommendationsToggle.checked &&
    statisticsToggle.checked
  ) {
    acceptButton.innerHTML = 'Accept All';
  } else {
    acceptButton.innerHTML = 'Accept Selected';
  }
};

const openPersonalization = () => {
  menuButton_personalization.classList.add('active');
  menuButton_settings.classList.remove('active');
  content_personalization.classList.remove('hidden');
  content_settings.classList.add('hidden');
};

const openSettings = () => {
  menuButton_personalization.classList.remove('active');
  menuButton_settings.classList.add('active');
  content_personalization.classList.add('hidden');
  content_settings.classList.remove('hidden');
};

const closePopup = () => {
  consentPopup.classList.add('hidden');
  consentIcon.classList.remove('hidden');
};

const openPopup = () => {
  consentPopup.classList.remove('hidden');
  consentIcon.classList.add('hidden');
};

const addColor = () => {
  preferencesToggle.checked = true;

  setColorVariables();
  changeTermColors();
};

const removeColor = () => {
  preferencesToggle.checked = false;

  const greyValue = '#e2e2e2';
  // const greyValue = '#707070';
  setColorVariables(greyValue);
  changeTermColors(greyValue);
};

const addRecommendations = () => {
  recommendationsToggle.checked = true;

  unpersonalizedLayout.classList.add('hidden');
  personalizedLayout.classList.remove('hidden');
};

const removeRecommendations = () => {
  recommendationsToggle.checked = false;

  unpersonalizedLayout.classList.remove('hidden');
  personalizedLayout.classList.add('hidden');
};

const setColorVariables = (color) => {
  document.documentElement.style.setProperty(
    '--primaryColor',
    color ?? primaryColor
  );

  const textColorVariable = pickTextColorBasedOnBgColor(primaryColor);
  const oppositeTextColorVariable =
    textColorVariable === 'white' ? 'black' : 'white';

  document.documentElement.style.setProperty(
    '--primaryTextColor',
    textColorVariable
  );
  document.documentElement.style.setProperty(
    '--primaryTextColorOpposite',
    oppositeTextColorVariable
  );
};

setColorVariables();
