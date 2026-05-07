"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/data";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="rpg-panel px-2 py-2">
      <ul className="flex flex-wrap gap-1 justify-center list-none">
        {NAV_ITEMS.map((item) => {
          const isActive =
            pathname === `/${item.id}` ||
            (pathname === "/" && item.id === "about");
          return (
            <li key={item.id}>
              <Link
                href={`/${item.id}`}
                className="relative block px-3 py-2 select-none transition-all duration-100"
                style={{
                  fontSize: "7px",
                  color: isActive ? "var(--gold)" : "var(--gray)",
                  border: isActive
                    ? "2px solid var(--border)"
                    : "2px solid transparent",
                  background: isActive ? "rgba(68,68,204,.15)" : "transparent",
                  textShadow: isActive ? "0 0 8px rgba(240,192,64,.5)" : "none",
                  letterSpacing: 1,
                  textDecoration: "none",
                }}
              >
                {isActive && (
                  <span
                    className="animate-blink"
                    style={{
                      position: "absolute",
                      left: -14,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "var(--gold)",
                      fontSize: "8px",
                    }}
                  >
                    ▶
                  </span>
                )}

                {item.label}

                {"beta" in item && (
                  <span
                    className="animate-blink ml-1"
                    style={{
                      background: "var(--red)",
                      color: "#fff",
                      fontSize: "5px",
                      padding: "1px 4px",
                    }}
                  >
                    BETA
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
