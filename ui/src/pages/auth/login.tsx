import { Box, Button, TextField, Typography, Paper, Container, Stack, Divider, InputAdornment, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";

export default function LoginPage() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#0f172a', // Matching the sidebar background for a cohesive theme
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
            backgroundSize: '40px 40px',
        }}>
            <Container maxWidth="xs">
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Box
                        component="img"
                        src="/logo.png"
                        sx={{
                            width: 64,
                            height: 64,
                            display: 'block',
                            mx: 'auto',
                            mb: 2,
                            filter: 'drop-shadow(0 0 10px rgba(13, 162, 231, 0.4))'
                        }}
                    />
                    <Typography variant="h4" fontWeight={800} sx={{ color: 'white', letterSpacing: -1 }}>
                        Extorials
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#64748b', mt: 1, fontWeight: 500 }}>
                        Extorial Learning Management System
                    </Typography>
                </Box>

                <Paper elevation={0} sx={{
                    p: 4,
                    bgcolor: '#1e293b',
                    borderRadius: 2,
                    border: '1px solid #334155'
                }}>
                    <Stack spacing={2.5}>
                        <Box>
                            <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 600, mb: 1, display: 'block' }}>
                                EMAIL ADDRESS
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="name@company.com"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        color: 'white',
                                        bgcolor: '#0f172a',
                                        '& fieldset': { borderColor: '#334155' },
                                        '&:hover fieldset': { borderColor: '#475569' },
                                    }
                                }}
                            />
                        </Box>

                        <Box>
                            <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 600, mb: 1, display: 'block' }}>
                                PASSWORD
                            </Typography>
                            <TextField
                                fullWidth
                                type={showPassword ? "text" : "password"}
                                variant="outlined"
                                placeholder="••••••••"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowPassword(!showPassword)}
                                                sx={{ color: '#64748b' }}
                                            >
                                                {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        color: 'white',
                                        bgcolor: '#0f172a',
                                        '& fieldset': { borderColor: '#334155' },
                                        '&:hover fieldset': { borderColor: '#475569' },
                                    }
                                }}
                            />
                        </Box>

                        <Button
                            variant="contained"
                            size="large"
                            fullWidth
                            onClick={() => navigate('/')}
                            sx={{
                                py: 1.5,
                                fontWeight: 700,
                                fontSize: 13,
                                boxShadow: '0 4px 14px 0 rgba(13, 162, 231, 0.39)'
                            }}
                        >
                            Sign In to Dashboard
                        </Button>
                    </Stack>

                    <Divider sx={{ my: 4, '&:before, &:after': { borderColor: '#334155' } }}>
                        <Typography variant="caption" sx={{ color: '#475569', fontWeight: 700 }}>OR CONTINUE WITH</Typography>
                    </Divider>

                    <Stack direction="row" spacing={2}>
                        <Button
                            variant="outlined"
                            fullWidth
                            startIcon={<GoogleIcon />}
                            sx={{
                                color: '#cbd5e1',
                                borderColor: '#334155',
                                py: 1,
                                fontSize: 12,
                                fontWeight: 600,
                                '&:hover': { borderColor: '#475569', bgcolor: 'rgba(255,255,255,0.02)' }
                            }}
                        >
                            Google
                        </Button>
                        <Button
                            variant="outlined"
                            fullWidth
                            startIcon={<GitHubIcon />}
                            sx={{
                                color: '#cbd5e1',
                                borderColor: '#334155',
                                py: 1,
                                fontSize: 12,
                                fontWeight: 600,
                                '&:hover': { borderColor: '#475569', bgcolor: 'rgba(255,255,255,0.02)' }
                            }}
                        >
                            GitHub
                        </Button>
                    </Stack>
                </Paper>

                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ color: '#64748b' }}>
                        Need a corporate account? <Button variant="text" size="small" sx={{ color: 'primary.main', fontWeight: 800 }}>Contact Sales</Button>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
