'use strict';

import mongoose from 'mongoose';
import remarkData from '../../InitData/remark';
const Schema = mongoose.Schema;

const remarkSchema = new Schema({
  remarks: [],
});

const Remark = mongoose.model('Remark', remarkSchema);

// Remark.findOne((err, data) => {
// 	if(!data){
// 		Remark.create(remarkData)
// 	}
// })

async function findOne() {
  try {
    const data = await Remark.findOne();
    if (!data) {
      Remark.create(remarkData);
    }
  } catch (error) {
    console.log('Explain.findOne::', error);
  }
}
findOne();

export default Remark;
