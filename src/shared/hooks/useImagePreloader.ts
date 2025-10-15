import { useEffect, useState } from "react";

/**
 * Pre-carga un conjunto de imágenes antes de renderizar.
 * Inserta <img> invisibles en el DOM para forzar la decodificación.
 * Devuelve true cuando todas las imágenes están cargadas o fallan.
 * Mantiene el estado de carga visible 2 segundos adicionales.
 */
export function useImagePreloader(imageUrls: string[]) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      setLoaded(true);
      return;
    }

    let loadedCount = 0;
    let isMounted = true;

    const hiddenContainer = document.createElement("div");
    hiddenContainer.style.cssText = "display:none;visibility:hidden;";
    document.body.appendChild(hiddenContainer);

    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === imageUrls.length && isMounted) {
        // 🔹 Esperamos 2 segundos extra antes de marcar como "loaded"
        setTimeout(() => {
          if (!isMounted) return;
          setLoaded(true);
          if (document.body.contains(hiddenContainer)) {
            document.body.removeChild(hiddenContainer);
          }
        }, 2000); // ⏱ delay de 2 s
      }
    };

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = handleLoad;
      img.onerror = handleLoad;
      hiddenContainer.appendChild(img);
    });

    return () => {
      isMounted = false;
      if (document.body.contains(hiddenContainer)) {
        try {
          document.body.removeChild(hiddenContainer);
        } catch {
          /* ignorar si ya fue eliminado */
        }
      }
    };
  }, [imageUrls]);

  return loaded;
}
