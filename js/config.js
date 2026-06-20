/* 
 * CUSTOMIZATION:
 *   - Replace empty strings with paths to your assets.
 *   - Supported formats for backgrounds: .gif, .mp4, .jpg, .png, .webp
 *   - Supported formats for images: .png, .gif, .webp, .svg
 *   - Supported formats for audio: .mp3, .ogg, .wav (or leave empty for Web Audio synth)
 *
 * ASSET LOCATIONS:
 *   Place files in /assets/images/, /assets/gifs/, /assets/audio/, /assets/icons/
 * ============================================================ */

const CONFIG = {

  /*GENERAL*/
  title: "OSDHACK'26",
  subtitle: "THE ARCADE HACKATHON",
  tagline: "CODE · BUILD · DEVOUR",

  
  logo: "assets/images/main.png",

 
  mascotImage: "",
  loadingBackground: "",
  startBackground: "assets/images/bg_start.png",
  menuBackground: "",

  /*AUDIO 
   */
  startupSound: "",
  hoverSound: "",
  selectSound: "",
  ambientSound: "assets/audio/bg_theme.mp3",


  pizzaSprite: "",

  /* ---- TIMINGS (milliseconds) ---- */
  timings: {
    crtBootDuration: 2200,      // CRT power-on animation length
    loadingDuration: 4500,      // Loading bar fill time
    factRotateInterval: 2000,   // Time between pizza fact changes
    menuRotationSpeed: 45,      // Seconds per full ring rotation
    screenTransition: 600,      // Transition between screens
  },

  /* ---- COLORS ---- */
  colors: {
    primary: '#FFD700',         // Gold/Yellow — main accent
    secondary: '#FF8C00',       // Orange — secondary accent
    danger: '#CC4400',          // Deep red — shadow/danger
    neonCyan: '#00e5ff',        // Cyan — tech/info accent
    neonGreen: '#39ff14',       // Green — success/terminal
    neonPink: '#e040fb',        // Pink — highlight
    neonOrange: '#ff6e40',      // Orange — warm accent
    neonPurple: '#b388ff',      // Purple — sponsor/special
    screenBg: '#0a0e1a',       // Deep blue-black — monitor interior
    bezelColor: '#1a1a2e',     // Monitor bezel
    textDim: 'rgba(224, 208, 255, 0.4)',
  },

  menuItems: [
    { id: 'about', label: 'ABOUT', icon: '📖', color: '#39ff14' },
    { id: 'tracks', label: 'TRACKS', icon: '🏁', color: '#39ff14' },
    { id: 'rules', label: 'RULES', icon: '📋', color: '#39ff14' },
    { id: 'sponsole', label: 'SPONSOLE', icon: '📅', color: '#39ff14' },
    { id: 'prizes', label: 'PRIZES', icon: '🏆', color: '#39ff14' },
    { id: 'team', label: 'TEAM', icon: '👥', color: '#39ff14' },
    { id: 'topics', label: 'TOPICS', icon: '💡', color: '#39ff14' },
    { id: 'faq', label: 'FAQ', icon: '❓', color: '#39ff14' },
  ],

  
  pizzaFacts: [
    "Pineapple pizza causes merge conflicts.",
    "Never deploy hungry.",
    "Production bugs love cold pizza.",
  ]
};
