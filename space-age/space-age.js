const roundHundredths = number => Math.round(number * 100) / 100;

const ageConverter = orbitPeriodSeconds => ageSeconds =>
  ageSeconds / orbitPeriodSeconds;

const mercuryAgeConverter = () => ageConverter(7600543.81992);

const venusAgeConverter = () => ageConverter(19414149.052176);

const earthAgeConverter = () => ageConverter(31557600);

const marsAgeConverter = () => ageConverter(59354032.690079994);

const jupiterAgeConverter = () => ageConverter(374355659.124);

const saturnAgeConverter = () => ageConverter(929292362.8848);

const uranusAgeConverter = () => ageConverter(2651370019.3296);

const neptuneAgeConverter = () => ageConverter(5200418560.032001);

const convertersByPlanetName = {
  mercury: mercuryAgeConverter(),
  venus: venusAgeConverter(),
  earth: earthAgeConverter(),
  mars: marsAgeConverter(),
  jupiter: jupiterAgeConverter(),
  saturn: saturnAgeConverter(),
  uranus: uranusAgeConverter(),
  neptune: neptuneAgeConverter()
};

const findAgeConverter = planetName => convertersByPlanetName[planetName];

export const age = (planetName, ageSeconds) =>
  roundHundredths(findAgeConverter(planetName)(ageSeconds));
