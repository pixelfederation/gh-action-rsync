## Description

Rsync from src to dst

## Inputs

| parameter         | description                       | required | default                  |
| ----------------- | --------------------------------- | -------- | ------------------------ |
| directory         | Working directory                 | `false`  | .                        |
| user              | rsync user                        | `false`  | jenkins                  |
| parameters        | rsync params                      | `false`  | r                        |
| exclude           | rsync exclude dirs                | `false`  |                          |
| source            | source dir                        | `true`   |                          |
| destinations      | multiline destinations            | `true`   |                          |
| delete            | whether to delete dst out of sync | `false`  | false                    |
| verbose           |                                   | `false`  | false                    |
| compression-level |                                   | `false`  | -1                       |
| ssh-opts          |                                   | `false`  | StrictHostKeyChecking=no |
| ssh-params        |                                   | `false`  |                          |
| ssh-proxy-cmd     |                                   | `false`  |                          |
| create-dst-dir    | create dst dir first              | `false`  | false                    |
| dry-run           |                                   | `false`  | false                    |

## SSH user private key load

Use this action to laod ssh private key [webfactory/ssh-agent](https://github.com/webfactory/ssh-agent).

```yaml
- name: Load ssh key
  uses: webfactory/ssh-agent@v0.5.4
  with:
    ssh-private-key: ${{ steps.secrets.outputs.jenkins_ssh_private_key }}
```

## Run

```yaml
- name: Rsync test
  id: rsync-test
  uses: ./
  with:
    directory: tests
    dry-run: false
    verbose: true
    source: src/
    exclude: |
      wtf
      resource
    destinations: |
      192.168.0.17:/home/jenkins/foo/dst/
    delete: true
    create-dst-dir: true
    ssh-params: |
      -p 1022
```
