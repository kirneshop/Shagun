/* ============================================================
   SHAGUN (शगुन) - Central State Management & Reactive Store
   Persists across all pages (Landing, Wedding, Dashboard, Create)
   ============================================================ */

const SHAGUN_STORAGE_KEY = 'shagun_app_data_v2';

// Default Seed Data: Pradyut & Jigyasa Wedding in Puri, Odisha
const DEFAULT_WEDDING_DATA = {
  couples: {
    'pradyut-jigyasa': {
      id: 'pradyut-jigyasa',
      groom: 'Pradyut',
      bride: 'Jigyasa',
      slug: 'pradyut-jigyasa',
      weddingDate: '2027-01-18',
      weddingTime: '16:00',
      venue: {
        name: 'Mayfair Heritage Beach Resort',
        city: 'Puri',
        state: 'Odisha',
        address: 'Chakratirtha Road, Puri Sea Beach, Puri, Odisha 752002',
        mapUrl: 'https://maps.google.com/?q=Mayfair+Heritage+Puri+Odisha'
      },
      tagline: 'Don\'t just celebrate our beginning. Be a part of our dreams.',
      story: 'We met at NIT Rourkela in 2021 over a cup of tapri chai during the college tech festival. 5 years of love, growth, cross-city flights, and countless beach walks later, we are taking our next big step under the holy sky of Puri.',
      upi: {
        id: 'pradyut.jigyasa@oksbi',
        name: 'Pradyut and Jigyasa Wedding Fund'
      },
      goals: [
        {
          id: 'goal-1',
          title: 'European Honeymoon',
          emoji: '🌍',
          category: 'Travel & Memories',
          desc: '14 days across Paris, the Swiss Alps glacier train, and Rome’s historic alleys. A dream trip we have planned since college.',
          target: 350000,
          raised: 185000,
          contributorsCount: 9,
          active: true
        },
        {
          id: 'goal-2',
          title: 'Dream Home Down Payment',
          emoji: '🏠',
          category: 'Lifelong Nest',
          desc: 'Helping us lay the foundation for our very first 2BHK home in Bangalore. The most enduring gift to build our future under one roof.',
          target: 1000000,
          raised: 420000,
          contributorsCount: 6,
          active: true
        },
        {
          id: 'goal-3',
          title: 'First Car Together',
          emoji: '🚗',
          category: 'Adventures',
          desc: 'For weekend road trips to coastal Odisha, late night city drives, and road trips with our favorite indie music playlist.',
          target: 600000,
          raised: 210000,
          contributorsCount: 4,
          active: true
        },
        {
          id: 'goal-4',
          title: 'Cinematic Wedding Film',
          emoji: '📸',
          category: 'Memories',
          desc: 'Documentary style film preserving the pheras, tears, joy, laughter, and family dances so we can relive this forever.',
          target: 80000,
          raised: 65000,
          contributorsCount: 3,
          active: true
        },
        {
          id: 'goal-5',
          title: 'Kitchen & Smart Living Setup',
          emoji: '🍳',
          category: 'Home & Living',
          desc: 'An espresso machine for Pradyut, cast iron cookware for Jigyasa, and smart kitchen essentials to cook wholesome dinners.',
          target: 150000,
          raised: 95000,
          contributorsCount: 5,
          active: true
        }
      ],
      contributions: [
        {
          id: 'tx-1',
          name: 'Rahul Verma',
          amount: 5001,
          goalId: 'goal-1',
          goalTitle: 'European Honeymoon',
          message: 'Enjoy Paris for me too bro! Can’t wait to see your Eiffel Tower selfie! Have the best life ahead Pradyut & Jigyasa! 🗼❤️',
          date: '2026-11-15T14:32:00Z',
          relationship: 'College Friend',
          paymentMode: 'UPI (GPay)'
        },
        {
          id: 'tx-2',
          name: 'Sneha Kapoor',
          amount: 10001,
          goalId: 'goal-2',
          goalTitle: 'Dream Home Down Payment',
          message: 'Here is a brick for your future dream home in Bangalore! Saving up for the housewarming party! 🏡🥂',
          date: '2026-11-15T18:45:00Z',
          relationship: 'Best Friend',
          paymentMode: 'UPI (PhonePe)'
        },
        {
          id: 'tx-3',
          name: 'Amit Sharma (NIT Gang)',
          amount: 3101,
          goalId: 'goal-3',
          goalTitle: 'First Car Together',
          message: 'Car road trips are non-negotiable! First drive to Goa is on you guys. God bless you both! 🚗💨',
          date: '2026-11-16T09:12:00Z',
          relationship: 'NIT Rourkela',
          paymentMode: 'UPI (Paytm)'
        },
        {
          id: 'tx-4',
          name: 'Priya Das',
          amount: 8001,
          goalId: 'goal-1',
          goalTitle: 'European Honeymoon',
          message: 'Jigyasa, you are going to be the most gorgeous bride! May your European honeymoon be straight out of a fairytale! ✈️✨',
          date: '2026-11-16T15:20:00Z',
          relationship: 'School Friend',
          paymentMode: 'UPI (GPay)'
        },
        {
          id: 'tx-5',
          name: 'Vikram Singh Uncle & Family',
          amount: 15001,
          goalId: 'goal-2',
          goalTitle: 'Dream Home Down Payment',
          message: 'Aashirvaad and best wishes from Delhi. Truly happy to support your new nest. Sada khush raho! 🙏',
          date: '2026-11-17T11:05:00Z',
          relationship: 'Family Elder',
          paymentMode: 'Net Banking'
        },
        {
          id: 'tx-6',
          name: 'Neha Gupta',
          amount: 2101,
          goalId: 'goal-5',
          goalTitle: 'Kitchen & Smart Living Setup',
          message: 'Cook up a storm together! Pradyut, don’t leave all the dishwashing to Jigyasa though 😉🍲',
          date: '2026-11-17T17:40:00Z',
          relationship: 'Colleague',
          paymentMode: 'UPI (Cred)'
        }
      ],
      rsvps: [
        { id: 'rsvp-1', name: 'Rohan Mehra', email: 'rohan@example.com', attendance: 'attending', guests: 2, meal: 'Non-Vegetarian', events: ['All Ceremonies'], note: 'Cannot wait for the beach wedding!' },
        { id: 'rsvp-2', name: 'Ananya Sen', email: 'ananya@example.com', attendance: 'attending', guests: 1, meal: 'Vegetarian', events: ['Vivah', 'Reception'], note: 'So happy for you both!' },
        { id: 'rsvp-3', name: 'Kunal Patil', email: 'kunal@example.com', attendance: 'declined', guests: 0, meal: 'None', events: [], note: 'Sending my shagun digitally! Heartiest congrats!' }
      ],
      stats: {
        pageViews: 1247,
        shares: 89,
        createdDate: '2026-11-01'
      }
    }
  },
  activeCoupleId: 'pradyut-jigyasa'
};

class ShagunStore {
  constructor() {
    this.data = this.loadData();
  }

  loadData() {
    try {
      const stored = localStorage.getItem(SHAGUN_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Could not read from localStorage, using seed data', e);
    }
    // Pre-seed
    this.saveData(DEFAULT_WEDDING_DATA);
    return JSON.parse(JSON.stringify(DEFAULT_WEDDING_DATA));
  }

  saveData(data) {
    try {
      localStorage.setItem(SHAGUN_STORAGE_KEY, JSON.stringify(data));
      this.data = data;
      // Dispatch custom event for real-time reactive sync across components/windows
      window.dispatchEvent(new CustomEvent('shagun-store-updated', { detail: data }));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }

  getActiveCoupleId() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramId = urlParams.get('id') || urlParams.get('couple');
    if (paramId && this.data.couples[paramId]) {
      return paramId;
    }
    return this.data.activeCoupleId || 'pradyut-jigyasa';
  }

  getWedding(id = null) {
    const coupleId = id || this.getActiveCoupleId();
    if (!this.data.couples[coupleId]) {
      return this.data.couples['pradyut-jigyasa'];
    }
    return this.data.couples[coupleId];
  }

  getAllWeddings() {
    return Object.values(this.data.couples);
  }

  saveWedding(weddingData) {
    const slug = weddingData.slug || `${weddingData.groom.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${weddingData.bride.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
    weddingData.id = slug;
    weddingData.slug = slug;
    
    if (!weddingData.contributions) weddingData.contributions = [];
    if (!weddingData.rsvps) weddingData.rsvps = [];
    if (!weddingData.stats) weddingData.stats = { pageViews: 1, shares: 0, createdDate: new Date().toISOString() };
    
    this.data.couples[slug] = weddingData;
    this.data.activeCoupleId = slug;
    this.saveData(this.data);
    return weddingData;
  }

  addContribution(coupleId, { name, amount, goalId, message, relationship = 'Friend', paymentMode = 'UPI' }) {
    const wedding = this.getWedding(coupleId);
    if (!wedding) return null;

    const goal = wedding.goals.find(g => g.id === goalId || g.title === goalId);
    const goalTitle = goal ? goal.title : 'General Dream Fund';

    const newTx = {
      id: 'tx-' + Date.now(),
      name: name || 'A Generous Well-Wisher',
      amount: parseInt(amount, 10),
      goalId: goal ? goal.id : 'goal-general',
      goalTitle: goalTitle,
      message: message || 'Wishing you a blissful and adventurous married life together!',
      date: new Date().toISOString(),
      relationship: relationship,
      paymentMode: paymentMode
    };

    // Update goal metrics
    if (goal) {
      goal.raised = (goal.raised || 0) + newTx.amount;
      goal.contributorsCount = (goal.contributorsCount || 0) + 1;
    }

    // Add to list
    wedding.contributions.unshift(newTx);
    this.saveData(this.data);
    return newTx;
  }

  addRSVP(coupleId, rsvpData) {
    const wedding = this.getWedding(coupleId);
    if (!wedding) return null;

    const newRsvp = {
      id: 'rsvp-' + Date.now(),
      name: rsvpData.name,
      email: rsvpData.email || '',
      phone: rsvpData.phone || '',
      attendance: rsvpData.attendance || 'attending',
      guests: parseInt(rsvpData.guests || 1, 10),
      meal: rsvpData.meal || 'Vegetarian',
      events: rsvpData.events || ['All Ceremonies'],
      note: rsvpData.note || '',
      date: new Date().toISOString()
    };

    wedding.rsvps.unshift(newRsvp);
    this.saveData(this.data);
    return newRsvp;
  }

  getMetrics(coupleId = null) {
    const wedding = this.getWedding(coupleId);
    if (!wedding) return { totalRaised: 0, totalTarget: 0, percent: 0, contributorsCount: 0, rsvpCount: 0 };

    const totalRaised = wedding.contributions.reduce((acc, c) => acc + (c.amount || 0), 0);
    const totalTarget = wedding.goals.reduce((acc, g) => acc + (g.target || 0), 0);
    const percent = totalTarget > 0 ? Math.min(Math.round((totalRaised / totalTarget) * 100), 100) : 0;
    const contributorsCount = wedding.contributions.length;
    const rsvpConfirmed = wedding.rsvps.filter(r => r.attendance === 'attending').reduce((acc, r) => acc + r.guests, 0);

    return {
      totalRaised,
      totalTarget,
      percent,
      contributorsCount,
      rsvpConfirmed,
      goalsCount: wedding.goals.length,
      pageViews: wedding.stats ? wedding.stats.pageViews : 1247
    };
  }

  incrementView(coupleId = null) {
    const wedding = this.getWedding(coupleId);
    if (wedding && wedding.stats) {
      wedding.stats.pageViews = (wedding.stats.pageViews || 0) + 1;
      this.saveData(this.data);
    }
  }

  resetToDefaults() {
    this.saveData(JSON.parse(JSON.stringify(DEFAULT_WEDDING_DATA)));
    return true;
  }
}

// Global Singleton Instance
window.shagunStore = new ShagunStore();
