import {
  HOME_ALL_FILTERS,
  type ListingTypeFilter,
} from "../../constants/categories";
import { useFilters } from "../../context/FilterContext";
import type { JobFilters } from "../../context/FilterContext";
import {
  SoftFilledCategoryIcon,
  resolveSoftCategoryIcon,
  type SoftCategoryIconName,
} from "../icons/SoftFilledCategoryIcon";
import { CategoryIconShell } from "../CategoryIconShell";
import { MotionPressButton } from "../motion/MotionPrimitives";

function resolveActiveId(filters: JobFilters): string {
  if (filters.sosOnly) return "sos";
  const match = HOME_ALL_FILTERS.find((item) => {
    if (item.id === "all") {
      return filters.category === null && !filters.sosOnly;
    }
    if (item.sosOnly) return false;
    if (item.category !== null) {
      return filters.category === item.category;
    }
    return false;
  });
  return match?.id ?? "all";
}

interface CategoryScrollProps {
  onChange?: () => void;
}

function MacroChip({
  label,
  iconName,
  isActive,
  onSelect,
}: {
  label: string;
  iconName: SoftCategoryIconName;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <MotionPressButton
      onClick={onSelect}
      className="group flex w-[3.75rem] shrink-0 snap-start flex-col items-center justify-center gap-1 outline-none sm:w-[4.25rem]"
      aria-pressed={isActive}
    >
      <CategoryIconShell isActive={isActive} size="sm">
        <SoftFilledCategoryIcon
          name={iconName}
          size={22}
          className="transition duration-300 group-hover:scale-105"
        />
      </CategoryIconShell>
      <span
        className={`line-clamp-2 w-full text-center text-[9px] leading-tight transition duration-300 ${
          isActive
            ? "font-semibold text-sky-700"
            : "font-medium text-sky-600 group-hover:font-semibold group-hover:text-sky-700"
        }`}
      >
        {label}
      </span>
    </MotionPressButton>
  );
}

function SosChip({
  isActive,
  onSelect,
}: {
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <MotionPressButton
      onClick={onSelect}
      className="group flex w-[3.75rem] shrink-0 snap-start flex-col items-center justify-center gap-1 outline-none sm:w-[4.25rem]"
      aria-pressed={isActive}
      aria-label="SOS — pedidos urgentes"
    >
      <span
        className={`relative flex h-8 w-8 items-center justify-center rounded-xl transition duration-300 ${
          isActive
            ? "bg-rose-600 shadow-[0_0_0_2px_rgba(225,29,72,0.55),0_0_16px_rgba(244,63,94,0.55)]"
            : "bg-gradient-to-br from-rose-500 to-orange-500 shadow-[0_0_0_1.5px_rgba(244,63,94,0.35)] group-hover:shadow-[0_0_0_2px_rgba(225,29,72,0.45),0_0_12px_rgba(244,63,94,0.4)]"
        }`}
      >
        <span
          className={`pointer-events-none absolute inset-0 rounded-xl bg-rose-400/40 ${
            isActive ? "animate-ping" : "animate-pulse opacity-70"
          }`}
          aria-hidden
        />
        <span className="relative z-10 text-[10px] font-black tracking-tight text-white">
          SOS
        </span>
      </span>
      <span
        className={`line-clamp-2 w-full text-center text-[9px] leading-tight transition duration-300 ${
          isActive
            ? "font-bold text-rose-700"
            : "font-semibold text-rose-600 group-hover:font-bold group-hover:text-rose-700"
        }`}
      >
        SOS
      </span>
    </MotionPressButton>
  );
}

export function CategoryScroll({ onChange }: CategoryScrollProps) {
  const { filters, setCategory, setListingType, setSosOnly } = useFilters();
  const activeId = resolveActiveId(filters);

  const applyCategory = (
    _listingType: ListingTypeFilter,
    category: string | null
  ) => {
    setSosOnly(false);
    setListingType(null);
    setCategory(category);
    onChange?.();
  };

  const applySos = () => {
    setSosOnly(true);
    onChange?.();
  };

  return (
    <section aria-label="Categorias" className="border-y border-slate-200/80 bg-white">
      <div className="py-2.5 sm:py-3">
        <div className="scrollbar-hide flex w-full snap-x snap-mandatory items-start justify-start gap-1 overflow-x-auto overscroll-x-contain px-3 sm:gap-2 sm:px-4 [-webkit-overflow-scrolling:touch]">
          {HOME_ALL_FILTERS.map((item) => {
            if (item.id === "sos") {
              return (
                <SosChip
                  key={item.id}
                  isActive={activeId === "sos"}
                  onSelect={applySos}
                />
              );
            }
            return (
              <MacroChip
                key={item.id}
                label={item.label}
                iconName={resolveSoftCategoryIcon(item.iconKey)}
                isActive={activeId === item.id}
                onSelect={() => applyCategory(item.listingType, item.category)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
