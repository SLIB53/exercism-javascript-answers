function isValidTriangle(s1, s2, s3) {
  const sidesSorted = [s1, s2, s3].sort((a, b) => a - b);

  return (
    sidesSorted[0] > 0 && sidesSorted[0] + sidesSorted[1] >= sidesSorted[2]
  );
}

function classifyTriangle(s1, s2, s3) {
  const sidesSorted = [s1, s2, s3].sort((a, b) => a - b);

  if (sidesSorted[0] === sidesSorted[2]) {
    return "equilateral";
  } else if (
    sidesSorted[0] === sidesSorted[1] ||
    sidesSorted[1] === sidesSorted[2]
  ) {
    return "isosceles";
  } else {
    return "scalene";
  }
}

export class Triangle {
  constructor(s1, s2, s3) {
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
  }

  kind() {
    if (!isValidTriangle(this.s1, this.s2, this.s3)) {
      throw "invalid triangle";
    }

    return classifyTriangle(this.s1, this.s2, this.s3);
  }
}
