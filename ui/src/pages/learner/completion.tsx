import { Box, Button, Paper, Typography, Container, Stack, Avatar } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShareIcon from "@mui/icons-material/Share";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

export default function CourseCompletion() {
    const navigate = useNavigate();

    return (
        <Box sx={{
            minHeight: '100vh',
            bgcolor: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(13, 162, 231, 0.05) 0%, transparent 50%)'
        }}>
            <Container maxWidth="sm">
                <Box sx={{ textAlign: 'center', py: 6 }}>
                    {/* Celebration Icon */}
                    <Box sx={{ position: 'relative', display: 'inline-block', mb: 4 }}>
                        <Box sx={{
                            position: 'absolute',
                            inset: -20,
                            borderRadius: '50%',
                            bgcolor: 'rgba(13, 162, 231, 0.1)',
                            animation: 'pulse 2s infinite'
                        }} />
                        <Avatar sx={{ width: 100, height: 100, bgcolor: '#0da2e7', boxShadow: '0 10px 25px -5px rgba(13, 162, 231, 0.4)' }}>
                            <CheckCircleIcon sx={{ fontSize: 60 }} />
                        </Avatar>
                    </Box>

                    <Typography variant="h3" sx={{ fontWeight: 900, color: '#0f172a', mb: 1, letterSpacing: -1 }}>
                        Course Completed!
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#64748b', mb: 5, fontSize: 18 }}>
                        Outstanding work! You've mastered the concepts in <br />
                        <strong style={{ color: '#0f172a' }}>Advanced Systems Architecture</strong>.
                    </Typography>

                    <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid #e2e8f0', bgcolor: 'white', mb: 5 }}>
                        <Stack spacing={3}>
                            <Box sx={{
                                p: 3,
                                borderRadius: 3,
                                bgcolor: 'rgba(13, 162, 231, 0.03)',
                                border: '2px dashed #e2e8f0',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 3
                            }}>
                                <WorkspacePremiumIcon sx={{ color: '#0da2e7', fontSize: 48 }} />
                                <Box sx={{ textAlign: 'left' }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0f172a' }}>Verified Certificate</Typography>
                                    <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 600, display: 'block' }}>Issued on February 26, 2026</Typography>
                                    <Typography variant="caption" sx={{ color: '#64748b', fontSize: 10, fontFamily: 'monospace' }}>EXT-ASA-492-BF-2026</Typography>
                                </Box>
                            </Box>

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    onClick={() => navigate('/learner/certificates')}
                                    sx={{ py: 1.5, borderRadius: 2, fontWeight: 700, bgcolor: '#0da2e7' }}
                                >
                                    Download Certificate
                                </Button>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    size="large"
                                    startIcon={<ShareIcon />}
                                    sx={{ py: 1.5, borderRadius: 2, fontWeight: 700, borderColor: '#e2e8f0', color: '#475569' }}
                                >
                                    Share Achievement
                                </Button>
                            </Stack>
                        </Stack>
                    </Paper>

                    <Stack spacing={2} alignItems="center">
                        <Button
                            variant="text"
                            endIcon={<ArrowForwardIcon />}
                            onClick={() => navigate('/learner/dashboard')}
                            sx={{ color: '#0da2e7', fontWeight: 700, fontSize: 16 }}
                        >
                            Back to My Learning
                        </Button>
                        <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 500 }}>
                            You can always revisit this course from your dashboard.
                        </Typography>
                    </Stack>
                </Box>
            </Container>

            <style>
                {`
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.5); opacity: 0; }
                    100% { transform: scale(1); opacity: 0.5; }
                }
                `}
            </style>
        </Box>
    );
}
