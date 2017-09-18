'use strict';

module.exports = () => {

  class home {

    async index(args) {
      return `${args}, Hello Bucket!`;
    }

  }
  return new home();
};
