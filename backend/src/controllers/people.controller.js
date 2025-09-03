 import supabaseAdmin from '../config/supabaseAdmin.js';

export const getPeople = async (req, res) => {
  try {
    const { q, batch, page = 1, limit = 12 } = req.query;
    const start = (Number(page) - 1) * Number(limit);
    const end = start + Number(limit) - 1;

    let query = supabaseAdmin
      .from('people')
      .select('*', { count: 'exact' });

    if (batch) query = query.eq('batch', batch);
    if (q) query = query.ilike('name', `%${q}%`);

    const { data, error, count } = await query.order('name', { ascending: true }).range(start, end);
    if (error) return res.status(500).json({ error: error.message });

    res.json({ data, count, page: Number(page), limit: Number(limit) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
