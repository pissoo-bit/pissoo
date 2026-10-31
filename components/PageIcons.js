const N = "#0b4a5a";
const TQ = "#19c3c7";
const C = "#fffaf0";
const O = "#e07a2f";
const Y = "#ffd36b";

const ICONS = {
  story: (
    <>
      <path d="M4 50q6-6 12 0t12 0t12 0t12 0t12 0" stroke={TQ} />
      <g transform="translate(8 14) scale(.95)">
        <g className="pi-jump">
          <path d="M4 13L-4 6Q-1 13-4 20Z" fill={TQ} />
          <path d="M4 13C9 5 22 3 33 7C39 9 44 10 50 11C46 14 41 14 37 16C29 21 12 21 4 13Z" fill={TQ} />
          <path d="M8 14C16 19 28 19 36 15C30 13 14 13 8 14Z" fill={C} strokeWidth="1.4" />
          <path d="M19 5.2L23-2L28 6Z" fill={TQ} />
          <circle cx="38" cy="11.2" r="1.2" fill={N} stroke="none" />
        </g>
      </g>
    </>
  ),
  rooms: (
    <>
      <rect x="8" y="22" width="40" height="32" fill={C} />
      <path d="M8 22h4v-5h6v5h8v-5h6v5h8v-5h4v5" />
      <path className="pi-win w1" d="M14 40v-7a4 4 0 0 1 8 0v7z" fill={Y} />
      <path className="pi-win w2" d="M28 40v-7a4 4 0 0 1 8 0v7z" fill={Y} />
      <path d="M12 54v-8a6 6 0 0 1 12 0v8M30 54v-8a6 6 0 0 1 12 0v8" fill={O} />
      <path d="M48 54V44h5v-6h4v-8h-0" />
      <path d="M52 22l4 0" stroke="none" />
    </>
  ),
  exp: (
    <>
      <g className="pi-rock">
        <path d="M10 40h44l-6 10H16z" fill={TQ} />
        <path d="M32 12v28" />
        <path d="M34 14l15 21H34z" fill={C} />
        <path d="M30 20L18 35h12z" fill={C} />
      </g>
      <path d="M4 54q7-5 14 0t14 0t14 0t14 0" stroke={TQ} />
    </>
  ),
  food: (
    <>
      <path d="M14 32h36v12a10 10 0 0 1-10 10H24a10 10 0 0 1-10-10z" fill={O} />
      <path d="M11 32h42" />
      <path d="M14 38H8M50 38h6" />
      <path className="pi-steam s1" d="M24 26q-5-5 0-10t0-8" stroke={TQ} />
      <path className="pi-steam s2" d="M32 26q-5-5 0-10t0-8" stroke={TQ} />
      <path className="pi-steam s3" d="M40 26q-5-5 0-10t0-8" stroke={TQ} />
    </>
  ),
  around: (
    <>
      <ellipse className="pi-ring2" cx="32" cy="54" rx="14" ry="4" stroke={TQ} />
      <g className="pi-bounce">
        <path d="M32 6a15 15 0 0 1 15 15c0 12-15 30-15 30S17 33 17 21A15 15 0 0 1 32 6z" fill={TQ} />
        <circle cx="32" cy="21" r="5.5" fill={C} />
      </g>
    </>
  ),
  shop: (
    <>
      <g className="pi-sway">
        <path d="M18 30q0-20 14-20t14 20" />
        <path d="M8 30h48l-6 24H14z" fill={O} />
        <path d="M12 40h40M14 48h36M24 30l-2 24M32 30v24M40 30l2 24" strokeWidth="1.6" />
      </g>
    </>
  ),
  winds: (
    <>
      <path className="pi-w w1" d="M6 22h34q9 0 9-7t-9-7" stroke={TQ} />
      <path className="pi-w w2" d="M6 34h44q9 0 9 7t-9 7" stroke={N} />
      <path className="pi-w w3" d="M10 46h22q7 0 7 5t-7 5" stroke={TQ} />
    </>
  ),
  gallery: (
    <>
      <rect x="8" y="12" width="48" height="40" rx="4" fill={C} />
      <circle cx="22" cy="26" r="5" fill={Y} />
      <path d="M8 46l14-12 10 8 10-12 14 16v6H8z" fill={TQ} />
      <path className="pi-tw" d="M50 4l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill={Y} />
    </>
  ),
  rules: (
    <>
      <rect x="14" y="8" width="36" height="48" rx="4" fill={C} />
      <path d="M22 18h20M22 28h20M22 38h12" strokeWidth="2" />
      <path className="pi-draw" d="M22 48l5 5 12-12" stroke={TQ} strokeWidth="4" />
    </>
  ),
  contact: (
    <>
      <g className="pi-ringp">
        <path d="M18 8h10l4 11-6 4a26 26 0 0 0 13 13l4-6 11 4v10a6 6 0 0 1-6 6A38 38 0 0 1 12 14a6 6 0 0 1 6-6z" fill={TQ} />
      </g>
      <path className="pi-steam s1" d="M44 10q8 3 8 11" />
      <path className="pi-steam s2" d="M44 2q14 4 14 20" />
    </>
  ),
};

export default function PageIcon({ k }) {
  return (
    <svg className={"pi pi-" + k} viewBox="0 0 64 64" fill="none" stroke={N} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {ICONS[k]}
    </svg>
  );
}
