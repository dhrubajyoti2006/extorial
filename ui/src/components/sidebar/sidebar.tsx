import { Avatar, Box, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, IconButton } from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useLocation, useNavigate } from "react-router-dom";
import { SIDEBAR_COLLAPSED_WIDTH, SIDEBAR_EXPANDED_WIDTH } from "./constants";
import { NAV_GROUPS, type NavItem } from "./nav-config";

type LeftSidebarProps = {
  collapsed: boolean;
  onToggle: () => void;
};

export function LeftSidebar({ collapsed, onToggle }: LeftSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const isItemActive = (item: NavItem): boolean => {
    if (!item.to) {
      return false;
    }
    if (location.pathname === item.to) {
      return true;
    }
    if (item.matchPrefix) {
      return location.pathname.startsWith(`${item.matchPrefix}/`);
    }
    return location.pathname.startsWith(`${item.to}/`);
  };

  return (
    <Box
      component="aside"
      sx={{
        width: collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_EXPANDED_WIDTH,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #1e293b",
        bgcolor: "#0f172a",
        color: "#cbd5e1",
        overflow: "hidden",
        transition: "width 0.2s ease"
      }}
    >
      <Box
        sx={{
          px: collapsed ? 1 : 2,
          py: 2,
          borderBottom: "1px solid #1e293b",
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "space-between"
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.25}
          onClick={!collapsed ? () => navigate("/") : undefined}
          sx={{ minWidth: 0, height: 30, cursor: !collapsed ? "pointer" : "default" }}
        >
          <Box
            component="img"
            src="/logo.png"
            onClick={collapsed ? onToggle : undefined}
            sx={{
              width: 30,
              height: 30,
              objectFit: "contain",
              cursor: collapsed ? "pointer" : "default"
            }}
          />
          {!collapsed && (
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 800, color: "white", letterSpacing: -0.4, lineHeight: 1, display: "flex", alignItems: "center" }}
            >
              Extorial
            </Typography>
          )}
        </Stack>

        {!collapsed && (
          <IconButton size="small" onClick={onToggle} sx={{ color: "#94a3b8", ml: 1 }}>
            <ChevronLeftIcon fontSize="small" />
          </IconButton>
        )}
      </Box>

      <Box sx={{ flex: 1, overflowY: "auto", py: 2, px: collapsed ? 1 : 1.5 }}>
        <Stack spacing={1}>
          {NAV_GROUPS.map((group) => (
            <Box key={group.title}>
              {!collapsed && group.title && (
                <Typography
                  variant="caption"
                  sx={{
                    px: 1.5,
                    pt: 2,
                    pb: 1,
                    display: "block",
                    color: "#475569",
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    fontWeight: 700,
                    fontSize: 10
                  }}
                >
                  {group.title}
                </Typography>
              )}
              <List disablePadding>
                {group.items.map((item) => {
                  const active = isItemActive(item);
                  return (
                    <ListItemButton
                      key={item.label}
                      selected={active}
                      onClick={item.to ? () => navigate(item.to as string) : undefined}
                      sx={{
                        px: collapsed ? 1 : 1.5,
                        py: 1.25,
                        mb: 0.5,
                        borderRadius: 0.5,
                        justifyContent: collapsed ? "center" : "flex-start",
                        color: active ? "white" : "#cbd5e1",
                        bgcolor: active ? "rgba(13, 162, 231, 0.1)" : "transparent",
                        borderLeft: active ? "2px solid #0da2e7" : "2px solid transparent",
                        "&.Mui-selected": {
                          bgcolor: "rgba(13, 162, 231, 0.1)",
                          color: "white"
                        },
                        "&.Mui-selected:hover": { bgcolor: "rgba(13, 162, 231, 0.15)" },
                        "&:hover": { bgcolor: "rgba(30, 41, 59, 1)", color: "white" }
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: collapsed ? 0 : 32, color: "inherit" }}>{item.icon}</ListItemIcon>
                      {!collapsed && (
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{
                            fontSize: 13,
                            fontWeight: active ? 600 : 500
                          }}
                        />
                      )}
                    </ListItemButton>
                  );
                })}
              </List>
            </Box>
          ))}
        </Stack>
      </Box>

      <Box sx={{ p: 2, borderTop: "1px solid #1e293b" }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: collapsed ? 0 : 1.5, px: 1, py: 1, justifyContent: collapsed ? "center" : "space-between" }}>
          {!collapsed && (
            <>
              <Avatar sx={{ width: 32, height: 32, bgcolor: '#334155', border: '1px solid #475569' }}>A</Avatar>
              <Box sx={{ flex: 1, overflow: 'hidden' }}>
                <Typography variant="caption" sx={{ fontWeight: 600, color: 'white', display: 'block', lineHeight: 1.2 }}>
                  Alex Thompson
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748b', fontSize: 10 }}>
                  System Administrator
                </Typography>
              </Box>
            </>
          )}
          <IconButton size="small" sx={{ color: '#64748b', "&:hover": { color: 'white' } }}>
            <LogoutOutlinedIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
