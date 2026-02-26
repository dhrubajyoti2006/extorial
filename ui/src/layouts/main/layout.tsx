import type { ReactNode } from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import { HeaderBar, HEADER_HEIGHT } from "./header-bar";
import { LeftSidebar, SIDEBAR_COLLAPSED_WIDTH, SIDEBAR_EXPANDED_WIDTH } from "../../components/sidebar";
import { Footer } from "./footer";

type MainLayoutProps = {
  children?: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const sidebarWidth = sidebarCollapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_EXPANDED_WIDTH;

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#f8fafc' }}>
      {/* Sidebar - Full height */}
      <Box sx={{
        width: sidebarWidth,
        flexShrink: 0,
        height: '100vh',
        zIndex: (theme) => theme.zIndex.drawer,
        transition: "width 0.2s ease"
      }}>
        <LeftSidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((prev) => !prev)}
        />
      </Box>

      {/* Right Column: Header + Content */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Box sx={{ height: HEADER_HEIGHT, flexShrink: 0 }}>
          <HeaderBar />
        </Box>
        <Box sx={{ height: "1px", bgcolor: "#e2e8f0", flexShrink: 0 }} />

        <Box
          component="main"
          sx={{
            flex: 1,
            overflowY: 'auto',
            p: 0,
            position: 'relative'
          }}
        >
          {children}
        </Box>

        <Footer />
      </Box>
    </Box>
  );
}
