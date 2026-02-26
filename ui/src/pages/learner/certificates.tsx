import { Box, Card, CardContent, Grid, Typography, Button } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

export default function MyCertificates() {
    const certificates = [
        { title: "Full Stack Development", date: "Jan 15, 2026", id: "CERT-001" },
        { title: "Agile Methodologies", date: "Dec 20, 2025", id: "CERT-084" },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
                My Certificates
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Review and download your earned achievements.
            </Typography>

            <Grid container spacing={3}>
                {certificates.map((cert) => (
                    <Grid item xs={12} sm={6} md={4} key={cert.id}>
                        <Card variant="outlined" sx={{ position: 'relative', overflow: 'visible' }}>
                            <Box sx={{
                                position: 'absolute',
                                top: -15,
                                right: 20,
                                bgcolor: 'primary.main',
                                color: 'white',
                                p: 1,
                                borderRadius: 1,
                                boxShadow: 2
                            }}>
                                <WorkspacePremiumIcon />
                            </Box>
                            <CardContent sx={{ pt: 4 }}>
                                <Typography variant="subtitle1" fontWeight={700} gutterBottom>{cert.title}</Typography>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 3 }}>
                                    Earned on: {cert.date}
                                </Typography>
                                <Button variant="outlined" startIcon={<FileDownloadIcon />} fullWidth>
                                    Download PDF
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
