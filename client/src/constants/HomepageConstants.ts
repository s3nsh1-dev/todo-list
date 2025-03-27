type routeButtonType = {
  id: number;
  route: string;
  text: string;
  color: string;
};
export const RouteButtonProperties: routeButtonType[] = [
  { id: 1, route: "/daily-tasks", text: "Daily Tasks", color: "bg-blue-500" },
  {
    id: 2,
    route: "/weekly-goals",
    text: "Weekly Goals",
    color: "bg-yellow-500",
  },
  {
    id: 3,
    route: "/monthly-goals",
    text: "Monthly Goals",
    color: "bg-red-500",
  },
  {
    id: 4,
    route: "/yearly-goals",
    text: "Yearly Goals",
    color: "bg-green-600",
  },
];
