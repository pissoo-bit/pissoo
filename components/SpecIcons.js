const N = "#0b4a5a";
const T = "#19c3c7";
const O = "#e07a2f";
const Y = "#ffd36b";
const C = "#fffaf0";

const ICONS = {
  cap: (<><circle cx="11" cy="11" r="4" fill={T} /><circle cx="22" cy="12" r="3.2" fill={Y} /><path d="M3 26a8 8 0 0 1 16 0M18 26a6 6 0 0 1 11 0" /></>),
  floor: (<><path d="M4 27h7v-6h7v-6h7v-6h3" /><path className="si-b" d="M24 9l3-3 3 3" stroke={O} /></>),
  size: (<><rect x="5" y="8" width="22" height="16" rx="2" fill={C} /><path d="M9 8v4M14 8v3M19 8v4M23 8v3" /></>),
  bed: (<><path d="M3 24V12M3 20h26v4M29 24v-6a4 4 0 0 0-4-4H13v6" /><circle cx="8" cy="16" r="2.4" fill={T} /></>),
  wall: (<><rect x="4" y="6" width="24" height="20" rx="2" fill={Y} /><path d="M4 13h24M4 20h24M12 6v7M20 13v7M12 20v6" /></>),
  ceil: (<><path d="M3 13L16 5l13 8" /><path d="M7 15v10M13 11v14M19 11v14M25 15v10" stroke={O} /></>),
  open: (<><path d="M8 27V14a8 8 0 0 1 16 0v13z" fill={O} /><path d="M16 6v21M8 18h16" /></>),
  bath: (<><path d="M7 11a9 9 0 0 1 18 0z" fill={T} /><path className="si-d" d="M11 16v3M16 16v5M21 16v3M13 24v2M19 25v2" stroke={T} /></>),
  ac: (<><path d="M16 4v24M5 10l22 12M5 22l22-12" stroke={T} /><circle cx="16" cy="16" r="2.6" fill={C} /></>),
  fridge: (<><rect x="8" y="3" width="16" height="26" rx="3" fill={C} /><path d="M8 13h16M12 7v3M12 17v5" /></>),
  eco: (<><circle cx="16" cy="16" r="11" fill={Y} /><path d="M16 9v14M12 12.5h6a2.4 2.4 0 0 1 0 4.8h-4a2.4 2.4 0 0 0 0 4.8h6" /></>),
};

export default function SpecIcon({ k }) {
  return (
    <svg className={"si si-" + k} viewBox="0 0 32 32" fill="none" stroke={N} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {ICONS[k]}
    </svg>
  );
}
