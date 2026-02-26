import { AppBar, Box, IconButton, InputBase, Stack, Toolbar, Typography, Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";

export const HEADER_HEIGHT = 64;

export function HeaderBar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        color: "text.primary",
        borderBottom: "1px solid #e2e8f0"
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          gap: 3,
          minHeight: HEADER_HEIGHT,
          px: 3
        }}
      >
        {/* Search Bar */}
        <Box sx={{ flex: 1, maxWidth: 680 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: 1,
              px: 1.5,
              py: 0.5,
              "&:focus-within": {
                borderColor: "primary.main",
                bgcolor: "#fff",
                boxShadow: "0 0 0 1px #0da2e7"
              }
            }}
          >
            <SearchIcon sx={{ color: "#94a3b8", fontSize: 20, mr: 1 }} />
            <InputBase
              placeholder="Search records, courses, or analytics..."
              fullWidth
              sx={{ fontSize: 13 }}
            />
          </Box>
        </Box>

        {/* Right Section */}
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton size="small" sx={{ color: "#64748b" }}>
            <Badge variant="dot" color="error" overlap="circular">
              <NotificationsNoneOutlinedIcon fontSize="small" />
            </Badge>
          </IconButton>
          <IconButton size="small" sx={{ color: "#64748b" }}>
            <ChatBubbleOutlineOutlinedIcon fontSize="small" />
          </IconButton>

          <Box sx={{ h: 24, w: '1px', bgcolor: '#e2e8f0', mx: 1 }} />

          <Stack sx={{ textAlign: 'right', mr: 1 }}>
            <Typography variant="caption" sx={{ fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>
              Extorial
            </Typography>
            <Typography variant="caption" sx={{ color: '#64748b', fontSize: 10 }}>
              v4.2.0-stable
            </Typography>
          </Stack>

          <Box sx={{
            width: 32,
            height: 32,
            bgcolor: 'rgba(13, 162, 231, 0.1)',
            color: 'primary.main',
            borderRadius: 0.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <AppsOutlinedIcon fontSize="small" />
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
