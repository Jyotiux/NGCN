import supabaseAdmin from '../config/supabaseAdmin.js';

export const getNews = async (req, res) => {
  try {
    const { limit = 5 } = req.query;
    const { data, error } = await supabaseAdmin.from('news').select('*').order('date', { ascending: false }).limit(Number(limit));
    if (error) return res.status(500).json({ error: error.message });
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
