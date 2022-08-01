import * as core from "@actions/core";
import {ICommonInputs} from "./ICommonInputs";


export async function getCommonInputs(): Promise<ICommonInputs> {
    const result = ({} as unknown) as ICommonInputs;
    result.dir = core.getInput('directory', { required: false });
    result.user = core.getInput('user', { required: false });
    result.parameters = core.getInput('parameters', { required: false });
    result.exclude = core.getMultilineInput('exclude', { required: false });
    result.origin = core.getInput('origin', { required: true });
    result.destinations = core.getMultilineInput('destinations', { required: true });
    result.delete = core.getBooleanInput('delete', { required: false });
    result.verbose = core.getBooleanInput('verbose', { required: false });
    result.compressionLevel = core.getInput('compression-level', { required: false });
    result.sshOpts = core.getMultilineInput('ssh-opts', { required: false });
    result.sshParams = core.getMultilineInput('ssh-params', { required: false });
    result.sshProxyCmd = core.getInput('ssh-proxy-cmd', { required: false });
    result.createDstDir = core.getBooleanInput('create-dst-dir', { required: false });
    result.dryrun = core.getBooleanInput('dry-run', { required: false });
    return result;
}
