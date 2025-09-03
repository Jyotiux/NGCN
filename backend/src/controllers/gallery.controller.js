import supabaseAdmin from '../config/supabaseAdmin.js';

export const getGallery = async (req, res) => {
  try {
    // list objects in folder 'gallery' (top-level)
    const { data, error } = await supabaseAdmin.storage.from('ngcn-assets').list('gallery', { limit: 100 });
    if (error) return res.status(500).json({ error: error.message });

    // build public urls (if bucket public)
    const urls = data.map(item => {
      const { publicUrl } = supabaseAdmin.storage.from('ngcn-assets').getPublicUrl(`gallery/${item.name}`);
      return { name: item.name, url: publicUrl };
    });
    res.json({ data: urls });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
