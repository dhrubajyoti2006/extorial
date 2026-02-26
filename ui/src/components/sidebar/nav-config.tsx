import type { ReactNode } from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";

export type NavItem = {
  label: string;
  icon: ReactNode;
  to?: string;
  matchPrefix?: string;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export const NAV_GROUPS: NavGroup[] = [
  {
    title: "Learner",
    items: [
      { label: "My Learning", icon: <DashboardOutlinedIcon fontSize="small" />, to: "/learner/dashboard" },
      { label: "Catalog", icon: <MenuBookOutlinedIcon fontSize="small" />, to: "/learner/catalog" },
      { label: "My Certificates", icon: <AssignmentTurnedInOutlinedIcon fontSize="small" />, to: "/learner/certificates" }
    ]
  },
  {
    title: "Administrator",
    items: [{ label: "Dashboard", icon: <DashboardOutlinedIcon fontSize="small" />, to: "/admin/overview" }]
  },
  {
    title: "System",
    items: [
      { label: "Settings", icon: <SettingsOutlinedIcon fontSize="small" />, to: "/settings" },
      { label: "Help Center", icon: <HelpOutlineOutlinedIcon fontSize="small" />, to: "/help" }
    ]
  }
];
