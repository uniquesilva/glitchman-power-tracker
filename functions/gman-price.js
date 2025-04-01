export default async (req, res) => {
  try {
    const response = await fetch('https://public-api.birdeye.so/defi/token_overview?address=4DZixssE39u5dDKv9iGavAc755MnMR957dzaSSwLNYax', {
      headers: {
        'X-API-KEY': process.env.BIRDEYE_API_KEY
      }
    });

    const data = await response.json();
    const price = data.data?.price || 0;

    res.status(200).json({ price });
  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ price: 0 });
  }
};
