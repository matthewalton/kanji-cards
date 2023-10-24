import mysql from "mysql2/promise";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const connection = await mysql.createConnection({
      host: "127.0.0.1",
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_ROOT_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    try {
      const searchParams = request.nextUrl.searchParams;
      const limit = searchParams.get("limit");
      const excludeIds = searchParams.get("excludeIds");

      let query = "SELECT * FROM characters";

      if (excludeIds) {
        const excludedIds = excludeIds.split(",").map((id) => parseInt(id));
        query += ` WHERE id NOT IN (${excludedIds.join(",")})`;
      }

      if (limit) {
        query += ` ORDER BY RAND() LIMIT ${parseInt(limit)}`;
      }

      const [results] = await connection.execute(query);

      await connection.end();

      return Response.json({ cards: results });
    } catch (error) {
      console.error("Error executing the query:", error);
      await connection.end();
      throw error;
    }
  } catch (error) {
    console.error("Error connecting to the database:", error);
    return Response.json({ error: error }, { status: 500 });
  }
}
