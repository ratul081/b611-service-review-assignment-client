import { useEffect } from "react"

const useTitle = title => {
  useEffect(() => {
    document.title = `${title} - Bhoj Shala`;
  }, [title])
}

export default useTitle