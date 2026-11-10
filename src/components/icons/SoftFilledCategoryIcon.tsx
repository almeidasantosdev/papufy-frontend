/**
 * Ícones soft-filled / duotone para o carrossel de categorias.
 * Preenchimento suave (~15% opacidade) + traço azul sólido arredondado (2px).
 */
import type { ReactNode } from "react";

export type SoftCategoryIconName =
  | "todos"
  | "reformas"
  | "servicos"
  | "design"
  | "eventos";

const STROKE = "#0284c7";
const FILL = "rgba(2, 132, 199, 0.18)";
const FILL_SOFT = "rgba(14, 165, 233, 0.12)";

interface SoftFilledCategoryIconProps {
  name: SoftCategoryIconName;
  className?: string;
  size?: number;
}

function IconFrame({
  size,
  className,
  children,
}: {
  size: number;
  className: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  );
}

/** Grade 2×2 de quadrados arredondados bem preenchidos. */
function IconTodos() {
  return (
    <>
      <rect
        x="3.25"
        y="3.25"
        width="7.5"
        height="7.5"
        rx="2.1"
        fill={FILL}
        stroke={STROKE}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="13.25"
        y="3.25"
        width="7.5"
        height="7.5"
        rx="2.1"
        fill={FILL_SOFT}
        stroke={STROKE}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="3.25"
        y="13.25"
        width="7.5"
        height="7.5"
        rx="2.1"
        fill={FILL_SOFT}
        stroke={STROKE}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="13.25"
        y="13.25"
        width="7.5"
        height="7.5"
        rx="2.1"
        fill={FILL}
        stroke={STROKE}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </>
  );
}

/** Martelo + chave de fenda cruzados (flat moderno). */
function IconReformas() {
  return (
    <>
      <circle cx="12" cy="12" r="9.25" fill={FILL_SOFT} />
      {/* chave de fenda */}
      <path
        d="M8 16.5 L14.8 9.7"
        stroke={STROKE}
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M14.2 8.4 L16.6 6"
        stroke={STROKE}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.1 7.5 L17.2 9.6"
        stroke={STROKE}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="6.15"
        y="15.35"
        width="3.4"
        height="2.35"
        rx="0.75"
        transform="rotate(-45 7.85 16.5)"
        fill={FILL}
        stroke={STROKE}
        strokeWidth="1.5"
      />
      {/* cabo do martelo */}
      <path
        d="M9.4 8.2 L16.2 15"
        stroke={STROKE}
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      {/* cabeça do martelo */}
      <path
        d="M6.6 6.4 L10.2 10"
        stroke={STROKE}
        strokeWidth="3.1"
        strokeLinecap="round"
      />
      <path
        d="M5.5 7.8 C4.7 6.9 4.85 5.55 5.95 4.95 C6.95 4.4 8.15 4.75 8.7 5.85"
        fill={FILL}
        stroke={STROKE}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
}

/** Crachá de identificação. */
function IconServicos() {
  return (
    <>
      <rect
        x="4.25"
        y="4"
        width="15.5"
        height="16"
        rx="3"
        fill={FILL}
        stroke={STROKE}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="9.4"
        r="2.55"
        fill={FILL_SOFT}
        stroke={STROKE}
        strokeWidth="1.85"
      />
      <path
        d="M7.4 16.6 C7.55 14.55 9.45 13.35 12 13.35 C14.55 13.35 16.45 14.55 16.6 16.6"
        stroke={STROKE}
        strokeWidth="2"
        strokeLinecap="round"
        fill={FILL_SOFT}
      />
      <path
        d="M9.2 4 V2.95 C9.2 2.35 9.7 1.9 10.3 1.9 H13.7 C14.3 1.9 14.8 2.35 14.8 2.95 V4"
        stroke={STROKE}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
}

/** Pena de desenho (feather). */
function IconDesign() {
  return (
    <>
      <path
        d="M19.4 5 C16.2 3.55 11.2 5.15 7.85 9.35 C5.35 12.5 4.45 15.9 5.15 18.35 C7.6 19 11.1 17.95 14.45 15.2 C18.55 11.85 20.15 7.05 18.9 4.35 Z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M12.15 8.35 L8.2 16.15"
        stroke={STROKE}
        strokeWidth="1.85"
        strokeLinecap="round"
      />
      <path
        d="M14.7 10.15 L11.35 15.1"
        stroke={STROKE}
        strokeWidth="1.65"
        strokeLinecap="round"
        opacity="0.88"
      />
      <path
        d="M16.75 12.2 L14.2 15.55"
        stroke={STROKE}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.72"
      />
      <path
        d="M5.35 18.55 L4.15 20.35"
        stroke={STROKE}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  );
}

/** Bilhete de entrada (ticket). */
function IconEventos() {
  return (
    <>
      <path
        d="M3.4 8.1 C3.4 6.55 4.65 5.3 6.2 5.3 H17.8 C19.35 5.3 20.6 6.55 20.6 8.1 V9.25 C19.35 9.25 18.35 10.25 18.35 11.5 C18.35 12.75 19.35 13.75 20.6 13.75 V14.9 C20.6 16.45 19.35 17.7 17.8 17.7 H6.2 C4.65 17.7 3.4 16.45 3.4 14.9 V13.75 C4.65 13.75 5.65 12.75 5.65 11.5 C5.65 10.25 4.65 9.25 3.4 9.25 V8.1 Z"
        fill={FILL}
        stroke={STROKE}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M10 7.85 V15.15"
        stroke={STROKE}
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeDasharray="2.1 2.35"
      />
      <circle cx="14.35" cy="9.7" r="1.1" fill={STROKE} />
      <circle cx="14.35" cy="13.3" r="1.1" fill={STROKE} opacity="0.65" />
    </>
  );
}

const ICONS: Record<SoftCategoryIconName, () => ReactNode> = {
  todos: IconTodos,
  reformas: IconReformas,
  servicos: IconServicos,
  design: IconDesign,
  eventos: IconEventos,
};

export function SoftFilledCategoryIcon({
  name,
  className = "",
  size = 28,
}: SoftFilledCategoryIconProps) {
  const Content = ICONS[name] ?? IconTodos;
  return (
    <IconFrame size={size} className={className}>
      <Content />
    </IconFrame>
  );
}

/** Resolve iconKey legado (lottie/lucide) para o set soft-filled da home. */
export function resolveSoftCategoryIcon(
  key: string | null | undefined
): SoftCategoryIconName {
  switch (key) {
    case "todos":
    case "grid":
    case "sparkles":
    case "all":
      return "todos";
    case "reformas":
    case "hardhat":
    case "crane":
    case "wrench":
      return "reformas";
    case "servicos":
    case "brush":
    case "broom":
      return "servicos";
    case "design":
    case "monitor":
    case "feather":
      return "design";
    case "eventos":
    case "party":
    case "ticket":
      return "eventos";
    default:
      return "todos";
  }
}
