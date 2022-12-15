document.documentElement.style.setProperty('--primaryColor', primaryColor);

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

const cookieBanner = document.getElementById('cookie-banner');
const unpersonalizedLayout = document.getElementById('unpersonalized');
const personalizedLayout = document.getElementById('personalized');
const accept = document.getElementById('accept');
const decline = document.getElementById('decline');

accept.addEventListener('click', () => {
  cookieBanner.classList.add('hidden');
});

decline.addEventListener('click', () => {
  cookieBanner.classList.add('hidden');
  unpersonalizedLayout.classList.remove('hidden');
  personalizedLayout.classList.add('hidden');
});
