function getRandom(min, max) {
    if (min >= max) { 
        return null; 
    }

    return Math.floor(Math.random() * (max - min)) + min;
}

getRandom();

function getFractionRandom(min, max, floatNumber = 3) {
        if (min >= max) { 
            return null; 
        }

        const result = Math.random() * (max - min) + min;
        return +result.toFixed(floatNumber);
      }

getFractionRandom();