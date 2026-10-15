import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";

type HeaderProps = {
  title : string,
  subtitle : string
}

export function Header({title, subtitle}: HeaderProps) {


  return (
    <div>
      <header>
        <Logo />
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <NavMenu/>
        <button>+ Ajouter</button>
      </header>
    </div>
  )
}
