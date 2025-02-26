'use strict';

import mongoose from 'mongoose';
import explainData from '../../InitData/explain';

const Schema = mongoose.Schema;

const explainSchema = new Schema({
  data: Schema.Types.Mixed,
});

const Explain = mongoose.model('Explain', explainSchema);

// Explain.findOne((err, data) => {
//   if (!data) {
//     Explain.create({ data: explainData });
//   }
// });

async function findOne() {
  try {
    const data = await Explain.findOne();
    if (!data) {
      Explain.create({ data: explainData });
    }
  } catch (error) {
    console.log('Explain.findOne::', error);
  }
}
findOne();

export default Explain;
