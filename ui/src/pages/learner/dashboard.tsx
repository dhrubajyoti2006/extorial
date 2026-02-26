import { Box, Typography, Button, Paper, Grid, Stack, LinearProgress, Card, IconButton } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

export default function LearnerDashboard() {
    const navigate = useNavigate();

    return (
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 900, color: '#0f172a', letterSpacing: -1, mb: 1 }}>
                    My Learning
                </Typography>
                <Typography variant="body1" sx={{ color: '#64748b', fontWeight: 500 }}>
                    Manage your progress, certificates, and explore new learning paths.
                </Typography>
            </Box>
            {/* Ongoing Courses */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} md={6}>
                    <Paper
                        elevation={0}
                        sx={{
                            borderRadius: 3,
                            overflow: 'hidden',
                            bgcolor: 'white',
                            border: '1px solid #e2e8f0',
                        }}
                    >
                        <Box sx={{
                            height: 220,
                            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAL9HB4F5nLq8wMRbvPpfQRl4HyfI8Etg0U7EEidmD7RLGIHcnyljuIOnlr2-JkJbUwYHpqpzMZh-uyr9Xz9iuEXcjhbamG31yz-ELMFK6yj4RXqJNJkcptK0UDCdKsT9pp-9i4F18fSftwOQkImHel7OOiC8S4JabQxAjSsLgUxrd33zBlxuMnErGuqjBSY1iB_rsktQV-mA7WZ2fPbM4DMaLJWU0VyhkQbAqjeCYCN8Jn0z__6AKRVoMVzIZH-vHYzTuUyn6z70Y")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }} />
                        <Box sx={{ p: 3 }}>
                            <Typography variant="overline" sx={{ color: '#0da2e7', fontWeight: 800, letterSpacing: 1.5, mb: 1 }}>
                                Ongoing Course
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 900, color: '#0f172a', mb: 1 }}>
                                Enterprise Security 101
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#64748b', mb: 2.5 }}>
                                Resume at <strong>Module 4: Network Protocols</strong>. You have completed 75% of this track.
                            </Typography>

                            <Box sx={{ mb: 2.5 }}>
                                <LinearProgress
                                    variant="determinate"
                                    value={75}
                                    sx={{
                                        height: 8,
                                        borderRadius: 4,
                                        bgcolor: '#f1f5f9',
                                        '& .MuiLinearProgress-bar': { borderRadius: 4 }
                                    }}
                                />
                            </Box>

                            <Button
                                variant="contained"
                                startIcon={<PlayCircleOutlineIcon />}
                                onClick={() => navigate("/learner/player/1")}
                                sx={{
                                    py: 1.2,
                                    px: 3,
                                    borderRadius: 1,
                                    fontWeight: 700,
                                    width: 'fit-content',
                                    boxShadow: '0 10px 15px -3px rgba(13, 162, 231, 0.3)'
                                }}
                            >
                                Resume Learning
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper
                        elevation={0}
                        sx={{
                            borderRadius: 3,
                            overflow: 'hidden',
                            bgcolor: 'white',
                            border: '1px solid #e2e8f0',
                        }}
                    >
                        <Box sx={{
                            height: 220,
                            backgroundImage: 'url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuDNUrvcI58mF37pno0NjSXYaGFi2dirRP2mVNRoF4TxeINeSzaRaY9n79h5WghN_b1RWTSHo-Ds1JnKQqeH_1Q1NcK1xUInyfJhmbNfphVst2-zQnhQQ9FT2Iog_qtbhk_TtDaFpEaTqcOucUsVlWZOXpiFrJuwOHW0vYDUf5Dc8AIwL9LVxIOBM05CtFcGx786qYnkqRiM2zufv-PHUeM0c4aUIfBuSDDgyNPgLli5Sy4Vuui7ssBBJkLuXECCSFRZBCaw3Y4MgbY\")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }} />
                        <Box sx={{ p: 3 }}>
                            <Typography variant="overline" sx={{ color: '#0da2e7', fontWeight: 800, letterSpacing: 1.5, mb: 1 }}>
                                Ongoing Course
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 900, color: '#0f172a', mb: 1 }}>
                                Cloud Architecture
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#64748b', mb: 2.5 }}>
                                Resume at <strong>Module 3: Serverless</strong>. You have completed 85% of this track.
                            </Typography>

                            <Box sx={{ mb: 2.5 }}>
                                <LinearProgress
                                    variant="determinate"
                                    value={85}
                                    sx={{
                                        height: 8,
                                        borderRadius: 4,
                                        bgcolor: '#f1f5f9',
                                        '& .MuiLinearProgress-bar': { borderRadius: 4 }
                                    }}
                                />
                            </Box>

                            <Button
                                variant="contained"
                                startIcon={<PlayCircleOutlineIcon />}
                                onClick={() => navigate("/learner/player/1")}
                                sx={{
                                    py: 1.2,
                                    px: 3,
                                    borderRadius: 1,
                                    fontWeight: 700,
                                    width: 'fit-content',
                                    boxShadow: '0 10px 15px -3px rgba(13, 162, 231, 0.3)'
                                }}
                            >
                                Resume Learning
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            {/* Grid: Active Courses & Stats */}
            <Grid container spacing={4}>
                {/* Left: Active Courses */}
                <Grid item xs={12} lg={8}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                        <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a' }}>
                            Active Courses
                        </Typography>
                        <Button variant="text" sx={{ fontWeight: 700, color: '#0da2e7' }}>View all</Button>
                    </Stack>

                    <Grid container spacing={3}>
                        {/* Course Card 1 */}
                        <Grid item xs={12} md={6}>
                            <Card
                                elevation={0}
                                sx={{
                                    borderRadius: 3,
                                    border: '1px solid #e2e8f0',
                                    transition: 'all 0.2s',
                                    '&:hover': { borderColor: '#0da2e7', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }
                                }}
                            >
                                <Box sx={{ p: 2 }}>
                                    <Box sx={{
                                        width: '100%',
                                        aspectRatio: '16/9',
                                        borderRadius: 2,
                                        backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNUrvcI58mF37pno0NjSXYaGFi2dirRP2mVNRoF4TxeINeSzaRaY9n79h5WghN_b1RWTSHo-Ds1JnKQqeH_1Q1NcK1xUInyfJhmbNfphVst2-zQnhQQ9FT2Iog_qtbhk_TtDaFpEaTqcOucUsVlWZOXpiFrJuwOHW0vYDUf5Dc8AIwL9LVxIOBM05CtFcGx786qYnkqRiM2zufv-PHUeM0c4aUIfBuSDDgyNPgLli5Sy4Vuui7ssBBJkLuXECCSFRZBCaw3Y4MgbY")',
                                        backgroundSize: 'cover',
                                        mb: 2
                                    }} />
                                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#0f172a', mb: 0.5 }}>
                                        Cloud Architecture
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', mb: 2, display: 'block' }}>
                                        Current: Module 3: Serverless
                                    </Typography>

                                    <Box sx={{ mb: 2 }}>
                                        <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                                            <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 500 }}>Progress</Typography>
                                            <Typography variant="caption" sx={{ color: '#0f172a', fontWeight: 700 }}>85%</Typography>
                                        </Stack>
                                        <LinearProgress
                                            variant="determinate"
                                            value={85}
                                            sx={{ height: 6, borderRadius: 3, bgcolor: '#f1f5f9' }}
                                        />
                                    </Box>

                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        sx={{
                                            borderRadius: 1,
                                            borderColor: '#e2e8f0',
                                            color: '#475569',
                                            fontWeight: 700,
                                            '&:hover': { bgcolor: '#f8fafc', borderColor: '#cbd5e1' }
                                        }}
                                    >
                                        Resume
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>

                        {/* Course Card 2 */}
                        <Grid item xs={12} md={6}>
                            <Card
                                elevation={0}
                                sx={{
                                    borderRadius: 3,
                                    border: '1px solid #e2e8f0',
                                    transition: 'all 0.2s',
                                    '&:hover': { borderColor: '#0da2e7', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }
                                }}
                            >
                                <Box sx={{ p: 2 }}>
                                    <Box sx={{
                                        width: '100%',
                                        aspectRatio: '16/9',
                                        borderRadius: 2,
                                        backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXb5s09yhr0rZCNpG_fVhNzli9SZbvvUnD_KMhua66NXLMS1AyvM0K5gKQh6fMusT5658kSMUybNTg6WpZG1mpDoixK74RvO4E0n0sCGz3r0z1mivmyHQsIe5J-Ve2r_uX3qoD_7rVCjed-c-Uk2svCqOh0NyqnNUNZhlxooTWGAUYqHEhWeYMnAQPXDHhyO3e-0kV9QR8-aQyXK48yzyby3lCmQA-Fs_FraEXWdGVxIetu7b1ZxtEkanMRVeOWnWEMNNkzKhuIfY")',
                                        backgroundSize: 'cover',
                                        mb: 2
                                    }} />
                                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#0f172a', mb: 0.5 }}>
                                        Data Privacy Compliance
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', mb: 2, display: 'block' }}>
                                        Current: Module 1: GDPR Basics
                                    </Typography>

                                    <Box sx={{ mb: 2 }}>
                                        <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                                            <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 500 }}>Progress</Typography>
                                            <Typography variant="caption" sx={{ color: '#0f172a', fontWeight: 700 }}>40%</Typography>
                                        </Stack>
                                        <LinearProgress
                                            variant="determinate"
                                            value={40}
                                            sx={{ height: 6, borderRadius: 3, bgcolor: '#f1f5f9' }}
                                        />
                                    </Box>

                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        sx={{
                                            borderRadius: 1,
                                            borderColor: '#e2e8f0',
                                            color: '#475569',
                                            fontWeight: 700,
                                            '&:hover': { bgcolor: '#f8fafc', borderColor: '#cbd5e1' }
                                        }}
                                    >
                                        Resume
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Right: Learning Stats */}
                <Grid item xs={12} lg={4}>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a', mb: 3 }}>
                        Learning Stats
                    </Typography>

                    <Stack spacing={2} sx={{ mb: 3 }}>
                        {/* Stat Item 1 */}
                        <Paper elevation={0} sx={{ p: 2.5, borderRadius: 3, border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: 2.5 }}>
                            <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: 'rgba(13, 162, 231, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0da2e7' }}>
                                <AccessTimeIcon />
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 0.5 }}>Hours Spent</Typography>
                                <Typography variant="h5" sx={{ fontWeight: 900, color: '#0f172a' }}>42.5h</Typography>
                            </Box>
                        </Paper>

                        {/* Stat Item 2 */}
                        <Paper elevation={0} sx={{ p: 2.5, borderRadius: 3, border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: 2.5 }}>
                            <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                                <CheckCircleOutlineIcon />
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 0.5 }}>Courses Completed</Typography>
                                <Typography variant="h5" sx={{ fontWeight: 900, color: '#0f172a' }}>12</Typography>
                            </Box>
                        </Paper>

                        {/* Stat Item 3 */}
                        <Paper elevation={0} sx={{ p: 2.5, borderRadius: 3, border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: 2.5 }}>
                            <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: 'rgba(245, 158, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b' }}>
                                <MilitaryTechIcon />
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 0.5 }}>Certificates Earned</Typography>
                                <Typography variant="h5" sx={{ fontWeight: 900, color: '#0f172a' }}>04</Typography>
                            </Box>
                        </Paper>
                    </Stack>

                    {/* Activity Chart Placeholder */}
                    <Paper elevation={0} sx={{ p: 3, borderRadius: 3, bgcolor: 'rgba(13, 162, 231, 0.05)', border: '1px solid rgba(13, 162, 231, 0.1)' }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#0f172a', mb: 3 }}>This Week Activity</Typography>
                        <Stack direction="row" alignItems="flex-end" justifyContent="space-between" sx={{ height: 80, gap: 1 }}>
                            <Box sx={{ flex: 1, bgcolor: 'rgba(13, 162, 231, 0.4)', borderRadius: '4px 4px 0 0', height: '30%' }} />
                            <Box sx={{ flex: 1, bgcolor: 'rgba(13, 162, 231, 0.4)', borderRadius: '4px 4px 0 0', height: '60%' }} />
                            <Box sx={{ flex: 1, bgcolor: '#0da2e7', borderRadius: '4px 4px 0 0', height: '90%' }} />
                            <Box sx={{ flex: 1, bgcolor: 'rgba(13, 162, 231, 0.4)', borderRadius: '4px 4px 0 0', height: '45%' }} />
                            <Box sx={{ flex: 1, bgcolor: 'rgba(13, 162, 231, 0.4)', borderRadius: '4px 4px 0 0', height: '20%' }} />
                            <Box sx={{ flex: 1, bgcolor: '#e2e8f0', borderRadius: '4px 4px 0 0', height: '10%' }} />
                            <Box sx={{ flex: 1, bgcolor: '#e2e8f0', borderRadius: '4px 4px 0 0', height: '10%' }} />
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" sx={{ mt: 1.5 }}>
                            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day) => (
                                <Typography key={day} variant="caption" sx={{ fontWeight: 800, color: '#94a3b8', fontSize: 10, flex: 1, textAlign: 'center' }}>
                                    {day}
                                </Typography>
                            ))}
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>

            {/* Recommended Section */}
            <Box sx={{ mt: 8 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a' }}>
                        Recommended for You
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <IconButton size="small" sx={{ border: '1px solid #e2e8f0', bgcolor: 'white' }}>
                            <ChevronLeftIcon fontSize="small" />
                        </IconButton>
                        <IconButton size="small" sx={{ border: '1px solid #e2e8f0', bgcolor: 'white' }}>
                            <ChevronRightIcon fontSize="small" />
                        </IconButton>
                    </Stack>
                </Stack>

                <Grid container spacing={3}>
                    {[
                        {
                            title: "Advanced Leadership Strategies",
                            info: "6 hours • Intermediate",
                            rating: "4.9",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBahNT3xwaT1NMR7rpcdvautmIv3nLyjLaR8KrrDrV_9pSMpNSG5YvzNbkszkX3IoW0d07W3x_zqn3zDY-v5udnJo74osBuMxu7X-yunbkzRXy6CPSOimG_AD4pZmLxvejkRPWM-IusHB94QNf_Nt3us3indof9NepqmOFY535k5uGJsK8yUU8yru9yeVAb5WiQjtvMwxTvUJDolL_euYrbkIeA6CpshCNsylr9gJTJVGnomqXM8MfAD27iZeGr1mppaN-Te0f-M28"
                        },
                        {
                            title: "Data Science with Python",
                            info: "12 hours • Beginner",
                            rating: "4.7",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwlVU5Q3Ij2TECQYsKPL2Zy6BJzpWSBXt9zKrdDlwv2e6Uepy-wsyAjEQrW7J8niBhGF0GOj8MFhiM-ngwZ6VtZ25vxC92zXJhrk359amAEU2i2QVoWRac_gGhvRmOOd8zV62zd1v1iXYFwVhS33mfrVjbMuvdbMAETVqPyacCleGgnLHmVT-KS2iLkqY4oHHzriM01aCo3aLrbrYJAoGfMyCXXhkoOEHCsm5jScjG2Nt6y9ZEimM2v7Qux3STDRzroEnJtD4jhq8"
                        },
                        {
                            title: "UX Design Fundamentals",
                            info: "8 hours • Beginner",
                            rating: "4.8",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtFIY8FnCx9_3nAisTl3o_mylE3D-aIFLUDAPR8IiQ4WIHnNkouxQL_0c_zL2a4KfkZE1nBwIiLhcUwZukgTG1Ey1nvNdH3pE3trXJr6pwif7JW_rbAGAtb5fWJ1hRwFBSf-A2BGL__yCyF96bGH1AsyH77gVB_IiLAtlxxmZgESC0f0lEH9qwrMHlEtXSzYmQMFe8rUdMiP9uaKB7l4P0NfSPXPuebiIjWicWR7R2THm0p1SzjyUJh5rPg8ZwPCcUYvrFcPPyUrk"
                        },
                        {
                            title: "Blockchain Security Advanced",
                            info: "15 hours • Advanced",
                            rating: "5.0",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKhkNKuMGyuv5A6Oa7KUPgJJqcE5xbNbOXXwHF9mii8fyvfAb21g2rq3rWQHWEgw8I4k9N4vA9GnIlVjvfh_XSATy2fU9Zae3UPdvKJT3HqHRBFx8ZwzFpFnJ9jMherH3NuPErk5MJDOnx0bLbYLeJniW529TZAA9GU43pL851s6DqhuE_yBoqTi45Z9LG2fWpWr3bCdHdGnCKOLBUK9C-P1Ee5mluPgxcFI923jge3FiflbRRkVsh2F8jnm7hfw8gbAHC5ZdJleU"
                        }
                    ].map((course) => (
                        <Grid item xs={12} sm={6} lg={3} key={course.title}>
                            <Box sx={{ cursor: 'pointer', '&:hover img': { transform: 'scale(1.05)' }, '&:hover .course-title': { color: '#0da2e7' } }}>
                                <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', mb: 1.5, aspectRatio: '16/9' }}>
                                    <Box
                                        component="img"
                                        src={course.img}
                                        sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    />
                                    <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(15, 23, 42, 0.1)' }} />
                                    <Box sx={{ position: 'absolute', top: 8, right: 8, bgcolor: 'rgba(255,255,255,0.9)', borderRadius: 1, px: 1, py: 0.5, display: 'flex', alignItems: 'center', gap: 0.5, backdropFilter: 'blur(4px)' }}>
                                        <StarIcon sx={{ color: '#f59e0b', fontSize: 14 }} />
                                        <Typography variant="caption" sx={{ fontWeight: 800, color: '#0f172a', fontSize: 10 }}>{course.rating}</Typography>
                                    </Box>
                                </Box>
                                <Typography className="course-title" variant="subtitle2" sx={{ fontWeight: 800, color: '#0f172a', mb: 0.25, transition: 'color 0.2s', lineHeight: 1.3 }}>
                                    {course.title}
                                </Typography>
                                <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 500 }}>
                                    {course.info}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Footer Branding */}
            <Box sx={{ mt: 10, pt: 4, borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
                <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    © 2026 Extorial Learning Platform. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}
