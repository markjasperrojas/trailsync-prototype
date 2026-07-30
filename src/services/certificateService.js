let generated = false
export const hasGeneratedCertificate = () => generated
export const generateCertificate = () => { generated = true }

export function downloadCertificate() {
  const documentHtml = `<!doctype html><html><head><meta charset="utf-8"><title>TrailSync Trek Certificate</title><style>body{margin:0;display:grid;min-height:100vh;place-items:center;background:#f8f7f2;font-family:system-ui;color:#173b27}.certificate{width:760px;padding:72px;border:12px solid #347a51;text-align:center;background:#fff}.eyebrow{letter-spacing:.16em;text-transform:uppercase;font-size:12px;color:#347a51}.name{font:52px Georgia,serif;margin:30px 0}.trail{font:28px Georgia,serif}.footer{margin-top:55px;color:#53615a}</style></head><body><section class="certificate"><p class="eyebrow">TrailSync certificate of completion</p><h1>Maria Santos</h1><p>has successfully completed</p><p class="trail">Mount Pulag Sunrise Trek</p><p>August 10, 2026</p><p class="footer">Issued by TrailSync · Trek safely, explore deeply.</p></section></body></html>`
  const url = URL.createObjectURL(new Blob([documentHtml], { type: 'text/html' }))
  const link = document.createElement('a')
  link.href = url
  link.download = 'trailsync-mount-pulag-certificate.html'
  link.click()
  URL.revokeObjectURL(url)
}
