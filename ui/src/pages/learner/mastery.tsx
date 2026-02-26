import { Box, Button, Card, CardContent, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography, LinearProgress, Stack, Chip } from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import TimerIcon from "@mui/icons-material/Timer";
import StarsIcon from "@mui/icons-material/Stars";
import { useNavigate } from "react-router-dom";

export default function MasteryInterface() {
    const navigate = useNavigate();

    const questions = [
        { id: 1, title: "Component Life Cycles", difficulty: "Intermediate", status: "Ready" },
        { id: 2, title: "Higher Order Components", difficulty: "Advanced", status: "Locked" },
        { id: 3, title: "Render Props Pattern", difficulty: "Advanced", status: "Locked" },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" fontWeight={800} gutterBottom>
                Mastery: Advanced React Patterns
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                This interface tests your deep understanding of the subject matter through interactive assessments.
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Assessment Modules</Typography>
                    <Paper variant="outlined">
                        <List disablePadding>
                            {questions.map((q, index) => (
                                <Box key={q.id}>
                                    <ListItem sx={{ py: 2.5 }}>
                                        <ListItemIcon>
                                            <QuizIcon color={q.status === 'Ready' ? 'primary' : 'disabled'} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={q.title}
                                            secondary={
                                                <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
                                                    <Chip label={q.difficulty} size="small" variant="outlined" />
                                                </Stack>
                                            }
                                            primaryTypographyProps={{ fontWeight: 600 }}
                                        />
                                        <Button
                                            variant={q.status === 'Ready' ? 'contained' : 'outlined'}
                                            disabled={q.status === 'Locked'}
                                            size="small"
                                        >
                                            {q.status === 'Ready' ? 'Begin Test' : 'Locked'}
                                        </Button>
                                    </ListItem>
                                    {index < questions.length - 1 && <Divider />}
                                </Box>
                            ))}
                        </List>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Stack spacing={3}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="subtitle2" fontWeight={700} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <StarsIcon color="primary" fontSize="small" />
                                    Your Mastery Score
                                </Typography>
                                <Typography variant="h3" fontWeight={800} sx={{ my: 1 }}>740</Typography>
                                <Typography variant="caption" color="text.secondary">Next level: 1000 pts</Typography>
                                <LinearProgress variant="determinate" value={74} sx={{ mt: 1, height: 6, borderRadius: 3 }} />
                            </CardContent>
                        </Card>

                        <Card variant="outlined" sx={{ bgcolor: 'rgba(13, 162, 231, 0.02)' }}>
                            <CardContent>
                                <Typography variant="subtitle2" fontWeight={700} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <TimerIcon color="primary" fontSize="small" />
                                    Time Remaining
                                </Typography>
                                <Typography variant="h5" fontWeight={700}>14:52</Typography>
                                <Typography variant="caption" color="text.secondary">Total time: 60 mins</Typography>
                            </CardContent>
                        </Card>

                        <Button variant="outlined" color="inherit" fullWidth onClick={() => navigate(-1)}>
                            Exit Mastery Mode
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}
