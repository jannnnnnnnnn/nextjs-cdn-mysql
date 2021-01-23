import { excuteQuery } from "../../lib/db";

const handler = async (req, res) => {
  const p = {
    query: `
    SELECT * FROM Conferences
    ORDER BY id DESC
    LIMIT 10
    `,
    values: [],
  };
  try {
    const results = await excuteQuery(p);
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
