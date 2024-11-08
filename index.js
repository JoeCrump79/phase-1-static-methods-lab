class Formatter {
  // Static method to capitalize the first letter of a string
  static capitalize(str) {
    return str.slice(0,1).toUpperCase() + str.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  // Capitalizes all words in a sentence except certain small words
  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = string.split(' ');

    return words
      .map((word, index) => {
        if (index === 0 || !exceptions.includes(word.toLowerCase())) {
          return this.capitalize(word);
        }
        return word;
      })
      .join(' ');
  }
}