import type {GameProps} from "../types"

type StatusProps = {
  status: GameProps["status"];
};


export function Status({ status }: StatusProps) {

  const colors = {
    "Possédé": "#7fe8c4",
    "Précommandé": "#c3bdff",
    "Terminé": "#d6d4ee",
  };


  return (
    <span  style={{ color: colors[status] }}>{status}</span>
  )
}
