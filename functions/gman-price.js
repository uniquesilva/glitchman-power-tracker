export async function handler(event, context) {
  const API_KEY = "5c719b824a15492c9e57dd20d16f7663";
  const MINT = "4DZixssE39u5dDKv9iGavAc755MnMR957dzaSSwLNYax";

  try {
    const res = await fetch(`https://public-api.birdeye.so/public/price?address=${MINT}`, {
      headers: {
        "X-API-KEY": API_KEY
      }
    });
    const data = await res.json();
    return {
      statusCode: 200,
      body: JSON.stringify({ price: data.data?.value || 0 })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch price" })
    };
  }
}
