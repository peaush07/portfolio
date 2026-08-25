// Vercel Serverless Function: Health Check & System Status
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const uptime = process.uptime();
  const memoryUsage = process.memoryUsage();

  return res.status(200).json({
    status: 'ok',
    service: 'Peaush Paul Backend API',
    developer: 'Peaush Paul (@peaush07)',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'production',
    system: {
      uptimeSeconds: Math.floor(uptime),
      memoryUsedMB: (memoryUsage.heapUsed / 1024 / 1024).toFixed(2)
    }
  });
}
