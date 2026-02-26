import { Box, Button, Typography, Paper, Grid, Stack, Divider, Avatar } from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BarChartIcon from "@mui/icons-material/BarChart";
import LanguageIcon from "@mui/icons-material/Language";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

export default function CourseOverview() {
    const navigate = useNavigate();

    const modules = [
        { id: '01', title: "Foundations of Distributed Systems", lessons: "8 Lessons", duration: "2h 15m" },
        { id: '02', title: "Consistency Models & Data Partitioning", lessons: "6 Lessons", duration: "3h 10m" },
        { id: '03', title: "Microservices vs. Event-Driven Design", lessons: "9 Lessons", duration: "2h 45m" },
        { id: '04', title: "Resilience and Fault Tolerance", lessons: "7 Lessons", duration: "3h 20m" },
    ];

    return (
        <Box sx={{ mx: -3, mt: -3, bgcolor: '#f8fbff' }}>
            {/* Hero Header */}
            <Box sx={{
                position: 'relative',
                height: 320,
                width: '100%',
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBa76MNCnAu6R3tGsOePq-DRu1d81tF_7CTyaNVfp-XvdAznWGLIoONraQDHRLHmXPH6KyEGCXBcxFviLL8n-x_UX6ltfSKASZkH4lGMjIGgIuzAvN42haoVFxDnrGYLaCp6pCGveo738NSC-4I5JWyibDBInmicAihBX4TPZ8EEWPBv2xEhVFvVYdvL1y37lTMnNzhA66YAifNeFgmjrG-0ly3W3r7jNESwOvRIp4bmO1SGszKNYRnvuTZBjNVymYmbvX-0i852rI")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'flex-end',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, #0f172a, rgba(15, 23, 42, 0.8), transparent)',
                    zIndex: 1
                }
            }}>
                <Box sx={{ position: 'relative', zIndex: 2, p: { xs: 3, md: 6 }, maxWidth: 1000, w: '100%' }}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                        <Typography variant="caption" sx={{
                            bgcolor: 'rgba(13, 162, 231, 0.2)',
                            color: '#0da2e7',
                            fontWeight: 800,
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 10,
                            border: '1px solid rgba(13, 162, 231, 0.3)',
                            textTransform: 'uppercase',
                            fontSize: 10,
                            letterSpacing: 1
                        }}>
                            Advanced Level
                        </Typography>
                        <Stack direction="row" spacing={0.5} alignItems="center" sx={{ color: '#cbd5e1' }}>
                            <ScheduleIcon sx={{ fontSize: 14 }} />
                            <Typography variant="caption" sx={{ fontWeight: 500 }}>14h 30m total</Typography>
                        </Stack>
                    </Stack>
                    <Typography variant="h2" sx={{ fontWeight: 900, color: 'white', mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: -1, lineHeight: 1.1 }}>
                        Advanced Systems Architecture
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#cbd5e1', fontWeight: 400, maxWidth: 700, lineHeight: 1.5 }}>
                        Master the complexities of modern enterprise-scale infrastructure and distributed systems.
                    </Typography>
                </Box>
            </Box>

            {/* Content Section */}
            <Box sx={{ p: { xs: 3, md: 6 }, maxWidth: 1200, mx: 'auto' }}>
                <Grid container spacing={6}>
                    {/* Left Column */}
                    <Grid item xs={12} lg={8}>
                        <Stack spacing={8}>
                            {/* About Section */}
                            <Box>
                                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
                                    <InfoOutlinedIcon sx={{ color: '#0da2e7' }} />
                                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a' }}>
                                        About this course
                                    </Typography>
                                </Stack>
                                <Typography variant="body1" sx={{ color: '#64748b', lineHeight: 1.8, fontSize: 17, mb: 3 }}>
                                    This intensive course is designed for senior engineers and aspiring solution architects who need to navigate the intricate landscape of global-scale systems. We go beyond basic cloud deployment to explore the trade-offs of consistency, availability, and partition tolerance in distributed environments.
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#64748b', lineHeight: 1.8, fontSize: 17 }}>
                                    You will learn how to design for multi-region resilience, implement sophisticated message-driven workflows, and master the art of observability at scale. By the end of this track, you will have the mental models required to architect systems that serve millions of concurrent users with sub-millisecond latency.
                                </Typography>
                            </Box>

                            {/* Curriculum Section */}
                            <Box>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
                                    <Stack direction="row" spacing={1.5} alignItems="center">
                                        <ListAltIcon sx={{ color: '#0da2e7' }} />
                                        <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a' }}>
                                            Course Curriculum
                                        </Typography>
                                    </Stack>
                                    <Typography variant="body2" sx={{ color: '#94a3b8', fontWeight: 600 }}>
                                        6 Modules • 42 Lessons
                                    </Typography>
                                </Stack>

                                <Stack spacing={2}>
                                    {modules.map((mod) => (
                                        <Paper
                                            key={mod.id}
                                            elevation={0}
                                            sx={{
                                                p: 2.5,
                                                borderRadius: 3,
                                                border: '1px solid #e2e8f0',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s',
                                                '&:hover': { bgcolor: '#f8fafc', borderColor: '#cbd5e1' },
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between'
                                            }}
                                        >
                                            <Stack direction="row" spacing={3} alignItems="center">
                                                <Box sx={{
                                                    width: 44,
                                                    height: 44,
                                                    borderRadius: 2,
                                                    bgcolor: '#f1f5f9',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#0da2e7',
                                                    fontWeight: 800,
                                                    fontSize: 16
                                                }}>
                                                    {mod.id}
                                                </Box>
                                                <Box>
                                                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0f172a' }}>
                                                        {mod.title}
                                                    </Typography>
                                                    <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 600 }}>
                                                        {mod.lessons} • {mod.duration}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                            <ExpandMoreIcon sx={{ color: '#cbd5e1' }} />
                                        </Paper>
                                    ))}
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>

                    {/* Right Column */}
                    <Grid item xs={12} lg={4}>
                        <Stack spacing={4} sx={{ position: 'sticky', top: 24 }}>
                            {/* Action Card */}
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    borderRadius: 4,
                                    border: '1px solid #e2e8f0',
                                    bgcolor: 'white',
                                    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)'
                                }}
                            >
                                <Stack spacing={3}>
                                    <Stack spacing={2}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ color: '#64748b' }}>
                                                <BarChartIcon sx={{ fontSize: 18 }} />
                                                <Typography variant="body2" sx={{ fontWeight: 500 }}>Difficulty</Typography>
                                            </Stack>
                                            <Typography variant="body2" sx={{ fontWeight: 700, color: '#0f172a' }}>Advanced</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ color: '#64748b' }}>
                                                <LanguageIcon sx={{ fontSize: 18 }} />
                                                <Typography variant="body2" sx={{ fontWeight: 500 }}>Language</Typography>
                                            </Stack>
                                            <Typography variant="body2" sx={{ fontWeight: 700, color: '#0f172a' }}>English</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ color: '#64748b' }}>
                                                <VerifiedUserOutlinedIcon sx={{ fontSize: 18 }} />
                                                <Typography variant="body2" sx={{ fontWeight: 500 }}>Certificate</Typography>
                                            </Stack>
                                            <Typography variant="body2" sx={{ fontWeight: 700, color: '#0f172a' }}>Included</Typography>
                                        </Box>
                                    </Stack>

                                    <Divider sx={{ borderStyle: 'dashed' }} />

                                    <Stack spacing={2}>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            size="large"
                                            endIcon={<ArrowForwardIcon />}
                                            onClick={() => navigate('/learner/player/1')}
                                            sx={{
                                                py: 2,
                                                borderRadius: 2,
                                                fontWeight: 800,
                                                boxShadow: '0 10px 15px -3px rgba(13, 162, 231, 0.3)'
                                            }}
                                        >
                                            Start Course
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            fullWidth
                                            size="large"
                                            sx={{
                                                py: 1.5,
                                                borderRadius: 2,
                                                fontWeight: 700,
                                                borderColor: '#e2e8f0',
                                                color: '#475569',
                                                '&:hover': { bgcolor: '#f8fafc', borderColor: '#cbd5e1' }
                                            }}
                                        >
                                            Add to Syllabus
                                        </Button>
                                    </Stack>
                                    <Typography variant="caption" sx={{ color: '#94a3b8', textAlign: 'center', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                        100% Free for Enterprise users
                                    </Typography>
                                </Stack>
                            </Paper>

                            {/* Instructor Info */}
                            <Box sx={{ px: 1 }}>
                                <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, display: 'block', mb: 2 }}>
                                    Lead Instructor
                                </Typography>
                                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                                    <Avatar
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpfxvUDNNVLKEfEbA20oWCPEmKDwipGg9yS5Axwg2OhdI70b180ZVLLp4K3l5_q71L9A2cL22gHDtfGGnoFUMN65hkyTGlI9-_Je6AsrvhUKqjiKBaMbsyRLEAX9q2mRma4JxzAVy4USaVg-iEYEl8-yBASq0uspOkK7Qmg8OHbtusjDt3K735rq6cd_7L06rM-5yr0wEY5RHiQG1ObwHkWIk2inmnKCBdqrPpEpQ1rH8IaMyAQXnfIf4gndF2-iSeWJL4FcbBoqI"
                                        sx={{ width: 56, height: 56, border: '2px solid rgba(13, 162, 231, 0.2)' }}
                                    />
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>Dr. Elias Vance</Typography>
                                        <Typography variant="caption" sx={{ color: '#64748b' }}>Principal Architect at NexGen Systems</Typography>
                                    </Box>
                                </Stack>
                                <Typography variant="body2" sx={{ color: '#94a3b8', fontStyle: 'italic', lineHeight: 1.6 }}>
                                    "Designing systems at scale isn't about avoiding failure; it's about building a system that can gracefully fail without losing data or trust."
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
