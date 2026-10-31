const NAVY = "#0b4a5a";

export function BigDolphin({ className }) {
  return (
    <svg className={className} viewBox="-10 -8 64 38" aria-hidden="true" focusable="false" fill="none" strokeLinejoin="round">
      <g stroke={NAVY} strokeWidth="1.1">
        <path d="M4 13L-4 5Q-1 13-4 21Z" fill="#19c3c7" />
        <path d="M4 13C9 5 22 3 33 7C39 9 44 10 50 11C46 14 41 14 37 16C29 21 12 21 4 13Z" fill="#19c3c7" />
        <path d="M8 14C16 19 28 19 36 15C30 13 14 13 8 14Z" fill="#fffaf0" strokeWidth=".6" />
        <path d="M19 5.2L23-3L28 6Z" fill="#0b9aa6" />
        <path d="M27 16L24 23L31 17Z" fill="#0b9aa6" />
      </g>
      <circle cx="38" cy="11.2" r="1.2" fill={NAVY} />
      <g fill="#9ce6e8" stroke={NAVY} strokeWidth=".5">
        <circle cx="-6" cy="2" r="1.4" /><circle cx="-9" cy="8" r="1" /><circle cx="2" cy="-2" r="1" />
      </g>
    </svg>
  );
}

export default function HeroScene() {
  const posts = [];
  for (let x = 20; x < 1460; x += 170) posts.push(x);
  const slats = [];
  for (let x = 20; x < 520; x += 26) slats.push(x);
  return (
    <svg className="hscene" viewBox="0 0 1440 760" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="hs-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7fdadf" /><stop offset=".62" stopColor="#c9f1ee" /><stop offset="1" stopColor="#f3f6e4" /></linearGradient>
        <linearGradient id="hs-sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1fbfc6" /><stop offset="1" stopColor="#0b8795" /></linearGradient>
        <pattern id="hs-stripe" width="36" height="24" patternUnits="userSpaceOnUse"><rect width="36" height="24" fill="#fffaf0" /><rect width="18" height="24" fill="#19c3c7" /></pattern>
      </defs>

      <rect width="1440" height="760" fill="url(#hs-sky)" />

      <g className="hs-sun">
        <circle cx="250" cy="205" r="132" fill="#fff3bf" opacity=".38" />
        <circle cx="250" cy="205" r="92" fill="#ffefb0" />
      </g>

      <g className="hs-c1" stroke={NAVY} strokeWidth="3" strokeLinejoin="round">
        <path transform="translate(560 120)" fill="#fffaf0" d="M0 70Q-12 40 26 36Q30 6 68 14Q92-14 128 8Q166-4 176 34Q214 36 208 68Z" />
      </g>
      <g className="hs-c2" stroke={NAVY} strokeWidth="3" strokeLinejoin="round">
        <path transform="translate(1010 300) scale(.75)" fill="#fffaf0" d="M0 70Q-12 40 26 36Q30 6 68 14Q92-14 128 8Q166-4 176 34Q214 36 208 68Z" />
      </g>
      <g className="hs-bird" fill="none" stroke={NAVY} strokeWidth="3" strokeLinecap="round">
        <path d="M470 290q9-11 18 0q9-11 18 0" /><path d="M520 262q8-10 16 0q8-10 16 0" /><path d="M440 250q7-9 14 0q7-9 14 0" />
      </g>

      <rect y="470" width="1440" height="300" fill="url(#hs-sea)" />
      <path d="M0 470H1440" stroke={NAVY} strokeWidth="3" />
      <g stroke={NAVY} strokeWidth="2.5" fill="#fffaf0" strokeLinejoin="round">
        <rect x="900" y="452" width="38" height="18" /><rect x="944" y="442" width="30" height="28" /><rect x="980" y="456" width="40" height="14" />
        <rect x="1028" y="430" width="20" height="40" /><path d="M1026 430h24l-12-14z" fill="#19c3c7" /><rect x="1056" y="450" width="48" height="20" />
      </g>
      <g className="hs-w" fill="none" stroke="#c7f7f5" strokeWidth="3" strokeLinecap="round" opacity=".85">
        <path d="M80 520q40-14 80 0t80 0" /><path d="M420 566q50-16 100 0t100 0" /><path d="M880 528q40-14 80 0t80 0" /><path d="M1170 604q50-16 100 0t100 0" /><path d="M250 640q40-12 80 0t80 0" /><path d="M660 508q36-12 72 0t72 0" />
      </g>
      <path d="M0 600Q180 576 360 600T720 600T1080 600T1440 600V760H0Z" fill="#0e90a0" opacity=".55" />

      <g className="hs-jump" stroke={NAVY} strokeWidth="1.1" strokeLinejoin="round" transform="translate(1000 540) scale(3.2)">
        <path d="M4 13L-4 5Q-1 13-4 21Z" fill="#fffaf0" />
        <path d="M4 13C9 5 22 3 33 7C39 9 44 10 50 11C46 14 41 14 37 16C29 21 12 21 4 13Z" fill="#fffaf0" />
        <path d="M19 5.2L23-3L28 6Z" fill="#fffaf0" />
        <path d="M27 16L24 23L31 17Z" fill="#fffaf0" />
        <circle cx="38" cy="11.2" r="1.1" fill={NAVY} stroke="none" />
      </g>

      <g transform="translate(80 700)">
        <path d="M0 0C-12-110 12-220 0-326" fill="none" stroke={NAVY} strokeWidth="22" strokeLinecap="round" />
        <path d="M0 0C-12-110 12-220 0-326" fill="none" stroke="#b07a45" strokeWidth="15" strokeLinecap="round" />
        <g stroke={NAVY} strokeWidth="3" fill="#2f9e6a" strokeLinejoin="round">
          <path d="M0-326Q-90-392-170-330Q-100-352 0-326Z" /><path d="M0-326Q90-392 170-330Q100-352 0-326Z" />
          <path d="M0-326Q-70-420-140-410Q-60-400 0-326Z" /><path d="M0-326Q70-420 140-410Q60-400 0-326Z" />
          <path d="M0-326Q-20-430 10-452Q20-400 0-326Z" />
        </g>
        <g fill="#e8a33d" stroke={NAVY} strokeWidth="2"><circle cx="-8" cy="-312" r="9" /><circle cx="8" cy="-308" r="9" /><circle cx="0" cy="-296" r="9" /></g>
      </g>

      <g transform="translate(190 350) scale(.82)" stroke={NAVY} strokeWidth="3.5" strokeLinejoin="round">
        <path d="M520 392V330H560V290H600V250H640V210H680V170H706V392Z" fill="#f3e3bd" />
        <g stroke="none"><circle cx="692" cy="150" r="9" fill={NAVY} /><rect x="683" y="158" width="18" height="30" rx="8" fill={NAVY} /></g>
        <rect x="0" y="52" width="520" height="340" fill="#fbf1d9" />
        <rect x="0" y="22" width="520" height="38" fill="#f3e3bd" />
        {[24, 150, 276, 402].map((x) => <rect key={x} x={x} y="-6" width="40" height="30" fill="#f3e3bd" />)}
        {[48, 198, 348].map((x) => (
          <g key={x}>
            <path d={`M${x} 150V108a42 42 0 0 1 84 0V150Z`} fill="#ffcf80" stroke="#6b3f1f" />
            <path d={`M${x + 42} 66V150M${x} 108H${x + 84}`} stroke="#6b3f1f" strokeWidth="3" />
          </g>
        ))}
        <rect x="0" y="150" width="520" height="30" fill="#9a6a3a" />
        <path d={slats.map((x) => `M${x} 150V180`).join("")} strokeWidth="2.5" />
        <rect x="-14" y="182" width="548" height="24" rx="6" fill="url(#hs-stripe)" />
        {[40, 190, 340].map((x) => (
          <g key={x}>
            <path d={`M${x} 350V270a50 50 0 0 1 100 0V350Z`} fill="#8a5a33" stroke="#4a2f1b" />
            <path d={`M${x + 50} 220V350M${x + 12} 292h76`} stroke="#4a2f1b" strokeWidth="3" />
          </g>
        ))}
        <g stroke="none" fill="#ffe08a">{[150, 300, 452].map((x) => <circle key={x} cx={x} cy="250" r="8" />)}</g>
        <rect x="0" y="352" width="520" height="40" fill="#c98f5e" />
        <path d="M0 372H520M60 352V372M180 352V372M300 352V372M420 352V372M120 372V392M240 372V392M360 372V392M480 372V392" strokeWidth="2" />
        <g stroke="none">
          <circle cx="-4" cy="290" r="22" fill="#3f9b6a" /><circle cx="20" cy="262" r="15" fill="#e0457b" /><circle cx="-12" cy="262" r="13" fill="#e0457b" /><circle cx="28" cy="310" r="14" fill="#e0457b" /><circle cx="-18" cy="326" r="16" fill="#3f9b6a" />
          <circle cx="500" cy="232" r="14" fill="#e0457b" /><circle cx="520" cy="250" r="12" fill="#3f9b6a" />
        </g>
      </g>

      <rect x="0" y="676" width="1440" height="90" fill="#f7e9c8" stroke={NAVY} strokeWidth="3" />
      <rect x="0" y="654" width="1440" height="10" fill="#fffaf0" stroke={NAVY} strokeWidth="3" />
      {posts.map((x) => (
        <g key={x} stroke={NAVY} strokeWidth="3" strokeLinejoin="round">
          <rect x={x} y="640" width="44" height="48" fill="#fffaf0" />
          <rect x={x - 4} y="630" width="52" height="12" fill="#19c3c7" />
        </g>
      ))}
    </svg>
  );
}
