 import supabaseAdmin from '../config/supabaseAdmin.js';

export const getPublications = async (req, res) => {
  try {
    const { q, year, page = 1, limit = 20 } = req.query;
    const start = (Number(page) - 1) * Number(limit);
    const end = start + Number(limit) - 1;

    let query = supabaseAdmin.from('publications').select('*', { count: 'exact' });
    if (year) query = query.eq('year', Number(year));
    if (q) query = query.ilike('title', `%${q}%`);

    const { data, error, count } = await query.order('year', { ascending: false }).range(start, end);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ data, count, page: Number(page), limit: Number(limit) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
