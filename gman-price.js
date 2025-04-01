export async function handler() {
  try {
    const res = await fetch("https://public-api.birdeye.so/defi/token_overview?address=4DZixssE39u5dDKv9iGavAc755MnMR957dzaSSwLNYax", {
      headers: {
        "accept": "application/json",
        "x-chain": "solana",
        "x-api-key": process.env.BIRDEYE_API_KEY
      }
    });

    const data = await res.json();
    return {
      statusCode: 200,
      body: JSON.stringify({
        price: data.data.price
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch price" })
    };
  }
}
