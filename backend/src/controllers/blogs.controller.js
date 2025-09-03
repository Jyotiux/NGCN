import supabaseAdmin from '../config/supabaseAdmin.js';

export const getBlogs = async (req, res) => {
  try {
    const { q, tag, page = 1, limit = 10 } = req.query;
    const start = (Number(page) - 1) * Number(limit);
    const end = start + Number(limit) - 1;

    let query = supabaseAdmin.from('blogs').select('*, people(name)', { count: 'exact' }).order('publish_date', { ascending: false });

    if (q) query = query.ilike('title', `%${q}%`);
    if (tag) query = query.contains('tags', [tag]);

    const { data, error, count } = await query.range(start, end);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ data, count, page: Number(page), limit: Number(limit) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const { data, error } = await supabaseAdmin.from('blogs').select('*').eq('slug', slug).single();
    if (error) return res.status(404).json({ error: error.message });
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
