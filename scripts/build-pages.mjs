import { mkdtemp, rename, rm } from "node:fs/promises";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

// GitHub Pages cannot serve the local Spotify server routes. Move them out
// during export and always restore them, including when the build fails.
const projectRoot = process.cwd();
const stagingDirectory = await mkdtemp(join(projectRoot, ".pages-server-routes-"));
const relocated = [];

try {
  for (const route of ["api", "callback"]) {
    const source = join(projectRoot, "src", "app", route);
    const destination = join(stagingDirectory, route);
    await rename(source, destination);
    relocated.push({ source, destination });
  }
  const result = spawnSync(process.execPath, [join(projectRoot, "node_modules", "next", "dist", "bin", "next"), "build", "--webpack"], {
    stdio: "inherit",
    env: { ...process.env, GITHUB_PAGES: "true", NEXT_PUBLIC_SPOTIFY_ENABLED: "false" },
  });
  if (result.error) throw result.error;
  process.exitCode = result.status ?? 1;
} finally {
  for (const { source, destination } of relocated.reverse()) {
    await rename(destination, source);
  }
  await rm(stagingDirectory, { recursive: true, force: true });
}
