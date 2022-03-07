import { useEffect, useRef } from "react";

export default function useSEO({ title, description }) {
  const prevTitle = useRef(document.title);
  const prevDescription = useRef(
    document.querySelector(`meta[name="description"]`)
  );
  useEffect(() => {
    const previousTitle = prevTitle.current;
    if (title) {
      document.title = `BikeVille | ${title}`;
    }

    return () => (document.title = previousTitle);
  }, [title]);

  useEffect(() => {
    const previousDescription = prevDescription.current;
    if (description) {
      const metaDescription = document.querySelector(
        `meta[name="description"]`
      );
      metaDescription.setAttribute("content", description);

      return () => {
        metaDescription.setAttribute("content", previousDescription);
      };
    }
  }, [description]);
}
