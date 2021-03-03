'use strict';

class CategoryModel {
  constructor() {
    this.id = 0;
    this.db = [];
  }

  //Read will return as many items we want from the database
  get(id) {
    if (id) {
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  //This will create items in the db

  create(obj) {
    let record = {
      id: ++this.id,
      record: obj
    }
    console.log(obj);
    this.db.push(record);
    return record;
  }

  update(id, obj) {
    if (id) {
      return obj
    }
  }

  delete(id) {
    console.log(typeof id);
    if (id) {
      const deleteThis = this.db.filter(item => {
        console.log(typeof id, typeof item.id);
        return item.id !== id
      });
      this.db = deleteThis;
      console.log(deleteThis);
      return null;
    }
  }
}

module.exports = CategoryModel;
