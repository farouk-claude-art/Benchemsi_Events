type Plausible = (event: string, options?: { props?: Record<string, string> }) => void;

export type TrackedEvent = "whatsapp_click" | "call_click" | "quote_submit" | "instagram_click";

export function track(event: TrackedEvent, props?: Record<string, string>) {
  try {
    const plausible = (window as unknown as { plausible?: Plausible }).plausible;
    plausible?.(event, props ? { props } : undefined);
  } catch {
    /* analytics ne doit jamais casser le site */
  }
}
