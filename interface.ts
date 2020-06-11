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
