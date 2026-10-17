import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#faf7f0", color: "#1e3fa0", fontFamily: "serif", border: "18px solid #1e3fa0" }}>
        <div style={{ fontSize: 96, fontWeight: 700 }}>{site.name}</div>
        <div style={{ fontSize: 44, marginTop: 20, color: "#8a6a1f" }}>{site.tagline}</div>
        <div style={{ fontSize: 34, marginTop: 36, color: "#0b1630" }}>{`Traiteur à ${site.city}`}</div>
      </div>
    ),
    size,
  );
}
