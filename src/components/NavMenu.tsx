export function NavMenu () {

  const btn1 = "Accueil";
  const btn2 = "Jeux";
  const btn3 = "Consoles";
  const btn4 = "Wishlist";
  const btn5 = "Blu-ray";
  const btn6 = "Import";

  return (
    <div>
      <nav aria-label="Navigation principale">
        <button>{btn1}</button>
        <button>{btn2}</button>
        <button>{btn3}</button>
        <button>{btn4}</button>
        <button>{btn5}</button>
        <button>{btn6}</button>
      </nav>
    </div>
  )
}
