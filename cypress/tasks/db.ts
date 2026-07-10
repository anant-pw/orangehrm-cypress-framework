import mysql from "mysql2/promise";

export async function executeQuery(config: any, query: string) {

    const connection = await mysql.createConnection(config);

    const [rows] = await connection.execute(query);

    await connection.end();

    return rows;
}