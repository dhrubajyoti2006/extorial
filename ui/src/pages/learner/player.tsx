import { Box, Button, IconButton, Paper, Typography, LinearProgress, Stack, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LockIcon from "@mui/icons-material/Lock";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useNavigate } from "react-router-dom";

export default function LearningPlayer() {
    const navigate = useNavigate();

    const lessons = [
        { id: 1, title: "Introduction to Distributed Systems", duration: "12:45", status: "completed" },
        { id: 2, title: "CAP Theorem and Trade-offs", duration: "24:10", status: "current" },
        { id: 3, title: "Consistency Models Deep Dive", duration: "18:20", status: "locked" },
        { id: 4, title: "Data Partitioning Strategies", duration: "21:55", status: "locked" },
        { id: 5, title: "Leader Election Algorithms", duration: "15:30", status: "locked" },
    ];

    return (
        <Box sx={{ height: '100vh', display: 'flex', bgcolor: '#f8fbff', overflow: 'hidden' }}>
            {/* Left: Video Player Area */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                {/* Player Top Bar */}
                <Box sx={{ height: 64, px: 3, display: 'flex', alignItems: 'center', borderBottom: '1px solid #e2e8f0', bgcolor: '#ffffff', backdropFilter: 'blur(8px)', zIndex: 10 }}>
                    <IconButton sx={{ color: '#64748b', mr: 2 }} onClick={() => navigate(-1)}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="caption" sx={{ color: '#0da2e7', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>
                            Module 1: Foundations
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#0f172a', fontWeight: 600 }}>
                            CAP Theorem and Trade-offs
                        </Typography>
                    </Box>
                    <Stack direction="row" spacing={2}>
                        <Button variant="text" sx={{ color: '#64748b', fontWeight: 600 }}>Support</Button>
                        <Button variant="text" sx={{ color: '#64748b', fontWeight: 600 }}>Resources</Button>
                    </Stack>
                </Box>

                {/* Video Main Area */}
                <Box sx={{ flex: 1, p: 4, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{
                        width: '100%',
                        maxWidth: 1000,
                        aspectRatio: '16/9',
                        bgcolor: 'black',
                        borderRadius: 2,
                        overflow: 'hidden',
                        position: 'relative',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAL9HB4F5nLq8wMRbvPpfQRl4HyfI8Etg0U7EEidmD7RLGIHcnyljuIOnlr2-JkJbUwYHpqpzMZh-uyr9Xz9iuEXcjhbamG31yz-ELMFK6yj4RXqJNJkcptK0UDCdKsT9pp-9i4F18fSftwOQkImHel7OOiC8S4JabQxAjSsLgUxrd33zBlxuMnErGuqjBSY1iB_rsktQV-mA7WZ2fPbM4DMaLJWU0VyhkQbAqjeCYCN8Jn0z__6AKRVoMVzIZH-vHYzTuUyn6z70Y")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <IconButton sx={{ bgcolor: '#0da2e7', color: 'white', '&:hover': { bgcolor: '#0b8fd0' }, width: 80, height: 80 }}>
                                <PlayCircleOutlineIcon sx={{ fontSize: 50 }} />
                            </IconButton>
                        </Box>

                        {/* Player Overlay Controls */}
                        <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 2, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                            <LinearProgress
                                variant="determinate"
                                value={45}
                                sx={{
                                    height: 4,
                                    bgcolor: 'rgba(255,255,255,0.2)',
                                    mb: 2,
                                    '& .MuiLinearProgress-bar': { bgcolor: '#0da2e7' }
                                }}
                            />
                            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ color: 'white' }}>
                                <Stack direction="row" spacing={2}>
                                    <IconButton color="inherit" size="small"><KeyboardArrowLeftIcon /></IconButton>
                                    <IconButton color="inherit" size="small"><PlayCircleOutlineIcon /></IconButton>
                                    <IconButton color="inherit" size="small"><KeyboardArrowRightIcon /></IconButton>
                                    <Typography variant="caption" sx={{ mt: 0.5 }}>12:45 / 24:10</Typography>
                                </Stack>
                                <Stack direction="row" spacing={2}>
                                    <Typography variant="caption" sx={{ mt: 0.5, cursor: 'pointer' }}>1.0x</Typography>
                                    <IconButton color="inherit" size="small"><LockIcon sx={{ fontSize: 16 }} /></IconButton>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Box>

                {/* Bottom Lessons Controls */}
                <Box sx={{ height: 80, px: 4, borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', bgcolor: '#ffffff' }}>
                    <Button
                        startIcon={<KeyboardArrowLeftIcon />}
                        sx={{ color: '#64748b', fontWeight: 600 }}
                    >
                        Previous Lesson
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/learner/completion/1')}
                        sx={{
                            bgcolor: '#0da2e7',
                            fontWeight: 700,
                            px: 4,
                            borderRadius: 1,
                            boxShadow: '0 10px 15px -3px rgba(13, 162, 231, 0.3)'
                        }}
                    >
                        Complete and Continue
                    </Button>
                    <Button
                        endIcon={<KeyboardArrowRightIcon />}
                        sx={{ color: '#64748b', fontWeight: 600 }}
                    >
                        Next Lesson
                    </Button>
                </Box>
            </Box>

            {/* Right: Lesson List Sidebar */}
            <Paper square sx={{ width: 320, borderLeft: '1px solid #e2e8f0', bgcolor: '#ffffff', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ p: 2.5, borderBottom: '1px solid #e2e8f0' }}>
                    <Typography variant="subtitle2" sx={{ color: '#0f172a', fontWeight: 800, mb: 0.5 }}>
                        Advanced Systems Architecture
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ flex: 1 }}>
                            <LinearProgress variant="determinate" value={25} sx={{ height: 4, borderRadius: 2, bgcolor: '#e2e8f0' }} />
                        </Box>
                        <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 700 }}>25%</Typography>
                    </Box>
                </Box>

                <Box sx={{ flex: 1, overflowY: 'auto' }}>
                    <List disablePadding>
                        <Box sx={{ px: 2.5, py: 1.5, bgcolor: '#f8fafc' }}>
                            <Typography variant="caption" sx={{ color: '#0da2e7', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                Module 1: Foundations
                            </Typography>
                        </Box>
                        {lessons.map((lesson) => {
                            const isCurrent = lesson.status === 'current';
                            const isCompleted = lesson.status === 'completed';
                            const isLocked = lesson.status === 'locked';

                            return (
                                <ListItemButton
                                    key={lesson.id}
                                    selected={isCurrent}
                                    disabled={isLocked}
                                    sx={{
                                        px: 2.5,
                                        py: 2,
                                        borderLeft: isCurrent ? '3px solid #0da2e7' : '3px solid transparent',
                                        '&.Mui-selected': { bgcolor: 'rgba(13, 162, 231, 0.1)', color: '#0f172a' },
                                        '&:hover': { bgcolor: '#f8fafc' }
                                    }}
                                >
                                    <ListItemIcon sx={{ minWidth: 28 }}>
                                        {isCompleted ? <CheckCircleIcon sx={{ color: '#10b981', fontSize: 18 }} /> : (isLocked ? <LockIcon sx={{ color: '#475569', fontSize: 16 }} /> : <PlayCircleOutlineIcon sx={{ color: isCurrent ? '#0da2e7' : '#94a3b8', fontSize: 20 }} />)}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={lesson.title}
                                        secondary={lesson.duration}
                                        primaryTypographyProps={{
                                            fontSize: 13,
                                            fontWeight: isCurrent ? 700 : 500,
                                            color: isLocked ? '#94a3b8' : (isCurrent ? '#0f172a' : '#334155')
                                        }}
                                        secondaryTypographyProps={{ fontSize: 11, color: '#64748b' }}
                                    />
                                </ListItemButton>
                            );
                        })}
                    </List>
                </Box>

                <Box sx={{ p: 2, borderTop: '1px solid #e2e8f0' }}>
                    <Typography variant="caption" sx={{ color: '#64748b', display: 'block', mb: 1.5, textAlign: 'center' }}>
                        Need help? Join the <span style={{ color: '#0da2e7', cursor: 'pointer' }}>Community Discussion</span>
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
}
