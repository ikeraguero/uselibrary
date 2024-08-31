import { useEffect, useState } from "react";

export default function useLocalStorageState(initialState, key) {
  const [bookmarked, setIsBookmarked] = useState(function () {
    const storeBookmarked = localStorage.getItem(key);
    return storeBookmarked ? JSON.parse(storeBookmarked) : initialState;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(bookmarked));
    },
    [bookmarked, key]
  );
  return [bookmarked, setIsBookmarked];
}
