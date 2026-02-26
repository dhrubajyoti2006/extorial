import { Box, Typography, Stack } from "@mui/material";

export const FOOTER_HEIGHT = 32;

export function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                height: FOOTER_HEIGHT,
                bgcolor: "#ffffff",
                borderTop: "1px solid #e2e8f0",
                px: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: 0
            }}
        >
            <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#10b981' }} />
                    <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 600, fontSize: 9, letterSpacing: 0.5, textTransform: 'uppercase' }}>
                        System Online
                    </Typography>
                </Box>
                <Box sx={{ width: '1px', height: 12, bgcolor: '#e2e8f0' }} />
                <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: 9 }}>
                    Response Time: 24ms
                </Typography>
            </Stack>

            <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: 9 }}>
                © 2026 Extorial
            </Typography>
        </Box>
    );
}
