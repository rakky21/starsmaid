import {Scheduler, Confirm, Auth } from '../components/index.js'
import { AppProvider } from '../utils/AppProvider.js';

export default function AppRouter() {
  const { view } = AppProvider();

  if (view === "auth") return <Auth />;
  if (view === "scheduler") return <Scheduler />;
  if (view === "confirm") return <Confirm />;

  return <div>Home</div>;
}