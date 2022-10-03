import useSWR, { SWRResponse } from "swr"

export type Person = {
  last_name: string
  first_name: string
  gender: string
  age: number
  act: boolean
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const usePeople = () => {
  const { data: people, error }: SWRResponse<Person[], any> = useSWR(
    "http://localhost:5000/people/10",
    fetcher,
    {
      revalidateIfStale: false,
      //revalidateOnMount: false,
      revalidateOnFocus: false, //無用な再取得 off
    }
  )
  return {
    people,
    isLoading: !error && !people,
    isError: error,
  }
}
