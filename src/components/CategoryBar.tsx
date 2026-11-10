import {
  HOME_ALL_FILTERS,
  type ListingTypeFilter,
} from "../constants/categories";
import { useFilters } from "../context/FilterContext";
import type { JobFilters } from "../context/FilterContext";
import {
  SoftFilledCategoryIcon,
  resolveSoftCategoryIcon,
  type SoftCategoryIconName,
} from "./icons/SoftFilledCategoryIcon";
import { CategoryIconShell } from "./CategoryIconShell";
import { MotionPressButton } from "./motion/MotionPrimitives";

interface CategoryBarProps {
  onCategorySelect?: () => void;
}

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

function FilterChip({
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
      className="group snap-start flex w-[4.75rem] shrink-0 flex-col items-center justify-center gap-2 outline-none sm:w-[5.25rem]"
      aria-pressed={isActive}
    >
      <CategoryIconShell isActive={isActive}>
        <SoftFilledCategoryIcon
          name={iconName}
          size={28}
          className="transition duration-300 group-hover:scale-105"
        />
      </CategoryIconShell>
      <span
        className={`w-full text-center text-[11px] leading-tight transition duration-300 sm:text-xs ${
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

function SosFilterChip({
  isActive,
  onSelect,
}: {
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <MotionPressButton
      onClick={onSelect}
      className="group snap-start flex w-[4.75rem] shrink-0 flex-col items-center justify-center gap-2 outline-none sm:w-[5.25rem]"
      aria-pressed={isActive}
      aria-label="SOS — pedidos urgentes"
    >
      <span
        className={`relative flex h-11 w-11 items-center justify-center rounded-2xl transition duration-300 sm:h-12 sm:w-12 ${
          isActive
            ? "bg-rose-600 shadow-[0_0_0_2px_rgba(225,29,72,0.55),0_0_20px_rgba(244,63,94,0.5)]"
            : "bg-gradient-to-br from-rose-500 to-orange-500 shadow-[0_0_0_2px_rgba(244,63,94,0.3)] group-hover:shadow-[0_0_0_2px_rgba(225,29,72,0.45),0_0_16px_rgba(244,63,94,0.4)]"
        }`}
      >
        <span
          className={`pointer-events-none absolute inset-0 rounded-2xl bg-rose-400/35 ${
            isActive ? "animate-ping" : "animate-pulse opacity-70"
          }`}
          aria-hidden
        />
        <span className="relative z-10 text-xs font-black tracking-tight text-white sm:text-sm">
          SOS
        </span>
      </span>
      <span
        className={`w-full text-center text-[11px] leading-tight transition duration-300 sm:text-xs ${
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

export function CategoryBar({ onCategorySelect }: CategoryBarProps) {
  const { filters, setCategory, setListingType, setSosOnly } = useFilters();
  const activeId = resolveActiveId(filters);

  const handleSelect = (
    _listingType: ListingTypeFilter,
    category: string | null
  ) => {
    setSosOnly(false);
    setListingType(null);
    setCategory(category);
    onCategorySelect?.();
  };

  const handleSos = () => {
    setSosOnly(true);
    onCategorySelect?.();
  };

  return (
    <section className="border-y border-slate-200/80 bg-white" aria-label="Categorias">
      <div className="page-container py-3 lg:py-4">
        <div className="scrollbar-hide flex flex-wrap items-start justify-center gap-5 pb-0.5 sm:gap-7">
          {HOME_ALL_FILTERS.map((item) => {
            if (item.id === "sos") {
              return (
                <SosFilterChip
                  key={item.id}
                  isActive={activeId === "sos"}
                  onSelect={handleSos}
                />
              );
            }
            return (
              <FilterChip
                key={item.id}
                label={item.label}
                iconName={resolveSoftCategoryIcon(item.iconKey)}
                isActive={activeId === item.id}
                onSelect={() => handleSelect(item.listingType, item.category)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
