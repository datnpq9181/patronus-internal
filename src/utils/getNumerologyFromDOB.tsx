const getNumerologyFromDOB = (dob: string): number => {
  // Remove any non-digit characters from the date of birth
  const cleanedDOB = dob.replace(/\D/g, "");

  // Calculate the numerology number
  let numerology = 0;
  for (let i = 0; i < cleanedDOB.length; i++) {
    numerology += parseInt(cleanedDOB[i]);
  }

  // Reduce the numerology number to a single digit (1-9) if it's greater than 9
  while (numerology > 9) {
    let sum = 0;
    for (let i = 0; i < numerology.toString().length; i++) {
      sum += parseInt(numerology.toString()[i]);
    }
    numerology = sum;
  }

  return numerology;
};

export default getNumerologyFromDOB;