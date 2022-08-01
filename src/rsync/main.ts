import * as core from "@actions/core";
import { rsyncDirs } from "./index";

(async () => {
  try {
    await rsyncDirs();
  } catch (err) {
    core.setFailed(`Action failed with error ${err}`);
  }
})();
