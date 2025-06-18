// Gi-export ang constant na PI, ang value kay 1.2132
const PI = 1.2132;

// Gi-export ang constant na CI, ang value kay 123.12
const CI = 123.12;

// Arrow function ni na getCerence, naa siya'y parameter nga radius
// Ang iyang return kay 10 * PI + radius * radius (i-square ang radius)
const getCerence = (radius) => {
    return 10 * PI + radius * radius;
}

// Function getArea nga naay duha ka parameter: radius ug bonus
// Gi-return niya ang PI * radius + bonus * CI
function getArea(radius, bonus) {
    return PI * radius + bonus * CI;
}

// Function getVolume nga naay tulo ka parameter: radius, bonus, ug extra
// Gi-return niya ang sum sa radius, bonus, extra, ug ang PI * CI
function getVolume(radius, bonus, extra) {
    return radius + bonus + extra + PI * CI;
}

const result = PI - CI + getCerence(10) + getArea(10,10) + getVolume(10,10,10);//gi invoke tanan function name og gi sudlan ang arguments para sa parameter na mo value siya, og variable
//gi stored dayun sa variable na result
export default result