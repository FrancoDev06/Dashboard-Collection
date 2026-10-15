import { StatCard } from "../components/StatCard";

export function HomePage() {
  return (
    <div>
      <StatCard label="Jeux" value={128} subtitle="+3 ce mois-ci"  />
      <StatCard label="Consoles" value={8} subtitle="dont 3 rétro"  />
      <StatCard label="Wishlist" value={16} subtitle="14 jeux, 2 consoles"  />
      <StatCard label="Blu-ray" value={86} subtitle="+1 ce mois-ci"  />
    </div>
  )
}
