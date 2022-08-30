import { getCommonInputs } from "../input-helper";
import { rsync } from "../rsync-helper";
import { ICommonInputs } from "../ICommonInputs";

export async function rsyncDirs(): Promise<void> {

  const ci: ICommonInputs = await getCommonInputs();
  const promises: Array<Promise> = [];
  for(let destination of ci.destinations) { 
    let sshOpts: Array<String> = ["'", 'ssh', '-l', ci.user]
      .concat(ci.sshParams)
      .concat(ci.sshOpts.map((opt: any)=> ['-o', opt])
      .flat(1));
    if (ci.sshProxyCmd.length > 0 ) {
      sshOpts = sshOpts.concat(['-o', '"', 'ProxyCommand', sshProxyCmd, '"'])
    }
    sshOpts = sshOpts.concat(["'"]);
    const sshOptsString: string = sshOpts.join(' ');
    
    let rsyncArgs: string[] = ['rsync', `-${ci.parameters}`, '--compress-level', ci.compressionLevel, '-z']
      .concat([
        '-e',
      ]).
      concat(sshOpts);
    let dstHost: string = "";
    let dstDir: string = "";

    if (destination.includes(":")) {
      [dstHost, dstDir ] = destination.split(':');
    } else {
      dstDir = destination;
    }
    if(ci.createDstDir && dstDir.length > 0) {
      rsyncArgs = rsyncArgs.concat(['--rsync-path', '"', 'mkdir', '-p', dstDir ,';', 'rsync','"']);
    }
    rsyncArgs = rsyncArgs.concat(ci.exclude.map((ex: string) => `--exclude=${ex.trim()}`))

    let shortArgs: string[] = [
      ci.delete ? '--delete' : '',
      ci.verbose ? '--verbose' : '',
      ci.dryrun ? '--dry-run' : '',
    ].filter(Boolean);
    
    rsyncArgs = rsyncArgs.concat(shortArgs);

    rsyncArgs = rsyncArgs.concat([ci.source, destination]);

    promises.push(rsync(rsyncArgs));
  }
  await Promise.all(promises)
}
