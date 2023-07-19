const AbstractManager = require("./AbstractManager");

class ToolsManager extends AbstractManager {
  constructor() {
    super({ table: "tools" });
  }

  insert(name) {
    return this.database.query(`insert into ${this.table} (name) values (?)`, [
      name,
    ]);
  }

  update(tool) {
    return this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [tool.name, tool.id]
    );
  }
}

module.exports = ToolsManager;
