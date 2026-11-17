/* ============================================================
   SHAGUN (शगुन) - UPI Engine, Audio Synthesizer & Confetti FX
   ============================================================ */

// --- UPI QR & Deep Link Generator ---
const UpiEngine = {
  defaultVpa: 'pradyut.jigyasa@oksbi',
  payeeName: 'Pradyut and Jigyasa Wedding Shagun',

  buildUpiUri(amount, note = 'Wedding Shagun Blessing', vpa = null) {
    const cleanVpa = vpa || this.defaultVpa;
    const cleanNote = encodeURIComponent(note);
    const cleanName = encodeURIComponent(this.payeeName);
    return `upi://pay?pa=${cleanVpa}&pn=${cleanName}&am=${amount}&cu=INR&tn=${cleanNote}`;
  },

  getQrCodeUrl(amount, note = 'Wedding Shagun Blessing', vpa = null) {
    const upiUri = this.buildUpiUri(amount, note, vpa);
    // Uses standard QR Code Generator API with high error correction
    return `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=10&data=${encodeURIComponent(upiUri)}`;
  },

  openApp(appName, amount, note, vpa) {
    const uri = this.buildUpiUri(amount, note, vpa);
    let deepLink = uri;

    switch (appName.toLowerCase()) {
      case 'gpay':
        deepLink = `gpay://upi/pay?pa=${vpa || this.defaultVpa}&pn=${encodeURIComponent(this.payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
        break;
      case 'phonepe':
        deepLink = `phonepe://pay?pa=${vpa || this.defaultVpa}&pn=${encodeURIComponent(this.payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
        break;
      case 'paytm':
        deepLink = `paytmmp://pay?pa=${vpa || this.defaultVpa}&pn=${encodeURIComponent(this.payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
        break;
      default:
        deepLink = uri;
    }

    // Try opening app intent
    window.location.href = deepLink;
  }
};

// --- Web Audio Ambient Shehnai / Sitar Music Synthesizer ---
// Generates soft meditative Indian raga harmonics on the fly (100% offline, zero mp3 lag)
class WeddingAudioPlayer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.interval = null;
    // Raag Yaman / Bhupali scale frequencies (Hz)
    this.scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33];
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playDrone() {
    if (!this.ctx) return;
    // Sa-Pa tanpura drone
    const freqs = [130.81, 196.00, 261.63];
    freqs.forEach(freq => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.015, this.ctx.currentTime);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, this.ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      this.droneOscs = this.droneOscs || [];
      this.droneOscs.push({ osc, gain });
    });
  }

  playNote() {
    if (!this.ctx || !this.isPlaying) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    const note = this.scale[Math.floor(Math.random() * this.scale.length)];
    const duration = 2.0 + Math.random() * 2.0;

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(note, this.ctx.currentTime);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(note * 1.5, this.ctx.currentTime);
    filter.Q.setValueAtTime(3.0, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.035, this.ctx.currentTime + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  toggle() {
    this.init();
    if (!this.ctx) return false;

    if (this.isPlaying) {
      this.isPlaying = false;
      if (this.interval) clearInterval(this.interval);
      if (this.droneOscs) {
        this.droneOscs.forEach(d => {
          d.gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
          setTimeout(() => d.osc.stop(), 500);
        });
        this.droneOscs = [];
      }
      return false;
    } else {
      this.isPlaying = true;
      this.playDrone();
      this.playNote();
      this.interval = setInterval(() => {
        if (Math.random() > 0.3) this.playNote();
      }, 1400);
      return true;
    }
  }
}

// --- Celebratory Canvas Confetti ---
function triggerConfetti() {
  const canvas = document.createElement('canvas');
  canvas.id = 'shagun-confetti-canvas';
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:99999;';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  ctx.scale(dpr, dpr);

  const particles = [];
  const colors = ['#D4A853', '#8B1A2B', '#E8C97A', '#F5E6B8', '#E8A0BF', '#FFD700'];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.4,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.8) * 16,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      opacity: 1
    });
  }

  const startTime = performance.now();
  function draw(now) {
    const elapsed = now - startTime;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.rotation += p.vRot;
      p.opacity = Math.max(0, 1 - elapsed / 2800);

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    });

    if (elapsed < 2800) {
      requestAnimationFrame(draw);
    } else {
      canvas.remove();
    }
  }

  requestAnimationFrame(draw);
}

// Global instances
window.UpiEngine = UpiEngine;
window.weddingAudio = new WeddingAudioPlayer();
window.triggerConfetti = triggerConfetti;
