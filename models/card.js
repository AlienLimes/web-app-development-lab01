'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const cardExercise = {

  store: new JsonStore('./models/card.json', { employee: {} }),
  collection: 'employee',
  

  getAppInfo() {
    return this.store.findAll(this.collection);
  },

};

export default cardExercise;