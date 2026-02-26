import {
  Box,
  Button,
  Card,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import DescriptionIcon from "@mui/icons-material/Description";

type CatalogItem = {
  label: string;
  labelColor: string;
  topColor: string;
  title: string;
  desc: string;
  time: string;
  meta: string;
  action: "Start Now" | "Continue";
  progress?: number;
};

export default function KnowledgeCatalog() {
  const cards: CatalogItem[] = [
    {
      label: "Compliance",
      labelColor: "#f97316",
      topColor: "#f97316",
      title: "Q3 Data Privacy & GDPR Update",
      desc: "Mandatory update for all EU-facing teams regarding...",
      time: "45m",
      meta: "3 Modules",
      action: "Continue",
      progress: 65,
    },
    {
      label: "Engineering",
      labelColor: "#2563eb",
      topColor: "#2563eb",
      title: "Advanced API Architecture v2",
      desc: "Deep dive into GraphQL implementation, caching strategies, and rate limiting",
      time: "4h 20m",
      meta: "12 Modules",
      action: "Start Now",
    },
    {
      label: "HR & Safety",
      labelColor: "#10b981",
      topColor: "#10b981",
      title: "Workplace Safety Protocols 2024",
      desc: "Updated guidelines for hybrid work environment and emergency evacuation",
      time: "1h 10m",
      meta: "1 Assessment",
      action: "Start Now",
    },
    {
      label: "Sales",
      labelColor: "#a855f7",
      topColor: "#a855f7",
      title: "Salesforce CRM Integration",
      desc: "Mastering the new leads dashboard and opportunity tracking features.",
      time: "2h 00m",
      meta: "Workshop",
      action: "Start Now",
    },
    {
      label: "Engineering",
      labelColor: "#2563eb",
      topColor: "#2563eb",
      title: "Kubernetes for Enterprise Scaling",
      desc: "Container orchestration strategies for high-availability microservices.",
      time: "6h 45m",
      meta: "Lab",
      action: "Start Now",
    },
    {
      label: "Marketing",
      labelColor: "#ec4899",
      topColor: "#ec4899",
      title: "Brand Voice & Tone Guidelines",
      desc: "Consistency across all channels: A practical guide for content creators.",
      time: "30m",
      meta: "Guide",
      action: "Start Now",
    },
    {
      label: "Security",
      labelColor: "#ef4444",
      topColor: "#ef4444",
      title: "Phishing Awareness Drill",
      desc: "Interactive simulation to identify and report suspicious emails.",
      time: "15m",
      meta: "Drill",
      action: "Continue",
      progress: 20,
    },
    {
      label: "Finance",
      labelColor: "#6b7280",
      topColor: "#6b7280",
      title: "Q4 Budgetary Planning",
      desc: "Templates and procedures for departmental budget submission.",
      time: "1h 15m",
      meta: "Excel",
      action: "Start Now",
    },
  ];

  return (
    <Box sx={{ p: 3, bgcolor: "#f8fafc", minHeight: "100%" }}>
      <Stack
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
        sx={{ borderBottom: "1px solid #e2e8f0", pb: 2.5, mb: 3.5 }}
      >
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 800, color: "#0f172a", mb: 0.5 }}>
            Knowledge Catalog
          </Typography>
          <Typography variant="body2" sx={{ color: "#64748b", fontWeight: 500 }}>
            Browse and enroll in compliance modules and technical documentation.
          </Typography>
        </Box>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="body2" sx={{ color: "#64748b", fontWeight: 700 }}>
            142 Results
          </Typography>
          <Box sx={{ width: "1px", height: 18, bgcolor: "#cbd5e1" }} />
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2" sx={{ color: "#64748b", fontWeight: 700 }}>
              Sort by:
            </Typography>
            <Select
              size="small"
              value="Relevance"
              sx={{
                minWidth: 148,
                bgcolor: "#f8fafc",
                fontSize: 14,
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "#cbd5e1" },
              }}
            >
              <MenuItem value="Relevance">Relevance</MenuItem>
            </Select>
          </Stack>
        </Stack>
      </Stack>

      <Grid container spacing={2.5}>
        {cards.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.title}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 0,
                border: "1px solid #d7dee8",
                borderTop: `4px solid ${item.topColor}`,
                p: 2,
                minHeight: 286,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.5 }}>
                <Typography
                  variant="caption"
                  sx={{
                    bgcolor: `${item.labelColor}1a`,
                    color: item.labelColor,
                    fontWeight: 800,
                    px: 0.9,
                    py: 0.35,
                    borderRadius: 0.5,
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: 0.8,
                  }}
                >
                  {item.label}
                </Typography>
                <BookmarkBorderIcon sx={{ color: "#cbd5e1", fontSize: 16 }} />
              </Stack>

              <Typography variant="subtitle1" sx={{ color: "#1e293b", fontWeight: 800, lineHeight: 1.25, mb: 1.5 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#64748b", mb: 2.25, minHeight: 62 }}>
                {item.desc}
              </Typography>
              <Stack direction="row" spacing={2} sx={{ color: "#64748b", mb: 2 }}>
                <Stack direction="row" spacing={0.6} alignItems="center">
                  <AccessTimeIcon sx={{ fontSize: 14 }} />
                  <Typography variant="caption" sx={{ fontWeight: 700 }}>
                    {item.time}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={0.6} alignItems="center">
                  {item.meta === "Guide" || item.meta === "Excel" ? (
                    <DescriptionIcon sx={{ fontSize: 13 }} />
                  ) : item.meta === "Lab" ? (
                    <SchoolIcon sx={{ fontSize: 13 }} />
                  ) : (
                    <MenuBookIcon sx={{ fontSize: 13 }} />
                  )}
                  <Typography variant="caption" sx={{ fontWeight: 700 }}>
                    {item.meta}
                  </Typography>
                </Stack>
              </Stack>

              {item.progress ? (
                <Box sx={{ mt: "auto", mb: 1.5 }}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="caption" sx={{ color: "#475569", fontWeight: 700 }}>
                      In Progress
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 700 }}>
                      {item.progress}%
                    </Typography>
                  </Stack>
                  <Box sx={{ mt: 0.8, height: 4, bgcolor: "#e2e8f0" }}>
                    <Box sx={{ width: `${item.progress}%`, bgcolor: "#0ea5e9", height: "100%" }} />
                  </Box>
                </Box>
              ) : (
                <Box sx={{ mt: "auto", mb: 1.5 }} />
              )}

              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderColor: "#cbd5e1",
                  color: item.action === "Continue" ? "#0ea5e9" : "#334155",
                  fontWeight: 800,
                  borderRadius: 0,
                  py: 0.9,
                  textTransform: "uppercase",
                  letterSpacing: 0.2,
                }}
              >
                {item.action}
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ borderTop: "1px solid #e2e8f0", mt: 5, pt: 2.3 }}
      >
        <Typography variant="body2" sx={{ color: "#64748b", fontWeight: 600 }}>
          Showing <strong>1-8</strong> of <strong>142</strong> results
        </Typography>

        <Stack direction="row" spacing={0.8} alignItems="center">
          <Button variant="outlined" size="small" sx={{ minWidth: 68, textTransform: "none", color: "#94a3b8", borderColor: "#d7dee8" }}>
            Previous
          </Button>
          {[1, 2, 3].map((n) => (
            <Button
              key={n}
              variant={n === 1 ? "contained" : "outlined"}
              size="small"
              sx={{
                minWidth: 34,
                p: 0,
                borderRadius: 0,
                borderColor: "#d7dee8",
                bgcolor: n === 1 ? "#0ea5e9" : "white",
                color: n === 1 ? "white" : "#475569",
              }}
            >
              {n}
            </Button>
          ))}
          <Typography sx={{ color: "#94a3b8", px: 0.5 }}>...</Typography>
          <Button variant="outlined" size="small" sx={{ minWidth: 34, p: 0, borderRadius: 0, borderColor: "#d7dee8", color: "#475569" }}>
            18
          </Button>
          <Button variant="outlined" size="small" sx={{ minWidth: 52, textTransform: "none", borderColor: "#d7dee8", color: "#475569" }}>
            Next
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
