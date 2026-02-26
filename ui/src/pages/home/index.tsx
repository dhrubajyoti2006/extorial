import { Box, Typography, Button, Stack } from "@mui/material";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import AddIcon from "@mui/icons-material/Add";

export default function HomePage() {
  return (
    <Box sx={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 128px)'
    }}>
      <Box sx={{ maxWidth: 400, textAlign: 'center' }}>
        <Box sx={{
          width: 80,
          height: 80,
          bgcolor: 'white',
          border: '1px solid #e2e8f0',
          borderRadius: 3,
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mx: 'auto',
          mb: 3
        }}>
          <DashboardCustomizeOutlinedIcon sx={{ fontSize: 40, color: '#cbd5e1' }} />
        </Box>
        <Typography variant="h5" fontWeight={800} sx={{ color: '#0f172a', mb: 1, letterSpacing: -0.5 }}>
          Ready to Build
        </Typography>
        <Typography variant="body2" sx={{ color: '#64748b', mb: 4, lineHeight: 1.6 }}>
          This workspace is currently empty. Select a module from the sidebar or use the global search to find specific records.
        </Typography>
        <Stack spacing={1.5}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              py: 1.25,
              fontWeight: 700,
              boxShadow: '0 10px 15px -3px rgba(13, 162, 231, 0.2)'
            }}
          >
            Create New Record
          </Button>
          <Button
            variant="outlined"
            sx={{
              py: 1.25,
              fontWeight: 700,
              borderColor: '#e2e8f0',
              color: '#334155',
              '&:hover': { borderColor: '#cbd5e1', bgcolor: '#f8fafc' }
            }}
          >
            View Documentation
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
