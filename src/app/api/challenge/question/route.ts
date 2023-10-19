import mysql, { RowDataPacket } from "mysql2/promise";
import questionData from "./questionData.json";
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
      const kanjiId = searchParams.get("kanjiId");

      const query = `SELECT kanji FROM characters where id = ${kanjiId}`;

      const [results] = (await connection.execute(query)) as RowDataPacket[];

      await connection.end();

      if (results.length === 0) {
        throw Error(`No kanji found for the kanji ID: ${kanjiId}`);
      }

      const kanji = results[0].kanji;

      const kanjiQuestion = questionData.find(
        (item: { question: string; answer: string }) => item.answer === kanji
      );

      if (!kanjiQuestion) {
        throw Error(`No question found for the kanji character: ${kanji}`);
      }

      return Response.json({
        question: kanjiQuestion.question,
        answer: kanjiQuestion.answer,
      });
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
