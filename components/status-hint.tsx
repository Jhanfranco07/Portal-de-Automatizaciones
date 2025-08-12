"use client";

import { Badge } from "@/components/ui/badge";

type StatusHintProps = {
  url?: string;
};

/**
 * Muestra hints de estado. Si la URL pertenece a Streamlit,
 * agrega el aviso de "posible reposo" con tooltip.
 */
export function StatusHint({ url }: StatusHintProps) {
  const isStreamlit = !!url && /streamlit\.app/i.test(url);

  return (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-green-100 border-green-300 text-green-900 dark:bg-green-900/30 dark:border-green-800 dark:text-green-200">
        activo
      </Badge>

      <Badge className="bg-red-100 border-red-300 text-red-900 dark:bg-red-900/30 dark:border-red-800 dark:text-red-200">
        inactivo
      </Badge>

      {isStreamlit && (
        <Badge className="bg-yellow-100 border-yellow-300 text-yellow-900 dark:bg-yellow-900/30 dark:border-yellow-800 dark:text-yellow-200">
          <span title='Si ves un botón azul “Run”/“Rerun” o “Yes, get this app back up!”, haz clic para encender la app (plan gratuito de Streamlit).'>
            posible reposo
          </span>
        </Badge>
      )}
    </div>
  );
}
