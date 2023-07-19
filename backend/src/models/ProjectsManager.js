const AbstractManager = require("./AbstractManager");

class ProjectsManager extends AbstractManager {
  constructor() {
    super({ table: "projects" });
  }

  findPublic() {
    return this.database.query(
      `select * from  ${this.table} where is_Public = ?`,
      [1]
    );
  }

  insert(product) {
    return this.database.query(
      `insert into ${this.table} (title, image, link, description) values (?, ?, ?, ?)`,
      [product.title]
    );
  }

  update(item) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ProjectsManager;
