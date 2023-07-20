const AbstractManager = require("./AbstractManager");

class ToolsProjectManager extends AbstractManager {
  constructor() {
    super({ table: "tools_project" });
  }

  findByProjectId(id) {
    return this.database.query(
      `select tool_id from  ${this.table} where project_id = ?`,
      [id]
    );
  }

  insert(data) {
    return this.database.query(
      `insert into ${this.table} (project_id, tool_id) values (?, ?)`,
      [data.project_id, data.tool_id]
    );
  }

  update(tool) {
    return this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [tool.name, tool.id]
    );
  }

  deleteByTool(id) {
    return this.database.query(`delete from ${this.table} where tool_id = ?`, [
      id,
    ]);
  }

  deleteByProject(id) {
    return this.database.query(
      `delete from ${this.table} where project_id = ?`,
      [id]
    );
  }
}

module.exports = ToolsProjectManager;
