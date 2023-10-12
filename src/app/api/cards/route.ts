import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET(request: Request) {
  try {
    // Create a connection to your MySQL database
    const connection = await mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: process.env.MYSQL_ROOT_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    try {
      const query = "SELECT * FROM characters";

      const [results] = await connection.execute(query);

      await connection.end();

      return NextResponse.json({ cards: results });
    } catch (error) {
      // Handle query-specific errors here
      console.error("Error executing the query:", error);
      await connection.end(); // Close the connection before rethrowing the error
      throw error; // Rethrow the error for global error handling
    }
  } catch (error) {
    // Handle connection errors here
    console.error("Error connecting to the database:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
