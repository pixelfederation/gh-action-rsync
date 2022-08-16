## Description

Rsync from src to dst

## Inputs

| parameter | description | required | default |
| - | - | - | - |
| directory | Working directory | `false` | . |
| user | rsync user | `false` | jenkins |
| parameters | rsync params | `false` | r |
| exclude | rsync exclude dirs | `false` |  |
| origin | origin dir | `true` |  |
| destinations | multiline destinations | `true` |  |
| delete | whether to delete dst out of sync | `false` | false |
| verbose | | `false` | false |
| compression-level | | `false` | -1 |
| ssh-opts | | `false` | StrictHostKeyChecking=no |
| ssh-params | | `false` |  |
| ssh-proxy-cmd | | `false` |  |
| create-dst-dir | create dst dir first | `false` | false |
| dry-run | | `false` | false |

## Run

```yaml
      - name: Rsync test
        id: rsync-test
        uses: ./
        with:
          directory: tests
          dry-run: false
          verbose: true
          origin: src/
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
