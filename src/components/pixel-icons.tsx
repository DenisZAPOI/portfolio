// Chaque icône est dessinée en texte : une ligne = une rangée de pixels,
// une lettre = une couleur de la palette Endesga 32, "." = transparent.
const colors: Record<string, string> = {
  k: "#181425", // contour
  d: "#262b44",
  g: "#3a4466",
  G: "#5a6988",
  s: "#8b9bb4",
  S: "#c0cbdc",
  w: "#ffffff",
  p: "#68386c",
  P: "#b55088",
  e: "#3e8948",
  E: "#63c74d",
  b: "#733e39",
  B: "#b86f50",
  K: "#e8b796", // peau
  y: "#feae34",
};

function PixelIcon({ art, className }: { art: string[]; className?: string }) {
  const pixels = art.flatMap((row, y) =>
    [...row].map((char, x) =>
      char === "." ? null : <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={colors[char]} />,
    ),
  );
  return (
    <svg viewBox={`0 0 ${art[0].length} ${art.length}`} shapeRendering="crispEdges" className={className} aria-hidden>
      {pixels}
    </svg>
  );
}

const briefcase = [
  "................",
  "................",
  "................",
  ".....kkkkkk.....",
  ".....kb..bk.....",
  ".....kb..bk.....",
  ".kkkkkkkkkkkkkk.",
  ".kBBBBBBBBBBBBk.",
  ".kBBBBBBBBBBBBk.",
  ".kbbbbbkkbbbbbk.",
  ".kkkkkkyykkkkkk.",
  ".kBBBBBkkBBBBBk.",
  ".kBBBBBBBBBBBBk.",
  ".kbbbbbbbbbbbbk.",
  ".kkkkkkkkkkkkkk.",
  "................",
];

const floppyDisk = [
  "................",
  ".kkkkkkkkkkkkkk.",
  ".kPpkSSSSSSkppk.",
  ".kppkSSSgSSkppk.",
  ".kppkSSSgSSkppk.",
  ".kppkSSSSSSkppk.",
  ".kpppkkkkkkpppk.",
  ".kppppppppppppk.",
  ".kppwwwwwwwwppk.",
  ".kppweeeeeewppk.",
  ".kppwwwwwwwwppk.",
  ".kppwEEEEwwwppk.",
  ".kppwwwwwwwwppk.",
  ".kppwwwwwwwwppk.",
  ".kkkkkkkkkkkkkk.",
  "................",
];

const monitor = [
  "................",
  ".kkkkkkkkkkkkkk.",
  ".kSSSSSSSSSSSSk.",
  ".kSkkkkkkkkkkSk.",
  ".kSkddddddddkSk.",
  ".kSkdddddEddkSk.",
  ".kSkdddddEddkSk.",
  ".kSkdddEdEddkSk.",
  ".kSkdEdEdEddkSk.",
  ".kSkdEdEdEddkSk.",
  ".kSkkkkkkkkkkSk.",
  ".kSSSSSSSSSSESk.",
  ".kkkkkkkkkkkkkk.",
  ".....kssssk.....",
  "...kkkkkkkkkk...",
  "................",
];

const character = [
  "................",
  ".....kkkkkk.....",
  "....kbbbbbbk....",
  "...kbbbbbbbbk...",
  "...kbKKKKKKbk...",
  "...kKKkKKkKKk...",
  "...kKKKKKKKKk...",
  "...kKKKkkKKKk...",
  "....kKKKKKKk....",
  ".....kkKKkk.....",
  "...kkeeKKeekk...",
  "..keeeeeeeeeek..",
  ".keeeeEeeEeeeek.",
  ".keeeeeeeeeeeek.",
  ".kkkkkkkkkkkkkk.",
  "................",
];

const envelope = [
  "................",
  "................",
  "................",
  ".kkkkkkkkkkkkkk.",
  ".kwkwwwwwwwwkwk.",
  ".kwwkwwwwwwkwwk.",
  ".kwwwkwwwwkwwwk.",
  ".kwwwwkPPkwwwwk.",
  ".kwwwwwkkwwwwwk.",
  ".kwwwwwwwwwwwwk.",
  ".kSSSSSSSSSSSSk.",
  ".kkkkkkkkkkkkkk.",
  "................",
  "................",
  "................",
  "................",
];

const medal = [
  "................",
  "..kkkk....kkkk..",
  "..kPPPk..kPPPk..",
  "...kPPPkkPPPk...",
  "....kPPPPPPk....",
  ".....kkkkkk.....",
  "....kyyyyyyk....",
  "...kywyyyyyyk...",
  "..kywyyyyyyyyk..",
  "..kyyyyyyyyyBk..",
  "..kyyyyyyyyyBk..",
  "...kyyyyyyyBk...",
  "....kBBBBBBk....",
  ".....kkkkkk.....",
  "................",
  "................",
];

const padlock = [
  "................",
  ".....kkkkkk.....",
  "....kSSSSSSk....",
  "....kSkkkkSk....",
  "....kSk..kSk....",
  "....kSk..kSk....",
  "...kkkkkkkkkk...",
  "...kyyyyyyyyk...",
  "...kyyykkyyyk...",
  "...kyyykkyyyk...",
  "...kyyyykyyyk...",
  "...kBBBBBBBBk...",
  "...kkkkkkkkkk...",
  "................",
  "................",
  "................",
];

const arrowLeft = [
  "........",
  "....S...",
  "...SS...",
  "..SSS...",
  ".SSSS...",
  "..SSS...",
  "...SS...",
  "....S...",
];

const arrowRight = [
  "........",
  "...S....",
  "...SS...",
  "...SSS..",
  "...SSSS.",
  "...SSS..",
  "...SS...",
  "...S....",
];

type IconProps = { className?: string };

export const BriefcaseIcon = ({ className }: IconProps) => <PixelIcon art={briefcase} className={className} />;
export const FloppyDiskIcon = ({ className }: IconProps) => <PixelIcon art={floppyDisk} className={className} />;
export const MonitorIcon = ({ className }: IconProps) => <PixelIcon art={monitor} className={className} />;
export const MedalIcon = ({ className }: IconProps) => <PixelIcon art={medal} className={className} />;
export const CharacterIcon = ({ className }: IconProps) => <PixelIcon art={character} className={className} />;
export const EnvelopeIcon = ({ className }: IconProps) => <PixelIcon art={envelope} className={className} />;
export const PadlockIcon = ({ className }: IconProps) => <PixelIcon art={padlock} className={className} />;
export const ArrowLeftIcon = ({ className }: IconProps) => <PixelIcon art={arrowLeft} className={className} />;
export const ArrowRightIcon = ({ className }: IconProps) => <PixelIcon art={arrowRight} className={className} />;
