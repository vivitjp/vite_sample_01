import { usePeople, type Person } from "./usePeople"

export const PeopleList = () => {
  const { people, isLoading, isError } = usePeople()

  return (
    <>
      {people &&
        people.map((person: Person, idx: number) => (
          <div key={idx}>{person.first_name}</div>
        ))}
      {isLoading && <div>Loading</div>}
      {isError && <div>Error</div>}
    </>
  )
}
