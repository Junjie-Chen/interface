const vehicle = {
  type: 'car',
  year: 2020,
  broken: true,
  summary(): string {
    return `
      Type: ${this.type}
      Year: ${this.year}
      Broken: ${this.broken}
    `;
  }
};

const drink = {
  color: 'brown',
  sugar: 40,
  carbonated: true,
  summary(): string {
    return `
      Color: ${this.color}
      Sugar: ${this.sugar}
      Carbonated: ${this.carbonated}
    `;
  }
};
