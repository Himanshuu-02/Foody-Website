// export default async function handler(req, res) {
//   const fetch = (await import('node-fetch')).default;

//   // Remove '/api/swiggy' from path and keep rest
//   const apiPath = req.url.replace('/api/swiggy', '');
//   const targetUrl = `https://www.swiggy.com${apiPath}`;

//   try {
//     const response = await fetch(targetUrl, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     const data = await response.text(); // Swiggy API returns text (not always JSON)

//     // ✅ Fix CORS
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Content-Type', 'application/json');

//     res.status(response.status).send(data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }
