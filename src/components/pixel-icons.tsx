import Image from "next/image";

// Icônes pixel art : des PNG générés depuis scripts/pixel-art.mjs (`npm run icons`), à la taille
// du dessin, et agrandis sans flou (`image-rendering: pixelated`). `unoptimized` : Next.js sert
// le fichier tel quel (il est déjà minuscule, et le redimensionner le rendrait flou).

type IconProps = { className?: string };

function PixelIcon({ name, width, height, className }: IconProps & { name: string; width: number; height: number }) {
  return (
    <Image
      src={`/icons/${name}.png`}
      alt=""
      aria-hidden
      width={width}
      height={height}
      unoptimized
      draggable={false}
      className={`[image-rendering:pixelated] ${className ?? ""}`}
    />
  );
}

export const BriefcaseIcon = ({ className }: IconProps) => (
  <PixelIcon name="briefcase" width={16} height={16} className={className} />
);
export const FloppyDiskIcon = ({ className }: IconProps) => (
  <PixelIcon name="floppy-disk" width={16} height={16} className={className} />
);
export const MonitorIcon = ({ className }: IconProps) => (
  <PixelIcon name="monitor" width={16} height={16} className={className} />
);
export const MedalIcon = ({ className }: IconProps) => (
  <PixelIcon name="medal" width={16} height={16} className={className} />
);
export const SpreadsheetIcon = ({ className }: IconProps) => (
  <PixelIcon name="spreadsheet" width={16} height={16} className={className} />
);
export const TextFileIcon = ({ className }: IconProps) => (
  <PixelIcon name="text-file" width={16} height={16} className={className} />
);
export const TrashIcon = ({ className }: IconProps) => (
  <PixelIcon name="trash" width={16} height={16} className={className} />
);
export const PushpinIcon = ({ className }: IconProps) => (
  <PixelIcon name="pushpin" width={10} height={9} className={className} />
);
export const StickyNoteIcon = ({ className }: IconProps) => (
  <PixelIcon name="sticky-note" width={30} height={30} className={className} />
);
export const CharacterIcon = ({ className }: IconProps) => (
  <PixelIcon name="character" width={16} height={16} className={className} />
);
export const EnvelopeIcon = ({ className }: IconProps) => (
  <PixelIcon name="envelope" width={16} height={16} className={className} />
);
export const PadlockIcon = ({ className }: IconProps) => (
  <PixelIcon name="padlock" width={16} height={16} className={className} />
);
export const ArrowLeftIcon = ({ className }: IconProps) => (
  <PixelIcon name="arrow-left" width={8} height={8} className={className} />
);
export const ArrowRightIcon = ({ className }: IconProps) => (
  <PixelIcon name="arrow-right" width={8} height={8} className={className} />
);
