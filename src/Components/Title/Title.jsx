import { useEffect } from "react";

export default function Title() {
  return useEffect(() => {
    document.title = "React Form";
  });
}
