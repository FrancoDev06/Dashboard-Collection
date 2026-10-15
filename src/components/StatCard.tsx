type StatCardProps = {
  label : string,
  value : number,
  subtitle? : string
}

export function StatCard({label, value, subtitle} : StatCardProps) {
    return (
      <div>
        <p>{label}</p>
        <p>{value}</p>
        <p>{subtitle ? subtitle : "" }</p>
      </div>

    )


}
